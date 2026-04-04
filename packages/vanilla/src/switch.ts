import { cn } from "@midoneui/core/src/utils/cn";
import {
    switchRoot,
    switchControl,
    switchThumb,
    switchLabel,
    switchHiddenInput,
} from "@midoneui/core/src/styles/switch.styles";
import { label } from "@midoneui/core/src/styles/label.styles";

function initSwitch() {
    document.querySelectorAll<HTMLElement>('[data-component="switch-root"]').forEach((root) => {
        // Shorthand support (Auto-rendering)
        if (root.children.length === 0) {
            const labelText = root.getAttribute("data-label");
            root.innerHTML = `
                <div data-component="switch-control"></div>
                ${labelText ? `<div data-component="switch-label">${labelText}</div>` : ""}
            `;
        }

        let control = root.querySelector<HTMLElement>('[data-component="switch-control"]');
        let labelEl = root.querySelector<HTMLElement>('[data-component="switch-label"]');

        // Inject thumb into control
        const thumb = document.createElement("span");
        control.appendChild(thumb);

        // Inject hidden checkbox input into root
        const input = document.createElement("input");
        input.type = "checkbox";
        input.style.display = "none";
        root.appendChild(input);

        // Apply classes
        root.className = cn(switchRoot, root.className);
        root.setAttribute("data-scope", "switch");
        root.setAttribute("data-part", "root");
        if (control) {
            control.className = cn(switchControl, control.className);
            control.setAttribute("data-scope", "switch");
            control.setAttribute("data-part", "control");
        }
        thumb.className = cn(switchThumb);
        thumb.setAttribute("data-scope", "switch");
        thumb.setAttribute("data-part", "thumb");
        if (labelEl) {
            labelEl.className = cn(label, switchLabel, labelEl.className);
            labelEl.setAttribute("data-scope", "switch");
            labelEl.setAttribute("data-part", "label");
        }
        input.className = cn(switchHiddenInput);
        input.setAttribute("data-scope", "switch");
        input.setAttribute("data-part", "hidden-input");

        function setState(checked: boolean) {
            const state = checked ? "checked" : "unchecked";
            control?.setAttribute("data-state", state);
            thumb.setAttribute("data-state", state);
        }

        setState(false);

        input.addEventListener("change", () => setState(input.checked));
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSwitch);
} else {
    initSwitch();
}
