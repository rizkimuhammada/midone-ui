# Combobox

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="combobox-root" class="w-56" data-label="Single" data-combobox-input-placeholder="Search frameworks...">
  <div data-component="combobox-item-group" data-label="Frameworks">
    <div data-component="combobox-item" data-value="React">React</div>
    <div data-component="combobox-item" data-value="Solid">Solid</div>
    <div data-component="combobox-item" data-value="Vue">Vue</div>
    <div data-component="combobox-item" data-value="Svelte">Svelte</div>
    <div data-component="combobox-item" data-value="Vanilla">Vanilla JS</div>
  </div>
</div>
```

## Dependency

```bash
npm install @floating-ui/dom
```

## Component

### combobox.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    comboboxRoot,
    comboboxLabel,
    comboboxControl,
    comboboxInput,
    comboboxTrigger,
    comboboxClearTrigger,
    comboboxContent,
    comboboxItemGroup,
    comboboxItemGroupLabel,
    comboboxItem,
    comboboxItemText,
    comboboxItemIndicator,
} from "@midoneui/core/src/styles/combobox.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { input as inputStyles } from "@midoneui/core/src/styles/input.styles";
import { label as labelStyles } from "@midoneui/core/src/styles/label.styles";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

const CHEVRONS_UP_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>`;
const CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="M20 6 9 17l-5-5"/></svg>`;

type ComboboxControls = { open: () => void; close: () => void; toggle: () => void };
const comboboxRegistry = new Map<string, ComboboxControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.combobox = comboboxRegistry;

function parseSvg(html: string): Element {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.firstElementChild!;
}

function processItem(item: HTMLElement) {
    item.className = cn(comboboxItem, item.className);
    item.setAttribute("data-scope", "combobox");
    item.setAttribute("data-part", "item");

    // Shorthand item text & indicator
    if (item.children.length === 0) {
        const text = item.getAttribute("data-text") || item.textContent || item.getAttribute("data-value") || "";
        item.innerHTML = `<span data-component="combobox-item-text">${text}</span>`;
    }

    const itemText = item.querySelector<HTMLElement>('[data-component="combobox-item-text"]');
    if (itemText) {
        itemText.className = cn(comboboxItemText, itemText.className);
        itemText.setAttribute("data-scope", "combobox");
        itemText.setAttribute("data-part", "item-text");
    }

    const indicator = document.createElement("span");
    indicator.setAttribute("data-scope", "combobox");
    indicator.setAttribute("data-part", "item-indicator");
    indicator.className = cn(comboboxItemIndicator);
    indicator.hidden = true;
    indicator.innerHTML = CHECK;
    item.appendChild(indicator);
}

function initComboboxRoot(root: HTMLElement) {
    const isMultiple = root.getAttribute("data-multiple") === "true";
    const labelText = root.getAttribute("data-label") || root.getAttribute("data-combobox-label");

    // If root has children but they are not the standard parts, they are items.
    // Wrap them in the standard structure.
    const hasStandardParts = root.querySelector('[data-component="combobox-control"]') || root.querySelector('[data-component="combobox-positioner"]');
    
    if (!hasStandardParts) {
        const items = Array.from(root.childNodes);
        root.innerHTML = "";
        
        if (labelText) {
            const label = document.createElement("label");
            label.setAttribute("data-component", "combobox-label");
            label.textContent = labelText;
            root.appendChild(label);
        }

        const control = document.createElement("div");
        control.setAttribute("data-component", "combobox-control");
        root.appendChild(control);

        const positioner = document.createElement("div");
        positioner.setAttribute("data-component", "combobox-positioner");
        root.appendChild(positioner);

        const content = document.createElement("div");
        content.setAttribute("data-component", "combobox-content");
        positioner.appendChild(content);

        items.forEach(child => content.appendChild(child));
    }

    let label = root.querySelector<HTMLElement>('[data-component="combobox-label"]');
    const control = root.querySelector<HTMLElement>('[data-component="combobox-control"]');
    const positioner = root.querySelector<HTMLElement>('[data-component="combobox-positioner"]');
    if (!control || !positioner) return;

    // Shorthand control (Auto-render trigger if empty)
    if (control.children.length === 0) {
        control.innerHTML = `<button data-component="combobox-trigger"></button>`;
    }

    const trigger = control.querySelector<HTMLElement>('[data-component="combobox-trigger"]');
    const content = positioner.querySelector<HTMLElement>('[data-component="combobox-content"]');
    if (!trigger || !content) return;

    root.className = cn(comboboxRoot, root.className);
    root.setAttribute("data-scope", "combobox");
    root.setAttribute("data-part", "root");

    if (label) {
        label.className = cn(labelStyles, comboboxLabel, label.className);
        label.setAttribute("data-scope", "combobox");
        label.setAttribute("data-part", "label");
    }

    control.className = cn(comboboxControl, control.className);
    control.setAttribute("data-scope", "combobox");
    control.setAttribute("data-part", "control");

    const valueDiv = document.createElement("div");
    valueDiv.textContent = "Select Options...";

    const clearSpan = document.createElement("span");
    clearSpan.setAttribute("data-scope", "combobox");
    clearSpan.setAttribute("data-part", "clear-trigger");
    clearSpan.className = cn(comboboxClearTrigger);
    clearSpan.textContent = "Clear";

    const chevron = parseSvg(CHEVRONS_UP_DOWN);

    trigger.innerHTML = "";
    trigger.appendChild(valueDiv);
    trigger.appendChild(clearSpan);
    trigger.appendChild(chevron);
    clearSpan.style.display = "none";
    trigger.className = cn(buttonVariants({ variant: "ghost" }), comboboxTrigger, trigger.className);
    trigger.setAttribute("data-scope", "combobox");
    trigger.setAttribute("data-part", "trigger");

    positioner.remove();
    positioner.style.cssText = "position:fixed;z-index:50;display:none;";
    document.body.appendChild(positioner);

    function updatePosition() {
        computePosition(control!, positioner!, {
            placement: "bottom-start",
            middleware: [offset(8), flip(), shift({ padding: 8 })],
        }).then(({ x, y }) => {
            if (positioner) {
                positioner.style.left = `${x}px`;
                positioner.style.top = `${y}px`;
            }
        });
    }

    content.className = cn(boxVariants({ raised: "single" }), comboboxContent, content.className);
    content.setAttribute("data-scope", "combobox");
    content.setAttribute("data-part", "content");
    Array.from(content.classList).filter(c => /^p-\d/.test(c)).forEach(c => content.classList.remove(c));
    content.classList.add("p-0");

    const innerDiv = document.createElement("div");
    while (content.firstChild) innerDiv.appendChild(content.firstChild);
    content.appendChild(innerDiv);

    const placeholderAttr = root.getAttribute("data-combobox-input-placeholder");
    let searchInput = innerDiv.querySelector<HTMLInputElement>('[data-component="combobox-input"]');

    if (placeholderAttr && !searchInput) {
        searchInput = document.createElement("input");
        searchInput.setAttribute("data-component", "combobox-input");
        searchInput.placeholder = placeholderAttr;
        innerDiv.prepend(searchInput);
    }

    if (searchInput) {
        searchInput.className = cn(inputStyles, comboboxInput, searchInput.className);
    }

    innerDiv.querySelectorAll<HTMLElement>('[data-component="combobox-item-group"]').forEach(group => {
        group.className = cn(comboboxItemGroup, group.className);
        group.setAttribute("data-scope", "combobox");
        group.setAttribute("data-part", "item-group");

        const groupLabelText = group.getAttribute("data-label");
        let groupLabel = group.querySelector<HTMLElement>('[data-component="combobox-item-group-label"]');

        if (groupLabelText && !groupLabel) {
            groupLabel = document.createElement("label");
            groupLabel.setAttribute("data-component", "combobox-item-group-label");
            groupLabel.textContent = groupLabelText;
            group.prepend(groupLabel);
        }

        if (groupLabel) {
            groupLabel.className = cn(comboboxItemGroupLabel, groupLabel.className);
            groupLabel.setAttribute("data-scope", "combobox");
            groupLabel.setAttribute("data-part", "item-group-label");
        }
        group.querySelectorAll<HTMLElement>('[data-component="combobox-item"]').forEach(processItem);
    });

    innerDiv.querySelectorAll<HTMLElement>('[data-component="combobox-item"]').forEach(processItem);

    const selectedValues = new Set<string>();

    function updateDisplay() {
        if (selectedValues.size > 0) {
            const labels = Array.from(selectedValues).map(val => {
                const item = innerDiv.querySelector(`[data-part="item"][data-value="${val}"]`);
                if (item) {
                    const textEl = item.querySelector('[data-part="item-text"]');
                    return textEl?.textContent || val;
                }
                return val;
            });
            valueDiv.textContent = labels.join(", ");
        } else {
            valueDiv.textContent = "Select Options...";
        }
        clearSpan.style.display = (isMultiple && selectedValues.size > 0) ? "" : "none";
        if (content) {
            content.querySelectorAll<HTMLElement>('[data-part="item"]').forEach(item => {
                const val = item.dataset.value ?? "";
                const indicator = item.querySelector<HTMLElement>("[data-part='item-indicator']");
                if (indicator) indicator.hidden = !selectedValues.has(val);
            });
        }
    }

    function filterItems(query: string) {
        const q = query.toLowerCase();
        innerDiv.querySelectorAll<HTMLElement>('[data-part="item-group"]').forEach(group => {
            let hasVisible = false;
            group.querySelectorAll<HTMLElement>('[data-part="item"]').forEach(item => {
                const text = (item.querySelector('[data-part="item-text"]')?.textContent ?? "").toLowerCase();
                const visible = text.includes(q);
                item.style.display = visible ? "" : "none";
                if (visible) hasVisible = true;
            });
            group.style.display = hasVisible ? "" : "none";
        });
        innerDiv.querySelectorAll<HTMLElement>('[data-part="item"]').forEach(item => {
            const text = (item.querySelector('[data-part="item-text"]')?.textContent ?? "").toLowerCase();
            item.style.display = text.includes(q) ? "" : "none";
        });
    }

    function show() {
        if (content && control && positioner) {
            content.style.setProperty("--reference-width", `${control.offsetWidth}px`);
            positioner.style.display = "";
            updatePosition();
            if (searchInput) {
                searchInput.value = "";
                filterItems("");
                searchInput.focus();
            }
        }
    }

    function hide() {
        if (positioner) positioner.style.display = "none";
    }

    function toggle() {
        if (positioner) {
            const isOpen = positioner.style.display !== "none";
            if (isOpen) hide(); else show();
        }
    }

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        // Close all other combobox dropdowns
        document.querySelectorAll<HTMLElement>(".combobox-positioner").forEach(p => {
            if (p !== positioner) p.style.display = "none";
        });
        toggle();
    });

    if (searchInput) {
        searchInput.addEventListener("input", () => filterItems(searchInput.value));
        searchInput.addEventListener("click", (e) => e.stopPropagation());
    }

    if (content) {
        content.querySelectorAll<HTMLElement>('[data-part="item"]').forEach(item => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                const val = item.dataset.value ?? "";
                if (isMultiple) {
                    if (selectedValues.has(val)) selectedValues.delete(val);
                    else selectedValues.add(val);
                    updateDisplay();
                } else {
                    selectedValues.clear(); selectedValues.add(val);
                    updateDisplay(); hide();
                }
            });
        });
    }

    clearSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedValues.clear(); updateDisplay();
    });

    if (positioner) {
        positioner.addEventListener("click", (e) => e.stopPropagation());
        document.addEventListener("click", (e) => {
            if (positioner.style.display !== "none" && !root.contains(e.target as Node) && !positioner.contains(e.target as Node)) {
                hide();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && positioner.style.display !== "none") hide();
        });

        positioner.classList.add("combobox-positioner");
    }

    const id = root.id;
    if (id) {
        comboboxRegistry.set(id, { open: show, close: hide, toggle });
    }
}

function initComboboxes() {
    document.querySelectorAll<HTMLElement>('[data-component="combobox-root"]').forEach(root => initComboboxRoot(root));

    document.querySelectorAll<HTMLElement>("[data-combobox-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-combobox-target")!;
        const controls = comboboxRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.toggle);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initComboboxes);
} else {
    initComboboxes();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="combobox-root" class="w-56" data-label="Single" data-combobox-input-placeholder="Search frameworks...">
  <div data-component="combobox-item-group" data-label="Frameworks">
    <div data-component="combobox-item" data-value="React">React</div>
    <div data-component="combobox-item" data-value="Solid">Solid</div>
    <div data-component="combobox-item" data-value="Vue">Vue</div>
    <div data-component="combobox-item" data-value="Svelte">Svelte</div>
    <div data-component="combobox-item" data-value="Vanilla">Vanilla JS</div>
  </div>
</div>
```

