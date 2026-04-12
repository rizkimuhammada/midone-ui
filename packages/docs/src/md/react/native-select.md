# Native Select

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<NativeSelect className="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">
    In Progress
  </NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
```

## Dependency

No external dependencies.

## Component

```tsx
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import {
  nativeSelect,
  nativeSelectOption,
  NativeSelectOptGroup,
} from "@midoneui/core/styles/native-select.styles";

function NativeSelect({
  children,
  className,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select className={cn(input, nativeSelect, className)} {...props}>
      {children}
    </select>
  );
}

function NativeSelectOption({
  children,
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option className={cn(nativeSelectOption, className)} {...props}>
      {children}
    </option>
  );
}

function NativeSelectOptionGroup({
  children,
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup className={cn(NativeSelectOptGroup, className)} {...props}>
      {children}
    </optgroup>
  );
}

export { NativeSelect, NativeSelectOption, NativeSelectOptionGroup };
```

## Usage

```tsx
<NativeSelect className="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">
    In Progress
  </NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
```

## Examples

### Example 1

```tsx
<NativeSelect className="w-56">
  <NativeSelectOption value="">Select department</NativeSelectOption>
  <NativeSelectOptionGroup label="Engineering">
    <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
    <NativeSelectOption value="backend">Backend</NativeSelectOption>
    <NativeSelectOption value="devops">DevOps</NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Sales">
    <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
    <NativeSelectOption value="account-manager">
      Account Manager
    </NativeSelectOption>
    <NativeSelectOption value="sales-director">
      Sales Director
    </NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Operations">
    <NativeSelectOption value="support">
      Customer Support
    </NativeSelectOption>
    <NativeSelectOption value="product-manager">
      Product Manager
    </NativeSelectOption>
    <NativeSelectOption value="ops-manager">
      Operations Manager
    </NativeSelectOption>
  </NativeSelectOptionGroup>
</NativeSelect>
```

### Example 2

```tsx
<NativeSelect className="w-56" disabled>
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress">
    In Progress
  </NativeSelectOption>
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
```

