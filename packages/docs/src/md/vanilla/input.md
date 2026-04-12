# Input

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<input data-component="input" type="email" placeholder="Email" />
```

## Dependency

No external dependencies.

## Component

### input.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import { input } from "@midoneui/core/src/styles/input.styles";

export function initInputs(root: ParentNode = document) {
    root.querySelectorAll<HTMLInputElement>('[data-component="input"]').forEach(el => {
        el.className = cn(input, el.className);
        el.setAttribute("data-scope", "input");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initInputs());
} else {
    initInputs();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<input data-component="input" type="email" placeholder="Email" />
```

## Examples

### Example 1

```html
<input data-component="input" type="email" placeholder="Email" />
```

