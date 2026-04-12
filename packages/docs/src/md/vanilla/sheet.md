# Sheet

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div class="text-sm text-muted-foreground">
  <div data-component="sheet-root">
    <button data-component="sheet-trigger">Open Sheet</button>
    <div data-component="sheet-content">
      <div data-component="sheet-title">Sheet Title</div>
      <div data-component="sheet-description">Make changes to your profile here. Click save when you're done.</div>
      <div class="grid gap-4 mt-2">
        <div class="grid gap-2.5">
          <label data-component="label" for="sheet-name-1">Name</label>
          <input data-component="input" id="sheet-name-1" name="name" value="Pedro Duarte" />
        </div>
        <div class="grid gap-2.5">
          <label data-component="label" for="sheet-username-1">Username</label>
          <input data-component="input" id="sheet-username-1" name="username" value="@peduarte" />
        </div>
      </div>
      <div class="flex gap-2 justify-end mt-7">
        <button data-component="sheet-close-trigger">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
          Close
        </button>
        <button data-component="button" data-variant="primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
          Submit
        </button>
      </div>
      <button data-component="sheet-close-trigger"></button>
    </div>
  </div>
</div>
```

## Dependency

No external dependencies.

## Component

### sheet.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    sheetTrigger,
    sheetBackdrop,
    sheetPositioner,
    sheetContent,
    sheetTitle,
    sheetDescription,
    sheetCloseTrigger,
} from "@midoneui/core/src/styles/sheet.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const CLOSE_DURATION = 400;

type SheetControls = { open: () => void; close: () => void };
const sheetRegistry = new Map<string, SheetControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.sheet = sheetRegistry;

function buildSheet(contentEl: HTMLElement) {
    const isAsChild = contentEl.hasAttribute("data-as-child");
    const content = handleAsChild(contentEl);
    const side = (content.getAttribute("data-side") ?? "right") as string;

    if (!isAsChild) {
        content.className = cn(boxVariants({ raised: "double" }), sheetContent, content.className);
        content.setAttribute("data-scope", "sheet");
        content.setAttribute("data-part", "content");
        content.setAttribute("data-side", side);
        
        // Wrap user children in inner div
        const innerDiv = document.createElement("div");
        while (content.firstChild) innerDiv.appendChild(content.firstChild);
        content.appendChild(innerDiv);

        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-title"]').forEach(el => {
            const title = handleAsChild(el);
            title.className = cn(sheetTitle, title.className);
            title.setAttribute("data-scope", "sheet");
            title.setAttribute("data-part", "title");
        });
        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-description"]').forEach(el => {
            const desc = handleAsChild(el);
            desc.className = cn(sheetDescription, desc.className);
            desc.setAttribute("data-scope", "sheet");
            desc.setAttribute("data-part", "description");
        });

        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btnEl => {
            const isAsChildTrigger = btnEl.hasAttribute("data-as-child");
            const btn = handleAsChild(btnEl);
            btn.setAttribute("data-scope", "sheet");
            btn.setAttribute("data-part", "close-trigger");
            if (!isAsChildTrigger) {
                if (btn.childElementCount === 0 && !btn.textContent?.trim()) {
                    btn.className = cn(buttonVariants({ variant: "ghost" }), sheetCloseTrigger, btn.className);
                    btn.innerHTML = X_SVG;
                } else {
                    const variant = (btn.getAttribute("data-variant") as any) ?? "secondary";
                    const look = (btn.getAttribute("data-look") as any) ?? "outline";
                    btn.className = cn(buttonVariants({ variant, look }), btn.className);
                }
            }
        });

        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btn => {
            btn.addEventListener("click", closeSheet);
        });
    } else {
        content.setAttribute("data-scope", "sheet");
        content.setAttribute("data-part", "content");
        content.setAttribute("data-side", side);
        
        content.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btn => {
            btn.addEventListener("click", closeSheet);
        });
    }

    const backdropEl = document.createElement("div");
    backdropEl.className = cn(sheetBackdrop);
    backdropEl.setAttribute("data-scope", "sheet");
    backdropEl.setAttribute("data-part", "backdrop");

    const positionerEl = document.createElement("div");
    positionerEl.className = cn(sheetPositioner);
    positionerEl.setAttribute("data-scope", "sheet");
    positionerEl.setAttribute("data-part", "positioner");
    positionerEl.appendChild(content);

    function openSheet() {
        document.body.appendChild(backdropEl);
        document.body.appendChild(positionerEl);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                backdropEl.setAttribute("data-state", "open");
                content.setAttribute("data-state", "open");
            });
        });
    }

    function closeSheet() {
        backdropEl.setAttribute("data-state", "closed");
        content.setAttribute("data-state", "closed");

        backdropEl.addEventListener("animationend", () => {
            backdropEl.remove();
        }, { once: true });

        content.addEventListener("animationend", () => {
            positionerEl.remove();
        }, { once: true });

        setTimeout(() => {
            backdropEl.remove();
            positionerEl.remove();
        }, CLOSE_DURATION + 100);
    }

    backdropEl.addEventListener("click", closeSheet);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && document.body.contains(backdropEl)) closeSheet();
    });

    return { open: openSheet, close: closeSheet };
}

function initSheet() {
    document.querySelectorAll<HTMLElement>('[data-component="sheet-root"]').forEach(rootEl => {
        const root = handleAsChild(rootEl);
        const triggerEl = root.querySelector<HTMLElement>('[data-component="sheet-trigger"]');
        const contentEl = root.querySelector<HTMLElement>('[data-component="sheet-content"]');
        if (!contentEl) return;

        contentEl.remove();
        const controls = buildSheet(contentEl);

        if (triggerEl) {
            const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
            const trigger = handleAsChild(triggerEl);
            if (!isAsChildTrigger) {
                trigger.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), sheetTrigger, trigger.className);
            }
            trigger.setAttribute("data-scope", "sheet");
            trigger.setAttribute("data-part", "trigger");
            trigger.addEventListener("click", () => controls.open());
        }

        const id = root.id;
        if (id) sheetRegistry.set(id, controls);

        if (root.getAttribute("data-open") === "true") {
            controls.open();
        }
    });

    document.querySelectorAll<HTMLElement>("[data-sheet-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-sheet-target")!;
        const controls = sheetRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.open);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSheet);
} else {
    initSheet();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div class="text-sm text-muted-foreground">
  <div data-component="sheet-root">
    <button data-component="sheet-trigger">Open Sheet</button>
    <div data-component="sheet-content">
      <div data-component="sheet-title">Sheet Title</div>
      <div data-component="sheet-description">Make changes to your profile here. Click save when you're done.</div>
      <div class="grid gap-4 mt-2">
        <div class="grid gap-2.5">
          <label data-component="label" for="sheet-name-1">Name</label>
          <input data-component="input" id="sheet-name-1" name="name" value="Pedro Duarte" />
        </div>
        <div class="grid gap-2.5">
          <label data-component="label" for="sheet-username-1">Username</label>
          <input data-component="input" id="sheet-username-1" name="username" value="@peduarte" />
        </div>
      </div>
      <div class="flex gap-2 justify-end mt-7">
        <button data-component="sheet-close-trigger">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
          Close
        </button>
        <button data-component="button" data-variant="primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
          Submit
        </button>
      </div>
      <button data-component="sheet-close-trigger"></button>
    </div>
  </div>
</div>
```

## Examples

### Example 1

```html
<div class="text-sm text-muted-foreground">
  <div data-component="sheet-root">
    <button data-component="sheet-trigger">Custom Close</button>
    <div data-component="sheet-content">
      <div data-component="sheet-title">Share Link</div>
      <div data-component="sheet-description">Anyone who has this link will be able to view this.</div>
      <div class="grid gap-4 mt-2">
        <input data-component="input" id="sheet-link-1" name="link" value="https://midone-ui.com/docs/installation" />
      </div>
      <div class="flex gap-2 mt-5">
        <button data-component="sheet-close-trigger">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          Share Link
        </button>
      </div>
    </div>
  </div>
</div>
```

