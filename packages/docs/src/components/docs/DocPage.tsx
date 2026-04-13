import { useContext } from "react";
import { Runner } from "react-runner";
import { FrameworkContext } from "../../App";
import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  ApiButton,
  InstallPackage,
  Preview,
  PreviewCode,
  SectionTitle,
} from "@/components/docs";
import scope from "./previewScope";

// ─── Markdown parser ──────────────────────────────────────────────────────────

interface ParsedMd {
  title: string;
  subtitle: string;
  links: { text: string; url: string }[];
  preview: string;
  dependency: string | null;
  component: string;
  componentFiles: Record<string, string>;
  usageImports: string;
  usageCode: string;
  examples: string[];
}

function extractFirstCodeBlock(body: string): string | null {
  const m = body.match(/```[^\n]*\n([\s\S]*?)```/);
  return m ? m[1] : null;
}

function extractAllCodeBlocks(body: string): string[] {
  const re = /```[^\n]*\n([\s\S]*?)```/g;
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    results.push(m[1]);
  }
  return results;
}

function parseMd(content: string): ParsedMd {
  const result: ParsedMd = {
    title: "",
    subtitle: "",
    links: [],
    preview: "",
    dependency: null,
    component: "",
    componentFiles: {},
    usageImports: "",
    usageCode: "",
    examples: [],
  };

  // Title
  const titleMatch = content.match(/^# (.+)$/m);
  if (titleMatch) result.title = titleMatch[1].trim();

  // Header block (before first ## section)
  const headerPart = content.split(/^## /m)[0];

  // Subtitle: first paragraph after the # title line that doesn't start with "["
  const afterTitle = headerPart.replace(/^# .+\n+/, "");
  for (const para of afterTitle
    .trim()
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)) {
    if (!para.startsWith("[")) {
      result.subtitle = para;
      break;
    }
  }

  // Links
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lm: RegExpExecArray | null;
  while ((lm = linkRe.exec(headerPart)) !== null) {
    result.links.push({ text: lm[1], url: lm[2] });
  }

  // Sections
  const rawSections = content.split(/^## /m);
  rawSections.shift();

  for (const section of rawSections) {
    const nl = section.indexOf("\n");
    const heading = nl !== -1 ? section.slice(0, nl).trim() : section.trim();
    const body = nl !== -1 ? section.slice(nl + 1) : "";

    switch (heading) {
      case "Preview": {
        const code = extractFirstCodeBlock(body);
        if (code !== null) result.preview = code.trim();
        break;
      }
      case "Dependency": {
        const code = extractFirstCodeBlock(body);
        if (code !== null) {
          const m = code.trim().match(/^npm install\s+(.+)$/m);
          if (m) result.dependency = "add " + m[1].trim();
        }
        break;
      }
      case "Component": {
        if (/^### /m.test(body)) {
          const subs = body.split(/^### /m);
          subs.shift();
          for (const sub of subs) {
            const snl = sub.indexOf("\n");
            const fname = snl !== -1 ? sub.slice(0, snl).trim() : sub.trim();
            const subBody = snl !== -1 ? sub.slice(snl + 1) : "";
            const code = extractFirstCodeBlock(subBody);
            if (code !== null) result.componentFiles[fname] = code.trim();
          }
        } else {
          const code = extractFirstCodeBlock(body);
          if (code !== null) result.component = code.trim();
        }
        break;
      }
      case "Usage": {
        const codes = extractAllCodeBlocks(body);
        if (codes.length >= 2) {
          result.usageImports = codes[0].trim();
          result.usageCode = codes[1].trim();
        } else if (codes.length === 1) {
          result.usageCode = codes[0].trim();
        }
        break;
      }
      case "Examples": {
        const exSections = body.split(/^### /m);
        exSections.shift();
        for (const ex of exSections) {
          const exNl = ex.indexOf("\n");
          const exBody = exNl !== -1 ? ex.slice(exNl + 1) : "";
          const code = extractFirstCodeBlock(exBody);
          if (code !== null) result.examples.push(code.trim());
        }
        break;
      }
    }
  }

  return result;
}

// ─── DocPage component ────────────────────────────────────────────────────────

// Wrap code string so Runner renders it — adds `render(<>...</>)` if not present
function wrapCode(code: string): string {
  const trimmed = code.trim();
  // Already has a render() call at the start of any line, or is a module export
  if (/^render\s*\(/m.test(trimmed) || trimmed.startsWith("export default")) {
    return trimmed;
  }
  return `render(<>${trimmed}</>)`;
}

function LivePreview({ code }: { code: string }) {
  return (
    <Runner
      code={wrapCode(code)}
      scope={scope}
      onRendered={(error) => {
        if (error) console.error("[LivePreview]", error.message);
      }}
    />
  );
}

interface DocPageProps {
  reactMd: string;
  vueMd?: string;
  vanillaMd?: string;
}

function DocPage({ reactMd, vueMd, vanillaMd }: DocPageProps) {
  const { framework } = useContext(FrameworkContext);
  const fw = framework[0];

  const reactData = parseMd(reactMd);
  const vueData = vueMd ? parseMd(vueMd) : null;
  const vanillaData = vanillaMd ? parseMd(vanillaMd) : null;

  const data =
    fw === "Vue" && vueData
      ? vueData
      : fw === "Vanilla" && vanillaData
        ? vanillaData
        : reactData;

  // Live preview always uses React; code tab shows the active framework's code

  const hasLinks = data.links.length > 0;
  const hasComponentFiles = Object.keys(data.componentFiles).length > 0;
  // Drive example count from React (source of truth for live render); code tab uses active framework
  const hasExamples = reactData.examples.length > 0;

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-14">
          {/* Header */}
          <div>
            <Title>{data.title}</Title>
            <Subtitle>{data.subtitle}</Subtitle>
            {hasLinks && (
              <div className="flex gap-3 mt-5">
                {data.links.map((link, i) => (
                  <ApiButton key={i} href={link.url} target="_blank">
                    {link.text}
                  </ApiButton>
                ))}
              </div>
            )}
          </div>

          {/* Preview */}
          <div id="preview" className="-mt-10">
            <Preview>
              {() => ({
                preview: <LivePreview code={reactData.preview} />,
                code: <PreviewCode>{data.preview}</PreviewCode>,
              })}
            </Preview>
          </div>

          {/* Installation */}
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            {data.dependency && (
              <InstallPackage>{data.dependency}</InstallPackage>
            )}
            {hasComponentFiles
              ? Object.entries(data.componentFiles).map(([fname, fcode]) => (
                <PreviewCode key={fname} title={fname}>
                  {fcode}
                </PreviewCode>
              ))
              : data.component && (
                <PreviewCode>{data.component}</PreviewCode>
              )}
          </div>

          {/* Usage */}
          <div id="usage">
            <SectionTitle>Usage</SectionTitle>
            {data.usageImports && (
              <PreviewCode>{data.usageImports}</PreviewCode>
            )}
            <PreviewCode>{data.usageCode}</PreviewCode>
          </div>

          {/* Examples */}
          {hasExamples && (
            <div id="examples">
              <SectionTitle>Examples</SectionTitle>
              {reactData.examples.map((reactCode, i) => (
                <Preview key={i}>
                  {() => ({
                    preview: <LivePreview code={reactCode} />,
                    code: <PreviewCode>{data.examples[i] ?? reactCode}</PreviewCode>,
                  })}
                </Preview>
              ))}
            </div>
          )}
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1.5" href="#preview">
          Preview
        </a>
        <a className="hover:text-foreground py-1.5" href="#installation">
          Installation
        </a>
        <a className="hover:text-foreground py-1.5" href="#usage">
          Usage
        </a>
        {hasExamples && (
          <a className="hover:text-foreground py-1.5" href="#examples">
            Examples
          </a>
        )}
      </Menu>
    </>
  );
}

export default DocPage;
