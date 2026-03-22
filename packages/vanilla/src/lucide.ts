import { icons } from "lucide";
import { cn } from "@midoneui/core/src/utils/cn";

export function initLucideIcons() {
  document.querySelectorAll<HTMLElement>("i.lucide").forEach((el) => {
    let iconName = el.getAttribute("data-icon") as string;
    // Map kebab-case to PascalCase for Lucide icons (e.g. alert-circle -> AlertCircle)
    const formattedIconName = iconName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") as keyof typeof icons;

    const icon = icons[formattedIconName] || icons[iconName as keyof typeof icons];

    if (icon) {
      // Handle different icon structures (direct array or { default: array })
      const children = Array.isArray(icon) ? icon : (icon as any).default;

      if (!Array.isArray(children)) {
        console.warn(`Lucide: Icon "${iconName}" children is not iterable`, children);
        return;
      }

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      // Set default Lucide attributes
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("width", "24");
      svg.setAttribute("height", "24");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("fill", "none");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("stroke-width", "1.5");
      svg.setAttribute("stroke-linecap", "round");
      svg.setAttribute("stroke-linejoin", "round");

      // Merge size-4 with existing classes on the <i> tag
      svg.className.baseVal = cn("size-4", el.className);

      // Copy custom data attributes from <i> to <svg>
      Array.from(el.attributes).forEach((attr) => {
        if (attr.name.startsWith("data-") && attr.name !== "data-icon") {
          svg.setAttribute(attr.name, attr.value);
        }
      });

      // Add icon paths
      children.forEach(([childTag, childAttrs]: any) => {
        const child = document.createElementNS(
          "http://www.w3.org/2000/svg",
          childTag
        );
        Object.entries(childAttrs).forEach(([key, value]: any) => {
          child.setAttribute(key, value);
        });
        svg.appendChild(child);
      });

      el.replaceWith(svg);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLucideIcons);
} else {
  initLucideIcons();
}
