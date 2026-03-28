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
import { handleAsChild } from "./slot";

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

function processItem(itemEl: HTMLElement) {
    const isAsChild = itemEl.hasAttribute("data-as-child");
    const item = handleAsChild(itemEl);
    const type = item.dataset.type as "checkbox" | "radio" | undefined;
    const shortcut = item.getAttribute("data-shortcut");
    const isTriggerItem = item.matches('[data-component="menu-trigger-item"]');

    item.className = cn(menuItem, item.className);
    item.setAttribute("data-scope", "menu");
    item.setAttribute("data-part", "item");

    if (!isAsChild) {
        const nestedPos = item.querySelector<HTMLElement>('[data-component="menu-positioner-nested"]');
        if (nestedPos) item.removeChild(nestedPos);

        if (type) {
            const indicator = document.createElement("span");
            indicator.setAttribute("data-part", "item-indicator");
            indicator.hidden = !item.hasAttribute("data-checked");
            indicator.innerHTML = type === "checkbox" ? CHECK : DOT;
            item.insertBefore(indicator, item.firstChild);
        }

        const contentDiv = document.createElement("div");
        while (item.firstChild) contentDiv.appendChild(item.firstChild);
        item.appendChild(contentDiv);

        if (isTriggerItem) {
            const chevron = parseSvg(CHEVRON_RIGHT);
            chevron.setAttribute("data-part", "nested-menu-chevron");
            item.appendChild(chevron);
        } else {
            const shortcutDiv = document.createElement("div");
            if (shortcut) shortcutDiv.textContent = shortcut;
            item.appendChild(shortcutDiv);
        }

        if (nestedPos) item.appendChild(nestedPos);
    }
}

function processContent(elEl: HTMLElement): HTMLElement {
    const isAsChild = elEl.hasAttribute("data-as-child");
    const el = handleAsChild(elEl);
    
    el.className = cn(menuContent, el.className);
    el.setAttribute("data-scope", "menu");
    el.setAttribute("data-part", "content");

    if (!isAsChild) {
        el.className = cn(boxVariants({ raised: "single" }), el.className);
        Array.from(el.classList).filter(c => /^p-\d/.test(c)).forEach(c => el.classList.remove(c));
        el.classList.add("p-0");

        const innerDiv = document.createElement("div");
        while (el.firstChild) innerDiv.appendChild(el.firstChild);
        el.appendChild(innerDiv);
        return innerDiv;
    }
    
    return el;
}

function openMenu(positioner: Element, indicator: Element | null) {
    positioner.classList.remove("hidden");
    indicator?.setAttribute("data-state", "open");
}

function closeMenu(positioner: Element, indicator: Element | null) {
    positioner.classList.add("hidden");
    indicator?.removeAttribute("data-state");
}

