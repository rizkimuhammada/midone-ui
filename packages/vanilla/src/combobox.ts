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

function parseSvg(html: string): Element {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.firstElementChild!;
}

function processItem(item: HTMLElement) {
    item.className = cn(comboboxItem, item.className);
    item.setAttribute("data-scope", "combobox");
    item.setAttribute("data-part", "item");

    // Apply comboboxItemText class to the [data-component="combobox-item-text"] child
    const itemText = item.querySelector<HTMLElement>('[data-component="combobox-item-text"]');
    if (itemText) {
        itemText.className = cn(comboboxItemText, itemText.className);
        itemText.setAttribute("data-scope", "combobox");
        itemText.setAttribute("data-part", "item-text");
    }

    // Add check indicator (hidden until selected)
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
    const label = root.querySelector<HTMLElement>('[data-component="combobox-label"]');
    const control = root.querySelector<HTMLElement>('[data-component="combobox-control"]');
    const positioner = root.querySelector<HTMLElement>('[data-component="combobox-positioner"]');
    if (!control || !positioner) return;

    const trigger = control.querySelector<HTMLElement>('[data-component="combobox-trigger"]');
    const content = positioner.querySelector<HTMLElement>('[data-component="combobox-content"]');
    if (!trigger || !content) return;

    // Apply root classes (data-multiple attr is already set in HTML)
    root.className = cn(comboboxRoot, root.className);
    root.setAttribute("data-scope", "combobox");
    root.setAttribute("data-part", "root");

    // Label — ComboboxLabel uses the Label component which adds `font-medium`
    if (label) {
        label.className = cn(labelStyles, comboboxLabel, label.className);
        label.setAttribute("data-scope", "combobox");
        label.setAttribute("data-part", "label");
    }

    // Control
    control.className = cn(comboboxControl, control.className);
    control.setAttribute("data-scope", "combobox");
    control.setAttribute("data-part", "control");

    // Build trigger inner structure: [valueDiv] [clearSpan] [chevronSvg]
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
    // JS controls clear trigger visibility — hide initially regardless of CSS selector
    clearSpan.style.display = "none";
    trigger.className = cn(
        buttonVariants({ variant: "ghost" }),
        comboboxTrigger,
        trigger.className,
    );
    trigger.setAttribute("data-scope", "combobox");
    trigger.setAttribute("data-part", "trigger");

    // Teleport positioner to body for z-index safety
    positioner.remove();
    positioner.style.cssText = "position:fixed;z-index:50;display:none;";
    document.body.appendChild(positioner);

    function updatePosition() {
        computePosition(control!, positioner!, {
            placement: "bottom-start",
            middleware: [
                offset(8),
                flip(),
                shift({ padding: 8 }),
            ],
        }).then(({ x, y }) => {
            positioner!.style.left = `${x}px`;
            positioner!.style.top = `${y}px`;
        });
    }

    // Apply content classes (Box raised="single" + comboboxContent + p-0 override)
    content.className = cn(boxVariants({ raised: "single" }), comboboxContent, content.className);
    content.setAttribute("data-scope", "combobox");
    content.setAttribute("data-part", "content");
    Array.from(content.classList).filter(c => /^p-\d/.test(c)).forEach(c => content.classList.remove(c));
    content.classList.add("p-0");

    // Wrap all content children into inner div (for [&>div] CSS selectors)
    const innerDiv = document.createElement("div");
    while (content.firstChild) innerDiv.appendChild(content.firstChild);
    content.appendChild(innerDiv);

    // Apply input styles
    const searchInput = innerDiv.querySelector<HTMLInputElement>('[data-component="combobox-input"]');
    if (searchInput) {
        searchInput.className = cn(inputStyles, comboboxInput, searchInput.className);
    }

    // Apply item group + item styles
    innerDiv.querySelectorAll<HTMLElement>('[data-component="combobox-item-group"]').forEach(group => {
        group.className = cn(comboboxItemGroup, group.className);
        group.setAttribute("data-scope", "combobox");
        group.setAttribute("data-part", "item-group");
        const groupLabel = group.querySelector<HTMLElement>('[data-component="combobox-item-group-label"]');
        if (groupLabel) {
            groupLabel.className = cn(comboboxItemGroupLabel, groupLabel.className);
            groupLabel.setAttribute("data-scope", "combobox");
            groupLabel.setAttribute("data-part", "item-group-label");
        }
        group.querySelectorAll<HTMLElement>('[data-component="combobox-item"]').forEach(processItem);
    });

    // Direct items (ungrouped)
    innerDiv.querySelectorAll<HTMLElement>('[data-component="combobox-item"]').forEach(processItem);

    // State
    const selectedValues = new Set<string>();

    function updateDisplay() {
        if (selectedValues.size > 0) {
            valueDiv.textContent = Array.from(selectedValues).join(", ");
        } else {
            valueDiv.textContent = "Select Options...";
        }
        // Show clear trigger only when items are selected (multiple mode)
        clearSpan.style.display = (isMultiple && selectedValues.size > 0) ? "" : "none";
        // Update item indicators
        content.querySelectorAll<HTMLElement>('[data-part="item"]').forEach(item => {
            const val = item.dataset.value ?? "";
            const indicator = item.querySelector<HTMLElement>("[data-part='item-indicator']");
            if (indicator) indicator.hidden = !selectedValues.has(val);
        });
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

    function openDropdown() {
        // Set reference width for min-w-(--reference-width) in comboboxContent
        content.style.setProperty("--reference-width", `${control.offsetWidth}px`);
        positioner.style.display = "";
        updatePosition();
        if (searchInput) {
            searchInput.value = "";
            filterItems("");
            searchInput.focus();
        }
    }

    function closeDropdown() {
        positioner.style.display = "none";
    }

    // Trigger open/close
    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = positioner.style.display !== "none";
        // Close all other combobox dropdowns
        document.querySelectorAll<HTMLElement>(".combobox-positioner").forEach(p => {
            if (p !== positioner) p.style.display = "none";
        });
        if (!isOpen) openDropdown(); else closeDropdown();
    });

    // Filter on input
    if (searchInput) {
        searchInput.addEventListener("input", () => filterItems(searchInput.value));
        searchInput.addEventListener("click", (e) => e.stopPropagation());
    }

    // Item selection
    content.querySelectorAll<HTMLElement>('[data-part="item"]').forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            const val = item.dataset.value ?? "";
            if (isMultiple) {
                if (selectedValues.has(val)) {
                    selectedValues.delete(val);
                } else {
                    selectedValues.add(val);
                }
                updateDisplay();
            } else {
                selectedValues.clear();
                selectedValues.add(val);
                updateDisplay();
                closeDropdown();
            }
        });
    });

    // Clear trigger
    clearSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedValues.clear();
        updateDisplay();
    });

    // Prevent clicks inside positioner from closing the dropdown
    positioner.addEventListener("click", (e) => e.stopPropagation());

    // Close on outside click
    document.addEventListener("click", (e) => {
        if (positioner.style.display !== "none" && !root.contains(e.target as Node) && !positioner.contains(e.target as Node)) {
            closeDropdown();
        }
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && positioner.style.display !== "none") closeDropdown();
    });
}

function initComboboxes() {
    document.querySelectorAll<HTMLElement>('[data-component="combobox-root"]').forEach(root => {
        initComboboxRoot(root);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initComboboxes);
} else {
    initComboboxes();
}
