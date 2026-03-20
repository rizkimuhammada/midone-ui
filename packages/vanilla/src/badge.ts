import { cn } from "@midoneui/core/src/utils/cn";
import { badgeVariants } from "@midoneui/core/src/styles/badge.styles";

function initBadges() {
    document.querySelectorAll(".badge").forEach((badge) => {
        const variant = badge.getAttribute("data-variant") as any || "primary";
        const look = badge.getAttribute("data-look") as any || "flat";

        badge.className = cn(badgeVariants({ variant, look }), badge.className);
        badge.setAttribute("data-scope", "badge");
        badge.setAttribute("data-part", "root");

        // Map data-content to native title for basic tooltip support
        const content = badge.getAttribute("data-content");
        if (content) {
            badge.setAttribute("title", content);
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBadges);
} else {
    initBadges();
}
