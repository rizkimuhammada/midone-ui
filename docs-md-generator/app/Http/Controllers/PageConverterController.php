<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

class PageConverterController extends Controller
{
    private string $pagesPath;
    private string $docsPath;
    private string $componentsPath;
    private string $outputPath;

    private string $vuePagesPath;
    private string $vueComponentsPath;
    private string $vueOutputPath;

    private string $vanillaHtmlPath;
    private string $vanillaSrcPath;
    private string $vanillaOutputPath;

    private string $reactMdPath;
    private string $vueMdPath;
    private string $docsPagesPath;
    private string $previewScopePath;

    public function __construct()
    {
        $root = realpath(base_path('..'));
        $this->pagesPath          = $root . '/packages/react/src/pages';
        $this->docsPath           = $root . '/packages/docs/src/pages/react';
        $this->componentsPath     = $root . '/packages/react/src/components/ui';
        $this->outputPath         = $root . '/packages/docs/src/md';

        $this->vuePagesPath       = $root . '/packages/vue/src/pages';
        $this->vueComponentsPath  = $root . '/packages/vue/src/components/ui';
        $this->vueOutputPath      = $root . '/packages/docs/src/md/vue';

        $this->vanillaHtmlPath    = $root . '/packages/vanilla';
        $this->vanillaSrcPath     = $root . '/packages/vanilla/src';
        $this->vanillaOutputPath  = $root . '/packages/docs/src/md/vanilla';

        $this->reactMdPath      = $root . '/packages/docs/src/md/react';
        $this->vueMdPath        = $root . '/packages/docs/src/md/vue';
        $this->docsPagesPath    = $root . '/packages/docs/src/pages';
        $this->previewScopePath = $root . '/packages/docs/src/components/docs/previewScope.tsx';
    }

    public function generateReact()
    {
        $files = glob($this->pagesPath . '/*.tsx');

        if (empty($files)) {
            return response()->json(['error' => 'No page files found in ' . $this->pagesPath], 404);
        }

        File::ensureDirectoryExists($this->reactMdPath);

        $generated = [];
        $skipped   = [];

        foreach ($files as $file) {
            $name = pathinfo($file, PATHINFO_FILENAME);
            $ok   = $this->generateMdForComponent($name);
            $ok ? ($generated[] = $name) : ($skipped[] = $name);
        }

        $this->generatePreviewScope($files);

        return response()->json([
            'message'   => 'Generated ' . count($generated) . ' file(s)',
            'generated' => $generated,
            'skipped'   => $skipped,
        ]);
    }

    // -------------------------------------------------------------------------
    // Core generator
    // -------------------------------------------------------------------------

    private function generateMdForComponent(string $name): bool
    {
        $pageContent = $this->readFile($this->pagesPath . '/' . $name . '.tsx');
        $docsContent = $this->readFile($this->docsPath  . '/' . $name . '.tsx');

        if ($pageContent === null || $docsContent === null) {
            return false;
        }

        $sections          = $this->extractSections($pageContent);
        $componentImports  = $this->extractComponentImports($docsContent);
        $externalPackages  = $this->resolveExternalPackages($componentImports);
        $componentContent  = $this->readFile($this->componentsPath . '/' . $name . '/index.tsx') ?? '';
        $usageImports      = $this->extractUsageImports($docsContent);

        $md = $this->buildMarkdown($name, $sections, $externalPackages, $componentContent, $usageImports, $pageContent);

        File::put($this->reactMdPath . '/' . $name . '.md', $md);

        return true;
    }

    // -------------------------------------------------------------------------
    // Parsing helpers
    // -------------------------------------------------------------------------

    /**
     * Extract trimmed inner content of every <div> whose className contains "border-b"
     * from the pages file.
     */
    private function extractSections(string $content): array
    {
        $sections = [];
        $offset   = 0;
        $len      = strlen($content);

        while ($offset < $len) {
            // Look for a div opening tag
            $tagOpen = strpos($content, '<div', $offset);
            if ($tagOpen === false) {
                break;
            }

            // Grab the full opening tag (up to first unquoted >)
            $tagClose = $this->findTagClose($content, $tagOpen + 4);
            if ($tagClose === false) {
                $offset = $tagOpen + 4;
                continue;
            }

            $openingTag = substr($content, $tagOpen, $tagClose - $tagOpen + 1);
            $isSelfClosing = str_ends_with(rtrim($openingTag), '/>');

            if (!$isSelfClosing && $this->tagHasClass($openingTag, 'border-b')) {
                $innerStart   = $tagClose + 1;
                $innerContent = $this->extractInnerContent($content, $innerStart);

                if ($innerContent !== null) {
                    $sections[] = $this->dedent($innerContent);
                }
            }

            $offset = $tagClose + 1;
        }

        return $sections;
    }

    /**
     * Find the position of the closing ">" of an HTML/JSX opening tag,
     * skipping over quoted attribute values.
     */
    private function findTagClose(string $content, int $start): int|false
    {
        $i   = $start;
        $len = strlen($content);

        while ($i < $len) {
            $c = $content[$i];

            if ($c === '"' || $c === "'") {
                // Skip quoted string
                $quote = $c;
                $i++;
                while ($i < $len && $content[$i] !== $quote) {
                    if ($content[$i] === '\\') {
                        $i++;
                    }
                    $i++;
                }
                $i++;
                continue;
            }

            if ($c === '{') {
                // Skip JSX expression inside attribute value
                $depth = 1;
                $i++;
                while ($i < $len && $depth > 0) {
                    if ($content[$i] === '{') {
                        $depth++;
                    } elseif ($content[$i] === '}') {
                        $depth--;
                    }
                    $i++;
                }
                continue;
            }

            if ($c === '>') {
                return $i;
            }

            $i++;
        }

        return false;
    }

