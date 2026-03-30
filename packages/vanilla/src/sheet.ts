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
import { handleAsChild } from "./slot";

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const CLOSE_DURATION = 400;

type SheetControls = { open: () => void; close: () => void };
const sheetRegistry = new Map<string, SheetControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.sheet = sheetRegistry;

function buildSheet(contentEl: HTMLElement) {
    const isAsChild = contentEl.hasAttribute("data-as-child");
    const content = handleAsChild(contentEl);
    const side = (content.getAttribute("data-side") ?? "right") as string;

    if (!isAsChild) {
        content.className = cn(boxVariants({ raised: "double" }), sheetContent, content.className);
        content.setAttribute("data-scope", "sheet");
        content.setAttribute("data-part", "content");
        content.setAttribute("data-side", side);
        
        // Wrap user children in inner div
        const innerDiv = document.createElement("div");
        while (content.firstChild) innerDiv.appendChild(content.firstChild);
        content.appendChild(innerDiv);

        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-title"]').forEach(el => {
            const title = handleAsChild(el);
            title.className = cn(sheetTitle, title.className);
            title.setAttribute("data-scope", "sheet");
            title.setAttribute("data-part", "title");
        });
        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-description"]').forEach(el => {
            const desc = handleAsChild(el);
            desc.className = cn(sheetDescription, desc.className);
            desc.setAttribute("data-scope", "sheet");
            desc.setAttribute("data-part", "description");
        });

        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btnEl => {
            const isAsChildTrigger = btnEl.hasAttribute("data-as-child");
            const btn = handleAsChild(btnEl);
            btn.setAttribute("data-scope", "sheet");
            btn.setAttribute("data-part", "close-trigger");
            if (!isAsChildTrigger) {
                if (btn.childElementCount === 0 && !btn.textContent?.trim()) {
                    btn.className = cn(buttonVariants({ variant: "ghost" }), sheetCloseTrigger, btn.className);
                    btn.innerHTML = X_SVG;
                } else {
                    const variant = (btn.getAttribute("data-variant") as any) ?? "secondary";
                    const look = (btn.getAttribute("data-look") as any) ?? "outline";
                    btn.className = cn(buttonVariants({ variant, look }), btn.className);
                }
            }
        });

        innerDiv.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btn => {
            btn.addEventListener("click", closeSheet);
        });
    } else {
        content.setAttribute("data-scope", "sheet");
        content.setAttribute("data-part", "content");
        content.setAttribute("data-side", side);
        
        content.querySelectorAll<HTMLElement>('[data-component="sheet-close-trigger"]').forEach(btn => {
            btn.addEventListener("click", closeSheet);
        });
    }

    const backdropEl = document.createElement("div");
    backdropEl.className = cn(sheetBackdrop);
    backdropEl.setAttribute("data-scope", "sheet");
    backdropEl.setAttribute("data-part", "backdrop");

    const positionerEl = document.createElement("div");
    positionerEl.className = cn(sheetPositioner);
    positionerEl.setAttribute("data-scope", "sheet");
    positionerEl.setAttribute("data-part", "positioner");
    positionerEl.appendChild(content);

    function openSheet() {
        document.body.appendChild(backdropEl);
        document.body.appendChild(positionerEl);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                backdropEl.setAttribute("data-state", "open");
                content.setAttribute("data-state", "open");
            });
        });
    }

    function closeSheet() {
        backdropEl.setAttribute("data-state", "closed");
        content.setAttribute("data-state", "closed");

        backdropEl.addEventListener("animationend", () => {
            backdropEl.remove();
        }, { once: true });

        content.addEventListener("animationend", () => {
            positionerEl.remove();
        }, { once: true });

        setTimeout(() => {
            backdropEl.remove();
            positionerEl.remove();
        }, CLOSE_DURATION + 100);
    }

    backdropEl.addEventListener("click", closeSheet);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && document.body.contains(backdropEl)) closeSheet();
    });

    return { open: openSheet, close: closeSheet };
}

function initSheet() {
    document.querySelectorAll<HTMLElement>('[data-component="sheet-root"]').forEach(rootEl => {
        const root = handleAsChild(rootEl);
        const triggerEl = root.querySelector<HTMLElement>('[data-component="sheet-trigger"]');
        const contentEl = root.querySelector<HTMLElement>('[data-component="sheet-content"]');
        if (!contentEl) return;

        contentEl.remove();
        const controls = buildSheet(contentEl);

        if (triggerEl) {
            const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
            const trigger = handleAsChild(triggerEl);
            if (!isAsChildTrigger) {
                trigger.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), sheetTrigger, trigger.className);
            }
            trigger.setAttribute("data-scope", "sheet");
            trigger.setAttribute("data-part", "trigger");
            trigger.addEventListener("click", () => controls.open());
        }

        const id = root.id;
        if (id) sheetRegistry.set(id, controls);

        if (root.getAttribute("data-open") === "true") {
            controls.open();
        }
    });

    document.querySelectorAll<HTMLElement>("[data-sheet-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-sheet-target")!;
        const controls = sheetRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.open);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSheet);
} else {
    initSheet();
}
