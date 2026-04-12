# Slot

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<div className="justify-center items-center flex gap-2">
  <Box asChild>
    <Button variant="ghost" className="me-2 px-2">
      <ChevronLeft className="size-5" />
    </Button>
  </Box>
  <Box asChild>
    <Button variant="ghost" className="px-2">
      <ChevronRight className="size-5" />
    </Button>
  </Box>
</div>
```

## Dependency

No external dependencies.

## Component

```tsx
import React, {
  cloneElement,
  Fragment,
  isValidElement,
  type ReactNode,
  type ReactElement,
  forwardRef,
} from "react";

import { calculateSlot, flattenItems, type AnyProps } from "./slot";

/* -------------------------------------------------------------------------------------------------
 * React Implementation (Component Shell)
 * -----------------------------------------------------------------------------------------------*/

export type SlotProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

/**
 * Slot: Merges its props onto its immediate child.
 * If zero or multiple children are provided, it defaults to a <div> wrapper.
 */
export const Slot = forwardRef<any, SlotProps>(({ children, ...props }, ref) => {
  // Use generic flatten logic with React-specific adapter
  const items = flattenItems<ReactNode>(
    children,
    (item) => isValidElement(item) && item.type === Fragment,
    (item) => (isValidElement(item) ? (item.props as any).children : [])
  ).filter(isValidElement) as ReactElement[];

  // Use our vanilla logic to determine the transform
  const result = calculateSlot<ReactElement>({
    props,
    items,
    isValid: isValidElement,
    getProps: (item) => (item.props as AnyProps) || {},
    getChildren: (item) => (item.props as any)?.children,
  });

  // If it's a wrapper, we render a real div
  if (result.type === "wrapper") {
    return (
      <div {...result.props} ref={ref}>
        {result.children as ReactNode}
      </div>
    );
  }

  // If it's slotted, we clone the target element with merged props
  const target = result.target;
  if (!isValidElement(target)) return null;

  return cloneElement(target, {
    ...(result.props as any),
    ref: ref as any,
  }, result.children as ReactNode);
});

Slot.displayName = "Slot";

export { Slot as Root };
```

## Usage

```tsx
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
```

```tsx
<div className="justify-center items-center flex gap-2">
  <Box asChild>
    <Button variant="ghost" className="me-2 px-2">
      <ChevronLeft className="size-5" />
    </Button>
  </Box>
  <Box asChild>
    <Button variant="ghost" className="px-2">
      <ChevronRight className="size-5" />
    </Button>
  </Box>
</div>
```

