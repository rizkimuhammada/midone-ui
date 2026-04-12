# Menu

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-item" data-value="react"><i data-lucide="activity" class="size-4"></i> React</div>
    <div data-component="menu-item" data-value="solid"><i data-lucide="layout" class="size-4"></i> Solid</div>
    <div data-component="menu-item" data-value="vue"><i data-lucide="zap" class="size-4"></i> Vue</div>
    <div data-component="menu-item" data-value="svelte"><i data-lucide="map-pin" class="size-4"></i> Svelte</div>
  </div>
</div>
```

## Dependency

```bash
npm install @floating-ui/dom
```

## Component

### menu.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    menuRoot,
    menuTrigger,
    menuIndicator,
    menuPositioner,
    menuContent,
    menuItem,
    menuSeparator,
    menuItemGroupLabel,
    menuRadioItemGroup,
} from "@midoneui/core/src/styles/menu.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";
import { handleAsChild } from "./slot";
import { initLucideIcons } from "./lucide";

const CHEVRON_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
const CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const DOT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12.1" cy="12.1" r="1"/></svg>`;

const menuIndicatorMap = new WeakMap<Element, Element>();

type MenuControls = { open: () => void; close: () => void; toggle: () => void };
const menuRegistry = new Map<string, MenuControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.menu = menuRegistry;

function parseSvg(html: string): Element {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.firstElementChild!;
}

function processItem(itemEl: HTMLElement) {
    const isAsChild = itemEl.hasAttribute("data-as-child");
    const isTriggerItem = itemEl.matches('[data-component="menu-trigger-item"]');
    const isCheckboxItem = itemEl.matches('[data-component="menu-checkbox-item"]');
    const isRadioItem = itemEl.matches('[data-component="menu-radio-item"]');

    const item = handleAsChild(itemEl);
    let type = item.dataset.type as "checkbox" | "radio" | undefined;
    if (!type) {
        if (isCheckboxItem) type = "checkbox";
        if (isRadioItem) type = "radio";
    }
    const shortcut = item.getAttribute("data-shortcut");

    item.className = cn(menuItem, item.className);
    item.setAttribute("data-scope", "menu");
    item.setAttribute("data-part", "item");

    if (!isAsChild) {
        const nestedPos = item.querySelector<HTMLElement>('[data-component="menu-positioner-nested"]');
        if (nestedPos) item.removeChild(nestedPos);

        if (type) {
            const indicator = document.createElement("span");
            indicator.setAttribute("data-part", "item-indicator");
            indicator.hidden = !item.hasAttribute("data-checked");
            indicator.innerHTML = type === "checkbox" ? CHECK : DOT;
            item.insertBefore(indicator, item.firstChild);
        }

        const contentDiv = document.createElement("div");
        while (item.firstChild) contentDiv.appendChild(item.firstChild);
        item.appendChild(contentDiv);

        if (isTriggerItem) {
            const chevron = parseSvg(CHEVRON_RIGHT);
            chevron.setAttribute("data-part", "nested-menu-chevron");
            item.appendChild(chevron);
        } else {
            const shortcutDiv = document.createElement("div");
            if (shortcut) shortcutDiv.textContent = shortcut;
            item.appendChild(shortcutDiv);
        }

        if (nestedPos) item.appendChild(nestedPos);
    }
}

function processContent(elEl: HTMLElement): HTMLElement {
    const isAsChild = elEl.hasAttribute("data-as-child");
    const el = handleAsChild(elEl);

    el.className = cn(menuContent, el.className);
    el.setAttribute("data-scope", "menu");
    el.setAttribute("data-part", "content");

    if (!isAsChild) {
        el.className = cn(boxVariants({ raised: "single" }), el.className);
        Array.from(el.classList).filter(c => /^p-\d/.test(c)).forEach(c => el.classList.remove(c));
        el.classList.add("p-0");

        const innerDiv = document.createElement("div");
        while (el.firstChild) innerDiv.appendChild(el.firstChild);
        el.appendChild(innerDiv);
        return innerDiv;
    }

    return el;
}

function openMenu(positioner: Element, indicator: Element | null) {
    positioner.classList.remove("hidden");
    indicator?.setAttribute("data-state", "open");
}

function closeMenu(positioner: Element, indicator: Element | null) {
    positioner.classList.add("hidden");
    indicator?.removeAttribute("data-state");
}

