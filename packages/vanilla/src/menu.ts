import { cn } from "@midoneui/core/src/utils/cn";
import {
    menuRoot,
    menuTrigger,
    menuIndicator,
    menuPositioner,
    menuContent,
    menuItem,
    menuSeparator,
    menuItemGroupLabel,
    menuRadioItemGroup,
} from "@midoneui/core/src/styles/menu.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { computePosition, flip, shift, offset } from "@floating-ui/dom";

// SVG strings
const CHEVRON_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`;
const CHECK = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;
const DOT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12.1" cy="12.1" r="1"/></svg>`;

const menuIndicatorMap = new WeakMap<Element, Element>();

function parseSvg(html: string): Element {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.firstElementChild!;
}

// Transform flat menu-item content into the 2-div structure that menuItem CSS expects:
// <div class="menu-item">
//   <div><!-- content: icon + text --></div>   ← [&>div:nth-of-type(1)]
//   <div><!-- shortcut --></div>               ← [&>div:nth-of-type(2)]
// </div>
function processItem(item: HTMLElement) {
    const type = item.dataset.type as "checkbox" | "radio" | undefined;
    const shortcut = item.getAttribute("data-shortcut");
    const isTriggerItem = item.classList.contains("menu-trigger-item");

    // Stash nested positioner before restructuring DOM
    const nestedPos = item.querySelector<HTMLElement>(":scope > .menu-positioner-nested");
    if (nestedPos) item.removeChild(nestedPos);

    // For checkbox/radio: prepend indicator span (hidden when unchecked)
    if (type) {
        const indicator = document.createElement("span");
        indicator.setAttribute("data-part", "item-indicator");
        indicator.hidden = !item.hasAttribute("data-checked");
        indicator.innerHTML = type === "checkbox" ? CHECK : DOT;
        item.insertBefore(indicator, item.firstChild);
    }

    // Wrap all current children into content div (div:nth-of-type(1))
    const contentDiv = document.createElement("div");
    while (item.firstChild) contentDiv.appendChild(item.firstChild);
    item.appendChild(contentDiv);

    if (isTriggerItem) {
        // Chevron right as direct child sibling of contentDiv (not inside it)
        const chevron = parseSvg(CHEVRON_RIGHT);
        chevron.setAttribute("data-part", "nested-menu-chevron");
        item.appendChild(chevron);
    } else {
        // Shortcut div (div:nth-of-type(2))
        const shortcutDiv = document.createElement("div");
        if (shortcut) shortcutDiv.textContent = shortcut;
        item.appendChild(shortcutDiv);
    }

    // Restore nested positioner
    if (nestedPos) item.appendChild(nestedPos);

    item.className = cn(menuItem, item.className);
    item.setAttribute("data-scope", "menu");
    item.setAttribute("data-part", "item");
}

// Apply Box raised="single" + menuContent + p-0 override, then wrap children in inner div
function processContent(el: HTMLElement): HTMLElement {
    el.className = cn(boxVariants({ raised: "single" }), menuContent, el.className);
    el.setAttribute("data-scope", "menu");
    el.setAttribute("data-part", "content");
    Array.from(el.classList).filter(c => /^p-\d/.test(c)).forEach(c => el.classList.remove(c));
    el.classList.add("p-0");

    // Wrap all children in inner div for [&>div] selectors in menuContent
    const innerDiv = document.createElement("div");
    while (el.firstChild) innerDiv.appendChild(el.firstChild);
    el.appendChild(innerDiv);
    return innerDiv;
}

function openMenu(positioner: Element, indicator: Element | null) {
    positioner.classList.remove("hidden");
    indicator?.setAttribute("data-state", "open");
}

function closeMenu(positioner: Element, indicator: Element | null) {
    positioner.classList.add("hidden");
    indicator?.removeAttribute("data-state");
    // Also close all nested menus (teleported to body)
    document.querySelectorAll<HTMLElement>(".menu-positioner-nested").forEach(p => p.classList.add("hidden"));
}

