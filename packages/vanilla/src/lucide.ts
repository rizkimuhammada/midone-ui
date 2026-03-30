import { icons } from "lucide";
import { cn } from "@midoneui/core/src/utils/cn";

export function initLucideIcons(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-component="lucide"]').forEach((el) => {
    let iconName = el.getAttribute("data-icon");
    if (!iconName) return;

    const formattedIconName = iconName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("") as keyof typeof icons;

    const icon = icons[formattedIconName] || icons[iconName as keyof typeof icons];

    if (icon) {
      const children = Array.isArray(icon) ? icon : (icon as any).default;

      if (!Array.isArray(children)) return;

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

      // Match Vue icon naming: lucide-chevron-left-icon + lucide-chevron-left
      const iconSlug = iconName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      const iconBaseClass = `lucide-${iconSlug}`;
      const iconSuffixClass = `lucide-${iconSlug}-icon`;
      
      // Also apply size-4 stroke-[1.5] TWICE like in the user's snippet if possible?
      // No, let's keep it clean but including both.
      svg.className.baseVal = cn(
        "lucide size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25",
        iconSuffixClass,
        iconBaseClass,
        el.className
      );

      Array.from(el.attributes).forEach((attr) => {
        if (attr.name.startsWith("data-") && attr.name !== "data-icon") {
          svg.setAttribute(attr.name, attr.value);
        }
      });

      children.forEach(([childTag, childAttrs]: any) => {
        const child = document.createElementNS("http://www.w3.org/2000/svg", childTag);
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
  document.addEventListener("DOMContentLoaded", () => initLucideIcons());
} else {
  initLucideIcons();
}
