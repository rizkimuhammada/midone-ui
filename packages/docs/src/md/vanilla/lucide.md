# Lucide

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<i data-component="lucide" data-icon="Activity"></i>
<i data-component="lucide" data-icon="LayoutDashboard"></i>
<i data-component="lucide" data-icon="Users"></i>
<i data-component="lucide" data-icon="ShoppingBag"></i>
<i data-component="lucide" data-icon="Files"></i>
<i data-component="lucide" data-icon="Box"></i>
<i data-component="lucide" data-icon="Shield"></i>
<i data-component="lucide" data-icon="Bell"></i>
<i data-component="lucide" data-icon="ChevronRight"></i>
<i data-component="lucide" data-icon="Search"></i>
<i data-component="lucide" data-icon="Plus"></i>
<i data-component="lucide" data-icon="Share2"></i>
```

## Dependency

```bash
npm install lucide
```

## Component

### lucide.ts

```ts
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
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<i data-component="lucide" data-icon="Activity"></i>
<i data-component="lucide" data-icon="LayoutDashboard"></i>
<i data-component="lucide" data-icon="Users"></i>
<i data-component="lucide" data-icon="ShoppingBag"></i>
<i data-component="lucide" data-icon="Files"></i>
<i data-component="lucide" data-icon="Box"></i>
<i data-component="lucide" data-icon="Shield"></i>
<i data-component="lucide" data-icon="Bell"></i>
<i data-component="lucide" data-icon="ChevronRight"></i>
<i data-component="lucide" data-icon="Search"></i>
<i data-component="lucide" data-icon="Plus"></i>
<i data-component="lucide" data-icon="Share2"></i>
```

## Examples

### Example 1

```html
<i data-component="lucide" data-icon="Activity"></i>
<i data-component="lucide" data-icon="LayoutDashboard"></i>
<i data-component="lucide" data-icon="Users"></i>
<i data-component="lucide" data-icon="ShoppingBag"></i>
<i data-component="lucide" data-icon="Files"></i>
<i data-component="lucide" data-icon="Box"></i>
<i data-component="lucide" data-icon="Shield"></i>
<i data-component="lucide" data-icon="Bell"></i>
<i data-component="lucide" data-icon="ChevronRight"></i>
<i data-component="lucide" data-icon="Search"></i>
<i data-component="lucide" data-icon="Plus"></i>
<i data-component="lucide" data-icon="Share2"></i>
```

### Example 2

```html
<i data-lucide="activity"></i>
<i data-lucide="layout-dashboard"></i>
<i data-lucide="users"></i>
<i data-lucide="shopping-bag"></i>
<i data-lucide="files"></i>
<i data-lucide="box"></i>
<i data-lucide="shield"></i>
<i data-lucide="bell"></i>
<i data-lucide="chevron-right"></i>
<i data-lucide="search"></i>
<i data-lucide="plus"></i>
<i data-lucide="share-2"></i>
```

### Example 3

```html
<i data-component="lucide" data-icon="Activity" class="size-3"></i>
<i data-component="lucide" data-icon="Activity" class="size-4"></i>
<i data-component="lucide" data-icon="Activity" class="size-5"></i>
<i data-component="lucide" data-icon="Activity" class="size-6"></i>
<i data-component="lucide" data-icon="Activity" class="size-8"></i>
<i data-component="lucide" data-icon="Activity" class="size-10"></i>
```

### Example 4

```html
<i data-component="lucide" data-icon="Zap" class="size-6 text-primary"></i>
<i data-component="lucide" data-icon="Zap" class="size-6 text-danger"></i>
<i data-component="lucide" data-icon="Zap" class="size-6 text-success"></i>
<i data-component="lucide" data-icon="Zap" class="size-6 text-warning"></i>
<i data-component="lucide" data-icon="Zap" class="size-6 text-pending"></i>
<i data-component="lucide" data-icon="Zap" class="size-6 text-blue-500"></i>
<i data-component="lucide" data-icon="Zap" class="size-6 text-emerald-500"></i>
<i data-component="lucide" data-icon="Zap" class="size-6 text-amber-500"></i>
```

