import * as fs from "fs";
import * as path from "path";

const SOURCE_DIR = "/Users/dwicompany/Desktop/Projects/midone-ui/packages/react/src/pages/vue";
const DEST_DIR = "/Users/dwicompany/Desktop/Projects/midone/packages/vue/src/docs/pages";

if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
}

if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((f: string) => f.endsWith(".tsx"));

let success = 0;
let failed = 0;

for (const file of files) {
    try {
        const sourcePath = path.join(SOURCE_DIR, file);
        const destPath = path.join(DEST_DIR, file.replace(".tsx", ".vue"));

        const tsx = fs.readFileSync(sourcePath, "utf-8");
        const vue = convert(tsx);

        fs.writeFileSync(destPath, vue, "utf-8");

        console.log(`✅ ${file} → ${path.basename(destPath)} (synced)`);
        success++;
    } catch (e: any) {
        console.error(`❌ ${file}: ${e.message}`);
        failed++;
    }
}

console.log(`\nDone: ${success} succeeded, ${failed} failed`);

// ─── MAIN CONVERTER ───────────────────────────────────────────

function convert(tsx: string): string {
    const mainIdx = tsx.indexOf("function Main");
    if (mainIdx === -1) throw new Error('No "function Main" found');

    // Extract imports from HEADER ONLY
    const header = tsx.slice(0, mainIdx);
    const imports = extractImports(header);

    // Extract body from return(...)
    const returnIdx = tsx.indexOf("return (", mainIdx);
    if (returnIdx === -1) throw new Error('No "return (" found');

    // Extract local variables defined between function Main() { and return (
    const funcBodyStart = tsx.indexOf("{", mainIdx);
    let localVarsBlock = tsx.slice(funcBodyStart + 1, returnIdx).trim();

    // Convert React useState to Vue ref: const [x, setX] = useState(val) → const x = ref(val)
    localVarsBlock = localVarsBlock.replace(
        /const\s+\[(\w+),\s*\w+\]\s*=\s*useState\(([^)]*)\)/g,
        "const $1 = ref($2)"
    );

    const localVars = localVarsBlock
        .split("\n")
        .filter(l => l.trim())
        .map(l => l.trim());

    const parenStart = tsx.indexOf("(", returnIdx + 6);
    const parenEnd = findMatchingParen(tsx, parenStart);
    if (parenEnd === -1) throw new Error("Could not find matching paren for return");

    let body = tsx.slice(parenStart + 1, parenEnd).trim();

    // Remove outermost fragment
    body = body.replace(/^\s*<>\s*\n?/, "").replace(/\s*<\/>\s*$/, "");

    // Convert Preview render-function blocks → named slots
    const extraScriptLines: string[] = [];
    let fullSfcScript: string | null = null;
    const fullSfcScriptRef = { value: null as string | null };
    body = convertPreviews(body, extraScriptLines, fullSfcScriptRef);
    fullSfcScript = fullSfcScriptRef.value;

    // Convert {`...`} → {{ `...` }} (text interpolation only, NOT prop values)
    // Also escape any {{ and }} inside the code string to prevent Vue from parsing
    // nested double-braces as interpolation.
    // Negative lookbehind (?<!=) prevents matching prop={`...`} patterns
    body = body.replace(/(?<!=)\{`([\s\S]*?)`\}/g, (_, content) => {
        const escaped = content
            .replace(/\{\{/g, "\\{\\{")
            .replace(/\}\}/g, "\\}\\}");
        return "{{ `" + escaped + "` }}";
    });

    // className= → class=
    body = body.replace(/className=/g, "class=");

    // JSX expression props → Vue binding syntax
    body = convertExpressionProps(body);

    // Remove any remaining <> and </> fragments
    body = body.replace(/<>\s*/g, "").replace(/\s*<\/>/g, "");

    // General JSX expression prop conversion: prop={expr} → :prop="expr"
    // This handles all remaining {}-based prop expressions in live markup
    body = convertAllJsxExpressionProps(body);

    // Build SFC
    let scriptBlock: string;

    if (fullSfcScript !== null) {
        // PreviewCode contained a full Vue SFC — use its <script> content directly
        // Only keep the docs component imports from the original file
        const docsImports = imports.filter(imp =>
            imp.includes('"@/components/docs"') || imp.includes("'@/components/docs'")
        );
        const sfcLines = [...docsImports, fullSfcScript];
        scriptBlock = `<script lang="ts" setup>\n${sfcLines.join("\n")}\n</script>\n\n`;
    } else {
        // Normal merge: imports + localVars from function body + extraScriptLines from code previews
        // If extraScriptLines has variable definitions, they are the authoritative version
        // from the code snippet, so skip localVars to avoid duplicating/orphaning multi-line blocks
        let mergedLocalVars = localVars.length > 0 ? [localVarsBlock] : [];
        if (extraScriptLines.length > 0 && mergedLocalVars.length > 0) {
            // If extraScriptLines defines any variables, drop localVars entirely
            const hasExtraVars = extraScriptLines.some(l => /(?:const|let|var)\s+\w+/.test(l));
            if (hasExtraVars) {
                mergedLocalVars = [];
            }
        }

        const allScriptLines = [...imports, ...mergedLocalVars, ...extraScriptLines];

        // Auto-detect Vue composition API usage and add import if needed
        const allScript = allScriptLines.join("\n");
        const vueApis = ["ref", "computed", "reactive", "watch", "watchEffect", "onMounted", "onUnmounted", "provide", "inject", "nextTick", "toRef", "toRefs"];
        const usedApis = vueApis.filter(api => new RegExp(`\\b${api}\\s*\\(`).test(allScript));
        const hasVueImport = allScript.includes("from \"vue\"") || allScript.includes("from 'vue'");
        if (usedApis.length > 0 && !hasVueImport) {
            allScriptLines.splice(imports.length, 0, `import { ${usedApis.join(", ")} } from "vue";`);
        }

        scriptBlock =
            allScriptLines.length > 0
                ? `<script lang="ts" setup>\n${allScriptLines.join("\n")}\n</script>\n\n`
                : "";
    }

    return `${scriptBlock}<template>\n${body}\n</template>\n`;
}