function initMenuRoot(rootEl: Element) {
    const root = handleAsChild(rootEl as HTMLElement);
    root.className = cn(menuRoot, root.className);
    root.setAttribute("data-scope", "menu");
    root.setAttribute("data-part", "root");

    const triggerEl = root.querySelector<HTMLElement>('[data-component="menu-trigger"]');
    let positionerEl = root.querySelector<HTMLElement>('[data-component="menu-positioner"]');
    const contentEl = root.querySelector<HTMLElement>('[data-component="menu-content"]');

    if (!triggerEl || (!positionerEl && !contentEl)) return;

    if (!positionerEl && contentEl) {
        positionerEl = document.createElement("div");
        positionerEl.setAttribute("data-component", "menu-positioner");
        contentEl.parentNode?.insertBefore(positionerEl, contentEl);
        positionerEl.appendChild(contentEl);
    }

    if (!positionerEl) return;

    const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
    const trigger = handleAsChild(triggerEl);

    if (!isAsChildTrigger) {
        trigger.className = cn(buttonVariants({ variant: "ghost", size: "default", look: "flat" }), menuTrigger, trigger.className);
        const indicatorSpan = document.createElement("span");
        indicatorSpan.className = cn(menuIndicator);
        indicatorSpan.setAttribute("data-scope", "menu");
        indicatorSpan.setAttribute("data-part", "indicator");
        indicatorSpan.innerHTML = CHEVRON_DOWN;
        trigger.appendChild(indicatorSpan);
    }

    trigger.setAttribute("data-scope", "menu");
    trigger.setAttribute("data-part", "trigger");

    const positioner = handleAsChild(positionerEl);
    positioner.className = cn(menuPositioner, positioner.className);
    positioner.setAttribute("data-scope", "menu");
    positioner.setAttribute("data-part", "positioner");
    positioner.classList.add("hidden");
    positioner.style.cssText = "position:fixed;z-index:50;";
    positioner.remove();
    document.body.appendChild(positioner);
    initLucideIcons(positioner);

    function updatePosition() {
        computePosition(trigger, positioner, {
            placement: "bottom-start",
            middleware: [offset(8), flip(), shift({ padding: 8 })],
        }).then(({ x, y }) => {
            positioner.style.left = `${x}px`;
            positioner.style.top = `${y}px`;
        });
    }

    if (!contentEl) return;
    const innerContainer = processContent(contentEl);

    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-item"], [data-component="menu-checkbox-item"], [data-component="menu-radio-item"]').forEach(itemEl => {
        if (!itemEl.closest('[data-component="menu-radio-group"]')) processItem(itemEl);
    });
    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-separator"]').forEach(sepEl => {
        const sep = handleAsChild(sepEl);
        sep.className = cn(menuSeparator, sep.className);
        sep.setAttribute("data-scope", "menu");
        sep.setAttribute("data-part", "separator");
    });
    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-radio-group"]').forEach(groupEl => {
        const group = handleAsChild(groupEl);
        group.className = cn(menuRadioItemGroup, group.className);
        group.setAttribute("data-scope", "menu");
        group.setAttribute("data-part", "item-group");

        const label = group.getAttribute("data-label");
        if (label) {
            const labelEl = document.createElement("div");
            labelEl.setAttribute("data-component", "menu-group-label");
            labelEl.textContent = label;
            group.insertBefore(labelEl, group.firstChild);
        }

        group.querySelectorAll<HTMLElement>('[data-component="menu-group-label"]').forEach(labelEl => {
            const label = handleAsChild(labelEl);
            label.className = cn(menuItemGroupLabel, label.className);
            label.setAttribute("data-scope", "menu");
            label.setAttribute("data-part", "item-group-label");
        });
        group.querySelectorAll<HTMLElement>('[data-component="menu-item"], [data-component="menu-radio-item"]').forEach(processItem);
    });

    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-trigger-item"]').forEach(triggerItem => {
        processItem(triggerItem);
        let nestedPosEl = triggerItem.querySelector<HTMLElement>('[data-component="menu-positioner-nested"]');
        const nestedContentEl = triggerItem.querySelector<HTMLElement>('[data-component="menu-content"]');

        if (!nestedPosEl && nestedContentEl) {
            nestedPosEl = document.createElement("div");
            nestedPosEl.setAttribute("data-component", "menu-positioner-nested");
            nestedContentEl.parentNode?.insertBefore(nestedPosEl, nestedContentEl);
            nestedPosEl.appendChild(nestedContentEl);
        }

        if (!nestedPosEl) return;

        const nested = handleAsChild(nestedPosEl);
        nested.className = cn(menuPositioner, nested.className);
        nested.classList.add("hidden");
        nested.style.cssText = "position:fixed;z-index:50;min-width:12rem;";

        const finalNestedContentEl = nested.querySelector<HTMLElement>('[data-component="menu-content"]');
        if (finalNestedContentEl) {
            const nestedInner = processContent(finalNestedContentEl);
            nestedInner.querySelectorAll<HTMLElement>('[data-component="menu-item"], [data-component="menu-checkbox-item"], [data-component="menu-radio-item"]').forEach(processItem);
        }

        nested.remove();
        document.body.appendChild(nested);
        initLucideIcons(nested);

        function updateNestedPosition() {
            computePosition(triggerItem, nested, {
                placement: "right-start",
                middleware: [offset(12), flip(), shift({ padding: 8 })],
            }).then(({ x, y }) => {
                nested.style.left = `${x}px`;
                nested.style.top = `${y}px`;
            });
        }

        triggerItem.addEventListener("click", (e) => {
            e.stopPropagation();
            const isNestedOpen = !nested.classList.contains("hidden");
            document.querySelectorAll<HTMLElement>(".menu-positioner-nested-teleported").forEach(p => p.classList.add("hidden"));
            if (!isNestedOpen) {
                nested.classList.remove("hidden");
                updateNestedPosition();
            }
        });

        nested.addEventListener("click", (e) => e.stopPropagation());
        nested.classList.add("menu-positioner-nested-teleported");
    });

    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-checkbox-item"], [data-component="menu-item"][data-type="checkbox"]').forEach(item => {
        item.addEventListener("click", () => {
            const ind = item.querySelector<HTMLElement>("[data-part='item-indicator']");
            if (ind) ind.hidden = !ind.hidden;
        });
    });

    innerContainer.querySelectorAll('[data-component="menu-radio-group"]').forEach(group => {
        group.querySelectorAll<HTMLElement>('[data-component="menu-radio-item"], [data-component="menu-item"][data-type="radio"]').forEach(item => {
            item.addEventListener("click", () => {
                group.querySelectorAll<HTMLElement>('[data-component="menu-radio-item"], [data-component="menu-item"][data-type="radio"]').forEach(sibling => {
                    const ind = sibling.querySelector<HTMLElement>("[data-part='item-indicator']");
                    if (ind) ind.hidden = sibling !== item;
                });
            });
        });
    });

    positioner.addEventListener("click", (e) => e.stopPropagation());

    const indicator = trigger.querySelector('[data-part="indicator"]');

    function show() {
        positioner.style.minWidth = `${(root as HTMLElement).offsetWidth}px`;
        openMenu(positioner, indicator as HTMLElement);
        updatePosition();
    }

    function hide() {
        closeMenu(positioner, indicator as HTMLElement);
    }

    function toggle() {
        const isOpen = !positioner.classList.contains("hidden");
        if (isOpen) hide(); else show();
    }

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll<HTMLElement>(".menu-positioner-teleported").forEach(p => {
            if (p !== positioner) {
                closeMenu(p, menuIndicatorMap.get(p) ?? null);
            }
        });
        toggle();
    });

    menuIndicatorMap.set(positioner, indicator as HTMLElement);
    positioner.classList.add("menu-positioner-teleported");

    const id = (root as HTMLElement).id;
    if (id) {
        menuRegistry.set(id, { open: show, close: hide, toggle });
    }
}

