# Button

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<button data-component="button" class="" data-variant="primary" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="primary">Button Medium</button>
<button data-component="button" class="" data-variant="primary" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="primary" data-size="xl"> Button Extra Large </button>
```

## Dependency

No external dependencies.

## Component

### button.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import { buttonVariants } from "@midoneui/core/src/styles/button.styles";
import { handleAsChild } from "./slot";

export function initButtons(root: ParentNode = document) {
    root.querySelectorAll<HTMLElement>('[data-component="button"]').forEach((btnEl) => {
        const button = handleAsChild(btnEl);
        
        const look = button.getAttribute("data-look") as any;
        const variant = button.getAttribute("data-variant") as any;
        const size = button.getAttribute("data-size") as any;

        const options: any = {};
        if (look) options.look = look;
        if (variant) options.variant = variant;
        if (size) options.size = size;

        button.className = cn(buttonVariants(options), button.className);
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initButtons());
} else {
    initButtons();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<button data-component="button" class="" data-variant="primary" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="primary">Button Medium</button>
<button data-component="button" class="" data-variant="primary" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="primary" data-size="xl"> Button Extra Large </button>
```

## Examples

### Example 1

```html
<button data-component="button" class="" data-variant="primary" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="primary">Button Medium</button>
<button data-component="button" class="" data-variant="primary" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="primary" data-size="xl"> Button Extra Large </button>
```

### Example 2

```html
<button data-component="button" class="" data-variant="secondary" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="secondary">Button Medium</button>
<button data-component="button" class="" data-variant="secondary" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="secondary" data-size="xl"> Button Extra Large </button>
```

### Example 3

```html
<button data-component="button" class="" data-variant="success" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="success">Button Medium</button>
<button data-component="button" class="" data-variant="success" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="success" data-size="xl"> Button Extra Large </button>
```

### Example 4

```html
<button data-component="button" class="" data-variant="danger" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="danger">Button Medium</button>
<button data-component="button" class="" data-variant="danger" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="danger" data-size="xl"> Button Extra Large </button>
```

### Example 5

```html
<button data-component="button" class="" data-variant="pending" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="pending">Button Medium</button>
<button data-component="button" class="" data-variant="pending" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="pending" data-size="xl"> Button Extra Large </button>
```

### Example 6

```html
<button data-component="button" class="" data-variant="warning" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-variant="warning">Button Medium</button>
<button data-component="button" class="" data-variant="warning" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-variant="warning" data-size="xl"> Button Extra Large </button>
```

### Example 7

```html
<button data-component="button" class="" data-look="outline" data-variant="primary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="primary">Button Medium</button>
<button data-component="button" class="" data-look="outline" data-variant="primary" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="primary" data-size="xl">
  Button Extra Large
</button>
```

### Example 8

```html
<button data-component="button" class="" data-look="outline" data-variant="secondary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="secondary">Button Medium</button>
<button data-component="button" class="" data-look="outline" data-variant="secondary" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="secondary" data-size="xl">
  Button Extra Large
</button>
```

### Example 9

```html
<button data-component="button" class="" data-look="outline" data-variant="success" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="success">Button Medium</button>
<button data-component="button" class="" data-look="outline" data-variant="success" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="success" data-size="xl">
  Button Extra Large
</button>
```

### Example 10

```html
<button data-component="button" class="" data-look="outline" data-variant="danger" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="danger">Button Medium</button>
<button data-component="button" class="" data-look="outline" data-variant="danger" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="danger" data-size="xl">
  Button Extra Large
</button>
```

### Example 11

```html
<button data-component="button" class="" data-look="outline" data-variant="pending" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="pending">Button Medium</button>
<button data-component="button" class="" data-look="outline" data-variant="pending" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="pending" data-size="xl">
  Button Extra Large
</button>
```

### Example 12

```html
<button data-component="button" class="" data-look="outline" data-variant="warning" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="warning">Button Medium</button>
<button data-component="button" class="" data-look="outline" data-variant="warning" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="warning" data-size="xl">
  Button Extra Large
</button>
```

### Example 13

```html
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary"> Button Medium </button>
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="xl">
  Button Extra Large
</button>
```

### Example 14

```html
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary"> Button Medium </button>
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="xl">
  Button Extra Large
</button>
```

### Example 15

```html
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="success"> Button Medium </button>
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="xl">
  Button Extra Large
</button>
```

### Example 16

