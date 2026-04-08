import { cn } from "@midoneui/core/src/utils/cn";
import {
    scrollAreaRoot,
    scrollAreaViewport,
    scrollAreaContent,
    scrollAreaScrollbar,
    scrollAreaThumb,
    scrollAreaCorner,
} from "@midoneui/core/src/styles/scroll-area.styles";

export function initScrollArea() {
    document.querySelectorAll<HTMLElement>('[data-component="scroll-area-root"]').forEach((root) => {
        root.className = cn(scrollAreaRoot, root.className);
        root.setAttribute("data-scope", "scroll-area");
        root.setAttribute("data-part", "root");
        root.style.cssText += ";position:relative;overflow:hidden;";

        let viewportEl = root.querySelector<HTMLElement>('[data-component="scroll-area-viewport"]');
        let contentEl = root.querySelector<HTMLElement>('[data-component="scroll-area-content"]');
        let scrollbarEl = root.querySelector<HTMLElement>('[data-component="scroll-area-scrollbar"]');
        let thumbEl = root.querySelector<HTMLElement>('[data-component="scroll-area-thumb"]');
        let cornerEl = root.querySelector<HTMLElement>('[data-component="scroll-area-corner"]');

        if (!viewportEl) {
            viewportEl = document.createElement("div");
            viewportEl.setAttribute("data-component", "scroll-area-viewport");

            if (!contentEl) {
                contentEl = document.createElement("div");
                contentEl.setAttribute("data-component", "scroll-area-content");
                const children = Array.from(root.childNodes);
                children.forEach(child => {
                    if (child instanceof HTMLElement && child.getAttribute("data-component")?.startsWith("scroll-area-")) {
                        return;
                    }
                    contentEl!.appendChild(child);
                });
                viewportEl.appendChild(contentEl);
            } else {
                viewportEl.appendChild(contentEl);
            }
            root.appendChild(viewportEl);
        }

        if (!scrollbarEl) {
            scrollbarEl = document.createElement("div");
            scrollbarEl.setAttribute("data-component", "scroll-area-scrollbar");
            thumbEl = document.createElement("div");
            thumbEl.setAttribute("data-component", "scroll-area-thumb");
            scrollbarEl.appendChild(thumbEl);
            root.appendChild(scrollbarEl);
        }

        if (!cornerEl) {
            cornerEl = document.createElement("div");
            cornerEl.setAttribute("data-component", "scroll-area-corner");
            root.appendChild(cornerEl);
        }

        viewportEl.className = cn(scrollAreaViewport, viewportEl.className);
        viewportEl.setAttribute("data-scope", "scroll-area");
        viewportEl.setAttribute("data-part", "viewport");
        viewportEl.style.cssText = "overflow:scroll;width:100%;height:100%;";

        if (contentEl) {
            contentEl.className = cn(scrollAreaContent, contentEl.className);
            contentEl.setAttribute("data-scope", "scroll-area");
            contentEl.setAttribute("data-part", "content");
        }

        if (cornerEl) {
            cornerEl.className = cn(scrollAreaCorner, cornerEl.className);
            cornerEl.setAttribute("data-scope", "scroll-area");
            cornerEl.setAttribute("data-part", "corner");
        }


        scrollbarEl.className = cn(scrollAreaScrollbar, scrollbarEl.className);
        scrollbarEl.setAttribute("data-scope", "scroll-area");
        scrollbarEl.setAttribute("data-part", "scrollbar");
        scrollbarEl.setAttribute("data-orientation", "vertical");
        scrollbarEl.style.cssText = "position:absolute;right:0;top:0;bottom:0;";

        if (thumbEl) {
            thumbEl.className = cn(scrollAreaThumb, thumbEl.className);
            thumbEl.setAttribute("data-scope", "scroll-area");
            thumbEl.setAttribute("data-part", "thumb");
            thumbEl.setAttribute("data-orientation", "vertical");
            thumbEl.style.cssText = "position:absolute;left:0;right:0;";
        }

        function updateScrollbar() {
            const { scrollTop, scrollHeight, clientHeight } = viewportEl!;
            const hasOverflow = scrollHeight > clientHeight;

            if (hasOverflow) {
                scrollbarEl!.setAttribute("data-overflow-y", "");
            } else {
                scrollbarEl!.removeAttribute("data-overflow-y");
            }

            if (thumbEl && hasOverflow) {
                const scrollbarHeight = scrollbarEl!.clientHeight;
                const thumbHeight = Math.max((clientHeight / scrollHeight) * scrollbarHeight, 20);
                const scrollRatio = scrollTop / (scrollHeight - clientHeight);
                const thumbTop = scrollRatio * (scrollbarHeight - thumbHeight);
                thumbEl.style.height = `${thumbHeight}px`;
                thumbEl.style.top = `${thumbTop}px`;
            }
        }

        // Thumb drag
        if (thumbEl) {
            thumbEl.addEventListener("mousedown", (e) => {
                e.preventDefault();
                const startY = e.clientY;
                const startScrollTop = viewportEl!.scrollTop;
                const scrollbarHeight = scrollbarEl!.clientHeight;
                const thumbHeight = thumbEl.offsetHeight;
                const scrollHeight = viewportEl!.scrollHeight;
                const clientHeight = viewportEl!.clientHeight;
                const scrollRange = scrollHeight - clientHeight;
                const thumbRange = scrollbarHeight - thumbHeight;

                const onMove = (e: MouseEvent) => {
                    const delta = e.clientY - startY;
                    viewportEl!.scrollTop = startScrollTop + (delta / thumbRange) * scrollRange;
                };
                const onUp = () => {
                    document.removeEventListener("mousemove", onMove);
                    document.removeEventListener("mouseup", onUp);
                };
                document.addEventListener("mousemove", onMove);
                document.addEventListener("mouseup", onUp);
            });
        }

        let scrollTimeout: ReturnType<typeof setTimeout>;
        viewportEl.addEventListener("scroll", () => {
            scrollbarEl!.setAttribute("data-scrolling", "");
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                scrollbarEl!.removeAttribute("data-scrolling");
            }, 600);
            updateScrollbar();
        });

        scrollbarEl.addEventListener("mouseenter", () => {
            scrollbarEl!.setAttribute("data-hover", "");
        });
        scrollbarEl.addEventListener("mouseleave", () => {
            scrollbarEl!.removeAttribute("data-hover");
        });

        requestAnimationFrame(updateScrollbar);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollArea);
} else {
    initScrollArea();
}
