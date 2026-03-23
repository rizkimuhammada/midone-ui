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

const ARROW_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`;
const ARROW_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;

function initCarouselRoot(root: HTMLElement) {
    // Props from attributes (mirroring Vue props)
    const slidesPerPage = root.getAttribute("data-slides-per-page") ?? "1";
    const slideSpacing = root.getAttribute("data-slide-spacing") ?? "2rem";
    const orientation = root.getAttribute("data-orientation") ?? "horizontal";
    
    root.className = cn(carouselRoot, root.className);
    root.setAttribute("data-scope", "carousel");
    root.setAttribute("data-part", "root");
    root.setAttribute("role", "region");
    root.setAttribute("aria-roledescription", "carousel");
    root.setAttribute("data-orientation", orientation);
    
    // Apply layout variables
    root.style.setProperty("--slides-per-page", slidesPerPage);
    root.style.setProperty("--slide-spacing", slideSpacing);
    root.style.setProperty("--slide-item-size", `calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page))`);

    const control = root.querySelector<HTMLElement>(":scope > .carousel-control");
    const indicatorGroup = root.querySelector<HTMLElement>(":scope > .carousel-indicator-group");
    const itemGroup = root.querySelector<HTMLElement>(":scope > .carousel-item-group");
    
    if (!itemGroup) return;

    const prevTrigger = root.querySelector<HTMLButtonElement>(".carousel-prev-trigger");
    const nextTrigger = root.querySelector<HTMLButtonElement>(".carousel-next-trigger");
    const indicators = indicatorGroup ? Array.from(indicatorGroup.querySelectorAll<HTMLButtonElement>(":scope > .carousel-indicator")) : [];
    const items = Array.from(itemGroup.querySelectorAll<HTMLElement>(":scope > .carousel-item"));

    // Control styling
    if (control) {
        control.className = cn(carouselControl, control.className);
        control.setAttribute("data-scope", "carousel");
        control.setAttribute("data-part", "control");
        control.style.zIndex = "10";
    }

    // Triggers
    if (prevTrigger) {
        if (!prevTrigger.innerHTML.trim()) prevTrigger.innerHTML = ARROW_LEFT;
        prevTrigger.className = cn(buttonVariants({ variant: "ghost" }), carouselPrevTrigger, prevTrigger.className);
        prevTrigger.setAttribute("data-scope", "carousel");
        prevTrigger.setAttribute("data-part", "prev-trigger");
        prevTrigger.setAttribute("aria-label", "Previous slide");
        prevTrigger.setAttribute("aria-controls", itemGroup.id || "carousel-items");
    }
    if (nextTrigger) {
        if (!nextTrigger.innerHTML.trim()) nextTrigger.innerHTML = ARROW_RIGHT;
        nextTrigger.className = cn(buttonVariants({ variant: "ghost" }), carouselNextTrigger, nextTrigger.className);
        nextTrigger.setAttribute("data-scope", "carousel");
        nextTrigger.setAttribute("data-part", "next-trigger");
        nextTrigger.setAttribute("aria-label", "Next slide");
        nextTrigger.setAttribute("aria-controls", itemGroup.id || "carousel-items");
    }

    // Indicators
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

    // Item group — Grid Layout matching Vue
    itemGroup.className = cn(carouselItemGroup, itemGroup.className);
    itemGroup.setAttribute("data-scope", "carousel");
    itemGroup.setAttribute("data-part", "item-group");
    itemGroup.setAttribute("aria-live", "polite");
    itemGroup.setAttribute("tabindex", "-1");
    
    itemGroup.style.display = "grid";
    itemGroup.style.gap = "var(--slide-spacing)";
    itemGroup.style.scrollSnapType = "x mandatory";
    itemGroup.style.gridAutoFlow = "column";
    itemGroup.style.gridAutoColumns = "var(--slide-item-size)";
    itemGroup.style.overflowX = "auto";
    itemGroup.style.scrollbarWidth = "none";
    itemGroup.style.overscrollBehaviorX = "contain";

    // Items
    items.forEach((item, i) => {
        item.className = cn(boxVariants({}), carouselItem, item.className);
        item.setAttribute("data-scope", "carousel");
        item.setAttribute("data-part", "item");
        item.setAttribute("role", "group");
        item.setAttribute("aria-roledescription", "slide");
        item.setAttribute("aria-label", `${i + 1} of ${items.length}`);
        
        item.style.scrollSnapAlign = "start";
        item.style.flexShrink = "0";
    });

    // State
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

        if (prevTrigger) prevTrigger.disabled = currentPage === 0;
        if (nextTrigger) nextTrigger.disabled = currentPage === totalPages - 1;
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

    // Sync indicator when user manually swipes
    itemGroup.addEventListener("scroll", () => {
        if (itemGroup) {
            const snapped = Math.round(itemGroup.scrollLeft / (itemGroup.scrollWidth / totalPages));
            // Alternatively, find which item is most in view
            // For now, simple round works if slides are equal width
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
    document.querySelectorAll<HTMLElement>(".carousel-root").forEach(root => initCarouselRoot(root));
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCarousels);
} else {
    initCarousels();
}
