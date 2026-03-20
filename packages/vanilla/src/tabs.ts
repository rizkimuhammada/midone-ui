import { cn } from "@midoneui/core/src/utils/cn";
import {
    tabsRoot,
    tabsList,
    tabsIndicator,
    tabsTrigger,
    tabsContent,
} from "@midoneui/core/src/styles/tabs.styles";

function initTabsRoot(root: HTMLElement) {
    const defaultValue = root.getAttribute("data-default-value") ?? "";

    root.className = cn(tabsRoot, root.className);
    root.setAttribute("data-scope", "tabs");
    root.setAttribute("data-part", "root");

    const list = root.querySelector<HTMLElement>(":scope > .tabs-list");
    const triggers = Array.from(root.querySelectorAll<HTMLElement>(".tabs-trigger"));
    const contents = Array.from(root.querySelectorAll<HTMLElement>(".tabs-content"));

    // Apply content classes
    contents.forEach(content => {
        content.className = cn(tabsContent, content.className);
        content.setAttribute("data-scope", "tabs");
        content.setAttribute("data-part", "content");
    });

    if (!list) return;

    // Add flex + gap-1 via class (not inline style) — in Vue these come from [&>div]:flex [&>div]:gap-1
    // targeting the inner div, but in vanilla there's no inner div so we apply directly to list
    list.className = cn(tabsList, "flex", list.className);
    list.setAttribute("data-scope", "tabs");
    list.setAttribute("data-part", "list");

    // Apply trigger classes (direct children of list, no inner div wrapper)
    triggers.forEach(trigger => {
        trigger.className = cn(tabsTrigger, trigger.className);
        trigger.setAttribute("data-scope", "tabs");
        trigger.setAttribute("data-part", "trigger");
    });

    // Indicator is a direct sibling of triggers inside list
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

    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => activate(trigger.dataset.value ?? ""));
    });

    // Use rAF so CSS is applied and offsetWidth/Height are accurate
    requestAnimationFrame(() => {
        activate(defaultValue || triggers[0]?.dataset.value || "");
    });
}

function initTabs() {
    document.querySelectorAll<HTMLElement>(".tabs-root").forEach(root => initTabsRoot(root));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
} else {
    initTabs();
}
