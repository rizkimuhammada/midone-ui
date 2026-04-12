# Alert

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="alert-root" data-variant="primary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="secondary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="success">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="danger">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="pending">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="warning">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
```

## Dependency

No external dependencies.

## Component

### alert.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    alertRootVariants,
    alertTitle,
    alertDescription,
    alertCloseTrigger,
    alertIcon,
} from "@midoneui/core/src/styles/alert.styles";
import { handleAsChild } from "./slot";

function initAlerts() {
    // 1. Inisialisasi Root Alert
    document.querySelectorAll<HTMLElement>('[data-component="alert-root"]').forEach((alertEl) => {
        const alert = handleAsChild(alertEl);
        const variant =
            (alert.getAttribute("data-variant") as any) || "primary";
        const look = (alert.getAttribute("data-look") as any) || "flat";

        // Terapkan gaya root menggunakan cn untuk resolusi konflik
        alert.className = cn(
            alertRootVariants({ variant, look }),
            alert.className
        );
        alert.setAttribute("data-scope", "alert");
        alert.setAttribute("data-part", "root");

        // 2. Inisialisasi Title
        alert.querySelectorAll<HTMLElement>('[data-component="alert-title"]').forEach((titleEl) => {
            const title = handleAsChild(titleEl);
            title.className = cn(alertTitle, title.className);
            title.setAttribute("data-scope", "alert");
            title.setAttribute("data-part", "title");
        });

        // 3. Inisialisasi Description
        alert
            .querySelectorAll<HTMLElement>('[data-component="alert-description"]')
            .forEach((descEl) => {
                const desc = handleAsChild(descEl);
                desc.className = cn(
                    alertDescription,
                    desc.className
                );
                desc.setAttribute("data-scope", "alert");
                desc.setAttribute("data-part", "description");
            });

        // 4. Inisialisasi Icon - apply classes directly to the inner SVG element,
        //    matching Vue's behavior where Lucide icons can be direct children
        alert.querySelectorAll<HTMLElement>('[data-component="alert-icon"]').forEach((iconEl) => {
            const icon = handleAsChild(iconEl);
            const innerIcon = icon.firstElementChild;
            if (innerIcon) {
                innerIcon.setAttribute(
                    "class",
                    cn(alertIcon, innerIcon.getAttribute("class") ?? "")
                );
                innerIcon.setAttribute("data-scope", "alert");
                innerIcon.setAttribute("data-part", "icon");
                icon.replaceWith(innerIcon);
            }
        });

        // Handle direct Lucide icons (could be <i> before lucide.ts or <svg> after)
        alert.querySelectorAll<HTMLElement | SVGElement>('[data-component="lucide"]').forEach((iconEl) => {
            iconEl.setAttribute(
                "class",
                cn(iconEl.getAttribute("class") ?? "", alertIcon)
            );
            iconEl.setAttribute("data-scope", "alert");
            iconEl.setAttribute("data-part", "icon");
        });

        // 5. Inisialisasi Close Trigger
        alert
            .querySelectorAll<HTMLElement>('[data-component="alert-close-trigger"]')
            .forEach((triggerEl) => {
                const trigger = handleAsChild(triggerEl);
                trigger.className = cn(alertCloseTrigger, trigger.className);
                trigger.setAttribute("data-scope", "alert");
                trigger.setAttribute("data-part", "close-trigger");

                // Tambahkan SVG X icon jika kosong
                if (trigger.innerHTML.trim() === "") {
                    trigger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
                }

                // Logic untuk menghapus alert
                trigger.addEventListener("click", () => {
                    alert.classList.add(
                        "transition-opacity",
                        "duration-300",
                        "opacity-0"
                    );
                    setTimeout(() => {
                        alert.remove();
                    }, 300);
                });
            });
    });
}

// Inisialisasi saat DOM siap
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAlerts);
} else {
    initAlerts();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="alert-root" data-variant="primary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="secondary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="success">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="danger">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="pending">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="warning">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
```

## Examples

### Example 1

```html
<div data-component="alert-root" data-look="filled" data-variant="primary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-look="filled" data-variant="secondary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-look="filled" data-variant="success">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-look="filled" data-variant="danger">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-look="filled" data-variant="pending">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-look="filled" data-variant="warning">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <div data-component="alert-description">This is an alert with icon, title and description.</div>
  <button data-component="alert-close-trigger"></button>
</div>
```

### Example 2

```html
<div data-component="alert-root" data-variant="primary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="secondary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="success">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="danger">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="pending">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <button data-component="alert-close-trigger"></button>
</div>
<div data-component="alert-root" data-variant="warning">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
  <button data-component="alert-close-trigger"></button>
</div>
```

### Example 3

```html
<div data-component="alert-root" data-look="filled" data-variant="primary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
</div>
<div data-component="alert-root" data-look="filled" data-variant="secondary">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
</div>
<div data-component="alert-root" data-look="filled" data-variant="success">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
</div>
<div data-component="alert-root" data-look="filled" data-variant="danger">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
</div>
<div data-component="alert-root" data-look="filled" data-variant="pending">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
</div>
<div data-component="alert-root" data-look="filled" data-variant="warning">
  <div data-component="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  </div>
  <div data-component="alert-title">Success! Your changes have been saved</div>
</div>
```

### Example 4

```html
<div data-component="box" class=" p-0">
  <div data-component="alert-root" data-variant="ghost">
    <div data-component="alert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    </div>
    <div data-component="alert-title">Success! Your changes have been saved</div>
    <div data-component="alert-description">This is an alert with icon, title and description.</div>
    <button data-component="alert-close-trigger"></button>
  </div>
</div>
<div data-component="box" class=" p-0" data-raised="single">
  <div data-component="alert-root" data-variant="ghost">
    <div data-component="alert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    </div>
    <div data-component="alert-title">Success! Your changes have been saved</div>
    <div data-component="alert-description">This is an alert with icon, title and description.</div>
    <button data-component="alert-close-trigger"></button>
  </div>
</div>
<div data-component="box" class=" p-0" data-raised="double">
  <div data-component="alert-root" data-variant="ghost">
    <div data-component="alert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-compass"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
    </div>
    <div data-component="alert-title">Success! Your changes have been saved</div>
    <div data-component="alert-description">This is an alert with icon, title and description.</div>
    <button data-component="alert-close-trigger"></button>
  </div>
</div>
```

