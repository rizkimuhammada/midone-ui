import { cn } from "@midoneui/core/src/utils/cn";
import {
    tooltipTrigger,
    tooltipPositioner,
    tooltipContent,
    tooltipArrow,
    tooltipArrowTip,
} from "@midoneui/core/src/styles/tooltip.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";

const PLACEMENT_OFFSET = 4;
const ARROW_SIZE = 10;

let globalPositioner: HTMLElement | null = null;
let globalContent: HTMLElement | null = null;

function createGlobalTooltipNode() {
    if (globalPositioner) return;

    globalPositioner = document.createElement("div");
    globalPositioner.className = cn(tooltipPositioner);
    globalPositioner.style.cssText = "position:fixed;z-index:9999;display:none;pointer-events:none;";

    globalContent = document.createElement("div");
    globalContent.className = cn(tooltipContent);
    
    const textNode = document.createElement("div");
    textNode.id = "global-tooltip-text";
    globalContent.appendChild(textNode);

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
    document.querySelectorAll<HTMLElement>(".tooltip-root").forEach((rootEl) => {
        const root = handleAsChild(rootEl);
        const triggerEl = root.querySelector<HTMLElement>(".tooltip-trigger");
        const positionerEl = root.querySelector<HTMLElement>(".tooltip-positioner");
        const contentEl = root.querySelector<HTMLElement>(".tooltip-content");
        if (!triggerEl || !positionerEl || !contentEl) return;

        const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
        const trigger = handleAsChild(triggerEl);
        if (!isAsChildTrigger) {
            trigger.className = cn(buttonVariants({ variant: "secondary", look: "outline" }), tooltipTrigger, trigger.className);
        }
        trigger.setAttribute("data-scope", "tooltip");
        trigger.setAttribute("data-part", "trigger");

        const isAsChildContent = contentEl.hasAttribute("data-as-child");
        const content = handleAsChild(contentEl);
        if (!isAsChildContent) {
            content.className = cn(tooltipContent, content.className);
            const innerDiv = document.createElement("div");
            while (content.firstChild) innerDiv.appendChild(content.firstChild);

            const arrowEl = document.createElement("div");
            arrowEl.className = cn(tooltipArrow);
            arrowEl.setAttribute("data-scope", "tooltip");
            arrowEl.setAttribute("data-part", "arrow");
            arrowEl.style.cssText = "position:absolute;bottom:calc(var(--arrow-size,10px)/-2);left:50%;transform:translateX(-50%);width:var(--arrow-size,10px);height:var(--arrow-size,10px);";

            const arrowTipEl = document.createElement("div");
            arrowTipEl.className = cn(tooltipArrowTip);
            arrowTipEl.setAttribute("data-scope", "tooltip");
            arrowTipEl.setAttribute("data-part", "arrow-tip");
            arrowTipEl.style.cssText = "width:100%;height:100%;transform:rotate(225deg);";

            arrowEl.appendChild(arrowTipEl);
            innerDiv.appendChild(arrowEl);
            content.appendChild(innerDiv);
        }
        
        content.setAttribute("data-scope", "tooltip");
        content.setAttribute("data-part", "content");

        const positioner = handleAsChild(positionerEl);
        positioner.className = cn(tooltipPositioner, positioner.className);
        positioner.setAttribute("data-scope", "tooltip");
        positioner.setAttribute("data-part", "positioner");
        positioner.style.cssText = "position:fixed;z-index:50;display:none;";
        positioner.remove();
        document.body.appendChild(positioner);

        function show() {
            positioner.style.display = "block";
            const triggerRect = trigger.getBoundingClientRect();
            const posRect = positioner.getBoundingClientRect();
            const top = triggerRect.top - posRect.height - ARROW_SIZE - PLACEMENT_OFFSET;
            const left = triggerRect.left + triggerRect.width / 2 - posRect.width / 2;
            positioner.style.top = `${top}px`;
            positioner.style.left = `${left}px`;
        }

        function hide() {
            positioner.style.display = "none";
        }

        trigger.addEventListener("mouseenter", show);
        trigger.addEventListener("mouseleave", hide);
    });

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