    /**
     * Check whether an opening tag contains a specific CSS class.
     * Supports both React's `className=` and Vue/HTML's `class=`.
     */
    private function tagHasClass(string $tag, string $class): bool
    {
        // Match class="..." or className="..." (handles multi-line Vue tags too)
        if (preg_match('/\b(?:class|className)\s*=\s*["\']([^"\']*)["\']/', $tag, $m)) {
            return str_contains($m[1], $class);
        }
        return false;
    }

    /**
     * Starting right after the ">" of an opening <div> tag, consume content
     * until the matching </div> (tracking depth), and return the raw inner text.
     */
    private function extractInnerContent(string $content, int $start): ?string
    {
        $depth = 1;
        $i     = $start;
        $len   = strlen($content);

        while ($i < $len && $depth > 0) {
            // Closing </div>
            if (substr($content, $i, 6) === '</div>') {
                $depth--;
                if ($depth === 0) {
                    return substr($content, $start, $i - $start);
                }
                $i += 6;
                continue;
            }

            // Opening <div ...> or <div> (but NOT <divider>, etc.)
            if (substr($content, $i, 4) === '<div') {
                $nextChar = $content[$i + 4] ?? '';
                if ($nextChar === ' ' || $nextChar === '>' || $nextChar === "\n" || $nextChar === "\r" || $nextChar === "\t") {
                    // Make sure it is not self-closing
                    $tagClose = $this->findTagClose($content, $i + 4);
                    if ($tagClose !== false) {
                        $tag = substr($content, $i, $tagClose - $i + 1);
                        if (!str_ends_with(rtrim($tag), '/>')) {
                            $depth++;
                        }
                        $i = $tagClose + 1;
                        continue;
                    }
                }
            }

            $i++;
        }

        return null;
    }

    /**
     * Extract everything inside function Main() before the first return statement.
     * Returns empty string if Main() starts directly with return (no local state/vars).
     */
    private function extractMainPreamble(string $content): string
    {
        if (!preg_match('/\bfunction\s+Main\s*\(\s*\)\s*\{/', $content, $m, PREG_OFFSET_CAPTURE)) {
            return '';
        }

        $bodyStart = $m[0][1] + strlen($m[0][0]);
        $i         = $bodyStart;
        $len       = strlen($content);
        $depth     = 1; // brace depth: 1 = directly inside Main()

        while ($i < $len) {
            $c = $content[$i];

            // Skip strings
            if ($c === '"' || $c === "'" || $c === '`') {
                $q = $c;
                $i++;
                while ($i < $len) {
                    if ($content[$i] === '\\') { $i += 2; continue; }
                    if ($content[$i] === $q)   { $i++; break; }
                    $i++;
                }
                continue;
            }

            // Skip line comments
            if ($c === '/' && isset($content[$i + 1]) && $content[$i + 1] === '/') {
                while ($i < $len && $content[$i] !== "\n") $i++;
                continue;
            }

            // Skip block comments
            if ($c === '/' && isset($content[$i + 1]) && $content[$i + 1] === '*') {
                $i += 2;
                while ($i < $len - 1) {
                    if ($content[$i] === '*' && $content[$i + 1] === '/') { $i += 2; break; }
                    $i++;
                }
                continue;
            }

            if ($c === '{') {
                $depth++;
            } elseif ($c === '}') {
                $depth--;
                if ($depth === 0) break;
            }

            // At brace depth 1 (directly inside Main body), look for "return"
            if ($depth === 1 && substr($content, $i, 6) === 'return') {
                $next = $content[$i + 6] ?? '';
                if (in_array($next, [' ', "\n", "\r", "\t", '(', ';'])) {
                    $preamble = substr($content, $bodyStart, $i - $bodyStart);
                    $trimmed  = trim($preamble);
                    // Only return if preamble has non-state content (e.g. useReactTable, etc.)
                    // Simple heuristic: non-empty after stripping useState calls
                    $withoutState = preg_replace('/const\s+\[.*?\]\s*=\s*(?:React\.)?useState[^;]+;/s', '', $trimmed);
                    if (!empty(trim($withoutState))) {
                        return $trimmed;
                    }
                    // Also return if preamble has ANY non-trivial content (e.g. hook calls)
                    if (!empty($trimmed)) {
                        return $trimmed;
                    }
                    return '';
                }
            }

            $i++;
        }

        return '';
    }

    /**
     * Remove the common leading whitespace from every non-empty line.
     */
    private function dedent(string $text): string
    {
        $lines = explode("\n", $text);

        // Collect indentation lengths of non-empty lines
        $indents = [];
        foreach ($lines as $line) {
            if (trim($line) === '') {
                continue;
            }
            preg_match('/^(\s*)/', $line, $m);
            $indents[] = strlen($m[1]);
        }

        if (empty($indents)) {
            return trim($text);
        }

        $minIndent = min($indents);

        $dedented = array_map(function (string $line) use ($minIndent) {
            if (trim($line) === '') {
                return '';
            }
            return substr($line, $minIndent);
        }, $lines);

        return trim(implode("\n", $dedented));
    }