function initMenus() {
    document.querySelectorAll('[data-component="menu-root"]').forEach(root => initMenuRoot(root));

    document.addEventListener("click", () => {
        document.querySelectorAll<HTMLElement>(".menu-positioner-teleported").forEach(p => {
            closeMenu(p, menuIndicatorMap.get(p) ?? null);
        });
        document.querySelectorAll<HTMLElement>(".menu-positioner-nested-teleported").forEach(p => {
            closeMenu(p, null);
        });
    });

    document.querySelectorAll<HTMLElement>("[data-menu-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-menu-target")!;
        const controls = menuRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.toggle);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMenus);
} else {
    initMenus();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-item" data-value="react"><i data-lucide="activity" class="size-4"></i> React</div>
    <div data-component="menu-item" data-value="solid"><i data-lucide="layout" class="size-4"></i> Solid</div>
    <div data-component="menu-item" data-value="vue"><i data-lucide="zap" class="size-4"></i> Vue</div>
    <div data-component="menu-item" data-value="svelte"><i data-lucide="map-pin" class="size-4"></i> Svelte</div>
  </div>
</div>
```

## Examples

### Example 1

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-item" data-value="react"><i data-lucide="activity" class="size-4"></i> React</div>
    <div data-component="menu-item" data-value="solid"><i data-lucide="layout" class="size-4"></i> Solid</div>
    <div data-component="menu-item" data-value="vue"><i data-lucide="zap" class="size-4"></i> Vue</div>
    <div data-component="menu-item" data-value="svelte"><i data-lucide="map-pin" class="size-4"></i> Svelte</div>
  </div>
</div>
```

### Example 2

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-item" data-value="react">React</div>
    <div data-component="menu-item" data-value="solid">Solid</div>
    <div data-component="menu-item" data-value="vue">Vue</div>
    <div data-component="menu-item" data-value="svelte">Svelte</div>
    <hr data-component="menu-separator" />
    <div data-component="menu-item" data-value="react2">React</div>
    <div data-component="menu-item" data-value="solid2">Solid</div>
    <div data-component="menu-item" data-value="vue2">Vue</div>
    <div data-component="menu-item" data-value="svelte2">Svelte</div>
  </div>
</div>
```

### Example 3

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-item" data-value="react" data-shortcut="⇧⌘P">React</div>
    <div data-component="menu-item" data-value="solid" data-shortcut="⌘B">Solid</div>
    <div data-component="menu-item" data-value="vue" data-shortcut="⌘S">Vue</div>
    <div data-component="menu-item" data-value="svelte" data-shortcut="⌘K">Svelte</div>
    <hr data-component="menu-separator" />
    <div data-component="menu-item" data-value="react2">React</div>
    <div data-component="menu-item" data-value="solid2">Solid</div>
    <div data-component="menu-item" data-value="vue2">Vue</div>
    <div data-component="menu-item" data-value="svelte2" data-shortcut="⇧⌘Q">Svelte</div>
  </div>
</div>
```

### Example 4

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-item" data-value="react" data-shortcut="⇧⌘P">React</div>
    <div data-component="menu-item" data-value="solid" data-shortcut="⌘B">Solid</div>
    <div data-component="menu-item" data-value="vue" data-shortcut="⌘S">Vue</div>
    <div data-component="menu-item" data-value="svelte" data-shortcut="⌘K">Svelte</div>
    <div data-component="menu-trigger-item" data-value="frameworks">
      Frameworks
      <div data-component="menu-content">
        <div data-component="menu-item" data-value="react">React</div>
        <div data-component="menu-item" data-value="solid">Solid</div>
        <div data-component="menu-item" data-value="vue">Vue</div>
        <div data-component="menu-item" data-value="svelte">Svelte</div>
      </div>
    </div>
    <hr data-component="menu-separator" />
    <div data-component="menu-item" data-value="react-disabled" data-disabled>React</div>
    <div data-component="menu-item" data-value="solid2">Solid</div>
    <div data-component="menu-item" data-value="vue2">Vue</div>
    <div data-component="menu-item" data-value="svelte2" data-shortcut="⇧⌘Q">Svelte</div>
  </div>
</div>
```

### Example 5

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-checkbox-item" data-value="react">React</div>
    <div data-component="menu-checkbox-item" data-value="solid">Solid</div>
    <div data-component="menu-checkbox-item" data-value="vue">Vue</div>
    <div data-component="menu-checkbox-item" data-value="svelte">Svelte</div>
  </div>
</div>
```

### Example 6

```html
<div data-component="menu-root" class="w-56">
  <button data-component="menu-trigger">Open menu</button>
  <div data-component="menu-content">
    <div data-component="menu-radio-group" data-label="Frameworks">
      <div data-component="menu-radio-item" data-value="React" data-checked>React</div>
      <div data-component="menu-radio-item" data-value="Solid">Solid</div>
      <div data-component="menu-radio-item" data-value="Vue">Vue</div>
      <div data-component="menu-radio-item" data-value="Svelte">Svelte</div>
    </div>
  </div>
</div>
```

