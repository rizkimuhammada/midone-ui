import { cn } from "@midoneui/core/src/utils/cn";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";

function initButtons() {
    document.querySelectorAll<HTMLElement>('[data-component="button"]').forEach((btnEl) => {
        const button = handleAsChild(btnEl);
        
        const look = button.getAttribute("data-look") as any;
        const variant = button.getAttribute("data-variant") as any;
        const size = button.getAttribute("data-size") as any;

        const options: any = {};
        if (look) options.look = look;
        if (variant) options.variant = variant;
        if (size) options.size = size;

        button.className = cn(buttonVariants(options), button.className);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButtons);
} else {
    initButtons();
}
