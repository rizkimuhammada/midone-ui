import { cn } from "@midoneui/core/src/utils/cn";
import {
    avatarRootVariants,
    avatarFallback,
    avatarImage,
} from "@midoneui/core/src/styles/avatar.styles";
import { handleAsChild } from "./slot";

function initAvatars() {
    document.querySelectorAll<HTMLElement>(".avatar-root").forEach((rootEl) => {
        const root = handleAsChild(rootEl);
        const borderedAttr = root.getAttribute("data-bordered");
        const bordered = borderedAttr === "false" ? false : true;

        // Capture user classes (e.g. rounded-full, size-8) before overwriting className
        const userClasses = Array.from(root.classList).filter((c) => c !== "avatar-root");

        // Use cn to merge variants with user classes correctly (replicates Vue twMerge behavior)
        root.className = cn(avatarRootVariants({ bordered }), "avatar-root", ...userClasses);
        root.setAttribute("data-scope", "avatar");
        root.setAttribute("data-part", "root");

        // Apply fallback class
        root.querySelectorAll<HTMLElement>(".avatar-fallback").forEach((fallbackEl) => {
            const el = handleAsChild(fallbackEl);
            el.className = cn(avatarFallback, el.className);
            el.setAttribute("data-scope", "avatar");
            el.setAttribute("data-part", "fallback");
        });

        // Apply image class + show/hide logic (replicates zag-js avatar behavior)
        root.querySelectorAll<HTMLElement>(".avatar-image").forEach((imageEl) => {
            const el = handleAsChild(imageEl);
            const img = el as HTMLImageElement;
            img.className = cn(avatarImage, img.className);
            img.setAttribute("data-scope", "avatar");
            img.setAttribute("data-part", "image");

            const fallback = root.querySelector(".avatar-fallback") as HTMLElement | null;

            const showImage = () => {
                img.style.display = "";
                if (fallback) fallback.style.display = "none";
            };

            const hideImage = () => {
                img.style.display = "none";
                if (fallback) fallback.style.display = "";
            };

            // Start hidden until confirmed loaded
            hideImage();

            img.addEventListener("load", showImage);
            img.addEventListener("error", hideImage);

            // Handle already-cached images
            if (img.complete && img.naturalWidth > 0) {
                showImage();
            }
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAvatars);
} else {
    initAvatars();
}