    /**
     * Slice file content to only the top-level import block
     * (everything before the first `function` or `const` declaration).
     */
    private function topLevelImports(string $content): string
    {
        // Stop at the first function/const/class declaration
        if (preg_match('/^(function|const|class|export)\s/m', $content, $m, PREG_OFFSET_CAPTURE)) {
            return substr($content, 0, $m[0][1]);
        }
        return $content;
    }

    /**
     * Extract unique component names imported from "@/components/ui/{name}"
     * in the docs page.
     */
    private function extractComponentImports(string $content): array
    {
        preg_match_all(
            '/from\s+["\']@\/components\/ui\/([^"\'\/]+)["\']/',
            $this->topLevelImports($content),
            $matches
        );

        return array_unique($matches[1]);
    }

    /**
     * For each component, read its index.tsx and collect external npm package names.
     * Local paths (@/, @midoneui/, ./, ../) are skipped.
     */
    private function resolveExternalPackages(array $componentNames): array
    {
        $packages = [];

        foreach ($componentNames as $name) {
            $filePath = $this->componentsPath . '/' . $name . '/index.tsx';
            $content  = $this->readFile($filePath);

            if ($content === null) {
                continue;
            }

            preg_match_all('/from\s+["\']([^"\']+)["\']/', $content, $matches);

            // Packages assumed to already exist in any React project
            $assumed = ['react', 'react-dom', 'react/jsx-runtime'];

            foreach ($matches[1] as $pkg) {
                if (
                    str_starts_with($pkg, '@/') ||
                    str_starts_with($pkg, '@midoneui/') ||
                    str_starts_with($pkg, './') ||
                    str_starts_with($pkg, '../') ||
                    in_array($pkg, $assumed, true)
                ) {
                    continue;
                }
                $packages[] = $pkg;
            }
        }

        return array_values(array_unique($packages));
    }

    /**
     * Extract only the @/components/ui import statements from the docs page,
     * preserving their original multi-line formatting.
     * Only considers top-level imports (before any function declaration).
     */
    private function extractUsageImports(string $content): string
    {
        $header = $this->topLevelImports($content);

        preg_match_all(
            '/import\s+\{[^}]+\}\s+from\s+["\']@\/components\/ui\/[^"\']+["\'];/s',
            $header,
            $matches
        );

        return implode("\n", $matches[0]);
    }

    // -------------------------------------------------------------------------
    // Markdown builder
    // -------------------------------------------------------------------------

    private function buildMarkdown(
        string $name,
        array  $sections,
        array  $externalPackages,
        string $componentContent,
        string $usageImports,
        string $pageContent = ''
    ): string {
        $title        = $this->toTitleCase($name);
        $firstSection = $sections[0] ?? '';

        $md  = "# {$title}\n\n";
        $md .= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n";
        $md .= "[View on GitHub](#) | [Documentation](#)\n\n";

        // --- Preview ---------------------------------------------------------
        $preamble = !empty($pageContent) ? $this->extractMainPreamble($pageContent) : '';
        $previewCode = $firstSection;
        if (!empty($preamble) && !empty($firstSection)) {
            $indentedPreamble = implode("\n", array_map(
                fn($line) => trim($line) === '' ? '' : '  ' . $line,
                explode("\n", $preamble)
            ));
            $indentedSection = implode("\n", array_map(
                fn($line) => trim($line) === '' ? '' : '    ' . $line,
                explode("\n", $firstSection)
            ));
            $previewCode = "function Preview() {\n{$indentedPreamble}\n\n  return (\n    <>\n{$indentedSection}\n    </>\n  );\n}\nrender(<Preview />)";
        }

        $md .= "## Preview\n\n";
        $md .= "```tsx\n{$previewCode}\n```\n\n";

        // --- Dependency ------------------------------------------------------
        $md .= "## Dependency\n\n";

        if (!empty($externalPackages)) {
            $npmInstall = 'npm install ' . implode(' ', $externalPackages);
            $md .= "```bash\n{$npmInstall}\n```\n\n";
        } else {
            $md .= "No external dependencies.\n\n";
        }

        // --- Component -------------------------------------------------------
        $md .= "## Component\n\n";
        $md .= "```tsx\n" . trim($componentContent) . "\n```\n\n";

        // --- Usage -----------------------------------------------------------
        $md .= "## Usage\n\n";

        if (!empty(trim($usageImports))) {
            $md .= "```tsx\n" . trim($usageImports) . "\n```\n\n";
        }

        $md .= "```tsx\n{$firstSection}\n```\n\n";

        // --- Examples --------------------------------------------------------
        // Skip index 0 — it's already shown in Preview
        $exampleSections = array_slice($sections, 1);

        if (!empty($exampleSections)) {
            $md .= "## Examples\n\n";

            foreach ($exampleSections as $index => $section) {
                $num = $index + 1;
                $md .= "### Example {$num}\n\n";

                if (!empty($preamble)) {
                    $fnName = "Preview{$num}";
                    $indentedPreamble = implode("\n", array_map(
                        fn($line) => trim($line) === '' ? '' : '  ' . $line,
                        explode("\n", $preamble)
                    ));
                    $indentedSection = implode("\n", array_map(
                        fn($line) => trim($line) === '' ? '' : '    ' . $line,
                        explode("\n", $section)
                    ));
                    $exCode = "function {$fnName}() {\n{$indentedPreamble}\n\n  return (\n    <>\n{$indentedSection}\n    </>\n  );\n}\nrender(<{$fnName} />)";
                } else {
                    $exCode = $section;
                }

                $md .= "```tsx\n{$exCode}\n```\n\n";
            }
        }

        return $md;
    }

