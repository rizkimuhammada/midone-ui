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
    root.className = cn(carouselRoot, root.className);
    root.setAttribute("data-scope", "carousel");
    root.setAttribute("data-part", "root");

    const control = root.querySelector<HTMLElement>(":scope > .carousel-control");
    const indicatorGroup = root.querySelector<HTMLElement>(":scope > .carousel-indicator-group");
    const itemGroup = root.querySelector<HTMLElement>(":scope > .carousel-item-group");
    if (!control || !indicatorGroup || !itemGroup) return;

    const prevTrigger = control.querySelector<HTMLButtonElement>(":scope > .carousel-prev-trigger");
    const nextTrigger = control.querySelector<HTMLButtonElement>(":scope > .carousel-next-trigger");
    const indicators = Array.from(indicatorGroup.querySelectorAll<HTMLButtonElement>(":scope > .carousel-indicator"));
    const items = Array.from(itemGroup.querySelectorAll<HTMLElement>(":scope > .carousel-item"));

    // Control — z-index above item group
    control.className = cn(carouselControl, control.className);
    control.setAttribute("data-scope", "carousel");
    control.setAttribute("data-part", "control");
    control.style.zIndex = "10";

    // Prev / next triggers
    if (prevTrigger) {
        prevTrigger.innerHTML = ARROW_LEFT;
        prevTrigger.className = cn(buttonVariants({ variant: "ghost" }), carouselPrevTrigger, prevTrigger.className);
        prevTrigger.setAttribute("data-scope", "carousel");
        prevTrigger.setAttribute("data-part", "prev-trigger");
    }
    if (nextTrigger) {
        nextTrigger.innerHTML = ARROW_RIGHT;
        nextTrigger.className = cn(buttonVariants({ variant: "ghost" }), carouselNextTrigger, nextTrigger.className);
        nextTrigger.setAttribute("data-scope", "carousel");
        nextTrigger.setAttribute("data-part", "next-trigger");
    }

    // Indicator group
    indicatorGroup.className = cn(carouselIndicatorGroup, indicatorGroup.className);
    indicatorGroup.setAttribute("data-scope", "carousel");
    indicatorGroup.setAttribute("data-part", "indicator-group");
    indicators.forEach(ind => {
        ind.className = cn(carouselIndicator, ind.className);
        ind.setAttribute("data-scope", "carousel");
        ind.setAttribute("data-part", "indicator");
    });

    // Item group — scroll-snap viewport (overflow:hidden is on the scroll container itself, not on a translated track)
    itemGroup.className = cn(carouselItemGroup, itemGroup.className);
    itemGroup.setAttribute("data-scope", "carousel");
    itemGroup.setAttribute("data-part", "item-group");
    itemGroup.style.cssText = "display:flex;overflow-x:scroll;scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none;";

    // Items — each fills full width, snaps to start
    items.forEach(item => {
        item.className = cn(boxVariants({}), carouselItem, item.className);
        item.setAttribute("data-scope", "carousel");
        item.setAttribute("data-part", "item");
        item.style.cssText = "flex-shrink:0;flex-basis:100%;min-width:100%;scroll-snap-align:start;";
    });

    // State
    let currentPage = 0;
    const totalPages = items.length;

    function updateIndicators() {
        indicators.forEach((ind, i) => {
            if (i === currentPage) ind.setAttribute("data-current", "");
            else ind.removeAttribute("data-current");
        });
        if (prevTrigger) prevTrigger.disabled = currentPage === 0;
        if (nextTrigger) nextTrigger.disabled = currentPage === totalPages - 1;
    }

    function goTo(page: number) {
        currentPage = Math.max(0, Math.min(page, totalPages - 1));
        itemGroup.scrollTo({ left: currentPage * itemGroup.clientWidth, behavior: "smooth" });
        updateIndicators();
    }

    // Sync indicator when user manually swipes
    itemGroup.addEventListener("scroll", () => {
        const snapped = Math.round(itemGroup.scrollLeft / itemGroup.clientWidth);
        if (snapped !== currentPage) {
            currentPage = snapped;
            updateIndicators();
        }
    }, { passive: true });

    if (prevTrigger) prevTrigger.addEventListener("click", () => goTo(currentPage - 1));
    if (nextTrigger) nextTrigger.addEventListener("click", () => goTo(currentPage + 1));
    indicators.forEach((ind, i) => ind.addEventListener("click", () => goTo(i)));

    goTo(0);
}

function initCarousels() {
    // Inject webkit scrollbar hide rule once
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
