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

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
const CLOSE_DURATION = 400;

type DialogControls = { open: () => void; close: () => void };
const dialogRegistry = new Map<string, DialogControls>();

function buildDialog(contentEl: HTMLElement) {
    // Apply content classes: box(raised=double) + dialogContent
    contentEl.className = cn(boxVariants({ raised: "double" }), dialogContent, contentEl.className);
    contentEl.setAttribute("data-scope", "dialog");
    contentEl.setAttribute("data-part", "content");

    // Wrap user children in inner div (mirrors Vue <Box><div><slot/></div></Box>)
    const innerDiv = document.createElement("div");
    while (contentEl.firstChild) innerDiv.appendChild(contentEl.firstChild);
    contentEl.appendChild(innerDiv);

    // Apply sub-element styles
    innerDiv.querySelectorAll<HTMLElement>(".dialog-title").forEach(el => {
        el.className = cn(dialogTitle, el.className);
        el.setAttribute("data-scope", "dialog");
        el.setAttribute("data-part", "title");
    });
    innerDiv.querySelectorAll<HTMLElement>(".dialog-description").forEach(el => {
        el.className = cn(dialogDescription, el.className);
        el.setAttribute("data-scope", "dialog");
        el.setAttribute("data-part", "description");
    });

    // Process close triggers
    innerDiv.querySelectorAll<HTMLElement>(".dialog-close-trigger").forEach(btn => {
        btn.setAttribute("data-scope", "dialog");
        btn.setAttribute("data-part", "close-trigger");
        if (btn.childElementCount === 0 && !btn.textContent?.trim()) {
            // Empty → corner X icon button
            btn.className = cn(buttonVariants({ variant: "ghost" }), dialogCloseTrigger, btn.className);
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
    backdropEl.className = cn(dialogBackdrop);
    backdropEl.setAttribute("data-scope", "dialog");
    backdropEl.setAttribute("data-part", "backdrop");

    const positionerEl = document.createElement("div");
    positionerEl.className = cn(dialogPositioner);
    positionerEl.setAttribute("data-scope", "dialog");
    positionerEl.setAttribute("data-part", "positioner");
    positionerEl.appendChild(contentEl);

    function openDialog() {
        document.body.appendChild(backdropEl);
        document.body.appendChild(positionerEl);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                backdropEl.setAttribute("data-state", "open");
                contentEl.setAttribute("data-state", "open");
            });
        });
    }

    function closeDialog() {
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
    innerDiv.querySelectorAll<HTMLElement>(".dialog-close-trigger").forEach(btn => {
        btn.addEventListener("click", closeDialog);
    });

    // Close on backdrop click + Escape key
    backdropEl.addEventListener("click", closeDialog);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && document.body.contains(backdropEl)) closeDialog();
    });

    return { open: openDialog, close: closeDialog };
}

function initDialog() {
    document.querySelectorAll<HTMLElement>(".dialog-root").forEach(root => {
        const triggerEl = root.querySelector<HTMLElement>(".dialog-trigger");
        const contentEl = root.querySelector<HTMLElement>(".dialog-content");
        if (!contentEl) return;

        // Apply trigger styles
        if (triggerEl) {
            triggerEl.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), dialogTrigger, triggerEl.className);
            triggerEl.setAttribute("data-scope", "dialog");
            triggerEl.setAttribute("data-part", "trigger");
        }

        // Detach content from DOM
        contentEl.remove();

        const controls = buildDialog(contentEl);

        triggerEl?.addEventListener("click", controls.open);

        // Register by root ID for programmatic triggers
        const id = root.id;
        if (id) dialogRegistry.set(id, controls);
    });

    // Wire up external programmatic triggers
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
