import { cn } from "@midoneui/core/src/utils/cn";
import { input } from "@midoneui/core/src/styles/input.styles";

export function initInputs(root: ParentNode = document) {
    root.querySelectorAll<HTMLInputElement>('[data-component="input"]').forEach(el => {
        el.className = cn(input, el.className);
        el.setAttribute("data-scope", "input");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initInputs());
} else {
    initInputs();
}