    // -------------------------------------------------------------------------
    // Utilities
    // -------------------------------------------------------------------------

    private function readFile(string $path): ?string
    {
        return File::exists($path) ? File::get($path) : null;
    }

    private function toTitleCase(string $name): string
    {
        return implode(' ', array_map('ucfirst', explode('-', $name)));
    }

    // =========================================================================
    // VUE GENERATOR
    // =========================================================================

    public function generateVue()
    {
        $files = glob($this->vuePagesPath . '/*.vue');

        if (empty($files)) {
            return response()->json(['error' => 'No Vue page files found in ' . $this->vuePagesPath], 404);
        }

        File::ensureDirectoryExists($this->vueOutputPath);

        $generated = [];
        $skipped   = [];

        foreach ($files as $file) {
            $stem = pathinfo($file, PATHINFO_FILENAME);  // e.g. "Accordion"
            $ok   = $this->generateMdForVueComponent($stem);
            $ok ? ($generated[] = $stem) : ($skipped[] = $stem);
        }

        return response()->json([
            'message'   => 'Generated ' . count($generated) . ' Vue file(s)',
            'generated' => $generated,
            'skipped'   => $skipped,
        ]);
    }

    // -------------------------------------------------------------------------
    // Vue core generator
    // -------------------------------------------------------------------------

    private function generateMdForVueComponent(string $stem): bool
    {
        $pageContent = $this->readFile($this->vuePagesPath . '/' . $stem . '.vue');
        if ($pageContent === null) {
            return false;
        }

        $kebab = $this->pascalToKebab($stem);

        $scriptContent   = $this->extractVueScript($pageContent);
        $templateContent = $this->extractVueTemplate($pageContent);

        if ($templateContent === null) {
            return false;
        }

        $sections          = $this->extractSections($templateContent);
        $componentImports  = $this->extractVueComponentImports($scriptContent ?? '');
        $externalPackages  = $this->resolveVueExternalPackages($componentImports);
        $componentFiles    = $this->readVueComponentFiles($kebab);
        $usageImports      = $this->extractVueUsageImports($scriptContent ?? '');

        $md = $this->buildVueMarkdown(
            $kebab,
            $sections,
            $externalPackages,
            $componentFiles,
            $usageImports
        );

        File::put($this->vueOutputPath . '/' . $kebab . '.md', $md);

        return true;
    }

    // -------------------------------------------------------------------------
    // Vue parsing helpers
    // -------------------------------------------------------------------------

    /**
     * Extract the inner content of the first <script …> block.
     */
    private function extractVueScript(string $content): ?string
    {
        if (preg_match('/<script[^>]*>(.*?)<\/script>/s', $content, $m)) {
            return $m[1];
        }
        return null;
    }

    /**
     * Extract the inner content of the <template> block.
     */
    private function extractVueTemplate(string $content): ?string
    {
        if (preg_match('/<template>(.*?)<\/template>/s', $content, $m)) {
            return $m[1];
        }
        return null;
    }

    /**
     * Extract unique @/components/ui/{name} component folder names
     * from the Vue page's <script> section.
     */
    private function extractVueComponentImports(string $script): array
    {
        preg_match_all(
            '/from\s+["\']@\/components\/ui\/([^"\'\/]+)["\']/',
            $script,
            $matches
        );

        return array_unique($matches[1]);
    }

    /**
     * Return formatted import statements for the Usage section
     * (only @/components/ui/* lines from the script block).
     */
    private function extractVueUsageImports(string $script): string
    {
        preg_match_all(
            '/import\s+\{[^}]+\}\s+from\s+["\']@\/components\/ui\/[^"\']+["\'];/s',
            $script,
            $matches
        );

        return implode("\n", $matches[0]);
    }

    /**
     * For each Vue component folder, scan all .vue files and collect
     * external npm package names (skip local / vue / react paths).
     */
    private function resolveVueExternalPackages(array $componentNames): array
    {
        $assumed  = ['react', 'react-dom', 'vue', 'vue-router', '@vue/runtime-core', '@vue/compiler-core'];
        $packages = [];

        foreach ($componentNames as $name) {
            // component names from imports are already kebab-case
            $dir   = $this->vueComponentsPath . '/' . $name;
            $files = glob($dir . '/*.vue') ?: [];

            foreach ($files as $file) {
                $script = $this->extractVueScript(File::get($file));
                if ($script === null) continue;

                preg_match_all('/from\s+["\']([^"\']+)["\']/', $script, $m);

                foreach ($m[1] as $pkg) {
                    if (
                        str_starts_with($pkg, '@/') ||
                        str_starts_with($pkg, '@midoneui/') ||
                        str_starts_with($pkg, './') ||
                        str_starts_with($pkg, '../') ||
                        in_array($pkg, $assumed, true)
                    ) {
                        continue;
                    }
                    $packages[] = $pkg;
                }
            }
        }

        return array_values(array_unique($packages));
    }

