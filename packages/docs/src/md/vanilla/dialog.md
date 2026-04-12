# Dialog

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="dialog-root">
  <button data-component="dialog-trigger">Open Dialog</button>
  <div data-component="dialog-content">
    <div data-component="dialog-title">Dialog Title</div>
    <div data-component="dialog-description">Make changes to your profile here. Click save when you're done.</div>
    <div class="grid gap-4 mt-2">
      <div class="grid gap-2.5">
        <label data-component="label" for="name-1">Name</label>
        <input data-component="input" id="name-1" name="name" value="Pedro Duarte" />
      </div>
      <div class="grid gap-2.5">
        <label data-component="label" for="username-1">Username</label>
        <input data-component="input" id="username-1" name="username" value="@peduarte" />
      </div>
    </div>
    <div class="flex gap-2 justify-end mt-7">
      <button data-component="dialog-close-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        Close
      </button>
      <button data-component="button" data-variant="primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
        Submit
      </button>
    </div>
    <button data-component="dialog-close-trigger"></button>
  </div>
</div>
```

## Dependency

No external dependencies.

## Component

### dialog.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    dialogTrigger,
    dialogBackdrop,
    dialogPositioner,
    dialogContent,
    dialogTitle,
    dialogDescription,
    dialogCloseTrigger,
} from "@midoneui/core/src/styles/dialog.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";
import { initField } from "./field";
import { initTextarea } from "./textarea";
import { initInputs } from "./input";
import { initButtons } from "./button";
import { initLucideIcons } from "./lucide";

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const CLOSE_DURATION = 400;

type DialogControls = { open: () => void; close: () => void };
const dialogRegistry = new Map<string, DialogControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.dialog = dialogRegistry;

function buildDialog(contentEl: HTMLElement) {
    const isAsChild = contentEl.hasAttribute("data-as-child");
    const content = handleAsChild(contentEl);

    if (!isAsChild) {
        content.className = cn(boxVariants({ raised: "double" }), dialogContent, content.className);

        // Internal structural div for non-as-child
        const innerDiv = document.createElement("div");
        while (content.firstChild) innerDiv.appendChild(content.firstChild);
        content.appendChild(innerDiv);

        innerDiv.querySelectorAll<HTMLElement>('[data-component="dialog-title"]').forEach(el => {
            const title = handleAsChild(el);
            title.className = cn(dialogTitle, title.className);
            title.setAttribute("data-scope", "dialog");
            title.setAttribute("data-part", "title");
        });
        innerDiv.querySelectorAll<HTMLElement>('[data-component="dialog-description"]').forEach(el => {
            const desc = handleAsChild(el);
            desc.className = cn(dialogDescription, desc.className);
            desc.setAttribute("data-scope", "dialog");
            desc.setAttribute("data-part", "description");
        });

        innerDiv.querySelectorAll<HTMLElement>('[data-component="dialog-close-trigger"]').forEach(btnEl => {
            const isAsChildTrigger = btnEl.hasAttribute("data-as-child");
            const btn = handleAsChild(btnEl);
            btn.setAttribute("data-scope", "dialog");
            btn.setAttribute("data-part", "close-trigger");

            if (!isAsChildTrigger) {
                if (btn.childElementCount === 0 && !btn.textContent?.trim()) {
                    btn.className = cn(buttonVariants({ variant: "ghost" }), dialogCloseTrigger, btn.className);
                    btn.innerHTML = X_SVG;
                } else {
                    const variant = (btn.getAttribute("data-variant") as any) ?? "secondary";
                    const look = (btn.getAttribute("data-look") as any) ?? "outline";
                    btn.className = cn(buttonVariants({ variant, look }), btn.className);
                }
            }
        });

        innerDiv.querySelectorAll<HTMLElement>('[data-component="dialog-close-trigger"]').forEach(btn => {
            btn.addEventListener("click", closeDialog);
        });
    } else {
        // Just apply basic parts if as-child
        content.setAttribute("data-scope", "dialog");
        content.setAttribute("data-part", "content");

        content.querySelectorAll<HTMLElement>('[data-component="dialog-close-trigger"]').forEach(btn => {
            btn.addEventListener("click", closeDialog);
        });
    }

    const backdropEl = document.createElement("div");
    backdropEl.className = cn(dialogBackdrop);
    backdropEl.setAttribute("data-scope", "dialog");
    backdropEl.setAttribute("data-part", "backdrop");

    const positionerEl = document.createElement("div");
    positionerEl.className = cn(dialogPositioner);
    positionerEl.setAttribute("data-scope", "dialog");
    positionerEl.setAttribute("data-part", "positioner");
    positionerEl.appendChild(content);

    // Re-initialize sub-components inside the dialog content
    initField(content);
    initTextarea(content);
    initInputs(content);
    initButtons(content);
    initLucideIcons(content);

    function openDialog() {
        document.body.appendChild(backdropEl);
        document.body.appendChild(positionerEl);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                backdropEl.setAttribute("data-state", "open");
                content.setAttribute("data-state", "open");
            });
        });
    }

    function closeDialog() {
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

    backdropEl.addEventListener("click", closeDialog);
    const keydownHandler = (e: KeyboardEvent) => {
        if (e.key === "Escape" && document.body.contains(backdropEl)) closeDialog();
    };
    document.addEventListener("keydown", keydownHandler);

    return { open: openDialog, close: closeDialog };
}

function initDialog() {
    document.querySelectorAll<HTMLElement>('[data-component="dialog-root"]').forEach(rootEl => {
        const root = handleAsChild(rootEl);
        const triggerEl = root.querySelector<HTMLElement>('[data-component="dialog-trigger"]');
        const contentEl = root.querySelector<HTMLElement>('[data-component="dialog-content"]');
        if (!contentEl) return;

        contentEl.remove();
        const controls = buildDialog(contentEl);

        if (triggerEl) {
            const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
            const trigger = handleAsChild(triggerEl);
            if (!isAsChildTrigger) {
                trigger.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), dialogTrigger, trigger.className);
            }
            trigger.setAttribute("data-scope", "dialog");
            trigger.setAttribute("data-part", "trigger");
            trigger.addEventListener("click", () => controls.open());
        }

        const id = root.id;
        if (id) dialogRegistry.set(id, controls);

        if (root.getAttribute("data-open") === "true") {
            controls.open();
        }
    });

    document.querySelectorAll<HTMLElement>("[data-dialog-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-dialog-target")!;
        const controls = dialogRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.open);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDialog);
} else {
    initDialog();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="dialog-root">
  <button data-component="dialog-trigger">Open Dialog</button>
  <div data-component="dialog-content">
    <div data-component="dialog-title">Dialog Title</div>
    <div data-component="dialog-description">Make changes to your profile here. Click save when you're done.</div>
    <div class="grid gap-4 mt-2">
      <div class="grid gap-2.5">
        <label data-component="label" for="name-1">Name</label>
        <input data-component="input" id="name-1" name="name" value="Pedro Duarte" />
      </div>
      <div class="grid gap-2.5">
        <label data-component="label" for="username-1">Username</label>
        <input data-component="input" id="username-1" name="username" value="@peduarte" />
      </div>
    </div>
    <div class="flex gap-2 justify-end mt-7">
      <button data-component="dialog-close-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
        Close
      </button>
      <button data-component="button" data-variant="primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
        Submit
      </button>
    </div>
    <button data-component="dialog-close-trigger"></button>
  </div>
</div>
```

