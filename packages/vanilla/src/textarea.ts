import { cn } from "@midoneui/core/src/utils/cn";
import { textarea } from "@midoneui/core/src/styles/textarea.styles";

function initTextarea() {
    document.querySelectorAll<HTMLTextAreaElement>("textarea.textarea").forEach((el) => {
        const userClasses = Array.from(el.classList).filter(c => c !== "textarea");
        el.className = cn(textarea, "textarea", ...userClasses);
        el.setAttribute("data-scope", "textarea");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTextarea);
} else {
    initTextarea();
}
