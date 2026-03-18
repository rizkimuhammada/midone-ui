import {
    accordionRootVariants,
    accordionItemVariants,
    accordionTrigger,
    accordionContent,
    accordionItemIndicator,
} from "@midoneui/core/src/styles/accordion.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";

function initAccordion() {
    console.log("Initializing Accordion...");

    // 1. Setup Elements with data-raised (Boxes or Items)
    document.querySelectorAll("[data-raised]").forEach((el) => {
        const raised = el.getAttribute("data-raised") as any;
        // Gunakan setAttribute untuk menjaga kebersihan class jika dipanggil berulang
        el.className = el.className + " " + boxVariants({ raised });
    });

    // 2. Setup Accordion Root
    document.querySelectorAll(".accordion-root").forEach((root) => {
        const variant = (root.getAttribute("data-variant") as any) || "default";
        root.className += " " + accordionRootVariants({ variant });

        const defaultValueAttr = root.getAttribute("data-default-value");
        let openValues: string[] = [];
        try {
            if (defaultValueAttr) {
                // Konversi format ['val'] ke valid JSON ["val"]
                const jsonStr = defaultValueAttr.replace(/'/g, '"');
                openValues = JSON.parse(jsonStr);
                console.log("Default open values:", openValues);
            }
        } catch (e) {
            console.warn("Failed to parse data-default-value. Expected JSON format.", e);
        }

        // 3. Setup Accordion Items
        root.querySelectorAll(".accordion-item").forEach((item) => {
            const value = item.getAttribute("data-value") || "";
            item.className += " " + accordionItemVariants({ variant });

            const trigger = item.querySelector(".accordion-trigger");
            const content = item.querySelector(".accordion-content");

            if (trigger) {
                // Berikan style trigger
                trigger.className += " " + accordionTrigger;

                // Injeksi Chevron Indicator jika belum ada
                let indicator = trigger.querySelector(".accordion-indicator");
                if (!indicator) {
                    indicator = document.createElement("span");
                    indicator.className = "accordion-indicator " + accordionItemIndicator;
                    indicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`;
                    trigger.appendChild(indicator);
                }

                // Logic Click (Toggling)
                trigger.addEventListener("click", () => {
                    const isCurrentlyOpen = item.getAttribute("data-state") === "open";

                    // Mode "Single Expand" (Tutup semua yang lain di root ini saat membuka)
                    if (!isCurrentlyOpen) {
                        root.querySelectorAll(".accordion-item").forEach((i) => setItemState(i, "closed"));
                    }

                    // Toggle item yang sedang diklik
                    setItemState(item, isCurrentlyOpen ? "closed" : "open");
                });

                // Set initial state
                if (openValues.includes(value)) {
                    setItemState(item, "open");
                } else {
                    setItemState(item, "closed");
                }
            }

            if (content) {
                content.className += " " + accordionContent;
            }
        });
    });
}

/**
 * Helper untuk mengatur state item, content, dan indicator
 */
function setItemState(item: Element, state: "open" | "closed") {
    item.setAttribute("data-state", state);

    const content = item.querySelector(".accordion-content") as HTMLElement;
    const indicator = item.querySelector(".accordion-indicator");

    if (content) {
        content.setAttribute("data-state", state);
        // Sembunyikan content jika state closed
        if (state === "closed") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }
    if (indicator) indicator.setAttribute("data-state", state);
}

// Jalankan inisialisasi
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccordion);
} else {
    initAccordion();
}