    /**
     * Read all .vue files from a component directory.
     * Returns [ 'FileName.vue' => 'file content', ... ] sorted by name.
     */
    private function readVueComponentFiles(string $kebabName): array
    {
        $dir   = $this->vueComponentsPath . '/' . $kebabName;
        $files = glob($dir . '/*.vue') ?: [];
        sort($files);

        $result = [];
        foreach ($files as $file) {
            $result[basename($file)] = File::get($file);
        }

        return $result;
    }

    // -------------------------------------------------------------------------
    // Vue markdown builder
    // -------------------------------------------------------------------------

    private function buildVueMarkdown(
        string $kebab,
        array  $sections,
        array  $externalPackages,
        array  $componentFiles,
        string $usageImports
    ): string {
        $title        = $this->toTitleCase($kebab);
        $firstSection = $sections[0] ?? '';

        $md  = "# {$title}\n\n";
        $md .= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n";
        $md .= "[View on GitHub](#) | [Documentation](#)\n\n";

        // --- Preview ---------------------------------------------------------
        $md .= "## Preview\n\n";
        $md .= "```vue\n{$firstSection}\n```\n\n";

        // --- Dependency ------------------------------------------------------
        $md .= "## Dependency\n\n";

        if (!empty($externalPackages)) {
            $md .= "```bash\nnpm install " . implode(' ', $externalPackages) . "\n```\n\n";
        } else {
            $md .= "No external dependencies.\n\n";
        }

        // --- Component -------------------------------------------------------
        $md .= "## Component\n\n";

        if (empty($componentFiles)) {
            $md .= "Component files not found.\n\n";
        } else {
            foreach ($componentFiles as $fileName => $fileContent) {
                $md .= "### {$fileName}\n\n";
                $md .= "```vue\n" . trim($fileContent) . "\n```\n\n";
            }
        }

        // --- Usage -----------------------------------------------------------
        $md .= "## Usage\n\n";

        if (!empty(trim($usageImports))) {
            $md .= "```vue\n" . trim($usageImports) . "\n```\n\n";
        }

        $md .= "```vue\n{$firstSection}\n```\n\n";

        // --- Examples --------------------------------------------------------
        $exampleSections = array_slice($sections, 1);

        if (!empty($exampleSections)) {
            $md .= "## Examples\n\n";

            foreach ($exampleSections as $index => $section) {
                $num  = $index + 1;
                $md  .= "### Example {$num}\n\n";
                $md  .= "```vue\n{$section}\n```\n\n";
            }
        }

        return $md;
    }

    // -------------------------------------------------------------------------
    // Vue utilities
    // -------------------------------------------------------------------------

    /**
     * Convert PascalCase to kebab-case.
     * e.g. "RadioGroup" → "radio-group", "Accordion" → "accordion"
     */
    private function pascalToKebab(string $name): string
    {
        return strtolower(preg_replace('/(?<!^)[A-Z]/', '-$0', $name));
    }

    // =========================================================================
    // DOCS TSX GENERATOR
    // =========================================================================

    public function generateDocsTsx()
    {
        $files = glob($this->reactMdPath . '/*.md');

        if (empty($files)) {
            return response()->json(['error' => 'No React md files found in ' . $this->reactMdPath], 404);
        }

        File::ensureDirectoryExists($this->docsPagesPath);

        $generated = [];
        $skipped   = [];

        foreach ($files as $file) {
            $name = pathinfo($file, PATHINFO_FILENAME);
            $ok   = $this->generateDocsTsxForComponent($name);
            $ok ? ($generated[] = $name) : ($skipped[] = $name);
        }

        return response()->json([
            'message'   => 'Generated ' . count($generated) . ' docs tsx file(s)',
            'generated' => $generated,
            'skipped'   => $skipped,
        ]);
    }

    private function generateDocsTsxForComponent(string $name): bool
    {
        $reactMd   = $this->reactMdPath   . '/' . $name . '.md';
        $vueMd     = $this->vueMdPath     . '/' . $name . '.md';
        $vanillaMd = $this->vanillaOutputPath . '/' . $name . '.md';

        if (!File::exists($reactMd)) {
            return false;
        }

        $tsxContent = $this->buildDocsTsxContent(
            $name,
            File::exists($vueMd),
            File::exists($vanillaMd)
        );

        File::put($this->docsPagesPath . '/' . $name . '.tsx', $tsxContent);

        return true;
    }

    private function buildDocsTsxContent(string $name, bool $hasVue, bool $hasVanilla): string
    {
        $rel = '../md';

        $o  = 'import DocPage from "@/components/docs/DocPage";' . "\n";
        $o .= 'import reactMd from "' . $rel . '/react/' . $name . '.md?raw";' . "\n";
        if ($hasVue) {
            $o .= 'import vueMd from "' . $rel . '/vue/' . $name . '.md?raw";' . "\n";
        }
        if ($hasVanilla) {
            $o .= 'import vanillaMd from "' . $rel . '/vanilla/' . $name . '.md?raw";' . "\n";
        }

        $o .= "\n";
        $o .= 'function Main() {' . "\n";
        $o .= '  return <DocPage reactMd={reactMd}';
        if ($hasVue)     $o .= ' vueMd={vueMd}';
        if ($hasVanilla) $o .= ' vanillaMd={vanillaMd}';
        $o .= ' />;' . "\n";
        $o .= '}' . "\n\n";
        $o .= 'export default Main;' . "\n";

        return $o;
    }

    // =========================================================================
    // PREVIEW SCOPE GENERATOR
    // =========================================================================

