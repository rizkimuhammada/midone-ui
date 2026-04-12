# File Icon

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="file-icon" data-variant="empty-directory" class="w-16"></div>
```

## Dependency

No external dependencies.

## Component

### file-icon.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
  fileIconRoot,
  fileIconIcon,
  fileIconLabel,
  fileIconImage,
  fileIconImg,
} from "@midoneui/core/src/styles/file-icon.styles";

export function initFileIcon() {
  document
    .querySelectorAll<HTMLElement>('[data-component="file-icon"]')
    .forEach((root) => {
      const variant = (root.getAttribute("data-variant") as any) || "file";
      const type = root.getAttribute("data-type") || "";
      const src = root.getAttribute("data-src") || "";

      root.className = cn(fileIconRoot, root.className);
      root.setAttribute("data-scope", "file-icon");
      root.setAttribute("data-part", "root");

      if (root.children.length === 0) {
        const iconEl = document.createElement("div");
        iconEl.className = cn(fileIconIcon({ variant }));
        iconEl.setAttribute("data-scope", "file-icon");
        iconEl.setAttribute("data-part", "icon");

        if (variant === "file") {
          const labelEl = document.createElement("div");
          labelEl.className = cn(fileIconLabel);
          labelEl.setAttribute("data-scope", "file-icon");
          labelEl.setAttribute("data-part", "label");
          labelEl.textContent = type;
          iconEl.appendChild(labelEl);
        } else if (variant === "image") {
          const imageWrapper = document.createElement("div");
          imageWrapper.className = cn(fileIconImage);
          imageWrapper.setAttribute("data-scope", "file-icon");
          imageWrapper.setAttribute("data-part", "image");

          const imgEl = document.createElement("img");
          imgEl.className = cn(fileIconImg);
          imgEl.src = src;
          imgEl.alt = variant;
          imgEl.setAttribute("data-scope", "file-icon");
          imgEl.setAttribute("data-part", "img");

          imageWrapper.appendChild(imgEl);
          iconEl.appendChild(imageWrapper);
        }

        root.appendChild(iconEl);
      }
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFileIcon);
} else {
  initFileIcon();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="file-icon" data-variant="empty-directory" class="w-16"></div>
```

## Examples

### Example 1

```html
<div data-component="file-icon" data-variant="empty-directory" class="w-16"></div>
```

### Example 2

```html
<div data-component="file-icon" data-variant="directory" class="w-16"></div>
```

### Example 3

```html
<div data-component="file-icon" data-variant="file" data-type="PDF" class="w-16"></div>
```

### Example 4

```html
<div data-component="file-icon" data-variant="file" data-type="TXT" class="w-16"></div>
```

