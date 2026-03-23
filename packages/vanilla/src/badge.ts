import { cn } from "@midoneui/core/src/utils/cn";
import { badgeVariants } from "@midoneui/core/src/styles/badge.styles";
import { handleAsChild } from "./slot";

function initBadges() {
    document.querySelectorAll<HTMLElement>(".badge").forEach((badgeEl) => {
        const badge = handleAsChild(badgeEl);
        const variant = badge.getAttribute("data-variant") as any || "primary";
        const look = badge.getAttribute("data-look") as any || "flat";

        const userClasses = Array.from(badge.classList).filter((c) => c !== "badge");
        badge.className = cn(badgeVariants({ variant, look }), "badge", ...userClasses);
        badge.setAttribute("data-scope", "badge");
        badge.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBadges);
} else {
    initBadges();
}