// ─── IMPORT EXTRACTION ────────────────────────────────────────

function extractImports(header: string): string[] {
    const imports: string[] = [];
    const regex = /import\s+[\s\S]*?from\s+["'][^"']+["']\s*;/g;
    let m;

    while ((m = regex.exec(header)) !== null) {
        let imp = m[0];
        // Skip React-specific imports
        if (imp.includes('"react"') || imp.includes("'react'")) continue;
        if (imp.includes('"@zag-js/react"')) continue;
        // Convert library paths
        imp = imp.replace(/lucide-react/g, "lucide-vue-next");
        imp = imp.replace(/@tanstack\/react-table/g, "@tanstack/vue-table");
        // Convert React-specific named imports
        imp = imp.replace(/useReactTable/g, "useVueTable");
        imp = imp.replace(/\bflexRender\b/g, "FlexRender");
        imports.push(imp);
    }

    return imports;
}

// ─── PREVIEW BLOCK CONVERSION ─────────────────────────────────

function convertPreviews(body: string, extraScriptLines: string[], fullSfcScriptRef: { value: string | null }): string {
    let result = "";
    let pos = 0;

    while (pos < body.length) {
        const idx = body.indexOf("<Preview", pos);
        if (idx === -1) {
            result += body.slice(pos);
            break;
        }

        // Check that the char after <Preview is valid (space, >, newline) — not PreviewCode
        const charAfterTag = body[idx + "<Preview".length];
        if (charAfterTag && charAfterTag !== " " && charAfterTag !== ">" && charAfterTag !== "\n") {
            // This is <PreviewCode or similar, not <Preview
            result += body.slice(pos, idx + "<Preview".length);
            pos = idx + "<Preview".length;
            continue;
        }

        result += body.slice(pos, idx);

        const tagEnd = body.indexOf(">", idx);
        if (tagEnd === -1) { result += body.slice(idx); break; }

        const openTag = body.slice(idx, tagEnd + 1);

        // Find matching </Preview> (not </PreviewCode>)
        const closeIdx = findClosingTag(body, tagEnd + 1, "Preview");
        if (closeIdx === -1) { result += body.slice(idx); break; }

        const inner = body.slice(tagEnd + 1, closeIdx);

        if (inner.includes("{() =>")) {
            const slots = extractSlots(inner);
            if (slots) {
                // Prioritize extracting Vue template from PreviewCode
                const codePreview = extractCodeAsPreview(slots.code);

                if (codePreview) {
                    result += `${openTag}\n`;
                    result += `      <template #preview>\n`;
                    result += `${codePreview.template}\n`;
                    result += `      </template>\n`;

                    // Add script lines to output
                    if (codePreview.isFullSfc && codePreview.scriptLines.length > 0) {
                        fullSfcScriptRef.value = codePreview.scriptLines.join("\n");
                    } else if (codePreview.scriptLines.length > 0) {
                        for (const line of codePreview.scriptLines) {
                            if (!extraScriptLines.includes(line)) {
                                extraScriptLines.push(line);
                            }
                        }
                    }
                } else {
                    // Fallback to converting React preview slot (old behavior)
                    let preview = convertPreviewJsx(slots.preview);
                    result += `${openTag}\n`;
                    result += `      <template #preview>\n`;
                    result += `${preview}\n`;
                    result += `      </template>\n`;
                }

                result += `      <template #code>\n`;
                result += `${slots.code}\n`;
                result += `      </template>\n`;
                result += `    </Preview>`;
            } else {
                result += openTag + inner + "</Preview>";
            }
        } else {
            result += openTag + inner + "</Preview>";
        }

        pos = closeIdx + "</Preview>".length;
    }

    return result;
}

