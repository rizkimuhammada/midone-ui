# Box

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<Box className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div className="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

## Dependency

No external dependencies.

## Component

```tsx
import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Slot } from "@/components/ui/slot";

function Box({
  children,
  className,
  raised,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & BoxVariants & { asChild?: boolean }) {
  return (
    <Slot
      className={cn(boxVariants({ raised }), className)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export { Box };
```

## Usage

```tsx
import { Box } from "@/components/ui/box";
```

```tsx
<Box className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div className="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

## Examples

### Example 1

```tsx
<Box raised="single" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div className="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

### Example 2

```tsx
<Box raised="double" className="w-70">
  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
  <div className="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div className="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

