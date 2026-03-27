import { cn } from "@midoneui/core/src/utils/cn";
import {
    tabsRoot,
    tabsList,
    tabsIndicator,
    tabsTrigger,
    tabsContent,
} from "@midoneui/core/src/styles/tabs.styles";
import { handleAsChild } from "./slot";

function initTabsRoot(rootEl: HTMLElement) {
    const root = handleAsChild(rootEl);
    const defaultValue = root.getAttribute("data-default-value") ?? "";

    root.className = cn(tabsRoot, root.className);
    root.setAttribute("data-scope", "tabs");
    root.setAttribute("data-part", "root");

    const listEl = root.querySelector<HTMLElement>(':scope > [data-component="tabs-list"]');
    const triggers = Array.from(root.querySelectorAll<HTMLElement>('[data-component="tabs-trigger"]'));
    const contents = Array.from(root.querySelectorAll<HTMLElement>('[data-component="tabs-content"]'));

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
        indicator.style.setProperty("--height", `${activeTrigger.offsetHeight}px`);
        indicator.style.setProperty("--width", `${activeTrigger.offsetWidth}px`);
        indicator.style.setProperty("--left", `${activeTrigger.offsetLeft}px`);
        indicator.style.setProperty("--top", `${activeTrigger.offsetTop}px`);
    }

    function activate(value: string) {
        root.querySelectorAll<HTMLElement>('[data-component="tabs-trigger"]').forEach(t => {
            if (t.dataset.value === value) {
                t.setAttribute("data-selected", "");
                updateIndicator(t);
            } else {
                t.removeAttribute("data-selected");
            }
        });
        root.querySelectorAll<HTMLElement>('[data-component="tabs-content"]').forEach(c => {
            if (c.dataset.value === value) c.removeAttribute("hidden");
            else c.setAttribute("hidden", "");
        });
    }

    requestAnimationFrame(() => {
        const firstTrigger = root.querySelector<HTMLElement>('[data-component="tabs-trigger"]');
        activate(defaultValue || firstTrigger?.dataset.value || "");
    });
}

function initTabs() {
    document.querySelectorAll<HTMLElement>('[data-component="tabs-root"]').forEach(root => initTabsRoot(root));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
} else {
    initTabs();
}
