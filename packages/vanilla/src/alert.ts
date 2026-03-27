import { cn } from "@midoneui/core/src/utils/cn";
import {
    alertRootVariants,
    alertTitle,
    alertDescription,
    alertCloseTrigger,
    alertIcon,
} from "@midoneui/core/src/styles/alert.styles";
import { handleAsChild } from "./slot";

function initAlerts() {
    // 1. Inisialisasi Root Alert
    document.querySelectorAll<HTMLElement>('[data-component="alert-root"]').forEach((alertEl) => {
        const alert = handleAsChild(alertEl);
        const variant =
            (alert.getAttribute("data-variant") as any) || "primary";
        const look = (alert.getAttribute("data-look") as any) || "flat";

        // Terapkan gaya root menggunakan cn untuk resolusi konflik
        alert.className = cn(
            alertRootVariants({ variant, look }),
            alert.className
        );
        alert.setAttribute("data-scope", "alert");
        alert.setAttribute("data-part", "root");

        // 2. Inisialisasi Title
        alert.querySelectorAll<HTMLElement>('[data-component="alert-title"]').forEach((titleEl) => {
            const title = handleAsChild(titleEl);
            title.className = cn(alertTitle, title.className);
            title.setAttribute("data-scope", "alert");
            title.setAttribute("data-part", "title");
        });

        // 3. Inisialisasi Description
        alert
            .querySelectorAll<HTMLElement>('[data-component="alert-description"]')
            .forEach((descEl) => {
                const desc = handleAsChild(descEl);
                desc.className = cn(
                    alertDescription,
                    desc.className
                );
                desc.setAttribute("data-scope", "alert");
                desc.setAttribute("data-part", "description");
            });

        // 4. Inisialisasi Icon - apply classes directly to the inner SVG element,
        //    then unwrap the div, matching Vue's <Slot> behavior in AlertIcon.vue
        alert.querySelectorAll<HTMLElement>('[data-component="alert-icon"]').forEach((iconEl) => {
            const icon = handleAsChild(iconEl);
            const innerIcon = icon.firstElementChild;
            if (innerIcon) {
                innerIcon.setAttribute(
                    "class",
                    cn(alertIcon, innerIcon.getAttribute("class") ?? "")
                );
                innerIcon.setAttribute("data-scope", "alert");
                innerIcon.setAttribute("data-part", "icon");
                icon.replaceWith(innerIcon);
            }
        });

        // 5. Inisialisasi Close Trigger
        alert
            .querySelectorAll<HTMLElement>('[data-component="alert-close-trigger"]')
            .forEach((triggerEl) => {
                const trigger = handleAsChild(triggerEl);
                trigger.className = cn(alertCloseTrigger, trigger.className);
                trigger.setAttribute("data-scope", "alert");
                trigger.setAttribute("data-part", "close-trigger");

                // Tambahkan SVG X icon jika kosong
                if (trigger.innerHTML.trim() === "") {
                    trigger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
                }

                // Logic untuk menghapus alert
                trigger.addEventListener("click", () => {
                    alert.classList.add(
                        "transition-opacity",
                        "duration-300",
                        "opacity-0"
                    );
                    setTimeout(() => {
                        alert.remove();
                    }, 300);
                });
            });
    });
}

// Inisialisasi saat DOM siap
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAlerts);
} else {
    initAlerts();
}