    private function generatePreviewScope(array $pageFiles): void
    {
        $allDeclarations = [];  // ['varName' => 'const varName = ...']
        $externalImports = [];  // ['@tanstack/react-table' => ['useReactTable', ...]]

        foreach ($pageFiles as $file) {
            $content = File::get($file);
            $stem    = pathinfo($file, PATHINFO_FILENAME);

            // Extract block between imports and `function Main` / `export default function`
            $block = $this->extractPageDeclarations($content);
            if (empty(trim($block))) {
                continue;
            }

            // Extract variable names declared in the block
            preg_match_all('/^(?:export\s+)?(?:const|let|var)\s+(\w+)/m', $block, $varMatches);
            // Extract type/interface names (needed as comments, not values)
            preg_match_all('/^(?:export\s+)?type\s+(\w+)/m', $block, $typeMatches);

            foreach ($varMatches[1] as $varName) {
                if (!isset($allDeclarations[$varName])) {
                    $allDeclarations[$varName] = [
                        'block' => trim($block),
                        'stem'  => $stem,
                    ];
                }
            }

            // Collect non-local, non-ui, non-lucide external package imports
            $this->extractExternalImportsForScope($content, $externalImports);
        }

        $ts = $this->buildPreviewScopeTs($allDeclarations, $externalImports);
        File::put($this->previewScopePath, $ts);
    }

    /**
     * Extract the middle block of a React page file:
     * everything between the import section and `function Main(`.
     * Strips `export type` / `export interface` since those are TS-only.
     */
    private function extractPageDeclarations(string $content): string
    {
        // 1. Split content into 'before Main' and 'Main body'
        $beforeMain = $content;
        $mainBody   = "";

        // Improved regex: remove ^ so it matches anywhere in the file
        if (preg_match('/(?:export\s+default\s+)?function\s+Main[\s(].*?\{(.*)\}/s', $content, $m, PREG_OFFSET_CAPTURE)) {
            $beforeMain = substr($content, 0, $m[0][1]);
            $mainBody   = $m[1][0];
        } elseif (preg_match('/(?:export\s+default\s+)?function\s+Main[\s(]/m', $content, $m, PREG_OFFSET_CAPTURE)) {
            $beforeMain = substr($content, 0, $m[0][1]);
        }

        // 2. Process declarations before Main
        $declarations = $beforeMain;

        // Remove ALL import statements
        $declarations = preg_replace('/^import\s[\s\S]*?from\s+["\'][^"\']+["\'];[ \t]*$/m', '', $declarations);

        // Strip pure TypeScript type/interface declarations
        $declarations = preg_replace_callback(
            '/^(?:export\s+)?(?:type|interface)\s+\w+[^\n]*\{/m',
            function ($match) { return '__TYPE_BLOCK_START__'; },
            $declarations
        );
        $declarations = preg_replace('/__TYPE_BLOCK_START__[^}]*\}[^;]*;?\s*/s', '', $declarations);
        $declarations = preg_replace('/^(?:export\s+)?type\s+\w+\s*=[^;\n]+;[ \t]*/m', '', $declarations);
        $declarations = preg_replace('/^export\s+type\s+/m', '', $declarations);
        $declarations = preg_replace('/^export\s+(?=const|let|var|function|class)/m', '', $declarations);

        // 3. Extract useState from Main body and convert to static variables for scope
        if (!empty(trim($mainBody))) {
            // Updated regex to handle multi-line initial values and optional React. prefix
            preg_match_all(
                '/const\s+\[\s*(\w+)\s*,\s*(\w+)\s*\]\s*=\s*(?:React\.)?useState\b(?:<[^>]*>)?\(([\s\S]*?)\)(?:\s*;)?/m',
                $mainBody,
                $matches,
                PREG_SET_ORDER
            );

            if (!empty($matches)) {
                $declarations .= "\n\n// Extracted from Main body\n";
                foreach ($matches as $match) {
                    $stateVar  = $match[1];
                    $setterVar = $match[2];
                    $initial   = trim($match[3]);
                    // Ensure each declaration starts on a fresh line for generatePreviewScope's regex
                    $declarations .= "const {$stateVar} = {$initial};\n";
                    $declarations .= "const {$setterVar} = (...args) => {};\n";
                }
            }
        }

        return trim($declarations);
    }

    /**
     * Collect imports from packages that are NOT:
     *   - local (@/, ./, ../)
     *   - react, react-dom, lucide-react
     *   - @midoneui/*
     *   - @/components/ui/* (those are already in scope via spread)
     */
    private function extractExternalImportsForScope(string $content, array &$imports): void
    {
        $skip = ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'];

        // Support both { a, b } and * as a patterns
        preg_match_all(
            '/import\s+(?:type\s+)?(?:\{([^}]+)\}|(\*\s+as\s+\w+))\s+from\s+["\']([^"\']+)["\']/',
            $content,
            $matches,
            PREG_SET_ORDER
        );

        foreach ($matches as $m) {
            $pkg      = $m[3];
            $named    = $m[1];
            $star     = $m[2];

            if (
                in_array($pkg, $skip) ||
                str_starts_with($pkg, '@/') ||
                str_starts_with($pkg, './') ||
                str_starts_with($pkg, '../') ||
                str_starts_with($pkg, '@midoneui/')
            ) {
                continue;
            }

            if (!empty($named)) {
                // Parse named imports, strip `type` keyword and aliases
                preg_match_all('/(?:type\s+)?(\w+)(?:\s+as\s+\w+)?/', $named, $nm);
                foreach ($nm[1] as $name) {
                    if (empty($name)) continue;
                    if (!isset($imports[$pkg])) {
                        $imports[$pkg] = [];
                    }
                    if (!in_array($name, $imports[$pkg])) {
                        $imports[$pkg][] = $name;
                    }
                }
            } elseif (!empty($star)) {
                // For star imports, we might need a different handling in buildPreviewScopeTs,
                // but for now let's just ignore them or log them (they are rare in this codebase).
            }
        }
    }