function initMenuRoot(root: Element) {
    root.className = cn(menuRoot, root.className);
    root.setAttribute("data-scope", "menu");
    root.setAttribute("data-part", "root");
    (root as HTMLElement).style.cssText = "display:inline-flex;flex-direction:column;";

    const trigger = root.querySelector<HTMLElement>(":scope > .menu-trigger");
    const positioner = root.querySelector<HTMLElement>(":scope > .menu-positioner");
    if (!trigger || !positioner) return;

    // Apply button ghost + menuTrigger (menu.ts owns this, not button.ts)
    trigger.className = cn(
        buttonVariants({ variant: "ghost", size: "default", look: "flat" }),
        menuTrigger,
        trigger.className,
    );
    trigger.setAttribute("data-scope", "menu");
    trigger.setAttribute("data-part", "trigger");

    // Append indicator (ChevronDown) to trigger
    const indicatorSpan = document.createElement("span");
    indicatorSpan.className = cn(menuIndicator);
    indicatorSpan.setAttribute("data-scope", "menu");
    indicatorSpan.setAttribute("data-part", "indicator");
    indicatorSpan.innerHTML = CHEVRON_DOWN;
    trigger.appendChild(indicatorSpan);

    // Positioner: teleport to body, use floating-ui
    positioner.className = cn(menuPositioner, positioner.className);
    positioner.setAttribute("data-scope", "menu");
    positioner.setAttribute("data-part", "positioner");
    positioner.classList.add("hidden");
    positioner.style.cssText = "position:fixed;z-index:50;";
    positioner.remove();
    document.body.appendChild(positioner);

    function updatePosition() {
        computePosition(trigger!, positioner!, {
            placement: "bottom-start",
            middleware: [
                offset(8),
                flip(),
                shift({ padding: 8 }),
            ],
        }).then(({ x, y }) => {
            positioner!.style.left = `${x}px`;
            positioner!.style.top = `${y}px`;
        });
    }

    // Content
    const content = positioner.querySelector<HTMLElement>(":scope > .menu-content");
    if (!content) return;
    const innerDiv = processContent(content);

    // Process all items, separators, labels inside innerDiv
    innerDiv.querySelectorAll<HTMLElement>(":scope > .menu-item").forEach(processItem);
    innerDiv.querySelectorAll<HTMLElement>(":scope > .menu-separator").forEach(sep => {
        sep.className = cn(menuSeparator, sep.className);
        sep.setAttribute("data-scope", "menu");
        sep.setAttribute("data-part", "separator");
    });
    innerDiv.querySelectorAll<HTMLElement>(":scope > .menu-radio-group").forEach(group => {
        group.className = cn(menuRadioItemGroup, group.className);
        group.setAttribute("data-scope", "menu");
        group.setAttribute("data-part", "item-group");
        group.querySelectorAll<HTMLElement>(":scope > .menu-group-label").forEach(label => {
            label.className = cn(menuItemGroupLabel, label.className);
            label.setAttribute("data-scope", "menu");
            label.setAttribute("data-part", "item-group-label");
        });
        group.querySelectorAll<HTMLElement>(":scope > .menu-item").forEach(processItem);
    });

    // Nested menus inside trigger items
    innerDiv.querySelectorAll<HTMLElement>(":scope > .menu-trigger-item").forEach(triggerItem => {
        const nested = triggerItem.querySelector<HTMLElement>(":scope > .menu-positioner-nested");
        if (!nested) return;

        nested.className = cn(menuPositioner, nested.className);
        nested.classList.add("hidden");
        nested.style.cssText = "position:fixed;z-index:50;min-width:12rem;";

        const nestedContent = nested.querySelector<HTMLElement>(":scope > .menu-content");
        if (nestedContent) {
            const nestedInner = processContent(nestedContent);
            nestedInner.querySelectorAll<HTMLElement>(":scope > .menu-item").forEach(processItem);
        }

        // Teleport nested positioner to body
        nested.remove();
        document.body.appendChild(nested);

        function updateNestedPosition() {
            computePosition(triggerItem, nested!, {
                placement: "right-start",
                middleware: [
                    offset(12),
                    flip(),
                    shift({ padding: 8 }),
                ],
            }).then(({ x, y }) => {
                nested!.style.left = `${x}px`;
                nested!.style.top = `${y}px`;
            });
        }

        // Open nested on click (not hover)
        triggerItem.addEventListener("click", (e) => {
            e.stopPropagation();
            const isNestedOpen = !nested.classList.contains("hidden");
            // Close all other nested menus
            document.querySelectorAll<HTMLElement>(".menu-positioner-nested").forEach(p => p.classList.add("hidden"));
            if (!isNestedOpen) {
                nested.classList.remove("hidden");
                updateNestedPosition();
            }
        });

        // Prevent clicks inside nested from closing parent
        nested.addEventListener("click", (e) => e.stopPropagation());
    });

    // Checkbox toggle
    innerDiv.querySelectorAll<HTMLElement>(".menu-item[data-type='checkbox']").forEach(item => {
        item.addEventListener("click", () => {
            const ind = item.querySelector<HTMLElement>("[data-part='item-indicator']");
            if (ind) ind.hidden = !ind.hidden;
        });
    });

    // Radio — one checked per group
    innerDiv.querySelectorAll(".menu-radio-group").forEach(group => {
        group.querySelectorAll<HTMLElement>(".menu-item[data-type='radio']").forEach(item => {
            item.addEventListener("click", () => {
                group.querySelectorAll<HTMLElement>(".menu-item[data-type='radio']").forEach(sibling => {
                    const ind = sibling.querySelector<HTMLElement>("[data-part='item-indicator']");
                    if (ind) ind.hidden = sibling !== item;
                });
            });
        });
    });

    // Prevent clicks inside positioner from bubbling to document close handler
    positioner.addEventListener("click", (e) => e.stopPropagation());

    // Open/close
    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = !positioner.classList.contains("hidden");
        // Close all other menu positioners
        document.querySelectorAll<HTMLElement>(".menu-positioner-teleported").forEach(p => {
            if (p !== positioner) {
                closeMenu(p, menuIndicatorMap.get(p) ?? null);
            }
        });
        if (isOpen) {
            closeMenu(positioner, indicatorSpan);
        } else {
            // Match dropdown width to root
            positioner.style.minWidth = `${(root as HTMLElement).offsetWidth}px`;
            openMenu(positioner, indicatorSpan);
            updatePosition();
        }
    });

    // Mark positioner as teleported for global close handler
    menuIndicatorMap.set(positioner, indicatorSpan);
    positioner.classList.add("menu-positioner-teleported");
}

function initMenus() {
    document.querySelectorAll(".menu-root").forEach(root => initMenuRoot(root));

    document.addEventListener("click", () => {
        document.querySelectorAll<HTMLElement>(".menu-positioner-teleported").forEach(p => {
            closeMenu(p, menuIndicatorMap.get(p) ?? null);
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMenus);
} else {
    initMenus();
}
