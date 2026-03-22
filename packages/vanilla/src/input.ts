import { cn } from "@midoneui/core/src/utils/cn";
import { input } from "@midoneui/core/src/styles/input.styles";

function initInputs() {
    document.querySelectorAll<HTMLInputElement>("input.input").forEach(el => {
        const userClasses = Array.from(el.classList).filter(c => c !== "input");
        el.className = cn(input, "input", ...userClasses);
        el.setAttribute("data-scope", "input");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initInputs);
} else {
    initInputs();
}
