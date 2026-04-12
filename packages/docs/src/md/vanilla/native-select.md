# Native Select

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<select data-component="native-select" class="w-56">
  <option data-component="native-select-option" value="">Select status</option>
  <option data-component="native-select-option" value="todo">Todo</option>
  <option data-component="native-select-option" value="in-progress">In Progress</option>
  <option data-component="native-select-option" value="done">Done</option>
  <option data-component="native-select-option" value="cancelled">Cancelled</option>
</select>
```

## Dependency

No external dependencies.

## Component

### native-select.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import { input } from "@midoneui/core/src/styles/input.styles";
import { nativeSelect } from "@midoneui/core/src/styles/native-select.styles";

function initNativeSelect() {
    document.querySelectorAll<HTMLSelectElement>('[data-component="native-select"]').forEach((el) => {
        el.className = cn(input, nativeSelect, el.className);
        el.setAttribute("data-scope", "native-select");
        el.setAttribute("data-part", "root");
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNativeSelect);
} else {
    initNativeSelect();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<select data-component="native-select" class="w-56">
  <option data-component="native-select-option" value="">Select status</option>
  <option data-component="native-select-option" value="todo">Todo</option>
  <option data-component="native-select-option" value="in-progress">In Progress</option>
  <option data-component="native-select-option" value="done">Done</option>
  <option data-component="native-select-option" value="cancelled">Cancelled</option>
</select>
```

## Examples

### Example 1

```html
<select data-component="native-select" class="w-56">
  <option data-component="native-select-option" value="">Select department</option>
  <optgroup data-component="native-select-option-group" label="Engineering">
    <option data-component="native-select-option" value="frontend">Frontend</option>
    <option data-component="native-select-option" value="backend">Backend</option>
    <option data-component="native-select-option" value="devops">DevOps</option>
  </optgroup>
  <optgroup data-component="native-select-option-group" label="Sales">
    <option data-component="native-select-option" value="sales-rep">Sales Rep</option>
    <option data-component="native-select-option" value="account-manager">Account Manager</option>
    <option data-component="native-select-option" value="sales-director">Sales Director</option>
  </optgroup>
  <optgroup data-component="native-select-option-group" label="Operations">
    <option data-component="native-select-option" value="support">Customer Support</option>
    <option data-component="native-select-option" value="product-manager">Product Manager</option>
    <option data-component="native-select-option" value="ops-manager">Operations Manager</option>
  </optgroup>
</select>
```

### Example 2

```html
<select data-component="native-select" class="w-56" disabled>
  <option data-component="native-select-option" value="">Select status</option>
  <option data-component="native-select-option" value="todo">Todo</option>
  <option data-component="native-select-option" value="in-progress">In Progress</option>
  <option data-component="native-select-option" value="done">Done</option>
  <option data-component="native-select-option" value="cancelled">Cancelled</option>
</select>
```

