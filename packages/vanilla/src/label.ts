import { cn } from "@midoneui/core/src/utils/cn";
import { label } from "@midoneui/core/src/styles/label.styles";

function initLabels() {
    document.querySelectorAll<HTMLElement>('[data-component="label"]').forEach(el => {
        el.className = cn(label, el.className);
        el.setAttribute("data-scope", "label");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLabels);
} else {
    initLabels();
}
