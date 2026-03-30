import { cn } from "@midoneui/core/src/utils/cn";
import {
    accordionRootVariants,
    accordionItemVariants,
    accordionTrigger,
    accordionContent,
    accordionItemIndicator,
} from "@midoneui/core/src/styles/accordion.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { handleAsChild } from "./slot";

type AccordionControls = { setItemState: (value: string, state: "open" | "closed") => void };
const accordionRegistry = new Map<string, AccordionControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.accordion = accordionRegistry;

function initAccordion() {
    document.querySelectorAll<HTMLElement>('[data-component="accordion-root"]').forEach((rootEl) => {
        const root = handleAsChild(rootEl);
        const variant = (root.getAttribute("data-variant") as any) || "default";
        
        root.className = cn(accordionRootVariants({ variant }), root.className);
        root.setAttribute("data-scope", "accordion");
        root.setAttribute("data-part", "root");

        const defaultValueAttr = root.getAttribute("data-default-value");
        let openValues: string[] = [];
        try {
            if (defaultValueAttr) {
                const jsonStr = defaultValueAttr.replace(/'/g, '"');
                openValues = JSON.parse(jsonStr);
            }
        } catch (e) {
            console.warn("Failed to parse data-default-value. Expected JSON format.", e);
        }

        const isMultiple = root.hasAttribute("data-multiple");

        function setItemState(item: Element, state: "open" | "closed") {
            item.setAttribute("data-state", state);
            const content = item.querySelector('[data-component="accordion-content"]') as HTMLElement;
            const indicator = item.querySelector('[data-component="accordion-indicator"]');
            if (content) {
                content.setAttribute("data-state", state);
                content.style.display = state === "closed" ? "none" : "block";
            }
            if (indicator) indicator.setAttribute("data-state", state);
        }

        root.querySelectorAll<HTMLElement>('[data-component="accordion-item"]').forEach((itemEl) => {
            const item = handleAsChild(itemEl);
            const value = item.getAttribute("data-value") || "";
            const raised = item.getAttribute("data-raised") as any;

            item.setAttribute("data-scope", "accordion");
            item.setAttribute("data-part", "item");

            if (variant === "boxed" && raised) {
                item.className = cn(boxVariants({ raised }), accordionItemVariants({ variant }), item.className);
            } else {
                item.className = cn(accordionItemVariants({ variant }), item.className);
            }

            const triggerEl = item.querySelector<HTMLElement>('[data-component="accordion-trigger"]');
            const contentEl = item.querySelector<HTMLElement>('[data-component="accordion-content"]');

            if (triggerEl) {
                const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
                const trigger = handleAsChild(triggerEl);
                trigger.className = cn(accordionTrigger, trigger.className);
                trigger.setAttribute("data-scope", "accordion");
                trigger.setAttribute("data-part", "item-trigger");

                if (!isAsChildTrigger) {
                    let indicator = trigger.querySelector('[data-component="accordion-indicator"]');
                    if (!indicator) {
                        indicator = document.createElement("span");
                        indicator.className = accordionItemIndicator;
                        indicator.setAttribute("data-component", "accordion-indicator");
                        indicator.setAttribute("data-scope", "accordion");
                        indicator.setAttribute("data-part", "item-indicator");
                        indicator.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`;
                        trigger.appendChild(indicator);
                    }
                }

                trigger.addEventListener("click", () => {
                    const isCurrentlyOpen = item.getAttribute("data-state") === "open";
                    if (!isCurrentlyOpen && !isMultiple) {
                        root.querySelectorAll('[data-component="accordion-item"]').forEach((i) => setItemState(i, "closed"));
                    }
                    setItemState(item, isCurrentlyOpen ? "closed" : "open");
                });

                if (openValues.includes(value)) setItemState(item, "open");
                else setItemState(item, "closed");
            }

            if (contentEl) {
                const content = handleAsChild(contentEl);
                content.className = cn(accordionContent, content.className);
                content.setAttribute("data-scope", "accordion");
                content.setAttribute("data-part", "item-content");
            }
        });

        const id = root.id;
        if (id) {
            accordionRegistry.set(id, {
                setItemState: (val, state) => {
                    const item = root.querySelector(`[data-component="accordion-item"][data-value="${val}"]`);
                    if (item) setItemState(item, state);
                }
            });
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAccordion);
} else {
    initAccordion();
}
