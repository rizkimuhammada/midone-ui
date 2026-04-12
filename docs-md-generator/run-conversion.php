<?php

require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

use Illuminate\Support\Facades\File;

function base_path($path = '')
{
    return __DIR__ . ($path ? DIRECTORY_SEPARATOR . $path : $path);
}

function toPascal($str) {
    return str_replace(' ', '', ucwords(str_replace(['-', '.'], [' ', ' '], $str)));
}

/**
 * Scan vanilla package for metadata
 */
function getVanillaMetadata()
{
    $vueToVanilla = [];
    $componentProps = []; // Map of component-name => [props]
    $scanData = [];
    $vueFiles = [];

    $vuePath = base_path('../../midone-ui/packages/vue/src/pages');
    if (File::isDirectory($vuePath)) {
        $vfiles = File::allFiles($vuePath);
        foreach ($vfiles as $vfile) {
            if ($vfile->getExtension() === 'vue') {
                $vueFiles[$vfile->getFilename()] = file_get_contents($vfile->getPathname());
            }
        }
    }

    $vanillaPath = base_path('../../midone-ui/packages/vanilla');
    if (File::isDirectory($vanillaPath)) {
        $vfiles = File::allFiles($vanillaPath);
        foreach ($vfiles as $vfile) {
            if ($vfile->getExtension() !== 'html')
                continue;
            $fileName = str_replace($vanillaPath . '/', '', $vfile->getPathname());
            $content = file_get_contents($vfile->getPathname());

            preg_match_all('/<([a-z0-9-]+)\s*[^>]*data-component="([^"]+)"[^>]*>/i', $content, $matches, PREG_SET_ORDER);

            $fileComponents = [];
            foreach ($matches as $match) {
                $tag = $match[1];
                $comp = $match[2];
                $pascal = toPascal($comp);
                $fullOpeningTag = $match[0];

                $vueToVanilla[$pascal] = ['tag' => $tag, 'comp' => $comp];

                preg_match_all('/(data-(?!component)[a-z0-9-]+)="([^"]*)"/i', $fullOpeningTag, $propMatches, PREG_SET_ORDER);
                $props = [];
                foreach ($propMatches as $p) {
                    $propName = str_replace('data-', '', $p[1]);
                    $props[] = $p[1] . '="' . $p[2] . '"';
                    $componentProps[$comp][] = $propName;
                }

                $fileComponents[] = [
                    'component' => $comp,
                    'props' => $props,
                    'tag' => $tag
                ];
            }

            if (!empty($fileComponents)) {
                $scanData[$fileName] = $fileComponents;
            }
        }
    }

    foreach ($componentProps as $comp => $props) {
        $componentProps[$comp] = array_values(array_unique($props));
    }

    return [
        "vueToVanilla" => $vueToVanilla,
        "componentProps" => $componentProps,
        "scanData" => $scanData,
        "vueFiles" => $vueFiles
    ];
}

$metadata = getVanillaMetadata();
$vueToVanilla = $metadata['vueToVanilla'];
$componentProps = $metadata['componentProps'];

// 2. Build Dynamic Mappings from Laravel Blade Components
$vueToBlade = [];
$componentsPath = base_path('../packages/laravel/resources/views/components');
if (File::isDirectory($componentsPath)) {
    $cfiles = File::allFiles($componentsPath);
    foreach ($cfiles as $cfile) {
        $relativePath = str_replace($componentsPath . '/', '', $cfile->getPathname());
        $bladeName = str_replace(['/', '.blade.php'], ['.', ''], $relativePath);

        $basename = $cfile->getBasename('.blade.php');
        $vueToBlade[toPascal($basename)] = 'x-' . $bladeName;
        $vueToBlade[toPascal($bladeName)] = 'x-' . $bladeName;
    }
}

uksort($vueToVanilla, function ($a, $b) {
    return strlen($b) - strlen($a);
});
uksort($vueToBlade, function ($a, $b) {
    return strlen($b) - strlen($a);
});

function kebab($input) {
    return strtolower(preg_replace('/(?<!^)([A-Z]|(?<=[a-zA-Z])\d)/', '-$0', $input));
}

