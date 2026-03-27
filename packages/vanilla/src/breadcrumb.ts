import { cn } from "@midoneui/core/src/utils/cn";
import {
    breadcrumbList,
    breadcrumbItem,
    breadcrumbLink,
} from "@midoneui/core/src/styles/breadcrumb.styles";

const CHEVRON_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>`;

const ELLIPSIS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`;

function makeItem(label: string): HTMLLIElement {
    const li = document.createElement("li");
    li.className = cn(breadcrumbItem);
    li.setAttribute("data-scope", "breadcrumb");
    li.setAttribute("data-part", "item");
    const a = document.createElement("a");
    a.className = cn(breadcrumbLink);
    a.setAttribute("data-scope", "breadcrumb");
    a.setAttribute("data-part", "link");
    a.textContent = label;
    li.appendChild(a);
    return li;
}

function makeChevron(): Element {
    const tmp = document.createElement("div");
    tmp.innerHTML = CHEVRON_RIGHT_SVG;
    const el = tmp.firstElementChild!;
    el.setAttribute("data-scope", "breadcrumb");
    el.setAttribute("data-part", "separator");
    return el;
}

function makeEllipsisItem(middleItems: string[]): HTMLLIElement {
    const li = document.createElement("li");
    li.className = cn(breadcrumbItem, "relative");

    const trigger = document.createElement("a");
    trigger.className = cn(breadcrumbLink, "breadcrumb-ellipsis-trigger");
    trigger.innerHTML = ELLIPSIS_SVG;
    li.appendChild(trigger);

    const dropdown = document.createElement("div");
    dropdown.className = "breadcrumb-dropdown hidden absolute top-full left-0 mt-1 z-50 min-w-[8rem] bg-background border border-foreground/10 rounded-xl shadow-md p-1";
    middleItems.forEach((label) => {
        const item = document.createElement("div");
        item.className = "px-3 py-2 text-sm rounded-lg hover:bg-foreground/5 cursor-pointer";
        item.textContent = label;
        dropdown.appendChild(item);
    });
    li.appendChild(dropdown);

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("hidden");
    });

    return li;
}

function buildBreadcrumb(items: string[]): HTMLElement {
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "breadcrumb");
    nav.setAttribute("data-scope", "breadcrumb");
    nav.setAttribute("data-part", "root");

    const ol = document.createElement("ol");
    ol.className = cn(breadcrumbList);
    ol.setAttribute("data-scope", "breadcrumb");
    ol.setAttribute("data-part", "list");

    if (items.length <= 3) {
        items.forEach((label, i) => {
            ol.appendChild(makeItem(label));
            if (i < items.length - 1) ol.appendChild(makeChevron());
        });
    } else {
        // first
        ol.appendChild(makeItem(items[0]));
        ol.appendChild(makeChevron());
        // ellipsis (middle items: exclude first and last 2)
        ol.appendChild(makeEllipsisItem(items.slice(1, -2)));
        ol.appendChild(makeChevron());
        // last 2
        const last2 = items.slice(-2);
        last2.forEach((label, i) => {
            ol.appendChild(makeItem(label));
            if (i < last2.length - 1) ol.appendChild(makeChevron());
        });
    }

    nav.appendChild(ol);
    return nav;
}

function initBreadcrumbs() {
    document.querySelectorAll('[data-component="breadcrumb"]').forEach((el) => {
        const raw = el.getAttribute("data-items") ?? "[]";
        let items: string[] = [];
        try {
            items = JSON.parse(raw.replace(/'/g, '"'));
        } catch {
            console.warn("breadcrumb: failed to parse data-items", raw);
        }
        // Clear and re-render inside the div (keeps .breadcrumb in DOM for HMR re-init)
        el.innerHTML = "";
        el.appendChild(buildBreadcrumb(items));
    });

    // Close all dropdowns on outside click
    document.addEventListener("click", () => {
        document.querySelectorAll('[data-component="breadcrumb-dropdown"]').forEach((d) => {
            d.classList.add("hidden");
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBreadcrumbs);
} else {
    initBreadcrumbs();
}
