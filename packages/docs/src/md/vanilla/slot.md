# Slot

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div class="justify-center items-center flex gap-2">
  <div data-component="box" data-as-child>
    <button data-component="button" class="me-2 px-2" data-variant="ghost">
      <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>
  </div>
  <div data-component="box" data-as-child>
    <button data-component="button" class="px-2" data-variant="ghost">
      <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>
</div>
```

## Dependency

No external dependencies.

## Component

### slot.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";

export function handleAsChild(element: HTMLElement): HTMLElement {
    const asChild =
        element.hasAttribute("as-child") ||
        element.hasAttribute("data-as-child");

    if (asChild) {
        const firstChild = element.firstElementChild as HTMLElement;
        if (firstChild) {
            // Copy all attributes from parent to firstChild (part, scope, etc)
            // Skip data-component if child already has its own identity
            Array.from(element.attributes).forEach((attr) => {
                if (
                    attr.name !== "class" &&
                    attr.name !== "as-child" &&
                    attr.name !== "data-as-child" &&
                    !(attr.name === "data-component" && firstChild.hasAttribute("data-component"))
                ) {
                    firstChild.setAttribute(attr.name, attr.value);
                }
            });
            // Merge classes: parent's custom classes + child's classes
            // We strip 'as-child' from the parent classes
            const parentClasses = element.getAttribute("class")?.replace("data-as-child", "").replace("as-child", "") || "";
            const childClasses = firstChild.getAttribute("class") || "";
            firstChild.setAttribute("class", cn(parentClasses, childClasses));
            element.replaceWith(firstChild);
            // Recurse: if firstChild also has data-as-child, keep unwrapping
            return handleAsChild(firstChild);
        }
    }
    return element;
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div class="justify-center items-center flex gap-2">
  <div data-component="box" data-as-child>
    <button data-component="button" class="me-2 px-2" data-variant="ghost">
      <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    </button>
  </div>
  <div data-component="box" data-as-child>
    <button data-component="button" class="px-2" data-variant="ghost">
      <svg class="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    </button>
  </div>
</div>
```