$transform = function ($vueContent) use ($vueToVanilla, $vueToBlade, $componentProps) {
    preg_match('/<template>(.*)<\/template>/s', $vueContent, $matches);
    $content = $matches[1] ?? '';

    $content = preg_replace('/<RouterView.*?>.*?<\/RouterView>|<RouterView\s*\/?>/is', '@yield(\'content\')', $content);
    $content = str_replace('<-- @yield', '<!-- @yield', $content);

    // Strip TypeScript non-null assertions (!) inside interpolations
    $content = preg_replace_callback('/\{\{.*?\}\}/s', function ($m) {
        $interpolated = preg_replace('/\!([\[\.])/', '$1', $m[0]);
        // Prefix faker/fakers with $ safely
        $interpolated = preg_replace_callback('/(?<!\$)\b(faker|fakers)\b/', function($fm) {
            return '$' . $fm[1];
        }, $interpolated);
        
        // Replace + with . for concatenation (heuristic: if between quotes or after ) )
        $interpolated = preg_replace('/([\'"])\s*\+\s*([\'"])/', '$1 . $2', $interpolated);
        $interpolated = preg_replace('/(\w+\]?)\s*\+\s*([\'"])/', '$1 . $2', $interpolated);
        $interpolated = preg_replace('/([\'"])\s*\+\s*(\w+)/', '$1 . $2', $interpolated);

        // Prefix variables inside brackets fakers[i] -> $fakers[$i]
        $interpolated = preg_replace_callback('/\[([a-z][a-z0-9_]*)\]/i', function($m) {
            $reserved = ['items', 'categories', 'images', 'photos', 'users', 'totals', 'trueFalse', 'names', 'first', 'last', 'n'];
            if (in_array($m[1], $reserved) || is_numeric($m[1])) return $m[0];
            return '[$' . $m[1] . ']';
        }, $interpolated);
        
        // Map _.take(items, n)
        $interpolated = preg_replace_callback('/_\.take\(([^,]+),\s*(\d+)\)/', function($m) {
            $expr = trim($m[1]);
            if (!str_starts_with($expr, '$') && !str_starts_with($expr, '[') && !str_starts_with($expr, '"') && !str_starts_with($expr, "'")) {
                $expr = '$' . $expr;
            }
            return 'collect(' . $expr . ')->take(' . $m[2] . ')';
        }, $interpolated);
        
        // Dot notation to brackets in interpolation
        $interpolated = str_replace('?.', '.', $interpolated);
        $interpolated = preg_replace_callback('/\.([a-z][a-z0-9_]*)/i', function($dm) {
            $reserved = ['count', 'slice', 'take', 'filter', 'orderBy', 'map', 'first', 'last'];
            if (in_array($dm[1], $reserved)) return '->' . $dm[1];
            return "['" . $dm[1] . "']";
        }, $interpolated);

        return $interpolated;
    }, $content);

    // Map _.take(items, n) globally (directives + interpolation)
    $content = preg_replace_callback('/_\.take\(([^,]+),\s*(\d+)\)/', function($m) {
        $expr = trim($m[1]);
        if (!str_starts_with($expr, '$') && !str_starts_with($expr, '[') && !str_starts_with($expr, '"') && !str_starts_with($expr, "'")) {
            $expr = '$' . $expr;
        }
        return 'collect(' . $expr . ')->take(' . $m[2] . ')';
    }, $content);
    $content = preg_replace('/<SideMenuBody\b([^>]*)>(.*?)<\/SideMenuBody>/s', '<div data-component="side-menu-body"$1>$2</div>', $content);
    $content = preg_replace('/<SideMenuArea\b([^>]*)>(.*?)<\/SideMenuArea>/s', '<div data-component="side-menu-area"$1>$2</div>', $content);

    $suffixes = ['TopBarInner', 'MobileOpen', 'MobileClose', 'Root', 'Panel', 'Inner', 'Header', 'TopBar', 'Body', 'Area', 'Nav'];
    foreach ($suffixes as $suffix) {
        $content = preg_replace_callback(
            '/<([A-Z][a-zA-Z]*)' . $suffix . '(\s|\/|>)/',
            function ($m) use ($suffix) {
                $comp = kebab($m[1] . $suffix);
                $tag = in_array($suffix, ['Header', 'TopBar', 'Nav']) ? 'header' : 'div';
                return '<' . $tag . ' data-component="' . $comp . '"' . $m[2];
            },
            $content
        );
        $content = preg_replace_callback('/<\/([A-Z][a-zA-Z]*)(' . implode('|', $suffixes) . ')>/', function ($m) {
            $tag = in_array($m[2], ['Header', 'TopBar', 'Nav']) ? 'header' : 'div';
            return '</' . $tag . '>';
        }, $content);
    }

    // 4. Custom Laravel Components (Dynamic Mapping from Components Folder) - Take precedence
    foreach ($vueToBlade as $vueName => $bladeTag) {
        $content = preg_replace('/<' . $vueName . '(\s|\/|>)/', '<' . $bladeTag . '$1', $content);
        $content = preg_replace('/<\/' . $vueName . '>/', '</' . $bladeTag . '>', $content);
    }

    // 5. UI Library Components (Dynamic Mapping from Vanilla)
    foreach ($vueToVanilla as $vueName => $info) {
        $content = preg_replace('/<' . $vueName . '(\s|\/|>)/', '<' . $info['tag'] . ' data-component="' . $info['comp'] . '"$1', $content);
        $content = preg_replace('/<\/' . $vueName . '>/', '</' . $info['tag'] . '>', $content);
    }

    // 6. Remaining Custom Components
    $content = preg_replace_callback(
        '/<(?!(?:div|i|header|x-|nav|button|span|section|a|p|ul|li|ol|hr))([A-Z][a-zA-Z0-9.]+)(\s|\/|>)/',
        function ($m) { return '<x-' . kebab(str_replace('.', '-', $m[1])) . $m[2]; },
        $content
    );
    $content = preg_replace_callback(
        '/<\/(?!(?:div|i|header|x-|nav|button|span|section|a|p|ul|li|ol|hr))([A-Z][a-zA-Z0-9.]+)>/',
        function ($m) { return '</x-' . kebab(str_replace('.', '-', $m[1])) . '>'; },
        $content
    );

    $content = preg_replace_callback(
        '/<x-([a-z0-9-]+)\s+([^>]*?)>/s',
        function ($m) {
            $tag = $m[1];
            $attrs = preg_replace_callback('/:([a-z0-9-]+)="([^"\$][^"]*)"/i', function ($am) {
                return ':' . $am[1] . '="$' . $am[2] . '"';
            }, $m[2]);
            return '<x-' . $tag . ' ' . $attrs . '>';
        },
        $content
    );

    $content = preg_replace('/\b:?icon="([^"]+)"/', 'data-icon="$1"', $content);
    $content = preg_replace('/:items="(\[.*?\])"/s', "data-items='@json($1)'", $content);

    // 7. Handle special attributes (fakers, images, icons)
    $content = preg_replace('/\s@[a-zA-Z0-9.-]+="[^"]*"/', '', $content);
    $content = preg_replace('/:open="[^"]+"/', 'data-open="true"', $content);

    $content = preg_replace_callback('/(?::src|src|data-src)="(fakers?)(\[.*?\])(?:!)?(\[.*?\])?"/', function ($m) {
        return 'data-src="{{ asset($' . $m[1] . $m[2] . ($m[3] ?? '') . ') }}"';
    }, $content);

    // Handle images imported from @/assets/images
    preg_match_all('#import\s+(\w+)\s+from\s+[\'"](?:@|\.\.)/assets/images/(.*?)[\'"]#i', $vueContent, $importMatches, PREG_SET_ORDER);
    foreach ($importMatches as $im) {
        $varName = $im[1];
        $path = $im[2];
        $content = preg_replace('/(?::src|src|data-src)="' . $varName . '"/', 'src="{{ Vite::asset(\'resources/images/' . $path . '\') }}"', $content);
    }

    // Prefix attributes for elements with data-component
    $content = preg_replace_callback('/(<[a-z0-9x-]+\s+[^>]*?data-component="([^"]+)"[^>]*?>)/is', function ($m) use ($componentProps) {
        $comp = $m[2];
        $allowed = $componentProps[$comp] ?? [];

        return preg_replace_callback('/\s(:?)([a-z0-9-]+)="([^"]*)"/i', function ($am) use ($allowed) {
            $isBound = $am[1] === ':';
            $prop = $am[2];
            $val = $am[3];

            if ($isBound || in_array($prop, $allowed)) {
                return ' data-' . $prop . '="' . $val . '"';
            }

            return $am[0];
        }, $m[1]);
    }, $content);

    // Handle standalone boolean props for components
    $boolProps = ['as-child', 'reverse', 'raised', 'open', 'light'];
    $content = preg_replace_callback('/(<[a-z0-9x-]+\s+[^>]*?data-component="([^"]+)"[^>]*?>)/is', function ($m) use ($boolProps) {
        $tagContent = $m[1];
        foreach ($boolProps as $boolProp) {
            if (preg_match('/\b' . $boolProp . '\b/i', $tagContent) && !str_contains($tagContent, 'data-' . $boolProp)) {
                $tagContent = str_replace(' ' . $boolProp, ' data-' . $boolProp . '="true"', $tagContent);
            }
        }
        return $tagContent;
    }, $content);

    $content = preg_replace('/<img\b([^>]*?)data-src=/', '<img$1src=', $content);

    $content = preg_replace('/\bv-model:open="[^"]+"/', '', $content);
    $content = preg_replace('/:class="\{\s*\'([^\']+)\'\s*:\s*([^}]*?)\s*\}"/s', '@class([\'$1\' => $2])', $content);
    $content = preg_replace('/:class="(\[.*?\])"/s', '@class($1)', $content);
    $content = preg_replace('/ +/', ' ', $content);
    $content = preg_replace_callback('/<([a-z0-9x-]+)\s+(.*?)>/s', function ($m) {
        if (str_contains($m[2], "\n")) {
            $tag = $m[1];
            $attrs = preg_replace('/\s+/', ' ', $m[2]);
            return "<$tag $attrs>";
        }
        return $m[0];
    }, $content);
    // 8. Expand self-closing tags for non-void elements
    $voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
    $content = preg_replace_callback('/<([a-z0-9x:-]+)\b([^>]*?)\s*\/>/i', function ($m) use ($voidElements) {
        $tag = strtolower($m[1]);
        if (str_starts_with($tag, 'x-') || in_array($tag, $voidElements)) {
            return $m[0];
        }
        return '<' . $m[1] . $m[2] . '></' . $m[1] . '>';
    }, $content);

    $content = preg_replace('/\s+>/', '>', $content);
    $content = preg_replace('/<!--\s*@yield\(\'content\'\)\s*-->/s', "@yield('content')", $content);
    $content = preg_replace('/@yield\(\'content\'\)\s*-->/s', "@yield('content')", $content);

    // 8. Convert v-for to @foreach
    // Pattern: v-for="(item, index) in items.slice(0, 9)"
    $content = preg_replace_callback('/<([a-z0-9x:-]+)\b([^>]*?)\bv-for="\(([^,]+),\s*([^)]+)\)\s+in\s+([^("]+)(\.slice\(\d+,\s*\d+\))?"([^>]*?)>(.*?)<\/\1>/is', function ($m) {
        $tag = $m[1];
        $item = trim(ltrim($m[3], '$'));
        $index = trim(ltrim($m[4], '$'));
        $items = trim(ltrim($m[5], '$'));
        $slice = $m[6] ?? '';
        $attrBefore = $m[2];
        $attrAfter = $m[7];
        $body = $m[8];

        $itemsVar = trim($items);
        if (is_numeric($itemsVar)) {
            $itemsVar = "range(1, {$itemsVar})";
        } else if (!str_starts_with($itemsVar, '[') && !str_starts_with($itemsVar, '{')) {
            $itemsVar = '$' . ltrim($itemsVar, '$');
        }

        if ($slice && preg_match('/\.slice\((\d+),\s*(\d+)\)/', $slice, $sm)) {
            $itemsVar = "array_slice({$itemsVar}, {$sm[1]}, {$sm[2]})";
        }

        return "@foreach({$itemsVar} as \${$index} => \${$item})\n<{$tag}{$attrBefore}{$attrAfter}>\n{$body}\n</{$tag}>\n@endforeach";
    }, $content);

    // Pattern: v-for="(item, index) in items"
    $content = preg_replace_callback('/<([a-z0-9x:-]+)\b([^>]*?)\bv-for="\(([^,]+),\s*([^)]+)\)\s+in\s+([^"]+)"([^>]*?)>(.*?)<\/\1>/is', function ($m) {
        if (str_contains($m[5], '.slice'))
            return $m[0]; // Skip if handled above
        $tag = $m[1];
        $item = trim(ltrim($m[3], '$'));
        $index = trim(ltrim($m[4], '$'));
        $items = trim(ltrim($m[5], '$'));
        $attrBefore = $m[2];
        $attrAfter = $m[6];
        $body = $m[7];

        $itemsVar = trim($items);
        if (is_numeric($itemsVar)) {
            $itemsVar = "range(1, {$itemsVar})";
        } else if (!str_starts_with($itemsVar, '[') && !str_starts_with($itemsVar, '{')) {
            $itemsVar = '$' . ltrim($itemsVar, '$');
        }

        return "@foreach({$itemsVar} as \${$index} => \${$item})\n<{$tag}{$attrBefore}{$attrAfter}>\n{$body}\n</{$tag}>\n@endforeach";
    }, $content);

    // Pattern: v-for="item in items"
    $content = preg_replace_callback('/<([a-z0-9x:-]+)\b([^>]*?)\bv-for="([^(\s]+)\s+in\s+([^"]+)"([^>]*?)>(.*?)<\/\1>/is', function ($m) {
        $tag = $m[1];
        $item = trim(ltrim($m[3], '$'));
        $items = trim(ltrim($m[4], '$'));
        $attrBefore = $m[2];
        $attrAfter = $m[5];
        $body = $m[6];

        $itemsVar = trim($items);
        if (is_numeric($itemsVar)) {
            $itemsVar = "range(1, {$itemsVar})";
        } else if (!str_starts_with($itemsVar, '[') && !str_starts_with($itemsVar, '{')) {
            $itemsVar = '$' . ltrim($itemsVar, '$');
        }

        if (preg_match('/(.*?)\.slice\((\d+),\s*(\d+)\)/', $items, $sm)) {
            $itemsVar = "array_slice(\$" . ltrim($sm[1], '$') . ", " . $sm[2] . ", " . $sm[3] . ")";
        }

        return "@foreach({$itemsVar} as \${$item})\n<{$tag}{$attrBefore}{$attrAfter}>\n{$body}\n</{$tag}>\n@endforeach";
    }, $content);

    $content = str_replace('$$faker', '$faker', $content);
    $content = str_replace('$$fakers', '$fakers', $content);
    $content = str_replace('asset($$', 'asset($', $content);
    $content = str_replace(':class="$', ':class="', $content);
    $content = str_replace('$collect(', 'collect(', $content);
    $content = str_replace('$asset(', 'asset(', $content);
    $content = str_replace('$route(', 'route(', $content);
    
    // Final Multi-Pass Sanitization
    $content = preg_replace_callback('/\{\{.*?\}\}/s', function ($m) {
        $i = $m[0];
        $i = preg_replace('/([\w\]\)\'])!/', '$1', $i);
        $i = str_replace('?.', '.', $i);
        $i = preg_replace('/\s\+\s/', ' . ', $i);
        $i = preg_replace('/\b(index|size|key|item|i|n)\b(?!\')(?<!\$)/', '$$$1', $i);
        return $i;
    }, $content);

    $content = preg_replace('/:class="\{\s*\'([^\']+)\'\s*:\s*([^}]*?)\s*\}"/s', '@class([\'$1\' => $2])', $content);

    $content = str_replace('$$faker', '$faker', $content);
    $content = str_replace('$$fakers', '$fakers', $content);
    $content = str_replace('asset($$', 'asset($', $content);
    $content = str_replace('. + .', ' . ', $content);

    $content = trim($content);
    $content = preg_replace('/\n\s*\n/', "\n", $content);
    return $content;
};

