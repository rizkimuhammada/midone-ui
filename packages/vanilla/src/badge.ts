import { cn } from "@midoneui/core/src/utils/cn";
import { badgeVariants } from "@midoneui/core/src/styles/badge.styles";

function initBadges() {
    document.querySelectorAll(".badge").forEach((badge) => {
        const variant = badge.getAttribute("data-variant") as any || "primary";
        const look = badge.getAttribute("data-look") as any || "flat";

        const userClasses = Array.from(badge.classList).filter((c) => c !== "badge");
        badge.className = cn(badgeVariants({ variant, look }), "badge", ...userClasses);
        badge.setAttribute("data-scope", "badge");
        badge.setAttribute("data-part", "root");

        // Tooltip is handled globally by tooltip.ts for all elements with [data-content]
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBadges);
} else {
    initBadges();
}
