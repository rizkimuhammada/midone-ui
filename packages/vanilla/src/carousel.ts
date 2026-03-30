import { cn } from "@midoneui/core/src/utils/cn";
import {
    carouselRoot,
    carouselControl,
    carouselPrevTrigger,
    carouselNextTrigger,
    carouselIndicatorGroup,
    carouselIndicator,
    carouselItemGroup,
    carouselItem,
} from "@midoneui/core/src/styles/carousel.styles";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";

const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`;
const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

function initCarouselRoot(rootEl: HTMLElement) {
    const root = handleAsChild(rootEl);
    const slidesPerPage = root.getAttribute("data-slides-per-page") ?? "1";
    const slideSpacing = root.getAttribute("data-slide-spacing") ?? "2rem";
    const orientation = root.getAttribute("data-orientation") ?? "horizontal";
    
    root.className = cn(carouselRoot, root.className);
    root.setAttribute("data-scope", "carousel");
    root.setAttribute("data-part", "root");
    root.setAttribute("role", "region");
    root.setAttribute("aria-roledescription", "carousel");
    root.setAttribute("data-orientation", orientation);
    
    root.style.setProperty("--slides-per-page", slidesPerPage);
    root.style.setProperty("--slide-spacing", slideSpacing);
    root.style.setProperty("--slide-item-size", `calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page))`);

    const control = root.querySelector<HTMLElement>('[data-component="carousel-control"]');
    const indicatorGroup = root.querySelector<HTMLElement>('[data-component="carousel-indicator-group"]');
    const itemGroup = root.querySelector<HTMLElement>('[data-component="carousel-item-group"]');
    
    if (!itemGroup) return;

    const prevTriggerEl = root.querySelector<HTMLButtonElement>('[data-component="carousel-prev-trigger"]');
    const nextTriggerEl = root.querySelector<HTMLButtonElement>('[data-component="carousel-next-trigger"]');
    const indicators = indicatorGroup ? Array.from(indicatorGroup.querySelectorAll<HTMLButtonElement>('[data-component="carousel-indicator"]')) : [];
    const items = Array.from(itemGroup.querySelectorAll<HTMLElement>('[data-component="carousel-item"]'));

    if (control) {
        control.className = cn(carouselControl, control.className);
        control.setAttribute("data-scope", "carousel");
        control.setAttribute("data-part", "control");
        control.style.zIndex = "10";
    }

    let prevTrigger: HTMLElement | null = null;
    let nextTrigger: HTMLElement | null = null;

    if (prevTriggerEl) {
        const isAsChild = prevTriggerEl.hasAttribute("data-as-child");
        prevTrigger = handleAsChild(prevTriggerEl);
        
        if (!isAsChild) {
            if (!prevTrigger.innerHTML.trim()) prevTrigger.innerHTML = ARROW_LEFT;
            prevTrigger.className = cn(buttonVariants({ variant: "ghost" }), carouselPrevTrigger, prevTrigger.className);
        }

        prevTrigger.setAttribute("data-scope", "carousel");
        prevTrigger.setAttribute("data-part", "prev-trigger");
        prevTrigger.setAttribute("aria-label", "Previous slide");
        prevTrigger.setAttribute("aria-controls", itemGroup.id || "carousel-items");
    }
    if (nextTriggerEl) {
        const isAsChild = nextTriggerEl.hasAttribute("data-as-child");
        nextTrigger = handleAsChild(nextTriggerEl);
        
        if (!isAsChild) {
            if (!nextTrigger.innerHTML.trim()) nextTrigger.innerHTML = ARROW_RIGHT;
            nextTrigger.className = cn(buttonVariants({ variant: "ghost" }), carouselNextTrigger, nextTrigger.className);
        }

        nextTrigger.setAttribute("data-scope", "carousel");
        nextTrigger.setAttribute("data-part", "next-trigger");
        nextTrigger.setAttribute("aria-label", "Next slide");
        nextTrigger.setAttribute("aria-controls", itemGroup.id || "carousel-items");
    }

    if (indicatorGroup) {
        indicatorGroup.className = cn(carouselIndicatorGroup, indicatorGroup.className);
        indicatorGroup.setAttribute("data-scope", "carousel");
        indicatorGroup.setAttribute("data-part", "indicator-group");
        indicators.forEach((ind, i) => {
            ind.className = cn(carouselIndicator, ind.className);
            ind.setAttribute("data-scope", "carousel");
            ind.setAttribute("data-part", "indicator");
            ind.setAttribute("aria-label", `Go to slide ${i + 1}`);
        });
    }

    itemGroup.className = cn(carouselItemGroup, itemGroup.className);
    itemGroup.setAttribute("data-scope", "carousel");
    itemGroup.setAttribute("data-part", "item-group");
    itemGroup.setAttribute("aria-live", "polite");
    itemGroup.setAttribute("tabindex", "-1");
    
    itemGroup.style.display = "grid";
    itemGroup.style.position = "relative";
    itemGroup.style.gap = "var(--slide-spacing)";
    itemGroup.style.scrollSnapType = "x mandatory";
    itemGroup.style.gridAutoFlow = "column";
    itemGroup.style.gridAutoColumns = "var(--slide-item-size)";
    itemGroup.style.overflowX = "auto";
    itemGroup.style.scrollbarWidth = "none";
    itemGroup.style.overscrollBehaviorX = "contain";

    items.forEach((itemEl, i) => {
        const isAsChild = itemEl.hasAttribute("data-as-child");
        if (isAsChild) {
            itemEl.className = "";
        }
        const item = handleAsChild(itemEl);
        items[i] = item;
        
        if (!isAsChild) {
            item.className = cn(boxVariants({}), carouselItem, item.className);
        }

        item.setAttribute("data-scope", "carousel");
        item.setAttribute("data-part", "item");
        item.setAttribute("role", "group");
        item.setAttribute("aria-roledescription", "slide");
        item.setAttribute("aria-label", `${i + 1} of ${items.length}`);
        item.style.scrollSnapAlign = "start";
        item.style.flexShrink = "0";
    });

    let currentPage = 0;
    const totalPages = items.length;

    function updateIndicators() {
        indicators.forEach((ind, i) => {
            if (i === currentPage) {
                ind.setAttribute("data-current", "");
                ind.setAttribute("aria-current", "true");
            } else {
                ind.removeAttribute("data-current");
                ind.removeAttribute("aria-current");
            }
        });
        
        items.forEach((item, i) => {
            if (i === currentPage) {
                item.setAttribute("data-inview", "");
                item.removeAttribute("aria-hidden");
            } else {
                item.removeAttribute("data-inview");
                item.setAttribute("aria-hidden", "true");
            }
        });

        if (prevTrigger instanceof HTMLButtonElement) prevTrigger.disabled = currentPage === 0;
        else if (prevTrigger) prevTrigger.setAttribute("data-disabled", currentPage === 0 ? "true" : "false");

        if (nextTrigger instanceof HTMLButtonElement) nextTrigger.disabled = currentPage === totalPages - 1;
        else if (nextTrigger) nextTrigger.setAttribute("data-disabled", currentPage === totalPages - 1 ? "true" : "false");
    }

    function goTo(page: number) {
        currentPage = Math.max(0, Math.min(page, totalPages - 1));
        if (itemGroup && items[currentPage]) {
            itemGroup.scrollTo({ 
                left: items[currentPage].offsetLeft, 
                behavior: "smooth" 
            });
        }
        updateIndicators();
    }

    itemGroup.addEventListener("scroll", () => {
        if (itemGroup) {
            const snapped = Math.round(itemGroup.scrollLeft / (itemGroup.scrollWidth / totalPages));
            if (snapped !== currentPage) {
                currentPage = snapped;
                updateIndicators();
            }
        }
    }, { passive: true });

    if (prevTrigger) prevTrigger.addEventListener("click", () => goTo(currentPage - 1));
    if (nextTrigger) nextTrigger.addEventListener("click", () => goTo(currentPage + 1));
    indicators.forEach((ind, i) => ind.addEventListener("click", () => goTo(i)));

    goTo(0);
}

function initCarousels() {
    if (!document.getElementById("carousel-style")) {
        const s = document.createElement("style");
        s.id = "carousel-style";
        s.textContent = ".carousel-item-group::-webkit-scrollbar{display:none}";
        document.head.appendChild(s);
    }
    document.querySelectorAll<HTMLElement>('[data-component="carousel-root"]').forEach(root => initCarouselRoot(root));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCarousels);
} else {
    initCarousels();
}
