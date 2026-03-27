import { cn } from "@midoneui/core/src/utils/cn";
import {
    radioGroupRoot,
    radioGroupLabel,
    radioGroupItem,
    radioGroupItemControl,
    radioGroupItemText,
    radioGroupIndicator,
    radioGroupItemHiddenInput,
} from "@midoneui/core/src/styles/radio-group.styles";
import { label } from "@midoneui/core/src/styles/label.styles";

const DOT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>`;

function initRadioGroup() {
    document.querySelectorAll<HTMLElement>('[data-component="radio-group-root"]').forEach((root) => {
        const defaultValue = root.getAttribute("data-default-value") ?? "";

        root.className = cn(radioGroupRoot, root.className);
        root.style.position = "relative";
        root.setAttribute("data-scope", "radio-group");
        root.setAttribute("data-part", "root");
        root.setAttribute("role", "radiogroup");

        const labelEl = root.querySelector<HTMLElement>('[data-component="radio-group-label"]');
        if (labelEl) {
            labelEl.className = cn(label, radioGroupLabel, labelEl.className);
            labelEl.setAttribute("data-scope", "radio-group");
            labelEl.setAttribute("data-part", "label");
        }

        // Inject sliding indicator
        const indicatorEl = document.createElement("div");
        indicatorEl.className = cn(radioGroupIndicator);
        indicatorEl.style.cssText = "position:absolute;pointer-events:none;transition:left 150ms,top 150ms,height 150ms;";
        indicatorEl.innerHTML = DOT_SVG;
        root.appendChild(indicatorEl);

        function updateIndicator() {
            const selectedControl = root.querySelector<HTMLElement>(
                '[data-component="radio-group-item"][data-state="checked"] [data-component="radio-group-item-control"]'
            );
            if (!selectedControl) return;
            const rootRect = root.getBoundingClientRect();
            const controlRect = selectedControl.getBoundingClientRect();
            indicatorEl.style.setProperty("--left", `${controlRect.left - rootRect.left}px`);
            indicatorEl.style.setProperty("--top", `${controlRect.top - rootRect.top}px`);
            indicatorEl.style.setProperty("--height", `${controlRect.height}px`);
        }

        root.querySelectorAll<HTMLElement>('[data-component="radio-group-item"]').forEach((item) => {
            item.className = cn(radioGroupItem, item.className);
            item.setAttribute("data-scope", "radio-group");
            item.setAttribute("data-part", "item");
            item.style.cursor = "pointer";
            const val = item.getAttribute("data-value") ?? "";

            const controlEl = item.querySelector<HTMLElement>('[data-component="radio-group-item-control"]');
            if (controlEl) {
                controlEl.className = cn(radioGroupItemControl, controlEl.className);
                controlEl.setAttribute("data-scope", "radio-group");
                controlEl.setAttribute("data-part", "item-control");
            }

            const textEl = item.querySelector<HTMLElement>('[data-component="radio-group-item-text"]');
            if (textEl) {
                textEl.className = cn(radioGroupItemText, textEl.className);
                textEl.setAttribute("data-scope", "radio-group");
                textEl.setAttribute("data-part", "item-text");
            }

            // Inject hidden input
            const hiddenInput = document.createElement("input");
            hiddenInput.type = "radio";
            hiddenInput.className = cn(radioGroupItemHiddenInput);
            hiddenInput.style.display = "none";
            hiddenInput.value = val;
            item.appendChild(hiddenInput);

            function select() {
                root.querySelectorAll<HTMLElement>('[data-component="radio-group-item"]').forEach((i) => {
                    i.removeAttribute("data-state");
                    i.querySelector<HTMLElement>('[data-component="radio-group-item-control"]')?.removeAttribute("data-state");
                });
                item.setAttribute("data-state", "checked");
                controlEl?.setAttribute("data-state", "checked");
                hiddenInput.checked = true;
                updateIndicator();
            }

            item.addEventListener("click", select);

            if (val === defaultValue) {
                item.setAttribute("data-state", "checked");
                controlEl?.setAttribute("data-state", "checked");
                hiddenInput.checked = true;
            }
        });

        requestAnimationFrame(updateIndicator);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRadioGroup);
} else {
    initRadioGroup();
}
