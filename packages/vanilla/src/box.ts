import { cn } from "@midoneui/core/src/utils/cn";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";

function initBoxes() {
    document.querySelectorAll(".box").forEach((box) => {
        const raised = box.getAttribute("data-raised") as any;

        // Capture user-specified extra classes (excluding the 'box' selector class)
        const userClasses = Array.from(box.classList).filter((c) => c !== "box");

        // Apply variant classes (full, including p-5 default)
        const variantClasses = boxVariants({ raised });
        
        // Merge variant classes with user classes using cn() to properly resolve conflicts
        box.className = cn(variantClasses, "box", userClasses.join(" "));

        box.setAttribute("data-scope", "box");
        box.setAttribute("data-part", "root");

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