function extractSlots(inner: string): { preview: string; code: string } | null {
    const previewLabelIdx = inner.indexOf("preview:");
    if (previewLabelIdx === -1) return null;

    const previewParen = inner.indexOf("(", previewLabelIdx + 8);
    if (previewParen === -1) return null;

    const previewEnd = findMatchingParen(inner, previewParen);
    if (previewEnd === -1) return null;

    let preview = inner.slice(previewParen + 1, previewEnd).trim();
    preview = preview.replace(/^\s*<>\s*\n?/, "").replace(/\s*<\/>\s*$/, "");

    const codeLabelIdx = inner.indexOf("code:", previewEnd);
    if (codeLabelIdx === -1) return null;

    const codeParen = inner.indexOf("(", codeLabelIdx + 5);
    if (codeParen === -1) return null;

    const codeEnd = findMatchingParen(inner, codeParen);
    if (codeEnd === -1) return null;

    const code = inner.slice(codeParen + 1, codeEnd).trim();

    return { preview, code };
}

// ─── EXTRACT CODE AS PREVIEW ─────────────────────────────────
// When preview has complex JSX, use the code from PreviewCode as preview.
// The code string already contains correct Vue template syntax.

function extractCodeAsPreview(codeSlot: string): { template: string; scriptLines: string[]; isFullSfc: boolean } | null {
    // codeSlot looks like: <PreviewCode>{`...vue code...`}</PreviewCode>
    // Extract content between backticks
    const backtickMatch = codeSlot.match(/\{`([\s\S]*?)`\}/);
    if (!backtickMatch) return null;

    let code = backtickMatch[1].trim()
        .replace(/\\`/g, "`")
        .replace(/\\\$\{/g, "${");

    // If code contains a full SFC (<script> + <template>), extract both parts
    const templateMatch = code.match(/<template>([\s\S]*?)<\/template>\s*$/);
    if (templateMatch && code.includes("<script")) {
        // Extract <script setup> content
        const scriptMatch = code.match(/<script[^>]*>([\s\S]*?)<\/script>/);
        const scriptContent = scriptMatch ? scriptMatch[1].trim() : "";
        return {
            template: templateMatch[1].trim(),
            scriptLines: scriptContent ? [scriptContent] : [],
            isFullSfc: true,
        };
    }

    // If code starts with JS (const, let, var, import, function, etc.) before template markup,
    // extract the JS part and template part separately
    const trimmed = code.trimStart();
    if (/^(?:const |let |var |import |function |\/\/)/.test(trimmed)) {
        const lines = code.split("\n");
        let templateStart = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trimStart().startsWith("<")) {
                templateStart = i;
                break;
            }
        }
        if (templateStart >= 0) {
            const scriptPart = lines.slice(0, templateStart).join("\n").trim();
            const templatePart = lines.slice(templateStart).join("\n").trim();
            return { template: templatePart, scriptLines: scriptPart ? [scriptPart] : [], isFullSfc: false };
        }
    }

    return { template: code, scriptLines: [], isFullSfc: false };
}

// ─── PREVIEW JSX CONVERSION ──────────────────────────────────
// Convert simple JSX patterns in preview content to Vue template syntax

