import { cn } from "@midoneui/core/src/utils/cn";
import { label } from "@midoneui/core/src/styles/label.styles";

function initLabels() {
    document.querySelectorAll<HTMLElement>("label.label").forEach(el => {
        const userClasses = Array.from(el.classList).filter(c => c !== "label");
        el.className = cn(label, "label", ...userClasses);
        el.setAttribute("data-scope", "label");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLabels);
} else {
    initLabels();
}
