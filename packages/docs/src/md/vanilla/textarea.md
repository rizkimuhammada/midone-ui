# Textarea

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<textarea data-component="textarea" placeholder="Type your message here."></textarea>
```

## Dependency

No external dependencies.

## Component

### textarea.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import { textarea } from "@midoneui/core/src/styles/textarea.styles";

export function initTextarea(root: ParentNode = document) {
    root.querySelectorAll<HTMLTextAreaElement>('[data-component="textarea"]').forEach((el) => {
        el.className = cn(textarea, el.className);
        el.setAttribute("data-scope", "textarea");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initTextarea());
} else {
    initTextarea();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<textarea data-component="textarea" placeholder="Type your message here."></textarea>
```