    /**
     * Build the full previewScope.ts content.
     */
    private function buildPreviewScopeTs(array $declarations, array $externalImports): string
    {
        $uiDirs = [
            'accordion', 'alert', 'avatar', 'badge', 'box', 'breadcrumb',
            'button', 'carousel', 'chart', 'checkbox', 'combobox', 'datepicker',
            'dialog', 'field', 'file-icon', 'input', 'label', 'map', 'menu',
            'native-select', 'pagination', 'popover', 'progress-circular',
            'progress-linear', 'radio-group', 'scroll-area', 'select', 'sheet',
            'slider', 'switch', 'table', 'tabs', 'textarea', 'toast', 'tooltip',
        ];

        $varNames = array_keys($declarations);

        $ts  = "// AUTO-GENERATED by /generate-react — do not edit manually.\n\n";

        // ── UI component imports ──
        foreach ($uiDirs as $dir) {
            $alias = lcfirst(str_replace('-', '', ucwords($dir, '-'))) . 'Comp';
            $ts .= "import * as {$alias} from \"@/components/ui/{$dir}\";\n";
        }

        $ts .= "import * as lucide from \"lucide-react\";\n";
        // Named imports needed by JSX in page-level declarations (e.g. columns definition in data-table)
        $ts .= "import { ArrowUpDown, MoreVertical } from \"lucide-react\";\n";
        $ts .= "import React, { useState, useEffect, useRef, useCallback, useMemo, useId, useReducer } from \"react\";\n";
        $ts .= "import { CheckboxRoot, CheckboxControl } from \"@/components/ui/checkbox\";\n";
        $ts .= "import { Badge } from \"@/components/ui/badge\";\n";
        $ts .= "import { MenuRoot, MenuTrigger, MenuPositioner, MenuContent, MenuItem } from \"@/components/ui/menu\";\n";

        // ── External package imports (runtime values only, skip type-only) ──
        // Filter out pure type identifiers (they start with uppercase and match known TS types)
        $knownTypes = ['ColumnDef','SortingState','ColumnFiltersState','VisibilityState','RowSelectionState'];

        foreach ($externalImports as $pkg => $members) {
            $runtime = array_filter($members, fn($m) => !in_array($m, $knownTypes));
            if (!empty($runtime)) {
                $ts .= "import { " . implode(', ', array_values($runtime)) . " } from \"{$pkg}\";\n";
            }
        }

        // ── Demo variable declarations ──
        if (!empty($declarations)) {
            $ts .= "\n// ─── Demo data extracted from pages ──────────────────────────────────────────\n";
            $seen = [];
            foreach ($declarations as $varName => $info) {
                if (in_array($info['stem'], $seen)) continue;
                $seen[] = $info['stem'];
                $ts .= "\n// from {$info['stem']}.tsx\n";
                $ts .= $info['block'] . "\n";
            }
        }

        // ── Scope object ──
        $ts .= "\n// ─── Scope ────────────────────────────────────────────────────────────────────\n";
        $ts .= "const scope: Record<string, unknown> = {\n";
        $ts .= "  React,\n";
        $ts .= "  useState,\n";
        $ts .= "  useEffect,\n";
        $ts .= "  useRef,\n";
        $ts .= "  useCallback,\n";
        $ts .= "  useMemo,\n";
        $ts .= "  useId,\n";
        $ts .= "  useReducer,\n";

        // External runtime members
        foreach ($externalImports as $pkg => $members) {
            $runtime = array_filter($members, fn($m) => !in_array($m, $knownTypes));
            foreach (array_values($runtime) as $m) {
                $ts .= "  {$m},\n";
            }
        }

        // Demo variables
        if (!empty($varNames)) {
            $ts .= "  // demo data\n";
            foreach ($varNames as $varName) {
                $ts .= "  {$varName},\n";
            }
        }

        $ts .= "  // lucide first so UI components override any name clash (Box, Badge, Table, Map...)\n";
        $ts .= "  ...lucide,\n";

        foreach ($uiDirs as $dir) {
            $alias = lcfirst(str_replace('-', '', ucwords($dir, '-'))) . 'Comp';
            $ts .= "  ...{$alias},\n";
        }

        $ts .= "};\n\n";
        $ts .= "export default scope;\n";

        return $ts;
    }

    // =========================================================================
    // VANILLA GENERATOR
    // =========================================================================

    public function generateVanilla()
    {
        $files = glob($this->vanillaHtmlPath . '/*.html');

        if (empty($files)) {
            return response()->json(['error' => 'No HTML files found in ' . $this->vanillaHtmlPath], 404);
        }

        File::ensureDirectoryExists($this->vanillaOutputPath);

        $generated = [];
        $skipped   = [];

        foreach ($files as $file) {
            $stem = pathinfo($file, PATHINFO_FILENAME);   // e.g. "Badge", "RadioGroup"
            $ok   = $this->generateMdForVanillaComponent($stem);
            $ok ? ($generated[] = $stem) : ($skipped[] = $stem);
        }

        return response()->json([
            'message'   => 'Generated ' . count($generated) . ' vanilla file(s)',
            'generated' => $generated,
            'skipped'   => $skipped,
        ]);
    }

