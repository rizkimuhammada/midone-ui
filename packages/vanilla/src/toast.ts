import { cn } from "@midoneui/core/src/utils/cn";
import {
    toastRoot,
    toastTitle,
    toastDescription,
    toastCloseTrigger,
    toasterContainer,
} from "@midoneui/core/src/styles/toast.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";

const X_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

// Stacking config (index 0 = newest/front)
const STACK_Y       = [0, 14, 22]; // px moved up from bottom per depth
const STACK_SCALE   = [1, 0.94, 0.88];
const STACK_OPACITY = [1, 0.85, 0.7];
const HOVER_GAP     = 24; // px gap between toasts in expanded mode

interface ToastEntry {
    el: HTMLElement;
    timer: number;
}

let toasts: ToastEntry[] = []; // [0] = newest (front)
let containerEl: HTMLElement | null = null;
let isHovered = false;

function getContainer(): HTMLElement {
    if (!containerEl) {
        containerEl = document.createElement("div");
        containerEl.className = cn(toasterContainer);
        containerEl.style.cssText =
            "position:fixed;bottom:1rem;right:1rem;z-index:9999;pointer-events:none;" +
            "transition:height 400ms cubic-bezier(0.21,1.02,0.73,1);";

        containerEl.addEventListener("mouseenter", () => {
            isHovered = true;
            updateLayout();
        });
        containerEl.addEventListener("mouseleave", () => {
            isHovered = false;
            updateLayout();
        });

        document.body.appendChild(containerEl);
    }
    return containerEl;
}

function updateLayout(skipIndex = -1) {
    const ct = containerEl;
    if (!ct || toasts.length === 0) {
        if (ct) ct.style.height = "0px";
        return;
    }

    if (!isHovered) {
        // ── Stacked (3D overlap) mode ──────────────────────────────
        const frontH = toasts[0].el.offsetHeight;
        ct.style.height = frontH + "px";

        toasts.forEach((t, i) => {
            if (i === skipIndex) return;
            const stackY     = STACK_Y[i]     ?? STACK_Y[STACK_Y.length - 1];
            const stackScale = STACK_SCALE[i] ?? STACK_SCALE[STACK_SCALE.length - 1];
            const opacity    = i < STACK_OPACITY.length ? STACK_OPACITY[i] : 0;

            t.el.style.setProperty("--y",       `-${stackY}px`);
            t.el.style.setProperty("--scale",   String(stackScale));
            t.el.style.setProperty("--opacity", String(opacity));
            t.el.style.setProperty("--z-index", String(100 - i));
            t.el.style.setProperty("--x",       "0px");
        });
    } else {
        // ── Expanded (hover) mode ──────────────────────────────────
        let totalH = 0;
        toasts.forEach(t => { totalH += t.el.offsetHeight; });
        totalH += HOVER_GAP * (toasts.length - 1);
        ct.style.height = totalH + "px";

        let yFromBottom = 0;
        toasts.forEach((t, i) => {
            if (i === skipIndex) return;
            t.el.style.setProperty("--y",       yFromBottom === 0 ? "0px" : `-${yFromBottom}px`);
            t.el.style.setProperty("--scale",   "1");
            t.el.style.setProperty("--opacity", "1");
            t.el.style.setProperty("--z-index", String(100 - i));
            t.el.style.setProperty("--x",       "0px");
            yFromBottom += t.el.offsetHeight + HOVER_GAP;
        });
    }
}

interface ToastOptions {
    title: string;
    description?: string;
    duration?: number;
}

function createToast(options: ToastOptions) {
    const ct = getContainer();

    const toastEl = document.createElement("div");
    toastEl.className = cn(boxVariants({ raised: "single" }), toastRoot);
    toastEl.setAttribute("data-scope", "toast");
    toastEl.setAttribute("data-part", "root");

    // Start invisible, will animate in
    toastEl.style.position = "absolute";
    toastEl.style.bottom = "0";
    toastEl.style.right = "0";
    toastEl.style.pointerEvents = "auto";
    toastEl.style.setProperty("--x",       "0px");
    toastEl.style.setProperty("--y",       "20px");
    toastEl.style.setProperty("--scale",   "0.95");
    toastEl.style.setProperty("--opacity", "0");
    toastEl.style.setProperty("--z-index", "100");

    // Inner content
    const ghostBefore = document.createElement("span");

    const progressbar = document.createElement("div");
    progressbar.setAttribute("data-scope", "toast");
    progressbar.setAttribute("data-part", "progressbar");

    const titleEl = document.createElement("div");
    titleEl.className = cn(toastTitle);
    titleEl.setAttribute("data-scope", "toast");
    titleEl.setAttribute("data-part", "title");
    titleEl.textContent = options.title;

    const descEl = document.createElement("div");
    descEl.className = cn(toastDescription);
    descEl.setAttribute("data-scope", "toast");
    descEl.setAttribute("data-part", "description");
    if (options.description) descEl.textContent = options.description;

    const closeBtn = document.createElement("button");
    closeBtn.className = cn(buttonVariants({ variant: "ghost" }), toastCloseTrigger);
    closeBtn.setAttribute("data-scope", "toast");
    closeBtn.setAttribute("data-part", "close-trigger");
    closeBtn.innerHTML = X_SVG;

    const ghostAfter = document.createElement("span");

    toastEl.append(ghostBefore, progressbar, titleEl, descEl, closeBtn, ghostAfter);
    ct.appendChild(toastEl);

    // Register entry
    const entry: ToastEntry = { el: toastEl, timer: 0 };

    function dismiss() {
        clearTimeout(entry.timer);
        toastEl.setAttribute("data-state", "closed");
        toastEl.style.setProperty("--opacity", "0");
        toastEl.style.setProperty("--scale",   "0.95");
        toastEl.style.setProperty("--y",       "12px");
        setTimeout(() => {
            toastEl.remove();
            toasts = toasts.filter(t => t !== entry);
            updateLayout();
        }, 400);
    }

    closeBtn.addEventListener("click", dismiss);
    entry.timer = window.setTimeout(dismiss, options.duration ?? 5000);

    // Insert as newest (front) — index 0
    toasts.unshift(entry);

    // Animate in: start from below + invisible, shift existing toasts back, then fly in
    requestAnimationFrame(() => {
        // Shift existing toasts to their new back positions (skip index 0 = entering toast)
        updateLayout(0);
        requestAnimationFrame(() => {
            // Animate new toast from below into position
            toastEl.style.setProperty("--scale",   "1");
            toastEl.style.setProperty("--opacity", "1");
            toastEl.style.setProperty("--y",       "0px");
        });
    });
}

function initToast() {
    document.querySelectorAll<HTMLElement>('[data-component="toast-trigger"]').forEach(el => {
        const trigger = handleAsChild(el);
        const title       = trigger.getAttribute("data-toast-title")       ?? "Notification";
        const description = trigger.getAttribute("data-toast-description") ?? undefined;
        trigger.addEventListener("click", () => createToast({ title, description }));
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initToast);
} else {
    initToast();
}
