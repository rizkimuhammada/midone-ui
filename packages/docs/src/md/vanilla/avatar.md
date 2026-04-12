# Avatar

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="avatar-root" data-fallback-text="PA" data-src="https://i.pravatar.cc/300"></div>
```

## Dependency

No external dependencies.

## Component

### avatar.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    avatarRootVariants,
    avatarFallback,
    avatarImage,
} from "@midoneui/core/src/styles/avatar.styles";
import { handleAsChild } from "./slot";

function initAvatars() {
    document.querySelectorAll<HTMLElement>('[data-component="avatar-root"]').forEach((rootEl) => {
        const root = handleAsChild(rootEl);
        const borderedAttr = root.getAttribute("data-bordered");
        const bordered = borderedAttr === "false" ? false : true;

        // Use cn to merge variants with user classes correctly
        root.className = cn(avatarRootVariants({ bordered }), root.className);
        root.setAttribute("data-scope", "avatar");
        root.setAttribute("data-part", "root");

        const src = root.getAttribute("data-src");
        const fallbackText = root.getAttribute("data-fallback-text");

        // Auto-render fallback and image if they don't exist
        if (!root.querySelector('[data-component="avatar-fallback"]') && fallbackText) {
            const fallbackEl = document.createElement("div");
            fallbackEl.setAttribute("data-component", "avatar-fallback");
            fallbackEl.textContent = fallbackText;
            root.appendChild(fallbackEl);
        }
        if (!root.querySelector('[data-component="avatar-image"]') && src) {
            const imageEl = document.createElement("img");
            imageEl.setAttribute("data-component", "avatar-image");
            imageEl.setAttribute("src", src);
            root.appendChild(imageEl);
        }

        // Apply fallback class
        root.querySelectorAll<HTMLElement>('[data-component="avatar-fallback"]').forEach((fallbackEl) => {
            const el = handleAsChild(fallbackEl);
            el.className = cn(avatarFallback, el.className);
            el.setAttribute("data-scope", "avatar");
            el.setAttribute("data-part", "fallback");
        });

        // Apply image class + show/hide logic (replicates zag-js avatar behavior)
        root.querySelectorAll<HTMLElement>('[data-component="avatar-image"]').forEach((imageEl) => {
            const el = handleAsChild(imageEl);
            const img = el as HTMLImageElement;
            img.className = cn(avatarImage, img.className);
            img.setAttribute("data-scope", "avatar");
            img.setAttribute("data-part", "image");

            const fallback = root.querySelector('[data-component="avatar-fallback"]') as HTMLElement | null;

            const showImage = () => {
                img.style.display = "";
                if (fallback) fallback.style.display = "none";
            };

            const hideImage = () => {
                img.style.display = "none";
                if (fallback) fallback.style.display = "";
            };

            // Start hidden until confirmed loaded
            hideImage();

            img.addEventListener("load", showImage);
            img.addEventListener("error", hideImage);

            // Handle already-cached images
            if (img.complete && img.naturalWidth > 0) {
                showImage();
            }
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAvatars);
} else {
    initAvatars();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="avatar-root" data-fallback-text="PA" data-src="https://i.pravatar.cc/300"></div>
```

## Examples

### Example 1

```html
<div data-component="avatar-root" data-bordered="false" data-fallback-text="PA" data-src="https://i.pravatar.cc/300"></div>
```

### Example 2

```html
<div data-component="avatar-root" class="rounded-full" data-fallback-text="PA" data-src="https://i.pravatar.cc/300"></div>
```

### Example 3

```html
<div data-component="avatar-root" class="rounded-full" data-bordered="false" data-fallback-text="PA" data-src="https://i.pravatar.cc/300"></div>
```

