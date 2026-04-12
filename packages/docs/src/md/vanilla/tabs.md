# Tabs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="tabs-root" data-default-value="update-profile">
    <div data-component="tabs-list">
      <button data-component="tabs-trigger" data-value="update-profile">Update Profile</button>
      <button data-component="tabs-trigger" data-value="share-profile">Share Profile</button>
    </div>
    <div data-component="box" class="w-90" data-raised="single">
      <div data-component="tabs-content" data-value="update-profile">
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
          <button data-component="button" data-look="outline" data-variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
            Close
          </button>
          <button data-component="button" data-variant="primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
            Submit
          </button>
        </div>
      </div>
      <div data-component="tabs-content" data-value="share-profile">
        <div class="grid gap-4 mt-2">
          <input data-component="input" id="share-url" name="name" value="https://midone-ui.com/docs/installation" />
        </div>
        <div class="flex gap-2 mt-5">
          <button data-component="button" data-look="outline" data-variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            Share Link
          </button>
        </div>
      </div>
    </div>
  </div>
```

## Dependency

No external dependencies.

## Component

### tabs.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    tabsRoot,
    tabsList,
    tabsIndicator,
    tabsTrigger,
    tabsContent,
} from "@midoneui/core/src/styles/tabs.styles";
import { handleAsChild } from "./slot";

type TabsControls = { activate: (value: string) => void };
const tabsRegistry = new Map<string, TabsControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.tabs = tabsRegistry;

function initTabsRoot(rootEl: HTMLElement) {
    const root = handleAsChild(rootEl);
    const defaultValue = root.getAttribute("data-default-value") ?? "";

    root.className = cn(tabsRoot, root.className);
    root.setAttribute("data-scope", "tabs");
    root.setAttribute("data-part", "root");

    const listEl = root.querySelector<HTMLElement>('[data-component="tabs-list"]');
    const allTriggers = Array.from(root.querySelectorAll<HTMLElement>('[data-component="tabs-trigger"]'));
    const allContents = Array.from(root.querySelectorAll<HTMLElement>('[data-component="tabs-content"]'));
    
    const triggers = allTriggers.filter(el => el.closest('[data-component="tabs-root"]') === root);
    const contents = allContents.filter(el => el.closest('[data-component="tabs-root"]') === root);

    contents.forEach(contentEl => {
        const content = handleAsChild(contentEl);
        content.className = cn(tabsContent, content.className);
        content.setAttribute("data-scope", "tabs");
        content.setAttribute("data-part", "content");
    });

    if (!listEl) return;
    const list = handleAsChild(listEl);

    list.className = cn(tabsList, "flex", list.className);
    list.setAttribute("data-scope", "tabs");
    list.setAttribute("data-part", "list");

    triggers.forEach(triggerEl => {
        const trigger = handleAsChild(triggerEl);
        trigger.className = cn(tabsTrigger, trigger.className);
        trigger.setAttribute("data-scope", "tabs");
        trigger.setAttribute("data-part", "trigger");
        trigger.addEventListener("click", () => activate(trigger.dataset.value ?? ""));
    });

    const indicator = document.createElement("div");
    indicator.className = cn(tabsIndicator);
    indicator.setAttribute("data-scope", "tabs");
    indicator.setAttribute("data-part", "indicator");
    indicator.style.transition = "left 0.2s ease, width 0.2s ease, top 0.2s ease, height 0.2s ease";
    list.appendChild(indicator);

    function updateIndicator(activeTrigger: HTMLElement) {
        if (!activeTrigger || activeTrigger.offsetWidth === 0) return;
        indicator.style.setProperty("--height", `${activeTrigger.offsetHeight}px`);
        indicator.style.setProperty("--width", `${activeTrigger.offsetWidth}px`);
        indicator.style.setProperty("--left", `${activeTrigger.offsetLeft}px`);
        indicator.style.setProperty("--top", `${activeTrigger.offsetTop}px`);
    }

    function activate(value: string) {
        triggers.forEach(t => {
            if (t.dataset.value === value) {
                t.setAttribute("data-selected", "");
                updateIndicator(t);
            } else {
                t.removeAttribute("data-selected");
            }
        });
        contents.forEach(c => {
            if (c.dataset.value === value) c.removeAttribute("hidden");
            else c.setAttribute("hidden", "");
        });
    }

    const observer = new ResizeObserver(() => {
        const activeTrigger = triggers.find(t => t.hasAttribute("data-selected"));
        if (activeTrigger) updateIndicator(activeTrigger);
    });
    observer.observe(root);

    requestAnimationFrame(() => {
        activate(defaultValue || triggers[0]?.dataset.value || "");
    });

    const id = root.id;
    if (id) {
        tabsRegistry.set(id, { activate });
    }
}

function initTabs() {
    document.querySelectorAll<HTMLElement>('[data-component="tabs-root"]').forEach(root => initTabsRoot(root));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
} else {
    initTabs();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="tabs-root" data-default-value="update-profile">
    <div data-component="tabs-list">
      <button data-component="tabs-trigger" data-value="update-profile">Update Profile</button>
      <button data-component="tabs-trigger" data-value="share-profile">Share Profile</button>
    </div>
    <div data-component="box" class="w-90" data-raised="single">
      <div data-component="tabs-content" data-value="update-profile">
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
          <button data-component="button" data-look="outline" data-variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
            Close
          </button>
          <button data-component="button" data-variant="primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
            Submit
          </button>
        </div>
      </div>
      <div data-component="tabs-content" data-value="share-profile">
        <div class="grid gap-4 mt-2">
          <input data-component="input" id="share-url" name="name" value="https://midone-ui.com/docs/installation" />
        </div>
        <div class="flex gap-2 mt-5">
          <button data-component="button" data-look="outline" data-variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            Share Link
          </button>
        </div>
      </div>
    </div>
  </div>
```

## Examples

### Example 1

```html
<div data-component="tabs-root" data-default-value="update-profile">
    <div data-component="tabs-list">
      <button data-component="tabs-trigger" data-value="update-profile">Update Profile</button>
      <button data-component="tabs-trigger" data-value="share-profile">Share Profile</button>
    </div>
    <div data-component="box" class="w-90" data-raised="single">
      <div data-component="tabs-content" data-value="update-profile">
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
          <button data-component="button" data-look="outline" data-variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
            Close
          </button>
          <button data-component="button" data-variant="primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>
            Submit
          </button>
        </div>
      </div>
      <div data-component="tabs-content" data-value="share-profile">
        <div class="grid gap-4 mt-2">
          <input data-component="input" id="share-url" name="name" value="https://midone-ui.com/docs/installation" />
        </div>
        <div class="flex gap-2 mt-5">
          <button data-component="button" data-look="outline" data-variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            Share Link
          </button>
        </div>
      </div>
    </div>
  </div>
```

