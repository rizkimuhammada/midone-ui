# Box

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="box" class=" w-70">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-gauge size-7 stroke-1 fill-foreground/10"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</div>
```

## Dependency

No external dependencies.

## Component

### box.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import { boxVariants } from "@midoneui/core/src/styles/box.styles";
import { handleAsChild } from "./slot";

function initBoxes() {
    document.querySelectorAll<HTMLElement>('[data-component="box"]').forEach((boxEl) => {
        const box = handleAsChild(boxEl);
        const raisedAttr = box.getAttribute("data-raised") as any;
        const userClasses = Array.from(box.classList);

        const options: any = {};
        if (raisedAttr) options.raised = raisedAttr;

        box.className = cn(boxVariants(options), box.className);

        if (userClasses.includes("p-0")) {
            (box as HTMLElement).style.padding = "0";
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBoxes);
} else {
    initBoxes();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="box" class=" w-70">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-gauge size-7 stroke-1 fill-foreground/10"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</div>
```

## Examples

### Example 1

```html
<div data-component="box" class=" w-70">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-gauge size-7 stroke-1 fill-foreground/10"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</div>
```

### Example 2

```html
<div data-component="box" class=" w-70" data-raised="single">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-gauge size-7 stroke-1 fill-foreground/10"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</div>
```

### Example 3

```html
<div data-component="box" class=" w-70" data-raised="double">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-gauge size-7 stroke-1 fill-foreground/10"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"/><circle cx="12" cy="12" r="2"/><path d="M13.4 10.6 19 5"/></svg>
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</div>
```

