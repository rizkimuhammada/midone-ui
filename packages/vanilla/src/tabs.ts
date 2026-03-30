import { cn } from "@midoneui/core/src/utils/cn";
import {
    tabsRoot,
    tabsList,
    tabsIndicator,
    tabsTrigger,
    tabsContent,
} from "@midoneui/core/src/styles/tabs.styles";
import { handleAsChild } from "./slot";

type TabsControls = { activate: (value: string) => void };
const tabsRegistry = new Map<string, TabsControls>();

// Expose registry to window
(window as any).Midone = (window as any).Midone || {};
(window as any).Midone.tabs = tabsRegistry;

function initTabsRoot(rootEl: HTMLElement) {
    const root = handleAsChild(rootEl);
    const defaultValue = root.getAttribute("data-default-value") ?? "";

    root.className = cn(tabsRoot, root.className);
    root.setAttribute("data-scope", "tabs");
    root.setAttribute("data-part", "root");

    const listEl = root.querySelector<HTMLElement>('[data-component="tabs-list"]');
    const allTriggers = Array.from(root.querySelectorAll<HTMLElement>('[data-component="tabs-trigger"]'));
    const allContents = Array.from(root.querySelectorAll<HTMLElement>('[data-component="tabs-content"]'));
    
    const triggers = allTriggers.filter(el => el.closest('[data-component="tabs-root"]') === root);
    const contents = allContents.filter(el => el.closest('[data-component="tabs-root"]') === root);

    contents.forEach(contentEl => {
        const content = handleAsChild(contentEl);
        content.className = cn(tabsContent, content.className);
        content.setAttribute("data-scope", "tabs");
        content.setAttribute("data-part", "content");
    });

    if (!listEl) return;
    const list = handleAsChild(listEl);

    list.className = cn(tabsList, "flex", list.className);
    list.setAttribute("data-scope", "tabs");
    list.setAttribute("data-part", "list");

    triggers.forEach(triggerEl => {
        const trigger = handleAsChild(triggerEl);
        trigger.className = cn(tabsTrigger, trigger.className);
        trigger.setAttribute("data-scope", "tabs");
        trigger.setAttribute("data-part", "trigger");
        trigger.addEventListener("click", () => activate(trigger.dataset.value ?? ""));
    });

    const indicator = document.createElement("div");
    indicator.className = cn(tabsIndicator);
    indicator.setAttribute("data-scope", "tabs");
    indicator.setAttribute("data-part", "indicator");
    indicator.style.transition = "left 0.2s ease, width 0.2s ease, top 0.2s ease, height 0.2s ease";
    list.appendChild(indicator);

    function updateIndicator(activeTrigger: HTMLElement) {
        if (!activeTrigger || activeTrigger.offsetWidth === 0) return;
        indicator.style.setProperty("--height", `${activeTrigger.offsetHeight}px`);
        indicator.style.setProperty("--width", `${activeTrigger.offsetWidth}px`);
        indicator.style.setProperty("--left", `${activeTrigger.offsetLeft}px`);
        indicator.style.setProperty("--top", `${activeTrigger.offsetTop}px`);
    }

    function activate(value: string) {
        triggers.forEach(t => {
            if (t.dataset.value === value) {
                t.setAttribute("data-selected", "");
                updateIndicator(t);
            } else {
                t.removeAttribute("data-selected");
            }
        });
        contents.forEach(c => {
            if (c.dataset.value === value) c.removeAttribute("hidden");
            else c.setAttribute("hidden", "");
        });
    }

    const observer = new ResizeObserver(() => {
        const activeTrigger = triggers.find(t => t.hasAttribute("data-selected"));
        if (activeTrigger) updateIndicator(activeTrigger);
    });
    observer.observe(root);

    requestAnimationFrame(() => {
        activate(defaultValue || triggers[0]?.dataset.value || "");
    });

    const id = root.id;
    if (id) {
        tabsRegistry.set(id, { activate });
    }
}

function initTabs() {
    document.querySelectorAll<HTMLElement>('[data-component="tabs-root"]').forEach(root => initTabsRoot(root));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
} else {
    initTabs();
}
