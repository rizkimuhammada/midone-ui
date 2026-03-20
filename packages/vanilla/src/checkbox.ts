import { cn } from "@midoneui/core/src/utils/cn";
import {
    checkboxRoot,
    checkboxControl,
    checkboxIndicator,
    checkboxLabel,
    checkboxHiddenInput,
} from "@midoneui/core/src/styles/checkbox.styles";
import { label } from "@midoneui/core/src/styles/label.styles";

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

function initCheckbox() {
    document.querySelectorAll<HTMLElement>(".checkbox-root").forEach((root) => {
        const control = root.querySelector<HTMLElement>(".checkbox-control");
        const labelEl = root.querySelector<HTMLElement>(".checkbox-label");

        // Inject indicator (with check icon) into control
        const indicator = document.createElement("div");
        indicator.innerHTML = CHECK_SVG;
        control?.appendChild(indicator);

        // Inject hidden checkbox input into root
        const input = document.createElement("input");
        input.type = "checkbox";
        input.style.display = "none";
        root.appendChild(input);

        // Apply classes
        root.className = cn(checkboxRoot, root.className);
        root.setAttribute("data-scope", "checkbox");
        root.setAttribute("data-part", "root");
        if (control) {
            control.className = cn(checkboxControl, control.className);
            control.setAttribute("data-scope", "checkbox");
            control.setAttribute("data-part", "control");
        }
        indicator.className = cn(checkboxIndicator);
        indicator.setAttribute("data-scope", "checkbox");
        indicator.setAttribute("data-part", "indicator");
        if (labelEl) {
            labelEl.className = cn(label, checkboxLabel, labelEl.className);
            labelEl.setAttribute("data-scope", "checkbox");
            labelEl.setAttribute("data-part", "label");
        }
        input.className = cn(checkboxHiddenInput);
        input.setAttribute("data-scope", "checkbox");
        input.setAttribute("data-part", "hidden-input");

        function setState(checked: boolean) {
            const state = checked ? "checked" : "unchecked";
            control?.setAttribute("data-state", state);
            indicator.setAttribute("data-state", state);
            if (checked) {
                indicator.removeAttribute("hidden");
            } else {
                indicator.setAttribute("hidden", "");
            }
        }

        setState(false);

        // Clicking the label toggles the hidden input
        root.addEventListener("click", () => {
            input.checked = !input.checked;
            setState(input.checked);
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCheckbox);
} else {
    initCheckbox();
}