## Examples

### Example 1

```html
<div data-component="dialog-root">
  <button data-component="dialog-trigger">Custom Close</button>
  <div data-component="dialog-content">
    <div data-component="dialog-title">Share Link</div>
    <div data-component="dialog-description">Anyone who has this link will be able to view this.</div>
    <div class="grid gap-4 mt-2">
      <input data-component="input" id="link-1" name="link" value="https://midone-ui.com/docs/installation" />
    </div>
    <div class="flex gap-2 mt-5">
      <button data-component="dialog-close-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        Share Link
      </button>
    </div>
  </div>
</div>
```

### Example 2

```html
<button data-component="button" data-variant="secondary" data-look="outline" data-dialog-target="dialog-programmatic">Programmatic Trigger</button>
<div data-component="dialog-root" id="dialog-programmatic">
  <div data-component="dialog-content">
    <div data-component="dialog-title">Share Link</div>
    <div data-component="dialog-description">Anyone who has this link will be able to view this.</div>
    <div class="grid gap-4 mt-2">
      <input data-component="input" id="link-2" name="link" value="https://midone-ui.com/docs/installation" />
    </div>
    <div class="flex gap-2 mt-5">
      <button data-component="dialog-close-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        Share Link
      </button>
    </div>
  </div>
</div>
```