function convertPreviewJsx(preview: string): string {
    let result = preview;

    // Convert Array.from({ length: N }).map((_, varName) => ( <Tag ...> )) 
    // → add v-for="varName in N" on the tag and remove the wrapping
    result = result.replace(
        /\{Array\.from\(\{\s*length:\s*(\d+)\s*\}\)\.map\(\(_,\s*(\w+)\)\s*=>\s*\(\s*/g,
        (_, count, varName) => `__VFOR_START__${varName}__${count}__`
    );
    // Also handle: {items.map((item) => ( or {items.map((item, index) => (
    result = result.replace(
        /\{(\w+)\.map\(\((\w+)(?:,\s*(\w+))?\)\s*=>\s*(?:\(\s*|\{\s*return\s*\(\s*)/g,
        (_, arr, item, idx) => idx
            ? `__VFOR_ITEMS_IDX_START__${item}__${idx}__${arr}__`
            : `__VFOR_ITEMS_START__${item}__${arr}__`
    );

    // Find the corresponding closing patterns and remove them
    result = result.replace(/\s*\)\)\}\}/g, "");
    result = result.replace(/\s*\)\)\}/g, "");
    result = result.replace(/\s*\)\s*;\s*\}\)\}/g, "");

    // Now apply v-for to the first tag after __VFOR_START__
    result = result.replace(
        /__VFOR_START__(\w+)__(\d+)__\s*<(\w+)/g,
        (_, varName, count, tag) => `<${tag} v-for="${varName} in ${count}"`
    );
    result = result.replace(
        /__VFOR_ITEMS_IDX_START__(\w+)__(\w+)__(\w+)__\s*<(\w+)/g,
        (_, item, idx, arr, tag) => `<${tag} v-for="(${item}, ${idx}) in ${arr}"`
    );
    result = result.replace(
        /__VFOR_ITEMS_START__(\w+)__(\w+)__\s*<(\w+)/g,
        (_, item, arr, tag) => `<${tag} v-for="${item} in ${arr}"`
    );

    // Convert {expr} text interpolation (not props) to {{ expr }}
    // Match { that appears after > (end of tag) as text content
    result = result.replace(/>\s*\{([^}`<]+)\}\s*</g, (match, expr) => {
        // Skip if it looks like a block or function
        if (expr.includes("=>") || expr.includes("return")) return match;
        return `>{{ ${expr.trim()} }}<`;
    });

    // Also handle {expr} at beginning of text content or between text
    result = result.replace(
        /(\s+)\{(\w[\w.+\-* ()]*)\}(\s*[\w<])/g,
        (_, before, expr, after) => {
            if (expr.includes("=>")) return _;
            return `${before}{{ ${expr} }}${after}`;
        }
    );

    return result;
}

// ─── JSX EXPRESSION PROPS ─────────────────────────────────────

function convertExpressionProps(body: string): string {
    let result = body;

    // prop={{ ... }} → :prop="{ ... }" (JSX object expression props)
    // Need to use brace matching for nested objects
    result = convertDoubleBraceProps(result);

    // prop={true|false} → :prop="true|false"
    result = result.replace(/(\s)(\w+)=\{(true|false)\}/g, '$1:$2="$3"');

    // defaultValue={[...]} → :default-value="[...]"
    result = result.replace(
        /defaultValue=\{(\[[^\}]*?\])\}/g,
        (_, val) => `:default-value="${val.replace(/"/g, "'")}"`
    );

    // items={[...]} → :items="[...]"
    result = result.replace(
        /items=\{(\[[\s\S]*?\])\}/g,
        (_, val) => `:items="${val.replace(/"/g, "'").replace(/\n\s*/g, " ")}"`
    );

    // htmlFor= → for=
    result = result.replace(/htmlFor=/g, "for=");

    return result;
}

