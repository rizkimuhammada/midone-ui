import { cn } from "@midoneui/core/src/utils/cn";
import {
    avatarRootVariants,
    avatarFallback,
    avatarImage,
} from "@midoneui/core/src/styles/avatar.styles";

function initAvatars() {
    document.querySelectorAll(".avatar-root").forEach((root) => {
        const borderedAttr = root.getAttribute("data-bordered");
        const bordered = borderedAttr === "false" ? false : true;

        // Capture user classes (e.g. rounded-full) before overwriting className
        const userClasses = Array.from(root.classList).filter(c => c !== "avatar-root");

        // Apply variant classes, then re-apply user classes so they win over base (e.g. rounded-full > rounded-xl)
        root.className = cn(avatarRootVariants({ bordered }), "avatar-root");
        root.setAttribute("data-scope", "avatar");
        root.setAttribute("data-part", "root");
        for (const cls of userClasses) {
            if (/^rounded-/.test(cls)) {
                Array.from(root.classList)
                    .filter(c => /^rounded-/.test(c))
                    .forEach(c => root.classList.remove(c));
            }
            root.classList.add(cls);
        }

        // Apply fallback class
        root.querySelectorAll(".avatar-fallback").forEach((el) => {
            el.className = cn(avatarFallback, el.className);
            el.setAttribute("data-scope", "avatar");
            el.setAttribute("data-part", "fallback");
        });

        // Apply image class + show/hide logic (replicates zag-js avatar behavior)
        root.querySelectorAll(".avatar-image").forEach((el) => {
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
