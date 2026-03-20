import { cn } from "@midoneui/core/src/utils/cn";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";

function initSlot() {
    document.querySelectorAll<HTMLElement>(".as-child-box").forEach((wrapper) => {
        const child = wrapper.firstElementChild as HTMLElement | null;
        if (!child) return;
        child.className = cn(boxVariants(), child.className);
        child.setAttribute("data-scope", "slot");
        child.setAttribute("data-part", "root");
        wrapper.replaceWith(child);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSlot);
} else {
    initSlot();
}
