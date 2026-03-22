import { cn } from "@midoneui/core/src/utils/cn";
import {
    tooltipTrigger,
    tooltipPositioner,
    tooltipContent,
    tooltipArrow,
    tooltipArrowTip,
} from "@midoneui/core/src/styles/tooltip.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";

const PLACEMENT_OFFSET = 4;
const ARROW_SIZE = 10;

// Singleton style positioner to reuse for all data-content tooltips
let globalPositioner: HTMLElement | null = null;
let globalContent: HTMLElement | null = null;

function createGlobalTooltipNode() {
    if (globalPositioner) return;

    globalPositioner = document.createElement("div");
    globalPositioner.className = cn(tooltipPositioner);
    globalPositioner.style.cssText = "position:fixed;z-index:9999;display:none;pointer-events:none;";

    globalContent = document.createElement("div");
    globalContent.className = cn(tooltipContent);
    
    // Inner text container
    const textNode = document.createElement("div");
    textNode.id = "global-tooltip-text";
    globalContent.appendChild(textNode);

    // Arrow container
    const arrowEl = document.createElement("div");
    arrowEl.className = cn(tooltipArrow);
    arrowEl.style.cssText = "position:absolute;bottom:calc(var(--arrow-size,10px)/-2);left:50%;transform:translateX(-50%);width:var(--arrow-size,10px);height:var(--arrow-size,10px);";

    const arrowTipEl = document.createElement("div");
    arrowTipEl.className = cn(tooltipArrowTip);
    arrowTipEl.style.cssText = "width:100%;height:100%;transform:rotate(225deg);";

    arrowEl.appendChild(arrowTipEl);
    globalContent.appendChild(arrowEl);

    globalPositioner.appendChild(globalContent);
    document.body.appendChild(globalPositioner);
}

function initTooltip() {
    // 1. Initial manual .tooltip-root setup (Current standard for complex tooltips)
    document.querySelectorAll<HTMLElement>(".tooltip-root").forEach((root) => {
        const triggerEl = root.querySelector<HTMLElement>(".tooltip-trigger")!;
        const positionerEl = root.querySelector<HTMLElement>(".tooltip-positioner")!;
        const contentEl = root.querySelector<HTMLElement>(".tooltip-content")!;
        if (!triggerEl || !positionerEl || !contentEl) return;

        // Apply trigger classes (secondary/outline button)
        triggerEl.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), tooltipTrigger, triggerEl.className);
        triggerEl.setAttribute("data-scope", "tooltip");
        triggerEl.setAttribute("data-part", "trigger");

        // Apply content classes
        contentEl.className = cn(tooltipContent, contentEl.className);
        contentEl.setAttribute("data-scope", "tooltip");
        contentEl.setAttribute("data-part", "content");

        // Wrap content children in inner div, inject arrow
        const innerDiv = document.createElement("div");
        while (contentEl.firstChild) innerDiv.appendChild(contentEl.firstChild);

        // Arrow container
        const arrowEl = document.createElement("div");
        arrowEl.className = cn(tooltipArrow);
        arrowEl.setAttribute("data-scope", "tooltip");
        arrowEl.setAttribute("data-part", "arrow");
        arrowEl.style.cssText = "position:absolute;bottom:calc(var(--arrow-size,10px)/-2);left:50%;transform:translateX(-50%);width:var(--arrow-size,10px);height:var(--arrow-size,10px);";

        // Arrow tip
        const arrowTipEl = document.createElement("div");
        arrowTipEl.className = cn(tooltipArrowTip);
        arrowTipEl.setAttribute("data-scope", "tooltip");
        arrowTipEl.setAttribute("data-part", "arrow-tip");
        arrowTipEl.style.cssText = "width:100%;height:100%;transform:rotate(225deg);";

        arrowEl.appendChild(arrowTipEl);
        innerDiv.appendChild(arrowEl);
        contentEl.appendChild(innerDiv);

        // Apply positioner classes, detach from root, append to body hidden
        positionerEl.className = cn(tooltipPositioner, positionerEl.className);
        positionerEl.setAttribute("data-scope", "tooltip");
        positionerEl.setAttribute("data-part", "positioner");
        positionerEl.style.cssText = "position:fixed;z-index:50;display:none;";
        positionerEl.remove();
        document.body.appendChild(positionerEl);

        function show() {
            positionerEl.style.display = "block";
            const triggerRect = triggerEl!.getBoundingClientRect();
            const posRect = positionerEl.getBoundingClientRect();
            const top = triggerRect.top - posRect.height - ARROW_SIZE - PLACEMENT_OFFSET;
            const left = triggerRect.left + triggerRect.width / 2 - posRect.width / 2;
            positionerEl.style.top = `${top}px`;
            positionerEl.style.left = `${left}px`;
        }

        function hide() {
            positionerEl.style.display = "none";
        }

        triggerEl.addEventListener("mouseenter", show);
        triggerEl.addEventListener("mouseleave", hide);
    });

    // 2. Automated tooltips for [data-content] (Simple Directive-like behavior)
    createGlobalTooltipNode();

    document.addEventListener("mouseenter", (e) => {
        const target = (e.target as HTMLElement).closest?.("[data-content]");
        if (target && globalPositioner && globalContent) {
            const contentText = target.getAttribute("data-content")!;
            const textNode = globalContent.querySelector("#global-tooltip-text")!;
            if (textNode) textNode.textContent = contentText;

            globalPositioner.style.display = "block";

            const triggerRect = (target as HTMLElement).getBoundingClientRect();
            const posRect = globalPositioner.getBoundingClientRect();

            const top = triggerRect.top - posRect.height - ARROW_SIZE - PLACEMENT_OFFSET;
            const left = triggerRect.left + triggerRect.width / 2 - posRect.width / 2;

            globalPositioner.style.top = `${top}px`;
            globalPositioner.style.left = `${left}px`;
        }
    }, true);

    document.addEventListener("mouseleave", (e) => {
        const target = (e.target as HTMLElement).closest?.("[data-content]");
        if (target && globalPositioner) {
            globalPositioner.style.display = "none";
        }
    }, true);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTooltip);
} else {
    initTooltip();
}
