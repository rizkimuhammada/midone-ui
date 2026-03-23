import { cn } from "@midoneui/core/src/utils/cn";
import {
    dialogTrigger,
    dialogBackdrop,
    dialogPositioner,
    dialogContent,
    dialogTitle,
    dialogDescription,
    dialogCloseTrigger,
} from "@midoneui/core/src/styles/dialog.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const CLOSE_DURATION = 400;

type DialogControls = { open: () => void; close: () => void };
const dialogRegistry = new Map<string, DialogControls>();

function buildDialog(contentEl: HTMLElement) {
    const isAsChild = contentEl.hasAttribute("data-as-child");
    const content = handleAsChild(contentEl);
    
    if (!isAsChild) {
        content.className = cn(boxVariants({ raised: "double" }), dialogContent, content.className);
        
        // Internal structural div for non-as-child
        const innerDiv = document.createElement("div");
        while (content.firstChild) innerDiv.appendChild(content.firstChild);
        content.appendChild(innerDiv);
        
        innerDiv.querySelectorAll<HTMLElement>(".dialog-title").forEach(el => {
            const title = handleAsChild(el);
            title.className = cn(dialogTitle, title.className);
            title.setAttribute("data-scope", "dialog");
            title.setAttribute("data-part", "title");
        });
        innerDiv.querySelectorAll<HTMLElement>(".dialog-description").forEach(el => {
            const desc = handleAsChild(el);
            desc.className = cn(dialogDescription, desc.className);
            desc.setAttribute("data-scope", "dialog");
            desc.setAttribute("data-part", "description");
        });

        innerDiv.querySelectorAll<HTMLElement>(".dialog-close-trigger").forEach(btnEl => {
            const isAsChildTrigger = btnEl.hasAttribute("data-as-child");
            const btn = handleAsChild(btnEl);
            btn.setAttribute("data-scope", "dialog");
            btn.setAttribute("data-part", "close-trigger");
            
            if (!isAsChildTrigger) {
                if (btn.childElementCount === 0 && !btn.textContent?.trim()) {
                    btn.className = cn(buttonVariants({ variant: "ghost" }), dialogCloseTrigger, btn.className);
                    btn.innerHTML = X_SVG;
                } else {
                    const variant = (btn.getAttribute("data-variant") as any) ?? "secondary";
                    const look = (btn.getAttribute("data-look") as any) ?? "outline";
                    btn.className = cn(buttonVariants({ variant, look }), btn.className);
                }
            }
        });
        
        innerDiv.querySelectorAll<HTMLElement>(".dialog-close-trigger").forEach(btn => {
            btn.addEventListener("click", closeDialog);
        });
    } else {
        // Just apply basic parts if as-child
        content.setAttribute("data-scope", "dialog");
        content.setAttribute("data-part", "content");
        
        content.querySelectorAll<HTMLElement>(".dialog-close-trigger").forEach(btn => {
            btn.addEventListener("click", closeDialog);
        });
    }

    const backdropEl = document.createElement("div");
    backdropEl.className = cn(dialogBackdrop);
    backdropEl.setAttribute("data-scope", "dialog");
    backdropEl.setAttribute("data-part", "backdrop");

    const positionerEl = document.createElement("div");
    positionerEl.className = cn(dialogPositioner);
    positionerEl.setAttribute("data-scope", "dialog");
    positionerEl.setAttribute("data-part", "positioner");
    positionerEl.appendChild(content);

    function openDialog() {
        document.body.appendChild(backdropEl);
        document.body.appendChild(positionerEl);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                backdropEl.setAttribute("data-state", "open");
                content.setAttribute("data-state", "open");
            });
        });
    }

    function closeDialog() {
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

    backdropEl.addEventListener("click", closeDialog);
    const keydownHandler = (e: KeyboardEvent) => {
        if (e.key === "Escape" && document.body.contains(backdropEl)) closeDialog();
    };
    document.addEventListener("keydown", keydownHandler);

    return { open: openDialog, close: closeDialog };
}

function initDialog() {
    document.querySelectorAll<HTMLElement>(".dialog-root").forEach(rootEl => {
        const root = handleAsChild(rootEl);
        const triggerEl = root.querySelector<HTMLElement>(".dialog-trigger");
        const contentEl = root.querySelector<HTMLElement>(".dialog-content");
        if (!contentEl) return;

        if (triggerEl) {
            const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
            const trigger = handleAsChild(triggerEl);
            if (!isAsChildTrigger) {
                trigger.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), dialogTrigger, trigger.className);
            }
            trigger.setAttribute("data-scope", "dialog");
            trigger.setAttribute("data-part", "trigger");
            trigger.addEventListener("click", () => {
                 const controls = dialogRegistry.get(root.id);
                 if (controls) controls.open();
            });
        }

        contentEl.remove();
        const controls = buildDialog(contentEl);

        const id = root.id;
        if (id) dialogRegistry.set(id, controls);

        if (root.getAttribute("data-open") === "true") {
            controls.open();
        }
    });

    document.querySelectorAll<HTMLElement>("[data-dialog-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-dialog-target")!;
        const controls = dialogRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.open);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDialog);
} else {
    initDialog();
}