function initMenuRoot(rootEl: Element) {
    const root = handleAsChild(rootEl as HTMLElement);
    root.className = cn(menuRoot, root.className);
    root.setAttribute("data-scope", "menu");
    root.setAttribute("data-part", "root");
    (root as HTMLElement).style.cssText = "display:inline-flex;flex-direction:column;";

    const triggerEl = root.querySelector<HTMLElement>('[data-component="menu-trigger"]');
    const positionerEl = root.querySelector<HTMLElement>('[data-component="menu-positioner"]');
    if (!triggerEl || !positionerEl) return;

    const isAsChildTrigger = triggerEl.hasAttribute("data-as-child");
    const trigger = handleAsChild(triggerEl);
    
    if (!isAsChildTrigger) {
        trigger.className = cn(buttonVariants({ variant: "ghost", size: "default", look: "flat" }), menuTrigger, trigger.className);
        const indicatorSpan = document.createElement("span");
        indicatorSpan.className = cn(menuIndicator);
        indicatorSpan.setAttribute("data-scope", "menu");
        indicatorSpan.setAttribute("data-part", "indicator");
        indicatorSpan.innerHTML = CHEVRON_DOWN;
        trigger.appendChild(indicatorSpan);
    }
    
    trigger.setAttribute("data-scope", "menu");
    trigger.setAttribute("data-part", "trigger");

    const positioner = handleAsChild(positionerEl);
    positioner.className = cn(menuPositioner, positioner.className);
    positioner.setAttribute("data-scope", "menu");
    positioner.setAttribute("data-part", "positioner");
    positioner.classList.add("hidden");
    positioner.style.cssText = "position:fixed;z-index:50;";
    positioner.remove();
    document.body.appendChild(positioner);

    function updatePosition() {
        computePosition(trigger, positioner, {
            placement: "bottom-start",
            middleware: [offset(8), flip(), shift({ padding: 8 })],
        }).then(({ x, y }) => {
            positioner.style.left = `${x}px`;
            positioner.style.top = `${y}px`;
        });
    }

    const contentEl = positioner.querySelector<HTMLElement>('[data-component="menu-content"]');
    if (!contentEl) return;
    const innerContainer = processContent(contentEl);

    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-item"]').forEach(processItem);
    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-separator"]').forEach(sepEl => {
        const sep = handleAsChild(sepEl);
        sep.className = cn(menuSeparator, sep.className);
        sep.setAttribute("data-scope", "menu");
        sep.setAttribute("data-part", "separator");
    });
    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-radio-group"]').forEach(groupEl => {
        const group = handleAsChild(groupEl);
        group.className = cn(menuRadioItemGroup, group.className);
        group.setAttribute("data-scope", "menu");
        group.setAttribute("data-part", "item-group");
        group.querySelectorAll<HTMLElement>('[data-component="menu-group-label"]').forEach(labelEl => {
            const label = handleAsChild(labelEl);
            label.className = cn(menuItemGroupLabel, label.className);
            label.setAttribute("data-scope", "menu");
            label.setAttribute("data-part", "item-group-label");
        });
        group.querySelectorAll<HTMLElement>('[data-component="menu-item"]').forEach(processItem);
    });

    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-trigger-item"]').forEach(triggerItem => {
        processItem(triggerItem);
        const nestedPos = triggerItem.querySelector<HTMLElement>('[data-component="menu-positioner-nested"]');
        if (!nestedPos) return;

        const nested = handleAsChild(nestedPos);
        nested.className = cn(menuPositioner, nested.className);
        nested.classList.add("hidden");
        nested.style.cssText = "position:fixed;z-index:50;min-width:12rem;";

        const nestedContentEl = nested.querySelector<HTMLElement>('[data-component="menu-content"]');
        if (nestedContentEl) {
            const nestedInner = processContent(nestedContentEl);
            nestedInner.querySelectorAll<HTMLElement>('[data-component="menu-item"]').forEach(processItem);
        }

        nested.remove();
        document.body.appendChild(nested);

        function updateNestedPosition() {
            computePosition(triggerItem, nested, {
                placement: "right-start",
                middleware: [offset(12), flip(), shift({ padding: 8 })],
            }).then(({ x, y }) => {
                nested.style.left = `${x}px`;
                nested.style.top = `${y}px`;
            });
        }

        triggerItem.addEventListener("click", (e) => {
            e.stopPropagation();
            const isNestedOpen = !nested.classList.contains("hidden");
            document.querySelectorAll<HTMLElement>(".menu-positioner-nested-teleported").forEach(p => p.classList.add("hidden"));
            if (!isNestedOpen) {
                nested.classList.remove("hidden");
                updateNestedPosition();
            }
        });

        nested.addEventListener("click", (e) => e.stopPropagation());
        nested.classList.add("menu-positioner-nested-teleported");
    });

    innerContainer.querySelectorAll<HTMLElement>('[data-component="menu-item"][data-type="checkbox"]').forEach(item => {
        item.addEventListener("click", () => {
            const ind = item.querySelector<HTMLElement>("[data-part='item-indicator']");
            if (ind) ind.hidden = !ind.hidden;
        });
    });

    innerContainer.querySelectorAll('[data-component="menu-radio-group"]').forEach(group => {
        group.querySelectorAll<HTMLElement>('[data-component="menu-item"][data-type="radio"]').forEach(item => {
            item.addEventListener("click", () => {
                group.querySelectorAll<HTMLElement>('[data-component="menu-item"][data-type="radio"]').forEach(sibling => {
                    const ind = sibling.querySelector<HTMLElement>("[data-part='item-indicator']");
                    if (ind) ind.hidden = sibling !== item;
                });
            });
        });
    });

    positioner.addEventListener("click", (e) => e.stopPropagation());

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = !positioner.classList.contains("hidden");
        document.querySelectorAll<HTMLElement>(".menu-positioner-teleported").forEach(p => {
            if (p !== positioner) {
                closeMenu(p, menuIndicatorMap.get(p) ?? null);
            }
        });
        const indicator = trigger.querySelector('[data-part="indicator"]');
        if (isOpen) {
            closeMenu(positioner, indicator as HTMLElement);
        } else {
            positioner.style.minWidth = `${(root as HTMLElement).offsetWidth}px`;
            openMenu(positioner, indicator as HTMLElement);
            updatePosition();
        }
    });

    const indicator = trigger.querySelector('[data-part="indicator"]');
    menuIndicatorMap.set(positioner, indicator as HTMLElement);
    positioner.classList.add("menu-positioner-teleported");
}

function initMenus() {
    document.querySelectorAll('[data-component="menu-root"]').forEach(root => initMenuRoot(root));

    document.addEventListener("click", () => {
        document.querySelectorAll<HTMLElement>(".menu-positioner-teleported").forEach(p => {
            closeMenu(p, menuIndicatorMap.get(p) ?? null);
        });
        document.querySelectorAll<HTMLElement>(".menu-positioner-nested-teleported").forEach(p => {
            closeMenu(p, null);
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMenus);
} else {
    initMenus();
}
