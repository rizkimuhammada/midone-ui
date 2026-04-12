# Pagination

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="pagination-root" data-count="5000" data-page-size="10" data-sibling-count="2"></div>
```

## Dependency

No external dependencies.

## Component

### pagination.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    paginationRoot,
    paginationItem,
    paginationPrevTrigger,
    paginationNextTrigger,
    paginationEllipsis,
} from "@midoneui/core/src/styles/pagination.styles";

type PageItem = { type: "page"; value: number } | { type: "ellipsis"; index: number };

function getPages(current: number, total: number, siblings: number): PageItem[] {
    const result: PageItem[] = [];
    const range = (start: number, end: number) =>
        Array.from({ length: end - start + 1 }, (_, i) => start + i);

    const leftSibling = Math.max(current - siblings, 1);
    const rightSibling = Math.min(current + siblings, total);
    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < total - 1;

    if (!showLeftEllipsis && showRightEllipsis) {
        const leftCount = 3 + 2 * siblings;
        range(1, Math.min(leftCount, total - 1)).forEach((v) =>
            result.push({ type: "page", value: v })
        );
        result.push({ type: "ellipsis", index: result.length });
        result.push({ type: "page", value: total });
    } else if (showLeftEllipsis && !showRightEllipsis) {
        result.push({ type: "page", value: 1 });
        result.push({ type: "ellipsis", index: 1 });
        const rightCount = 3 + 2 * siblings;
        range(Math.max(total - rightCount + 1, 2), total).forEach((v) =>
            result.push({ type: "page", value: v })
        );
    } else if (showLeftEllipsis && showRightEllipsis) {
        result.push({ type: "page", value: 1 });
        result.push({ type: "ellipsis", index: 1 });
        range(leftSibling, rightSibling).forEach((v) =>
            result.push({ type: "page", value: v })
        );
        result.push({ type: "ellipsis", index: result.length });
        result.push({ type: "page", value: total });
    } else {
        range(1, total).forEach((v) => result.push({ type: "page", value: v }));
    }

    return result;
}

function initPagination() {
    document.querySelectorAll<HTMLElement>('[data-component="pagination-root"]').forEach((root) => {
        const count = parseInt(root.getAttribute("data-count") ?? "100");
        const pageSize = parseInt(root.getAttribute("data-page-size") ?? "10");
        const siblingCount = parseInt(root.getAttribute("data-sibling-count") ?? "1");
        const totalPages = Math.ceil(count / pageSize);

        root.className = cn(paginationRoot, root.className);
        root.setAttribute("data-scope", "pagination");
        root.setAttribute("data-part", "root");
        root.setAttribute("role", "navigation");
        root.setAttribute("aria-label", "pagination");

        let currentPage = 1;

        function render() {
            root.innerHTML = "";

            // Prev trigger
            const prevEl = document.createElement("div");
            prevEl.className = cn(paginationPrevTrigger);
            prevEl.setAttribute("data-scope", "pagination");
            prevEl.setAttribute("data-part", "prev-trigger");
            prevEl.textContent = "Previous";
            if (currentPage <= 1) {
                prevEl.setAttribute("data-disabled", "");
                prevEl.style.pointerEvents = "none";
            } else {
                prevEl.style.cursor = "pointer";
                prevEl.addEventListener("click", () => {
                    currentPage = Math.max(1, currentPage - 1);
                    render();
                });
            }
            root.appendChild(prevEl);

            // Page items
            const pages = getPages(currentPage, totalPages, siblingCount);
            pages.forEach((page) => {
                if (page.type === "page") {
                    const itemEl = document.createElement("div");
                    itemEl.className = cn(paginationItem);
                    itemEl.setAttribute("data-scope", "pagination");
                    itemEl.setAttribute("data-part", "item");
                    itemEl.textContent = String(page.value);
                    if (page.value === currentPage) {
                        itemEl.setAttribute("data-selected", "");
                    } else {
                        itemEl.style.cursor = "pointer";
                        itemEl.addEventListener("click", () => {
                            currentPage = page.value;
                            render();
                        });
                    }
                    root.appendChild(itemEl);
                } else {
                    const ellipsisEl = document.createElement("div");
                    ellipsisEl.className = cn(paginationEllipsis);
                    ellipsisEl.setAttribute("data-scope", "pagination");
                    ellipsisEl.setAttribute("data-part", "ellipsis");
                    ellipsisEl.setAttribute("data-index", String(page.index));
                    const inner = document.createElement("div");
                    inner.textContent = "…";
                    ellipsisEl.appendChild(inner);
                    root.appendChild(ellipsisEl);
                }
            });

            // Next trigger
            const nextEl = document.createElement("div");
            nextEl.className = cn(paginationNextTrigger);
            nextEl.setAttribute("data-scope", "pagination");
            nextEl.setAttribute("data-part", "next-trigger");
            nextEl.textContent = "Next";
            if (currentPage >= totalPages) {
                nextEl.setAttribute("data-disabled", "");
                nextEl.style.pointerEvents = "none";
            } else {
                nextEl.style.cursor = "pointer";
                nextEl.addEventListener("click", () => {
                    currentPage = Math.min(totalPages, currentPage + 1);
                    render();
                });
            }
            root.appendChild(nextEl);
        }

        render();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPagination);
} else {
    initPagination();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="pagination-root" data-count="5000" data-page-size="10" data-sibling-count="2"></div>
```

