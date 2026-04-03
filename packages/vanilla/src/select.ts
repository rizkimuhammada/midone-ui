import { cn } from "@midoneui/core/src/utils/cn";
import {
    selectRoot,
    selectLabel,
    selectControl,
    selectTrigger,
    selectValueText,
    selectIndicator,
    selectClearTrigger,
    selectPositioner,
    selectContent,
    selectItemGroup,
    selectItemGroupLabel,
    selectItem,
    selectItemText,
    selectItemIndicator,
    selectHiddenSelect,
} from "@midoneui/core/src/styles/select.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { label } from "@midoneui/core/src/styles/label.styles";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

const CHEVRON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

const openSelects = new Set<() => void>();

type SelectControls = { open: () => void; close: () => void; toggle: () => void };
const selectRegistry = new Map<string, SelectControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.select = selectRegistry;

function initSelect() {
    document.querySelectorAll<HTMLElement>('[data-component="select-root"]').forEach((root) => {
        const isMultiple = root.getAttribute("data-multiple") === "true";

        // Shorthand root template (Auto-rendering)
        if (root.querySelector('[data-component="select-control"]') === null) {
            const labelText = root.getAttribute("data-label");
            const placeholder = root.getAttribute("data-placeholder") || "Select option...";
            const originalContent = root.innerHTML;
            root.innerHTML = `
                ${labelText ? `<label data-component="select-label">${labelText}</label>` : ""}
                <div data-component="select-control" data-placeholder="${placeholder}"></div>
                <div data-component="select-content">${originalContent}</div>
            `;
        }

        const labelEl = root.querySelector<HTMLElement>('[data-component="select-label"]');
        const controlEl = root.querySelector<HTMLElement>('[data-component="select-control"]');
        const contentEl = root.querySelector<HTMLElement>('[data-component="select-content"]');
        if (!controlEl || !contentEl) return;

        // Shorthand control (Auto-render trigger & value-text if empty)
        if (controlEl.children.length === 0) {
            const placeholder = controlEl.getAttribute("data-placeholder") || "Select option...";
            controlEl.innerHTML = `
                <button data-component="select-trigger">
                    <div data-component="select-value-text" data-placeholder="${placeholder}"></div>
                </button>
            `;
        }

        const triggerEl = root.querySelector<HTMLElement>('[data-component="select-trigger"]');
        const valueTextEl = root.querySelector<HTMLElement>('[data-component="select-value-text"]');
        if (!triggerEl) return;

        root.className = cn(selectRoot, root.className);
        root.setAttribute("data-scope", "select");
        root.setAttribute("data-part", "root");
        if (labelEl) {
            labelEl.className = cn(label, selectLabel, labelEl.className);
            labelEl.setAttribute("data-scope", "select");
            labelEl.setAttribute("data-part", "label");
        }
        controlEl.className = cn(selectControl, controlEl.className);
        controlEl.setAttribute("data-scope", "select");
        controlEl.setAttribute("data-part", "control");

        triggerEl.className = cn(buttonVariants({ variant: "ghost" }), selectTrigger, triggerEl.className);
        triggerEl.setAttribute("data-scope", "select");
        triggerEl.setAttribute("data-part", "trigger");
        if (valueTextEl) {
            valueTextEl.className = cn(selectValueText, valueTextEl.className);
            valueTextEl.setAttribute("data-scope", "select");
            valueTextEl.setAttribute("data-part", "value-text");
        }

        const selectedValues = new Set<string>();

        let clearBtn: HTMLElement | null = null;
        if (isMultiple) {
            clearBtn = document.createElement("span");
            clearBtn.setAttribute("data-scope", "select");
            clearBtn.setAttribute("data-part", "clear-trigger");
            clearBtn.className = cn(selectClearTrigger);
            clearBtn.innerHTML = "Clear";
            triggerEl.appendChild(clearBtn);

            clearBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                selectedValues.clear();
                updateValueText();
                updateItemIndicators();
            });
        }

        const indicatorEl = document.createElement("div");
        indicatorEl.className = cn(selectIndicator);
        indicatorEl.setAttribute("data-scope", "select");
        indicatorEl.setAttribute("data-part", "indicator");
        indicatorEl.innerHTML = CHEVRON_SVG;
        triggerEl.appendChild(indicatorEl);

        contentEl.remove();
        contentEl.className = cn(boxVariants({ raised: "single" }), selectContent, contentEl.className);
        contentEl.setAttribute("data-scope", "select");
        contentEl.setAttribute("data-part", "content");

        contentEl.querySelectorAll<HTMLElement>('[data-component="select-item-group"]').forEach((group) => {
            const groupLabel = group.getAttribute("data-label");
            if (groupLabel && !group.querySelector('[data-component="select-item-group-label"]')) {
                const labelEl = document.createElement("label");
                labelEl.setAttribute("data-component", "select-item-group-label");
                labelEl.textContent = groupLabel;
                group.prepend(labelEl);
            }

            group.className = cn(selectItemGroup, group.className);
            group.setAttribute("data-scope", "select");
            group.setAttribute("data-part", "item-group");
            group.querySelectorAll<HTMLElement>('[data-component="select-item-group-label"]').forEach((gl) => {
                gl.className = cn(selectItemGroupLabel, gl.className);
                gl.setAttribute("data-scope", "select");
                gl.setAttribute("data-part", "item-group-label");
            });
            group.querySelectorAll<HTMLElement>('[data-component="select-item"]').forEach((item) => {
                // Shorthand item text & indicator
                if (item.children.length === 0) {
                    const text = item.getAttribute("data-text") || item.getAttribute("data-value") || "";
                    item.innerHTML = `<div data-component="select-item-text">${text}</div>`;
                }

                const itemTextEl = item.querySelector<HTMLElement>('[data-component="select-item-text"]');
                if (itemTextEl) {
                    itemTextEl.className = cn(selectItemText, itemTextEl.className);
                    itemTextEl.setAttribute("data-scope", "select");
                    itemTextEl.setAttribute("data-part", "item-text");
                }

                const itemIndicator = document.createElement("div");
                itemIndicator.setAttribute("data-scope", "select");
                itemIndicator.setAttribute("data-part", "item-indicator");
                itemIndicator.className = cn(selectItemIndicator);
                itemIndicator.innerHTML = CHECK_SVG;
                itemIndicator.setAttribute("hidden", "");
                item.appendChild(itemIndicator);

                item.className = cn(selectItem, item.className);
                item.setAttribute("data-scope", "select");
                item.setAttribute("data-part", "item");
            });
        });

        // Loop items not inside groups
        contentEl.querySelectorAll<HTMLElement>('[data-component="select-item"]').forEach((item) => {
            if (item.closest('[data-component="select-item-group"]')) return;
            // Shorthand
            if (item.children.length === 0) {
                const text = item.getAttribute("data-text") || item.getAttribute("data-value") || "";
                item.innerHTML = `<div data-component="select-item-text">${text}</div>`;
            }
            const itemTextEl = item.querySelector<HTMLElement>('[data-component="select-item-text"]');
            if (itemTextEl) {
                itemTextEl.className = cn(selectItemText, itemTextEl.className);
                itemTextEl.setAttribute("data-scope", "select");
                itemTextEl.setAttribute("data-part", "item-text");
            }
            const itemIndicator = document.createElement("div");
            itemIndicator.setAttribute("data-scope", "select");
            itemIndicator.setAttribute("data-part", "item-indicator");
            itemIndicator.className = cn(selectItemIndicator);
            itemIndicator.innerHTML = CHECK_SVG;
            itemIndicator.setAttribute("hidden", "");
            item.appendChild(itemIndicator);
            item.className = cn(selectItem, item.className);
            item.setAttribute("data-scope", "select");
            item.setAttribute("data-part", "item");
        });

        const scrollDiv = document.createElement("div");
        while (contentEl.firstChild) scrollDiv.appendChild(contentEl.firstChild);
        contentEl.appendChild(scrollDiv);

        const positionerEl = document.createElement("div");
        positionerEl.className = cn(selectPositioner);
        positionerEl.setAttribute("data-scope", "select");
        positionerEl.setAttribute("data-part", "positioner");
        positionerEl.style.cssText = "position:fixed;z-index:50;display:none;";
        positionerEl.appendChild(contentEl);
        document.body.appendChild(positionerEl);

        const hiddenSelect = document.createElement("select");
        hiddenSelect.className = cn(selectHiddenSelect);
        hiddenSelect.style.display = "none";
        if (isMultiple) hiddenSelect.multiple = true;
        root.appendChild(hiddenSelect);

        let isOpen = false;

        function updateValueText() {
            if (!valueTextEl || !contentEl) return;
            if (selectedValues.size === 0) {
                valueTextEl.textContent = valueTextEl.getAttribute("data-placeholder") ?? "";
                if (clearBtn) clearBtn.style.display = "none";
            } else {
                const labels: string[] = [];
                contentEl.querySelectorAll<HTMLElement>('[data-component="select-item"]').forEach((item) => {
                    const val = item.getAttribute("data-value");
                    if (val && selectedValues.has(val)) labels.push(item.querySelector('[data-component="select-item-text"]')?.textContent?.trim() ?? val);
                });
                valueTextEl.textContent = labels.join(", ");
                if (clearBtn) clearBtn.style.display = labels.length > 0 ? "inline" : "none";
            }
        }

        function updateItemIndicators() {
            if (!contentEl) return;
            contentEl.querySelectorAll<HTMLElement>('[data-component="select-item"]').forEach((item) => {
                const val = item.getAttribute("data-value");
                const ind = item.querySelector<HTMLElement>("[data-part='item-indicator']");
                if (!ind) return;
                if (val && selectedValues.has(val)) {
                    ind.removeAttribute("hidden"); item.setAttribute("data-state", "checked");
                } else {
                    ind.setAttribute("hidden", ""); item.removeAttribute("data-state");
                }
            });
        }

        function updatePosition() {
            if (!controlEl || !positionerEl) return;
            computePosition(controlEl, positionerEl, {
                placement: "bottom-start",
                middleware: [offset(8), flip(), shift({ padding: 8 })],
            }).then(({ x, y }) => {
                positionerEl.style.left = `${x}px`;
                positionerEl.style.top = `${y}px`;
            });
        }

        function show() {
            if (!contentEl || !controlEl || !positionerEl || !indicatorEl) return;
            openSelects.forEach(close => close());
            isOpen = true;
            openSelects.add(hide);
            contentEl.style.setProperty("--reference-width", `${controlEl.offsetWidth}px`);
            positionerEl.style.display = "block";
            indicatorEl.setAttribute("data-state", "open");
            updatePosition();
        }

        function hide() {
            isOpen = false;
            openSelects.delete(hide);
            positionerEl.style.display = "none";
            indicatorEl.removeAttribute("data-state");
        }

        function toggle() {
            isOpen ? hide() : show();
        }

        if (triggerEl) {
            triggerEl.addEventListener("click", (e) => {
                e.stopPropagation(); toggle();
            });
        }

        if (contentEl) {
            contentEl.querySelectorAll<HTMLElement>('[data-component="select-item"]').forEach((item) => {
                item.addEventListener("click", () => {
                    const val = item.getAttribute("data-value");
                    if (!val) return;
                    if (isMultiple) {
                        if (selectedValues.has(val)) selectedValues.delete(val); else selectedValues.add(val);
                    } else {
                        selectedValues.clear(); selectedValues.add(val); hide();
                    }
                    updateValueText(); updateItemIndicators();
                });
            });
        }

        document.addEventListener("click", (e) => {
            if (isOpen && !root.contains(e.target as Node) && !positionerEl.contains(e.target as Node)) {
                hide();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && isOpen) hide();
        });

        updateValueText();

        const id = root.id;
        if (id) {
            selectRegistry.set(id, { open: show, close: hide, toggle });
        }
    });

    document.querySelectorAll<HTMLElement>("[data-select-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-select-target")!;
        const controls = selectRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.toggle);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSelect);
} else {
    initSelect();
}
