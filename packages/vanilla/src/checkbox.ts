import { cn } from "@midoneui/core/src/utils/cn";
import {
    checkboxRoot,
    checkboxControl,
    checkboxIndicator,
    checkboxLabel,
    checkboxHiddenInput,
} from "@midoneui/core/src/styles/checkbox.styles";
import { label } from "@midoneui/core/src/styles/label.styles";
import { handleAsChild } from "./slot";

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

function initCheckbox() {
    document.querySelectorAll<HTMLElement>(".checkbox-root").forEach((rootEl) => {
        const root = handleAsChild(rootEl);
        const controlEl = root.querySelector<HTMLElement>(".checkbox-control");
        const labelEl = root.querySelector<HTMLElement>(".checkbox-label");

        const indicator = document.createElement("div");
        indicator.innerHTML = CHECK_SVG;
        controlEl?.appendChild(indicator);

        const input = document.createElement("input");
        input.type = "checkbox";
        input.style.display = "none";
        root.appendChild(input);

        root.className = cn(checkboxRoot, root.className);
        root.setAttribute("data-scope", "checkbox");
        root.setAttribute("data-part", "root");

        if (controlEl) {
            const control = handleAsChild(controlEl);
            control.className = cn(checkboxControl, control.className);
            control.setAttribute("data-scope", "checkbox");
            control.setAttribute("data-part", "control");
        }
        indicator.className = cn(checkboxIndicator);
        indicator.setAttribute("data-scope", "checkbox");
        indicator.setAttribute("data-part", "indicator");
        if (labelEl) {
            const labelNode = handleAsChild(labelEl);
            labelNode.className = cn(label, checkboxLabel, labelNode.className);
            labelNode.setAttribute("data-scope", "checkbox");
            labelNode.setAttribute("data-part", "label");
        }
        input.className = cn(checkboxHiddenInput);
        input.setAttribute("data-scope", "checkbox");
        input.setAttribute("data-part", "hidden-input");

        function setState(checked: boolean) {
            const state = checked ? "checked" : "unchecked";
            const currentControl = root.querySelector("[data-part='control']");
            currentControl?.setAttribute("data-state", state);
            indicator.setAttribute("data-state", state);
            if (checked) indicator.removeAttribute("hidden");
            else indicator.setAttribute("hidden", "");
        }

        setState(false);
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
