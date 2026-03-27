import { cn } from "@midoneui/core/src/utils/cn";
import {
    sheetTrigger,
    sheetBackdrop,
    sheetPositioner,
    sheetContent,
    sheetTitle,
    sheetDescription,
    sheetCloseTrigger,
} from "@midoneui/core/src/styles/sheet.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const CLOSE_DURATION = 400;

function initSheet() {
    document.querySelectorAll<HTMLElement>('[data-component="sheet-root"]').forEach(root => {
        const triggerEl = root.querySelector<HTMLElement>('[data-component="sheet-trigger"]');
        const contentEl = root.querySelector<HTMLElement>('[data-component="sheet-content"]')!;
        if (!contentEl) return;

        const side = (contentEl.getAttribute("data-side") ?? "right") as string;

        // Apply trigger styles
        if (triggerEl) {
            triggerEl.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), sheetTrigger, triggerEl.className);
            triggerEl.setAttribute("data-scope", "sheet");
            triggerEl.setAttribute("data-part", "trigger");
        }

        // Detach content from DOM
        contentEl.remove();

        // Apply content classes: box(raised=double) + sheetContent
        contentEl.className = cn(boxVariants({ raised: "double" }), sheetContent, contentEl.className);
        contentEl.setAttribute("data-scope", "sheet");
        contentEl.setAttribute("data-part", "content");
        contentEl.setAttribute("data-side", side);

        // Wrap user children in inner div
        const innerDiv = document.createElement("div");
        while (contentEl.firstChild) innerDiv.appendChild(contentEl.firstChild);
        contentEl.appendChild(innerDiv);

        // Apply sub-element styles
        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-title"]').forEach(el => {
            el.className = cn(sheetTitle, el.className);
            el.setAttribute("data-scope", "sheet");
            el.setAttribute("data-part", "title");
        });
        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-description"]').forEach(el => {
            el.className = cn(sheetDescription, el.className);
            el.setAttribute("data-scope", "sheet");
            el.setAttribute("data-part", "description");
        });

        // Process close triggers
        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btn => {
            btn.setAttribute("data-scope", "sheet");
            btn.setAttribute("data-part", "close-trigger");
            if (btn.childElementCount === 0 && !btn.textContent?.trim()) {
                // Empty → corner X icon button
                btn.className = cn(buttonVariants({ variant: "ghost" }), sheetCloseTrigger, btn.className);
                btn.innerHTML = X_SVG;
            } else {
                // Has children → secondary/outline button
                const variant = (btn.getAttribute("data-variant") as any) ?? "secondary";
                const look = (btn.getAttribute("data-look") as any) ?? "outline";
                btn.className = cn(buttonVariants({ variant, look }), btn.className);
            }
        });

        // Create backdrop & positioner
        const backdropEl = document.createElement("div");
        backdropEl.className = cn(sheetBackdrop);
        backdropEl.setAttribute("data-scope", "sheet");
        backdropEl.setAttribute("data-part", "backdrop");

        const positionerEl = document.createElement("div");
        positionerEl.className = cn(sheetPositioner);
        positionerEl.setAttribute("data-scope", "sheet");
        positionerEl.setAttribute("data-part", "positioner");
        positionerEl.appendChild(contentEl);

        function openSheet() {
            document.body.appendChild(backdropEl);
            document.body.appendChild(positionerEl);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    backdropEl.setAttribute("data-state", "open");
                    contentEl.setAttribute("data-state", "open");
                });
            });
        }

        function closeSheet() {
            backdropEl.setAttribute("data-state", "closed");
            contentEl.setAttribute("data-state", "closed");

            // Remove backdrop immediately when its own animation ends (prevents snap-back flash)
            backdropEl.addEventListener("animationend", () => {
                backdropEl.remove();
            }, { once: true });

            // Remove positioner when content animation ends
            contentEl.addEventListener("animationend", () => {
                positionerEl.remove();
            }, { once: true });

            // Fallback in case animationend doesn't fire
            setTimeout(() => {
                backdropEl.remove();
                positionerEl.remove();
            }, CLOSE_DURATION + 100);
        }

        // Close triggers click
        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btn => {
            btn.addEventListener("click", closeSheet);
        });

        // Close on backdrop click + Escape key
        backdropEl.addEventListener("click", closeSheet);
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && document.body.contains(backdropEl)) closeSheet();
        });

        triggerEl?.addEventListener("click", openSheet);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSheet);
} else {
    initSheet();
}
