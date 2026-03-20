import { cn } from "@midoneui/core/src/utils/cn";
import {
    popoverTrigger,
    popoverPositioner,
    popoverContent,
    popoverTitle,
    popoverDescription,
    popoverArrow,
    popoverArrowTip,
    popoverIndicator,
} from "@midoneui/core/src/styles/popover.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { label } from "@midoneui/core/src/styles/label.styles";
import { computePosition, flip, shift, offset, arrow } from "@floating-ui/dom";

const ARROW_SIZE = 10;

const CHEVRON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

function initPopover() {
    document.querySelectorAll<HTMLElement>(".popover-root").forEach((root) => {
        const triggerEl = root.querySelector<HTMLElement>(".popover-trigger")!;
        const positionerEl = root.querySelector<HTMLElement>(".popover-positioner")!;
        const contentEl = root.querySelector<HTMLElement>(".popover-content")!;
        if (!triggerEl || !positionerEl || !contentEl) return;

        // Apply trigger classes: ghost button + popoverTrigger + indicator
        triggerEl.className = cn(buttonVariants({ variant: "ghost" }), popoverTrigger, triggerEl.className);
        triggerEl.setAttribute("data-scope", "popover");
        triggerEl.setAttribute("data-part", "trigger");

        // Inject indicator (chevron) into trigger
        const indicatorEl = document.createElement("span");
        indicatorEl.className = cn(popoverIndicator);
        indicatorEl.setAttribute("data-scope", "popover");
        indicatorEl.setAttribute("data-part", "indicator");
        indicatorEl.innerHTML = CHEVRON_SVG;
        triggerEl.appendChild(indicatorEl);

        // Apply sub-element classes
        contentEl.querySelectorAll<HTMLElement>(".popover-title").forEach((el) => {
            el.className = cn(popoverTitle, el.className);
            el.setAttribute("data-scope", "popover");
            el.setAttribute("data-part", "title");
        });
        contentEl.querySelectorAll<HTMLElement>(".popover-description").forEach((el) => {
            el.className = cn(popoverDescription, el.className);
            el.setAttribute("data-scope", "popover");
            el.setAttribute("data-part", "description");
        });
        contentEl.querySelectorAll<HTMLElement>(".label").forEach((el) => {
            el.className = cn(label, el.className);
        });

        // Apply Box raised="single" + popoverContent to contentEl
        const userContentClass = contentEl.className;
        contentEl.className = cn(boxVariants({ raised: "single" }), popoverContent, userContentClass);
        contentEl.style.position = "relative";
        contentEl.setAttribute("data-scope", "popover");
        contentEl.setAttribute("data-part", "content");

        // Wrap children in inner div
        const innerDiv = document.createElement("div");
        while (contentEl.firstChild) innerDiv.appendChild(contentEl.firstChild);

        // Arrow container
        const arrowEl = document.createElement("div");
        arrowEl.className = cn(popoverArrow);
        arrowEl.setAttribute("data-scope", "popover");
        arrowEl.setAttribute("data-part", "arrow");
        arrowEl.style.cssText = `position:absolute;width:${ARROW_SIZE}px;height:${ARROW_SIZE}px;`;

        const arrowTipEl = document.createElement("div");
        arrowTipEl.className = cn(popoverArrowTip);
        arrowTipEl.setAttribute("data-scope", "popover");
        arrowTipEl.setAttribute("data-part", "arrow-tip");
        arrowTipEl.style.cssText = "width:100%;height:100%;";

        arrowEl.appendChild(arrowTipEl);
        contentEl.appendChild(innerDiv);
        contentEl.appendChild(arrowEl);

        // Detach positioner, append to body
        positionerEl.className = cn(popoverPositioner, positionerEl.className);
        positionerEl.setAttribute("data-scope", "popover");
        positionerEl.setAttribute("data-part", "positioner");
        positionerEl.style.cssText = "position:fixed;z-index:50;display:none;";
        positionerEl.remove();
        document.body.appendChild(positionerEl);

        let isOpen = false;

        const ARROW_ROTATION: Record<string, string> = {
            top: "rotate(225deg)",
            bottom: "rotate(45deg)",
            left: "rotate(135deg)",
            right: "rotate(315deg)",
        };

        function updatePosition() {
            computePosition(triggerEl, positionerEl, {
                placement: "bottom",
                middleware: [
                    offset(ARROW_SIZE / 2 + 8),
                    flip(),
                    shift({ padding: 8 }),
                    arrow({ element: arrowEl }),
                ],
            }).then(({ x, y, placement, middlewareData }) => {
                positionerEl.style.left = `${x}px`;
                positionerEl.style.top = `${y}px`;

                // Arrow positioning
                const side = placement.split("-")[0] as "top" | "bottom" | "left" | "right";
                const arrowData = middlewareData.arrow;

                if (arrowData) {
                    const staticSide = { top: "bottom", bottom: "top", left: "right", right: "left" }[side]!;
                    Object.assign(arrowEl.style, {
                        left: arrowData.x != null ? `${arrowData.x}px` : "",
                        top: arrowData.y != null ? `${arrowData.y}px` : "",
                        [staticSide]: `${-ARROW_SIZE / 2}px`,
                    });
                }

                arrowTipEl.style.transform = ARROW_ROTATION[side] ?? "rotate(45deg)";
            });
        }

        function show() {
            isOpen = true;
            positionerEl.style.display = "block";
            triggerEl.setAttribute("data-state", "open");
            indicatorEl.setAttribute("data-state", "open");
            updatePosition();
        }

        function hide() {
            isOpen = false;
            positionerEl.style.display = "none";
            triggerEl.removeAttribute("data-state");
            indicatorEl.removeAttribute("data-state");
        }

        triggerEl.addEventListener("click", (e) => {
            e.stopPropagation();
            isOpen ? hide() : show();
        });

        document.addEventListener("click", (e) => {
            if (isOpen && !root.contains(e.target as Node) && !positionerEl.contains(e.target as Node)) {
                hide();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && isOpen) hide();
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPopover);
} else {
    initPopover();
}
