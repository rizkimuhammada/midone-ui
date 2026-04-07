import { icons } from "lucide";
import { cn } from "@midoneui/core/src/utils/cn";

function toIconKey(name: string): keyof typeof icons {
  // Convert either "kebab-case" or "PascalCase" → PascalCase key
  if (name.includes("-")) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") as keyof typeof icons;
  }
  return (name.charAt(0).toUpperCase() + name.slice(1)) as keyof typeof icons;
}

function createSvg(iconName: string, extraClasses: string): SVGElement | null {
  const key = toIconKey(iconName);
  const icon = icons[key];
  if (!icon) return null;

  const children = Array.isArray(icon) ? icon : (icon as any).default;
  if (!Array.isArray(children)) return null;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  const iconSlug = iconName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/\s+/g, "-");
  svg.className.baseVal = cn(
    "lucide size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25",
    `lucide-${iconSlug}`,
    `lucide-${iconSlug}-icon`,
    extraClasses
  );

  children.forEach(([childTag, childAttrs]: any) => {
    const child = document.createElementNS("http://www.w3.org/2000/svg", childTag);
    Object.entries(childAttrs).forEach(([key, value]: any) => {
      child.setAttribute(key, value);
    });
    svg.appendChild(child);
  });

  return svg;
}

export function initLucideIcons(root: ParentNode = document) {
  // data-component="lucide" data-icon="PascalCase"
  root.querySelectorAll<HTMLElement>('[data-component="lucide"]').forEach((el) => {
    const iconName = el.getAttribute("data-icon");
    if (!iconName) return;

    const svg = createSvg(iconName, el.className);
    if (!svg) return;

    Array.from(el.attributes).forEach((attr) => {
      if (attr.name.startsWith("data-") && attr.name !== "data-icon" && attr.name !== "data-component") {
        svg.setAttribute(attr.name, attr.value);
      }
    });

    el.replaceWith(svg);
  });

  // data-lucide="kebab-case" (standard Lucide CDN format)
  root.querySelectorAll<HTMLElement>("[data-lucide]").forEach((el) => {
    const iconName = el.getAttribute("data-lucide");
    if (!iconName) return;

    const svg = createSvg(iconName, el.className);
    if (!svg) return;

    Array.from(el.attributes).forEach((attr) => {
      if (attr.name !== "data-lucide" && attr.name !== "class") {
        svg.setAttribute(attr.name, attr.value);
      }
    });

    el.replaceWith(svg);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initLucideIcons());
} else {
  initLucideIcons();
}
