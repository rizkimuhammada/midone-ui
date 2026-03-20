import { cn } from "@midoneui/core/src/utils/cn";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";

function initButtons() {
    // Cari elemen dengan class "button" (kebab-case)
    document.querySelectorAll(".button").forEach((btn) => {
        const variant = btn.getAttribute("data-variant") as any || "primary";
        const size = btn.getAttribute("data-size") as any || "default";
        const look = btn.getAttribute("data-look") as any || "flat";

        // Tambahkan class dari core styles menggunakan cn untuk resolusi konflik
        const variantClasses = buttonVariants({ variant, size, look });
        btn.className = cn(variantClasses, btn.className);
        btn.setAttribute("data-scope", "button");
        btn.setAttribute("data-part", "root");
        
        // Loading logic
        if (btn.hasAttribute("data-loading")) {
            const loader = document.createElement("span");
            loader.className = "animate-spin mr-2";
            loader.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle size-4"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`;
            btn.prepend(loader);
            (btn as HTMLButtonElement).disabled = true;
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButtons);
} else {
    initButtons();
}