```html
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="sm"> Button Small </button>
<button data-component="button" class="" data-look="filled" data-variant="danger"> Button Medium </button>
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="lg"> Button Large </button>
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="xl">
  Button Extra Large
</button>
```

### Example 17

```html
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending"> Button Medium </button>
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="xl">
  Button Extra Large
</button>
```

### Example 18

```html
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning"> Button Medium </button>
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="xl">
  Button Extra Large
</button>
```

### Example 19

```html
<button data-component="button" class="" disabled data-variant="primary" data-size="sm"> Button Small </button>
<button data-component="button" class="" disabled data-variant="primary"> Button Medium </button>
<button data-component="button" class="" disabled data-variant="primary" data-size="lg"> Button Large </button>
<button data-component="button" class="" disabled data-variant="primary" data-size="xl">
  Button Extra Large
</button>
```

### Example 20

```html
<button data-component="button" class="" disabled data-variant="secondary" data-size="sm"> Button Small </button>
<button data-component="button" class="" disabled data-variant="secondary"> Button Medium </button>
<button data-component="button" class="" disabled data-variant="secondary" data-size="lg"> Button Large </button>
<button data-component="button" class="" disabled data-variant="secondary" data-size="xl">
  Button Extra Large
</button>
```

### Example 21

```html
<button data-component="button" class="" disabled data-variant="success" data-size="sm"> Button Small </button>
<button data-component="button" class="" disabled data-variant="success"> Button Medium </button>
<button data-component="button" class="" disabled data-variant="success" data-size="lg"> Button Large </button>
<button data-component="button" class="" disabled data-variant="success" data-size="xl">
  Button Extra Large
</button>
```

### Example 22

```html
<button data-component="button" class="" disabled data-variant="danger" data-size="sm"> Button Small </button>
<button data-component="button" class="" disabled data-variant="danger"> Button Medium </button>
<button data-component="button" class="" disabled data-variant="danger" data-size="lg"> Button Large </button>
<button data-component="button" class="" disabled data-variant="danger" data-size="xl">
  Button Extra Large
</button>
```

### Example 23

```html
<button data-component="button" class="" disabled data-variant="pending" data-size="sm"> Button Small </button>
<button data-component="button" class="" disabled data-variant="pending"> Button Medium </button>
<button data-component="button" class="" disabled data-variant="pending" data-size="lg"> Button Large </button>
<button data-component="button" class="" disabled data-variant="pending" data-size="xl">
  Button Extra Large
</button>
```

### Example 24

```html
<button data-component="button" class="" disabled data-variant="warning" data-size="sm"> Button Small </button>
<button data-component="button" class="" disabled data-variant="warning"> Button Medium </button>
<button data-component="button" class="" disabled data-variant="warning" data-size="lg"> Button Large </button>
<button data-component="button" class="" disabled data-variant="warning" data-size="xl">
  Button Extra Large
</button>
```

### Example 25

```html
<button data-component="button" class="" disabled data-look="outline" data-variant="primary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="primary">Button Medium</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="primary" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="primary" data-size="xl">
  Button Extra Large
</button>
```

### Example 26

```html
<button data-component="button" class="" disabled data-look="outline" data-variant="secondary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="secondary"
  >Button Medium</Button
>
<Button disabled look="outline" variant="secondary" size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="secondary" data-size="xl">
  Button Extra Large
</button>
```

### Example 27

```html
<button data-component="button" class="" disabled data-look="outline" data-variant="success" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="success">Button Medium</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="success" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="success" data-size="xl">
  Button Extra Large
</button>
```

### Example 28

```html
<button data-component="button" class="" disabled data-look="outline" data-variant="danger" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="danger">Button Medium</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="danger" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="danger" data-size="xl">
  Button Extra Large
</button>
```

### Example 29

```html
<button data-component="button" class="" disabled data-look="outline" data-variant="pending" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="pending">Button Medium</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="pending" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="pending" data-size="xl">
  Button Extra Large
</button>
```

### Example 30

```html
<button data-component="button" class="" disabled data-look="outline" data-variant="warning" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="warning">Button Medium</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="warning" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="outline" data-variant="warning" data-size="xl">
  Button Extra Large
</button>
```

### Example 31

```html
<button data-component="button" class="" disabled data-look="filled" data-variant="primary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="primary">
  Button Medium
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="primary" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="primary" data-size="xl">
  Button Extra Large
</button>
```

### Example 32

```html
<button data-component="button" class="" disabled data-look="filled" data-variant="secondary" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="secondary">
  Button Medium
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="secondary" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="secondary" data-size="xl">
  Button Extra Large
</button>
```

