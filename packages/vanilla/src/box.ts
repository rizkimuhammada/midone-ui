import { cn } from "@midoneui/core/src/utils/cn";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { handleAsChild } from "./slot";

function initBoxes() {
    document.querySelectorAll<HTMLElement>(".box").forEach((boxEl) => {
        const box = handleAsChild(boxEl);

        const skipClasses = ["input", "native-select"];
        if (skipClasses.some((c) => box.classList.contains(c))) {
            return;
        }

        const raisedAttr = box.getAttribute("data-raised") as any;
        const userClasses = Array.from(box.classList);

        const options: any = {};
        if (raisedAttr) options.raised = raisedAttr;

        box.className = cn(boxVariants(options), box.className);

        if (userClasses.includes("p-0")) {
            (box as HTMLElement).style.padding = "0";
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBoxes);
} else {
    initBoxes();
}