// 1. Convert Themes
$themes = ['Rubick', 'Enigma', 'Icewall', 'Tinker'];
$files = ['SideMenu/SideMenu.vue'];
foreach ($themes as $theme) {
    foreach ($files as $file) {
        $sourcePath = base_path('../packages/vue/src/themes/' . $theme . '/' . $file);
        if (!file_exists($sourcePath))
            continue;
        $content = $transform(file_get_contents($sourcePath));
        $destFile = kebab(basename($file, '.vue')) . '.blade.php';
        $destPath = base_path('../packages/laravel/resources/views/themes/' . strtolower($theme) . '/' . $destFile);
        if (!File::isDirectory(dirname($destPath)))
            File::makeDirectory(dirname($destPath), 0755, true);
        file_put_contents($destPath, $content);
        echo "Converted theme component: $destPath\n";
    }
}

// 2. Convert Pages
$pagesSource = base_path('../packages/vue/src/views');
$pagesDest = base_path('../packages/laravel/resources/views/pages');
if (File::isDirectory($pagesSource)) {
    $vfiles = File::allFiles($pagesSource);
    foreach ($vfiles as $vfile) {
        if ($vfile->getExtension() !== 'vue')
            continue;
        $content = $transform(file_get_contents($vfile->getPathname()));
        $bladeContent = "@extends('themes.Layout')\n\n@section('content')\n" . $content . "\n@endsection";
        $destFile = kebab($vfile->getBasename('.vue')) . '.blade.php';
        $destPath = $pagesDest . '/' . $destFile;
        if (!File::isDirectory(dirname($destPath)))
            File::makeDirectory(dirname($destPath), 0755, true);
        file_put_contents($destPath, $bladeContent);
        echo "Converted page: $destPath\n";
    }
}
echo "Done! Found " . count($vueToVanilla) . " vanilla and " . count($vueToBlade) . " blade component mappings.\n";