### Example 33

```html
<button data-component="button" class="" disabled data-look="filled" data-variant="success" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="success">
  Button Medium
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="success" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="success" data-size="xl">
  Button Extra Large
</button>
```

### Example 34

```html
<button data-component="button" class="" disabled data-look="filled" data-variant="danger" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="danger"> Button Medium </button>
<button data-component="button" class="" disabled data-look="filled" data-variant="danger" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="danger" data-size="xl">
  Button Extra Large
</button>
```

### Example 35

```html
<button data-component="button" class="" disabled data-look="filled" data-variant="pending" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="pending">
  Button Medium
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="pending" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="pending" data-size="xl">
  Button Extra Large
</button>
```

### Example 36

```html
<button data-component="button" class="" disabled data-look="filled" data-variant="warning" data-size="sm">
  Button Small
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="warning">
  Button Medium
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="warning" data-size="lg">
  Button Large
</button>
<button data-component="button" class="" disabled data-look="filled" data-variant="warning" data-size="xl">
  Button Extra Large
</button>
```

### Example 37

```html
<button data-component="button" class="" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 38

```html
<button data-component="button" class="" data-variant="primary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-variant="primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-variant="primary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-variant="primary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 39

```html
<button data-component="button" class="" data-variant="secondary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-variant="secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-variant="secondary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-variant="secondary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 40

```html
<button data-component="button" class="" data-variant="success" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-variant="success">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-variant="success" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-variant="success" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 41

```html
<button data-component="button" class="" data-variant="danger" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-variant="danger">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-variant="danger" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-variant="danger" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 42

```html
<button data-component="button" class="" data-variant="pending" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-variant="pending">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-variant="pending" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-variant="pending" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 43

```html
<button data-component="button" class="" data-variant="warning" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-variant="warning">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-variant="warning" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-variant="warning" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 44

```html
<button data-component="button" class="" data-look="outline" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="outline">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="outline" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="outline" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 45

```html
<button data-component="button" class="" data-look="outline" data-variant="primary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="outline" data-variant="primary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="primary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 46

```html
<button data-component="button" class="" data-look="outline" data-variant="secondary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="outline" data-variant="secondary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="secondary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 47

```html
<button data-component="button" class="" data-look="outline" data-variant="success" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="success">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="outline" data-variant="success" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="success" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 48

```html
<button data-component="button" class="" data-look="outline" data-variant="danger" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="danger">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="outline" data-variant="danger" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="danger" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 49

```html
<button data-component="button" class="" data-look="outline" data-variant="pending" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="pending">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="outline" data-variant="pending" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="pending" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 50

```html
<button data-component="button" class="" data-look="outline" data-variant="warning" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="outline" data-variant="warning">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="outline" data-variant="warning" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="outline" data-variant="warning" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 51

```html
<button data-component="button" class="" data-look="filled" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="filled">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="filled" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="filled" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 52

```html
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 53

```html
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 54

```html
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="success">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 55

```html
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="danger">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 56

```html
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 57

```html
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Small
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Medium
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Large
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 animate-spin lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Button Extra Large
</button>
```

### Example 58

```html
<button data-component="button" class="" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 59

```html
<button data-component="button" class="" data-variant="primary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-variant="primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-variant="primary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-variant="primary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 60

```html
<button data-component="button" class="" data-variant="secondary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-variant="secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-variant="secondary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-variant="secondary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 61

```html
<button data-component="button" class="" data-variant="success" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-variant="success">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-variant="success" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-variant="success" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 62

```html
<button data-component="button" class="" data-variant="danger" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-variant="danger">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-variant="danger" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-variant="danger" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 63

```html
<button data-component="button" class="" data-variant="pending" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-variant="pending">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-variant="pending" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-variant="pending" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 64

```html
<button data-component="button" class="" data-variant="warning" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-variant="warning">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-variant="warning" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-variant="warning" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 65

```html
<button data-component="button" class="" data-look="filled" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-look="filled">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 66

```html
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="primary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 67

```html
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="secondary" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 68

```html
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="success">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="success" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 69

```html
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="danger">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="danger" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 70

```html
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="pending" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

### Example 71

```html
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="sm">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-scissors"><circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12l4.12 4.12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="lg">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
</button>
<button data-component="button" class="" data-look="filled" data-variant="warning" data-size="xl">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 lucide-square-plus"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
</button>
```

