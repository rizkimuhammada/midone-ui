# Popover

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="popover-root">
  <button data-component="popover-trigger" class="w-56">Open Popover</button>
    <div data-component="popover-content" class="w-100">
      <div data-component="popover-title">Dimensions</div>
      <div data-component="popover-description">Set the dimensions for the layer.</div>
      <div class="grid gap-3 mt-4 mb-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="width">Width</label>
          <input data-component="input" class="col-span-2" id="width" value="100%" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="maxWidth">Max. width</label>
          <input data-component="input" class="col-span-2" id="maxWidth" value="300px" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="height">Height</label>
          <input data-component="input" class="col-span-2" id="height" value="25px" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="maxHeight">Max. height</label>
          <input data-component="input" class="col-span-2" id="maxHeight" value="none" />
        </div>
      </div>
    </div>
</div>
```

## Dependency

```bash
npm install @floating-ui/dom
```

## Component

### popover.ts

```ts
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
import { handleAsChild } from "./slot";

const ARROW_SIZE = 10;
const CHEVRON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

type PopoverControls = { open: () => void; close: () => void; toggle: () => void };
const popoverRegistry = new Map<string, PopoverControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.popover = popoverRegistry;

function initPopover() {
    document.querySelectorAll<HTMLElement>('[data-component="popover-root"]').forEach((rootEl) => {
        const root = handleAsChild(rootEl);
        const triggerEl = root.querySelector<HTMLElement>('[data-component="popover-trigger"]');
        let positionerEl = root.querySelector<HTMLElement>('[data-component="popover-positioner"]');
        const contentEl = root.querySelector<HTMLElement>('[data-component="popover-content"]');
        if (!triggerEl || !contentEl) return;

        if (!positionerEl) {
            positionerEl = document.createElement("div");
            positionerEl.setAttribute("data-component", "popover-positioner");
            positionerEl.appendChild(contentEl);
            root.appendChild(positionerEl);
        }

        const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
        const trigger = handleAsChild(triggerEl);
        
        if (!isAsChildTrigger) {
            trigger.className = cn(buttonVariants({ variant: "ghost" }), popoverTrigger, trigger.className);
            const indicatorEl = document.createElement("span");
            indicatorEl.className = cn(popoverIndicator);
            indicatorEl.setAttribute("data-scope", "popover");
            indicatorEl.setAttribute("data-part", "indicator");
            indicatorEl.innerHTML = CHEVRON_SVG;
            trigger.appendChild(indicatorEl);
        }
        
        trigger.setAttribute("data-scope", "popover");
        trigger.setAttribute("data-part", "trigger");

        const isAsChildContent = contentEl.hasAttribute("data-as-child");
        const content = handleAsChild(contentEl);
        
        if (!isAsChildContent) {
            content.className = cn(boxVariants({ raised: "single" }), popoverContent, content.className);
            content.querySelectorAll<HTMLElement>('[data-component="popover-title"]').forEach((el) => {
                const title = handleAsChild(el);
                title.className = cn(popoverTitle, title.className);
                title.setAttribute("data-scope", "popover");
                title.setAttribute("data-part", "title");
            });
            content.querySelectorAll<HTMLElement>('[data-component="popover-description"]').forEach((el) => {
                const desc = handleAsChild(el);
                desc.className = cn(popoverDescription, desc.className);
                desc.setAttribute("data-scope", "popover");
                desc.setAttribute("data-part", "description");
            });
            content.querySelectorAll<HTMLElement>('[data-component="label"]').forEach((el) => {
                el.className = cn(label, el.className);
            });

            const innerDiv = document.createElement("div");
            while (content.firstChild) innerDiv.appendChild(content.firstChild);

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
            content.appendChild(innerDiv);
            content.appendChild(arrowEl);

            // Positioning helper function
            const updatePosition = () => {
                computePosition(trigger, positioner, {
                    placement: "bottom",
                    middleware: [
                        offset(ARROW_SIZE / 2 + 8),
                        flip(),
                        shift({ padding: 8 }),
                        arrow({ element: arrowEl }),
                    ],
                }).then(({ x, y, placement, middlewareData }) => {
                    positioner.style.left = `${x}px`;
                    positioner.style.top = `${y}px`;

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
                    const ARROW_ROTATION: Record<string, string> = {
                        top: "rotate(225deg)",
                        bottom: "rotate(45deg)",
                        left: "rotate(135deg)",
                        right: "rotate(315deg)",
                    };
                    arrowTipEl.style.transform = ARROW_ROTATION[side] ?? "rotate(45deg)";
                });
            };
            (content as any)._updatePosition = updatePosition;
        }
        
        content.style.position = "relative";
        content.setAttribute("data-scope", "popover");
        content.setAttribute("data-part", "content");

        const positioner = handleAsChild(positionerEl);
        positioner.className = cn(popoverPositioner, positioner.className);
        positioner.setAttribute("data-scope", "popover");
        positioner.setAttribute("data-part", "positioner");
        positioner.style.cssText = "position:fixed;z-index:50;display:none;";
        positioner.remove();
        document.body.appendChild(positioner);

        let isOpen = false;

        function show() {
            isOpen = true;
            positioner.style.display = "block";
            trigger.setAttribute("data-state", "open");
            const indicator = trigger.querySelector('[data-part="indicator"]');
            indicator?.setAttribute("data-state", "open");
            if ((content as any)._updatePosition) (content as any)._updatePosition();
            else {
                computePosition(trigger, positioner, {
                    placement: "bottom",
                    middleware: [offset(8), flip(), shift({ padding: 8 })],
                }).then(({ x, y }) => {
                    positioner.style.left = `${x}px`;
                    positioner.style.top = `${y}px`;
                });
            }
        }

        function hide() {
            isOpen = false;
            positioner.style.display = "none";
            trigger.removeAttribute("data-state");
            const indicator = trigger.querySelector('[data-part="indicator"]');
            indicator?.removeAttribute("data-state");
        }

        function toggle() {
            isOpen ? hide() : show();
        }

        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            toggle();
        });

        document.addEventListener("click", (e) => {
            if (isOpen && !root.contains(e.target as Node) && !positioner.contains(e.target as Node)) {
                hide();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && isOpen) hide();
        });

        const id = root.id;
        if (id) {
            popoverRegistry.set(id, { open: show, close: hide, toggle });
        }
    });

    document.querySelectorAll<HTMLElement>("[data-popover-target]").forEach(btn => {
        const targetId = btn.getAttribute("data-popover-target")!;
        const controls = popoverRegistry.get(targetId);
        if (controls) btn.addEventListener("click", controls.toggle);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPopover);
} else {
    initPopover();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="popover-root">
  <button data-component="popover-trigger" class="w-56">Open Popover</button>
    <div data-component="popover-content" class="w-100">
      <div data-component="popover-title">Dimensions</div>
      <div data-component="popover-description">Set the dimensions for the layer.</div>
      <div class="grid gap-3 mt-4 mb-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="width">Width</label>
          <input data-component="input" class="col-span-2" id="width" value="100%" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="maxWidth">Max. width</label>
          <input data-component="input" class="col-span-2" id="maxWidth" value="300px" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="height">Height</label>
          <input data-component="input" class="col-span-2" id="height" value="25px" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label data-component="label" for="maxHeight">Max. height</label>
          <input data-component="input" class="col-span-2" id="maxHeight" value="none" />
        </div>
      </div>
    </div>
</div>
```

