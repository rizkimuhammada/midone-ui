import { cn } from "@midoneui/core/src/utils/cn";
import { textarea } from "@midoneui/core/src/styles/textarea.styles";

function initTextarea() {
    document.querySelectorAll<HTMLTextAreaElement>("textarea.textarea").forEach((el) => {
        el.className = cn(textarea, el.className);
        el.setAttribute("data-scope", "textarea");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTextarea);
} else {
    initTextarea();
}
