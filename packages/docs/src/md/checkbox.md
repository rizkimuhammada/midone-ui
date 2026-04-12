# Checkbox

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<CheckboxRoot label="Accept terms and conditions" />
```

## Dependency

```bash
npm install lucide-react @zag-js/checkbox @zag-js/react
```

## Component

```tsx
import { CheckIcon } from "lucide-react";
import { cn } from "@midoneui/core/utils/cn";
import {
  checkboxRoot,
  checkboxLabel,
  checkboxControl,
  checkboxIndicator,
  checkboxHiddenInput,
} from "@midoneui/core/styles/checkbox.styles";
import { label } from "@midoneui/core/styles/label.styles";
import * as checkbox from "@zag-js/checkbox";
import { useMachine, normalizeProps } from "@zag-js/react";
import { createContext, useContext, useId } from "react";
import type { Api, Props } from "@zag-js/checkbox";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function CheckboxRoot({
  children,
  className,
  label,
  ...props
}: React.ComponentProps<"label"> & Partial<Props> & { label?: string }) {
  const service = useMachine(checkbox.machine, { ...props, id: useId() });
  const api = checkbox.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <label
        {...api.getRootProps()}
        {...props}
        className={cn(checkboxRoot, className)}
      >
        {children ? (
          children
        ) : (
          <>
            <CheckboxControl />
            {label && <CheckboxLabel>{label}</CheckboxLabel>}
          </>
        )}
        <CheckboxHiddenInput />
      </label>
    </ApiContext.Provider>
  );
}

export function CheckboxLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn([label, checkboxLabel, className])}
      {...api?.getLabelProps()}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function CheckboxControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(checkboxControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </div>
      )}
    </Slot>
  );
}

export function CheckboxIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(checkboxIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function CheckboxHiddenInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const api = useContext(ApiContext);

  return (
    <input
      className={cn(checkboxHiddenInput, className)}
      {...api?.getHiddenInputProps()}
      {...props}
    />
  );
}
```

## Usage

```tsx
import { CheckboxRoot } from "@/components/ui/checkbox";
```

```tsx
<CheckboxRoot label="Accept terms and conditions" />
```

## Examples

### Example 1

```tsx
<CheckboxRoot label="Accept terms and conditions" />
```

