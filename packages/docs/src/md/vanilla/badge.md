# Badge

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<span data-component="badge" data-variant="primary">12%</span>
<span data-component="badge" data-variant="secondary">12%</span>
<span data-component="badge" data-variant="success">12%</span>
<span data-component="badge" data-variant="danger">12%</span>
<span data-component="badge" data-variant="pending">12%</span>
<span data-component="badge" data-variant="warning">12%</span>
```

## Dependency

No external dependencies.

## Component

### badge.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import { badgeVariants } from "@midoneui/core/src/styles/badge.styles";
import { handleAsChild } from "./slot";

function initBadges() {
    document.querySelectorAll<HTMLElement>('[data-component="badge"]').forEach((badgeEl) => {
        const badge = handleAsChild(badgeEl);
        const variant = badge.getAttribute("data-variant") as any || "primary";
        const look = badge.getAttribute("data-look") as any || "flat";

        badge.className = cn(badgeVariants({ variant, look }), badge.className);
        badge.setAttribute("data-scope", "badge");
        badge.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBadges);
} else {
    initBadges();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<span data-component="badge" data-variant="primary">12%</span>
<span data-component="badge" data-variant="secondary">12%</span>
<span data-component="badge" data-variant="success">12%</span>
<span data-component="badge" data-variant="danger">12%</span>
<span data-component="badge" data-variant="pending">12%</span>
<span data-component="badge" data-variant="warning">12%</span>
```

## Examples

### Example 1

```html
<span data-component="badge" data-variant="primary">12%</span>
<span data-component="badge" data-variant="secondary">12%</span>
<span data-component="badge" data-variant="success">12%</span>
<span data-component="badge" data-variant="danger">12%</span>
<span data-component="badge" data-variant="pending">12%</span>
<span data-component="badge" data-variant="warning">12%</span>
```

### Example 2

```html
<span data-component="badge" data-variant="primary">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-variant="secondary">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-variant="success">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-variant="danger">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-variant="pending">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-variant="warning">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
```

### Example 3

```html
<span data-component="badge" data-look="outline" data-variant="primary">12%</span>
<span data-component="badge" data-look="outline" data-variant="secondary">12%</span>
<span data-component="badge" data-look="outline" data-variant="success">12%</span>
<span data-component="badge" data-look="outline" data-variant="danger">12%</span>
<span data-component="badge" data-look="outline" data-variant="pending">12%</span>
<span data-component="badge" data-look="outline" data-variant="warning">12%</span>
```

### Example 4

```html
<span data-component="badge" data-look="outline" data-variant="primary">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="outline" data-variant="secondary">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="outline" data-variant="success">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="outline" data-variant="danger">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="outline" data-variant="pending">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="outline" data-variant="warning">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
```

### Example 5

```html
<span data-component="badge" data-look="filled" data-variant="primary">12%</span>
<span data-component="badge" data-look="filled" data-variant="secondary">12%</span>
<span data-component="badge" data-look="filled" data-variant="success">12%</span>
<span data-component="badge" data-look="filled" data-variant="danger">12%</span>
<span data-component="badge" data-look="filled" data-variant="pending">12%</span>
<span data-component="badge" data-look="filled" data-variant="warning">12%</span>
```

### Example 6

```html
<span data-component="badge" data-look="filled" data-variant="primary">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="filled" data-variant="secondary">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="filled" data-variant="success">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="filled" data-variant="danger">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="filled" data-variant="pending">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
<span data-component="badge" data-look="filled" data-variant="warning">
  12%
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
</span>
```

### Example 7

```html
<span data-component="badge" data-look="outline" data-variant="primary" data-content="12% Higher than last month">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
  12%
</span>
<span data-component="badge" data-look="outline" data-variant="secondary" data-content="12% Higher than last month">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
  12%
</span>
<span data-component="badge" data-look="outline" data-variant="success" data-content="12% Higher than last month">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
  12%
</span>
<span data-component="badge" data-look="outline" data-variant="danger" data-content="12% Higher than last month">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
  12%
</span>
<span data-component="badge" data-look="outline" data-variant="pending" data-content="12% Higher than last month">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
  12%
</span>
<span data-component="badge" data-look="outline" data-variant="warning" data-content="12% Higher than last month">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-square"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
  12%
</span>
```

