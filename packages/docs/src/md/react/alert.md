# Alert

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<AlertRoot variant="primary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
```

## Dependency

No external dependencies.

## Component

```tsx
import { X } from "lucide-react";
import { cn } from "@midoneui/core/utils/cn";
import {
  alertRootVariants,
  type AlertRootVariants,
  alertTitle,
  alertDescription,
  alertCloseTrigger,
  alertIcon,
} from "@midoneui/core/styles/alert.styles";
import { useState, useContext, createContext } from "react";
import { Presence } from "@/components/ui/presence";
import { Slot } from "@/components/ui/slot";

const PresentContext = createContext<{
  present: boolean;
  setPresent: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function AlertRoot({
  className,
  children,
  look,
  variant,
  ...rest
}: React.ComponentProps<"div"> & AlertRootVariants) {
  const [present, setPresent] = useState(true);

  return (
    <PresentContext.Provider
      value={{
        present,
        setPresent,
      }}
    >
      <Presence
        className={cn(alertRootVariants({ look, variant }), className)}
        {...rest}
        present={present}
      >
        {children}
      </Presence>
    </PresentContext.Provider>
  );
}

export function AlertTitle({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  return (
    <Slot className={cn([className, alertTitle])} {...props}>
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function AlertDescription({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  return (
    <Slot className={cn([className, alertDescription])} {...props}>
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function AlertCloseTrigger({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const context = useContext(PresentContext);

  return (
    <Slot
      className={cn([className, alertCloseTrigger])}
      {...props}
      onClick={() => context?.setPresent(false)}
    >
      {asChild ? children : <div>{children ?? <X />}</div>}
    </Slot>
  );
}

export function AlertIcon({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  if (!children) return null;

  return (
    <Slot
      className={cn([className, alertIcon])}
      data-part="icon"
      {...props}
    >
      {children}
    </Slot>
  );
}
```

## Usage

```tsx
<AlertRoot variant="primary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
```

## Examples

### Example 1

```tsx
<AlertRoot look="filled" variant="primary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="secondary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="success">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="danger">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="pending">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="warning">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
```

### Example 2

```tsx
<AlertRoot variant="primary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
```

### Example 3

```tsx
<AlertRoot look="filled" variant="primary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="secondary">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="success">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="danger">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="pending">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="warning">
  <AlertIcon>
    <Compass />
  </AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
```

### Example 4

```tsx
<Box className="p-0">
  <AlertRoot variant="ghost">
    <AlertIcon>
      <Compass />
    </AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
<Box className="p-0" raised="single">
  <AlertRoot variant="ghost">
    <AlertIcon>
      <Compass />
    </AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
<Box className="p-0" raised="double">
  <AlertRoot variant="ghost">
    <AlertIcon>
      <Compass />
    </AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
```