## Examples

### Example 1

```html
<div data-component="combobox-root" class="w-56" data-multiple="true" data-label="Multiple" data-combobox-input-placeholder="Search frameworks...">
  <div data-component="combobox-item-group" data-label="Frameworks">
    <div data-component="combobox-item" data-value="React">React</div>
    <div data-component="combobox-item" data-value="Solid">Solid</div>
    <div data-component="combobox-item" data-value="Vue">Vue</div>
    <div data-component="combobox-item" data-value="Svelte">Svelte</div>
    <div data-component="combobox-item" data-value="Vanilla">Vanilla JS</div>
  </div>
</div>
```

### Example 2

```html
<div data-component="combobox-root" class="w-56" data-multiple="true" data-label="Scrollable" data-combobox-input-placeholder="Search region...">
  <div data-component="combobox-item-group" data-label="North America">
    <div data-component="combobox-item" data-value="est">Eastern Standard Time (EST)</div>
    <div data-component="combobox-item" data-value="cst">Central Standard Time (CST)</div>
    <div data-component="combobox-item" data-value="mst">Mountain Standard Time (MST)</div>
    <div data-component="combobox-item" data-value="pst">Pacific Standard Time (PST)</div>
    <div data-component="combobox-item" data-value="akst">Alaska Standard Time (AKST)</div>
    <div data-component="combobox-item" data-value="hst">Hawaii Standard Time (HST)</div>
  </div>
  <div data-component="combobox-item-group" data-label="Europe & Africa">
    <div data-component="combobox-item" data-value="gmt">Greenwich Mean Time (GMT)</div>
    <div data-component="combobox-item" data-value="cet">Central European Time (CET)</div>
    <div data-component="combobox-item" data-value="eet">Eastern European Time (EET)</div>
    <div data-component="combobox-item" data-value="west">Western European Summer Time (WEST)</div>
    <div data-component="combobox-item" data-value="cat">Central Africa Time (CAT)</div>
    <div data-component="combobox-item" data-value="eat">East Africa Time (EAT)</div>
  </div>
  <div data-component="combobox-item-group" data-label="Asia">
    <div data-component="combobox-item" data-value="msk">Moscow Time (MSK)</div>
    <div data-component="combobox-item" data-value="ist">India Standard Time (IST)</div>
    <div data-component="combobox-item" data-value="jst">Japan Standard Time (JST)</div>
    <div data-component="combobox-item" data-value="kst">Korea Standard Time (KST)</div>
  </div>
</div>
```

