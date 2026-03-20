import { cn } from "@midoneui/core/src/utils/cn";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";

function initBoxes() {
    document.querySelectorAll(".box").forEach((box) => {
        const raised = box.getAttribute("data-raised") as any;

        // Capture user-specified extra classes (excluding the 'box' selector class)
        const userClasses = Array.from(box.classList).filter(c => c !== "box");

        // Apply variant classes (full, including p-5 default)
        const variantClasses = boxVariants({ raised });
        box.className = cn(variantClasses, "box");
        box.setAttribute("data-scope", "box");
        box.setAttribute("data-part", "root");

        // Re-apply user classes via classList to guarantee they override variant defaults.
        // This bypasses tailwind-merge v2 / Tailwind v4 conflict resolution issues.
        for (const cls of userClasses) {
            if (/^!?p-/.test(cls)) {
                // Remove all p-* shorthand padding classes from variant before adding user's
                Array.from(box.classList)
                    .filter(c => /^p-\d/.test(c))
                    .forEach(c => box.classList.remove(c));
            }
            box.classList.add(cls);
        }

        // Last resort: if user specified p-0, force it via inline style so it
        // wins regardless of CSS cascade or external class overrides.
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
