# Switch

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<label data-component="switch-root" data-label="Airplane Mode"></label>
```

## Dependency

No external dependencies.

## Component

### switch.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    switchRoot,
    switchControl,
    switchThumb,
    switchLabel,
    switchHiddenInput,
} from "@midoneui/core/src/styles/switch.styles";
import { label } from "@midoneui/core/src/styles/label.styles";

function initSwitch() {
    document.querySelectorAll<HTMLElement>('[data-component="switch-root"]').forEach((root) => {
        // Shorthand support (Auto-rendering)
        if (root.children.length === 0) {
            const labelText = root.getAttribute("data-label");
            root.innerHTML = `
                <div data-component="switch-control"></div>
                ${labelText ? `<div data-component="switch-label">${labelText}</div>` : ""}
            `;
        }

        let control = root.querySelector<HTMLElement>('[data-component="switch-control"]');
        let labelEl = root.querySelector<HTMLElement>('[data-component="switch-label"]');

        // Inject thumb into control
        const thumb = document.createElement("span");
        control.appendChild(thumb);

        // Inject hidden checkbox input into root
        const input = document.createElement("input");
        input.type = "checkbox";
        input.style.display = "none";
        root.appendChild(input);

        // Apply classes
        root.className = cn(switchRoot, root.className);
        root.setAttribute("data-scope", "switch");
        root.setAttribute("data-part", "root");
        if (control) {
            control.className = cn(switchControl, control.className);
            control.setAttribute("data-scope", "switch");
            control.setAttribute("data-part", "control");
        }
        thumb.className = cn(switchThumb);
        thumb.setAttribute("data-scope", "switch");
        thumb.setAttribute("data-part", "thumb");
        if (labelEl) {
            labelEl.className = cn(label, switchLabel, labelEl.className);
            labelEl.setAttribute("data-scope", "switch");
            labelEl.setAttribute("data-part", "label");
        }
        input.className = cn(switchHiddenInput);
        input.setAttribute("data-scope", "switch");
        input.setAttribute("data-part", "hidden-input");

        function setState(checked: boolean) {
            const state = checked ? "checked" : "unchecked";
            control?.setAttribute("data-state", state);
            thumb.setAttribute("data-state", state);
        }

        setState(false);

        input.addEventListener("change", () => setState(input.checked));
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSwitch);
} else {
    initSwitch();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<label data-component="switch-root" data-label="Airplane Mode"></label>
```

## Examples

### Example 1

```html
<label data-component="switch-root">
  <span data-component="switch-control"></span>
  <span data-component="switch-label" class="font-normal">
      Activate PreOrder if you need a longer shipping process.
      <a class="text-primary" href="">
          Learn more
      </a>
      .
  </span>
</label>
```