// Convert prop={{ ... }} → :prop="{ ... }"
function convertDoubleBraceProps(body: string): string {
    const pattern = /(\w+)=\{\{/g;
    let result = "";
    let lastIdx = 0;
    let match;

    while ((match = pattern.exec(body)) !== null) {
        const propName = match[1];
        const doubleBraceStart = match.index + propName.length + 1; // position of first {
        // The second { is at doubleBraceStart + 1

        // Find matching }} by tracking brace depth starting from the inner {
        const innerBraceStart = doubleBraceStart + 1; // position of second {
        const innerBraceEnd = findMatchingBrace(body, innerBraceStart);
        if (innerBraceEnd === -1) continue;

        // The outer } should be right after inner }
        const outerBraceEnd = innerBraceEnd + 1;
        if (body[outerBraceEnd] !== "}") continue;

        // Extract the inner object content (including the inner braces)
        const innerContent = body.slice(innerBraceStart, innerBraceEnd + 1);

        // Convert double quotes to single quotes for Vue binding
        const vueContent = innerContent.replace(/"/g, "'");

        result += body.slice(lastIdx, match.index);
        result += `:${propName}="${vueContent}"`;
        lastIdx = outerBraceEnd + 1;

        // Reset regex lastIndex
        pattern.lastIndex = lastIdx;
    }

    result += body.slice(lastIdx);
    return result;
}

function findMatchingBrace(str: string, openPos: number): number {
    let depth = 1;
    let i = openPos + 1;
    let inTemplate = false;

    while (i < str.length && depth > 0) {
        const ch = str[i];

        if (inTemplate) {
            if (ch === "`") inTemplate = false;
            i++;
            continue;
        }

        if (ch === "`") {
            inTemplate = true;
            i++;
            continue;
        }

        if (ch === "{") depth++;
        if (ch === "}") {
            depth--;
            if (depth === 0) return i;
        }
        i++;
    }

    return -1;
}

// ─── GENERAL JSX EXPRESSION PROP CONVERSION ───────────────────
// Convert remaining prop={expr} patterns in live markup to Vue syntax
// This runs AFTER {`...`} has been converted to {{ `...` }},
// so we won't accidentally match template literal expressions.

function convertAllJsxExpressionProps(body: string): string {
    // Match propName={ where propName is a word character sequence
    // Skip patterns inside {{ `` }} blocks (already converted code strings)
    const pattern = /(\s)(\w+)=\{(?!\{)/g;
    let result = "";
    let lastIdx = 0;
    let match;

    while ((match = pattern.exec(body)) !== null) {
        const space = match[1];
        const propName = match[2];
        const braceStart = match.index + space.length + propName.length + 1; // position of {

        // Find the matching }
        const braceEnd = findMatchingBrace(body, braceStart);
        if (braceEnd === -1) continue;

        // Extract the expression inside { }
        const expr = body.slice(braceStart + 1, braceEnd).trim();

        result += body.slice(lastIdx, match.index);

        // Convert React event handlers to Vue
        const eventMap: Record<string, string> = {
            onClick: "@click",
            onChange: "@input",
            onInput: "@input",
            onOpenChange: "@open-change",
            onCheckedChange: "@checked-change",
            onValueChange: "@value-change",
            onSelect: "@select",
            onFocusChange: "@focus-change",
        };

        if (eventMap[propName]) {
            // Convert event handler: onClick={(e) => ...} → @click="..."
            // Try to extract a simple expression
            const simpleHandler = expr
                .replace(/^\(.*?\)\s*=>\s*/, "")
                .replace(/^\{\s*/, "")
                .replace(/\s*;\s*\}$/, "")
                .replace(/"/g, "'");
            result += `${space}${eventMap[propName]}="${simpleHandler}"`;
        } else {
            // Regular prop binding: prop={expr} → :prop="expr"
            const vueExpr = expr.replace(/"/g, "'");
            result += `${space}:${propName}="${vueExpr}"`;
        }

        lastIdx = braceEnd + 1;
        pattern.lastIndex = lastIdx;
    }

    result += body.slice(lastIdx);
    return result;
}

// ─── PAREN MATCHING ───────────────────────────────────────────
// Only track backticks (template literals) to avoid issues
// with apostrophes in text content like "you're"

function findMatchingParen(str: string, openPos: number): number {
    let depth = 1;
    let i = openPos + 1;
    let inTemplate = false;

    while (i < str.length && depth > 0) {
        const ch = str[i];

        if (inTemplate) {
            if (ch === "`") inTemplate = false;
            i++;
            continue;
        }

        if (ch === "`") {
            inTemplate = true;
            i++;
            continue;
        }

        if (ch === "(") depth++;
        if (ch === ")") {
            depth--;
            if (depth === 0) return i;
        }
        i++;
    }

    return -1;
}

// ─── TAG MATCHING ─────────────────────────────────────────────

function findClosingTag(str: string, startPos: number, tagName: string): number {
    let depth = 1;
    let i = startPos;
    const openPat = `<${tagName}`;
    const closePat = `</${tagName}>`;

    while (i < str.length && depth > 0) {
        const nextOpen = str.indexOf(openPat, i);
        const nextClose = str.indexOf(closePat, i);

        if (nextClose === -1) return -1;

        if (nextOpen !== -1 && nextOpen < nextClose) {
            const charAfter = str[nextOpen + openPat.length];
            if (charAfter === " " || charAfter === ">" || charAfter === "\n") {
                const gt = str.indexOf(">", nextOpen + openPat.length);
                if (gt !== -1 && str[gt - 1] === "/") {
                    i = gt + 1;
                } else {
                    depth++;
                    i = (gt !== -1 ? gt : nextOpen + openPat.length) + 1;
                }
            } else {
                i = nextOpen + openPat.length;
            }
        } else {
            depth--;
            if (depth === 0) return nextClose;
            i = nextClose + closePat.length;
        }
    }

    return -1;
}