    // -------------------------------------------------------------------------
    // Vanilla core generator
    // -------------------------------------------------------------------------

    private function generateMdForVanillaComponent(string $stem): bool
    {
        $htmlContent = $this->readFile($this->vanillaHtmlPath . '/' . $stem . '.html');
        if ($htmlContent === null) {
            return false;
        }

        $kebab = $this->pascalToKebab($stem);

        // Extract only the <body> inner content for section scanning
        $bodyContent = $this->extractHtmlBody($htmlContent);
        $sections    = $this->extractSections($bodyContent);

        // Fallback: some pages don't use the grid/border-b wrapper —
        // use the full trimmed body content as one section.
        if (empty($sections)) {
            // Strip the <script> tag before using as fallback content
            $fallback = preg_replace('/<script\b[^>]*>.*?<\/script>/si', '', $bodyContent);
            $fallback = $this->dedent(trim($fallback));
            if (empty($fallback)) {
                return false;
            }
            $sections = [$fallback];
        }

        $tsPath           = $this->findVanillaTsFile($stem);
        $tsContent        = $tsPath ? $this->readFile($tsPath) : null;
        $externalPackages = $tsContent ? $this->extractVanillaExternalPackages($tsContent) : [];

        $md = $this->buildVanillaMarkdown(
            $kebab,
            $sections,
            $externalPackages,
            $tsContent,
            $tsPath ? basename($tsPath) : null
        );

        File::put($this->vanillaOutputPath . '/' . $kebab . '.md', $md);

        return true;
    }

    // -------------------------------------------------------------------------
    // Vanilla parsing helpers
    // -------------------------------------------------------------------------

    /**
     * Extract inner content of <body> tag.
     */
    private function extractHtmlBody(string $html): string
    {
        if (preg_match('/<body[^>]*>(.*?)<\/body>/si', $html, $m)) {
            return $m[1];
        }
        return $html;
    }

    /**
     * Try to find the corresponding .ts file for a given HTML stem.
     * Handles both kebab-case ("radio-group.ts") and lowercase ("datatable.ts").
     */
    private function findVanillaTsFile(string $stem): ?string
    {
        $kebab = $this->pascalToKebab($stem);
        $lower = strtolower($stem);

        foreach ([$kebab, $lower] as $candidate) {
            $path = $this->vanillaSrcPath . '/' . $candidate . '.ts';
            if (File::exists($path)) {
                return $path;
            }
        }

        return null;
    }

    /**
     * Extract external npm packages from a vanilla TS file.
     * Skips local paths and known bundled packages.
     */
    private function extractVanillaExternalPackages(string $tsContent): array
    {
        $assumed  = ['react', 'react-dom', 'vue', 'vue-router'];
        $packages = [];

        preg_match_all('/from\s+["\']([^"\']+)["\']/', $tsContent, $matches);

        foreach ($matches[1] as $pkg) {
            if (
                str_starts_with($pkg, '@midoneui/') ||
                str_starts_with($pkg, './') ||
                str_starts_with($pkg, '../') ||
                in_array($pkg, $assumed, true)
            ) {
                continue;
            }
            $packages[] = $pkg;
        }

        return array_values(array_unique($packages));
    }

    // -------------------------------------------------------------------------
    // Vanilla markdown builder
    // -------------------------------------------------------------------------

    private function buildVanillaMarkdown(
        string  $kebab,
        array   $sections,
        array   $externalPackages,
        ?string $tsContent,
        ?string $tsFileName
    ): string {
        $title        = $this->toTitleCase($kebab);
        $firstSection = $sections[0] ?? '';

        $md  = "# {$title}\n\n";
        $md .= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n";
        $md .= "[View on GitHub](#) | [Documentation](#)\n\n";

        // --- Preview ---------------------------------------------------------
        $md .= "## Preview\n\n";
        $md .= "```html\n{$firstSection}\n```\n\n";

        // --- Dependency ------------------------------------------------------
        $md .= "## Dependency\n\n";

        if (!empty($externalPackages)) {
            $md .= "```bash\nnpm install " . implode(' ', $externalPackages) . "\n```\n\n";
        } else {
            $md .= "No external dependencies.\n\n";
        }

        // --- Component -------------------------------------------------------
        $md .= "## Component\n\n";

        if ($tsContent !== null && $tsFileName !== null) {
            $md .= "### {$tsFileName}\n\n";
            $md .= "```ts\n" . trim($tsContent) . "\n```\n\n";
        } else {
            $md .= "No component script found.\n\n";
        }

        // --- Usage -----------------------------------------------------------
        $md .= "## Usage\n\n";
        $md .= "```html\n<script type=\"module\" src=\"/src/main.ts\"></script>\n```\n\n";
        $md .= "```html\n{$firstSection}\n```\n\n";

        // --- Examples --------------------------------------------------------
        $exampleSections = array_slice($sections, 1);

        if (!empty($exampleSections)) {
            $md .= "## Examples\n\n";

            foreach ($exampleSections as $index => $section) {
                $num  = $index + 1;
                $md  .= "### Example {$num}\n\n";
                $md  .= "```html\n{$section}\n```\n\n";
            }
        }

        return $md;
    }
}
