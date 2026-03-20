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

function initSelect() {
    document.querySelectorAll<HTMLElement>(".select-root").forEach((root) => {
        const isMultiple = root.getAttribute("data-multiple") === "true";
        const labelEl = root.querySelector<HTMLElement>(".select-label");
        const controlEl = root.querySelector<HTMLElement>(".select-control")!;
        const triggerEl = root.querySelector<HTMLElement>(".select-trigger");
        const valueTextEl = root.querySelector<HTMLElement>(".select-value-text");
        const contentEl = root.querySelector<HTMLElement>(".select-content")!;
        if (!controlEl || !triggerEl || !contentEl) return;

        // Apply root & label classes
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

        // Apply trigger classes (ghost button + selectTrigger)
        triggerEl.className = cn(buttonVariants({ variant: "ghost" }), selectTrigger, triggerEl.className);
        triggerEl.setAttribute("data-scope", "select");
        triggerEl.setAttribute("data-part", "trigger");
        if (valueTextEl) {
            valueTextEl.className = cn(selectValueText, valueTextEl.className);
            valueTextEl.setAttribute("data-scope", "select");
            valueTextEl.setAttribute("data-part", "value-text");
        }

        // Inject clear trigger into trigger
        const clearBtn = document.createElement("span");
        clearBtn.setAttribute("data-scope", "select");
        clearBtn.setAttribute("data-part", "clear-trigger");
        clearBtn.className = cn(selectClearTrigger);
        clearBtn.textContent = "Clear";
        triggerEl.appendChild(clearBtn);

        // Inject indicator (chevron) into trigger
        const indicatorEl = document.createElement("div");
        indicatorEl.className = cn(selectIndicator);
        indicatorEl.setAttribute("data-scope", "select");
        indicatorEl.setAttribute("data-part", "indicator");
        indicatorEl.innerHTML = CHEVRON_SVG;
        triggerEl.appendChild(indicatorEl);

        // Detach content, build positioner structure
        contentEl.remove();
        contentEl.className = cn(boxVariants({ raised: "single" }), selectContent, contentEl.className);
        contentEl.setAttribute("data-scope", "select");
        contentEl.setAttribute("data-part", "content");

        // Apply item group & item classes, inject item indicators
        contentEl.querySelectorAll<HTMLElement>(".select-item-group").forEach((group) => {
            group.className = cn(selectItemGroup, group.className);
            group.setAttribute("data-scope", "select");
            group.setAttribute("data-part", "item-group");
            group.querySelectorAll<HTMLElement>(".select-item-group-label").forEach((gl) => {
                gl.className = cn(selectItemGroupLabel, gl.className);
                gl.setAttribute("data-scope", "select");
                gl.setAttribute("data-part", "item-group-label");
            });
            group.querySelectorAll<HTMLElement>(".select-item").forEach((item) => {
                const itemTextEl = item.querySelector<HTMLElement>(".select-item-text");
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

        // Wrap content children in scroll div
        const scrollDiv = document.createElement("div");
        while (contentEl.firstChild) scrollDiv.appendChild(contentEl.firstChild);
        contentEl.appendChild(scrollDiv);

        // Positioner
        const positionerEl = document.createElement("div");
        positionerEl.className = cn(selectPositioner);
        positionerEl.setAttribute("data-scope", "select");
        positionerEl.setAttribute("data-part", "positioner");
        positionerEl.style.cssText = "position:fixed;z-index:50;display:none;";
        positionerEl.appendChild(contentEl);
        document.body.appendChild(positionerEl);

        // Inject hidden select into root
        const hiddenSelect = document.createElement("select");
        hiddenSelect.className = cn(selectHiddenSelect);
        hiddenSelect.style.display = "none";
        if (isMultiple) hiddenSelect.multiple = true;
        root.appendChild(hiddenSelect);

        // State
        const selectedValues = new Set<string>();
        let isOpen = false;

        function updateValueText() {
            if (!valueTextEl) return;
            if (selectedValues.size === 0) {
                valueTextEl.textContent = valueTextEl.getAttribute("data-placeholder") ?? "";
                clearBtn.style.display = "none";
            } else {
                const labels: string[] = [];
                contentEl.querySelectorAll<HTMLElement>(".select-item").forEach((item) => {
                    const val = item.getAttribute("data-value");
                    if (val && selectedValues.has(val)) {
                        labels.push(item.querySelector(".select-item-text")?.textContent?.trim() ?? val);
                    }
                });
                valueTextEl.textContent = labels.join(", ");
                clearBtn.style.display = "inline";
            }
        }

        function updateItemIndicators() {
            contentEl.querySelectorAll<HTMLElement>(".select-item").forEach((item) => {
                const val = item.getAttribute("data-value");
                const ind = item.querySelector<HTMLElement>("[data-part='item-indicator']");
                if (!ind) return;
                if (val && selectedValues.has(val)) {
                    ind.removeAttribute("hidden");
                    item.setAttribute("data-state", "checked");
                } else {
                    ind.setAttribute("hidden", "");
                    item.removeAttribute("data-state");
                }
            });
        }

        function updatePosition() {
            computePosition(controlEl, positionerEl, {
                placement: "bottom-start",
                middleware: [
                    offset(8),
                    flip(),
                    shift({ padding: 8 }),
                ],
            }).then(({ x, y }) => {
                positionerEl.style.left = `${x}px`;
                positionerEl.style.top = `${y}px`;
            });
        }

        function openDropdown() {
            isOpen = true;
            contentEl.style.setProperty("--reference-width", `${controlEl.offsetWidth}px`);
            positionerEl.style.display = "block";
            indicatorEl.setAttribute("data-state", "open");
            updatePosition();
        }

        function closeDropdown() {
            isOpen = false;
            positionerEl.style.display = "none";
            indicatorEl.removeAttribute("data-state");
        }

        triggerEl.addEventListener("click", (e) => {
            e.stopPropagation();
            isOpen ? closeDropdown() : openDropdown();
        });

        contentEl.querySelectorAll<HTMLElement>(".select-item").forEach((item) => {
            item.addEventListener("click", () => {
                const val = item.getAttribute("data-value");
                if (!val) return;
                if (isMultiple) {
                    if (selectedValues.has(val)) selectedValues.delete(val);
                    else selectedValues.add(val);
                } else {
                    selectedValues.clear();
                    selectedValues.add(val);
                    closeDropdown();
                }
                updateValueText();
                updateItemIndicators();
            });
        });

        clearBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            selectedValues.clear();
            updateValueText();
            updateItemIndicators();
        });

        document.addEventListener("click", (e) => {
            if (isOpen && !root.contains(e.target as Node) && !positionerEl.contains(e.target as Node)) {
                closeDropdown();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && isOpen) closeDropdown();
        });

        updateValueText();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSelect);
} else {
    initSelect();
}
