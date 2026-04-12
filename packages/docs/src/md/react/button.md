# Button

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<Button variant="primary" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button variant="primary">Button Medium</Button>
<Button variant="primary" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button variant="primary" size="xl">
  {" "}
  Button Extra Large{" "}
</Button>
```

## Dependency

No external dependencies.

## Component

```tsx
import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import { Slot } from "@/components/ui/slot";

function Button({
  className,
  children,
  look,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  return (
    <Slot
      {...props}
      className={cn(buttonVariants({ look, variant, size }), className)}
    >
      {asChild ? children : <button>{children}</button>}
    </Slot>
  );
}

export { Button };
```

## Usage

```tsx
<Button variant="primary" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button variant="primary">Button Medium</Button>
<Button variant="primary" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button variant="primary" size="xl">
  {" "}
  Button Extra Large{" "}
</Button>
```

## Examples

### Example 1

```tsx
<Button variant="secondary" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button variant="secondary">Button Medium</Button>
<Button variant="secondary" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button variant="secondary" size="xl">
  {" "}
  Button Extra Large{" "}
</Button>
```

### Example 2

```tsx
<Button variant="success" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button variant="success">Button Medium</Button>
<Button variant="success" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button variant="success" size="xl">
  {" "}
  Button Extra Large{" "}
</Button>
```

### Example 3

```tsx
<Button variant="danger" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button variant="danger">Button Medium</Button>
<Button variant="danger" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button variant="danger" size="xl">
  {" "}
  Button Extra Large{" "}
</Button>
```

### Example 4

```tsx
<Button variant="pending" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button variant="pending">Button Medium</Button>
<Button variant="pending" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button variant="pending" size="xl">
  {" "}
  Button Extra Large{" "}
</Button>
```

### Example 5

```tsx
<Button variant="warning" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button variant="warning">Button Medium</Button>
<Button variant="warning" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button variant="warning" size="xl">
  {" "}
  Button Extra Large{" "}
</Button>
```

### Example 6

```tsx
<Button look="outline" variant="primary" size="sm">
  Button Small
</Button>
<Button look="outline" variant="primary">
  Button Medium
</Button>
<Button look="outline" variant="primary" size="lg">
  Button Large
</Button>
<Button look="outline" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 7

```tsx
<Button look="outline" variant="secondary" size="sm">
  Button Small
</Button>
<Button look="outline" variant="secondary">
  Button Medium
</Button>
<Button look="outline" variant="secondary" size="lg">
  Button Large
</Button>
<Button look="outline" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 8

```tsx
<Button look="outline" variant="success" size="sm">
  Button Small
</Button>
<Button look="outline" variant="success">
  Button Medium
</Button>
<Button look="outline" variant="success" size="lg">
  Button Large
</Button>
<Button look="outline" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 9

```tsx
<Button look="outline" variant="danger" size="sm">
  Button Small
</Button>
<Button look="outline" variant="danger">
  Button Medium
</Button>
<Button look="outline" variant="danger" size="lg">
  Button Large
</Button>
<Button look="outline" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 10

```tsx
<Button look="outline" variant="pending" size="sm">
  Button Small
</Button>
<Button look="outline" variant="pending">
  Button Medium
</Button>
<Button look="outline" variant="pending" size="lg">
  Button Large
</Button>
<Button look="outline" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 11

```tsx
<Button look="outline" variant="warning" size="sm">
  Button Small
</Button>
<Button look="outline" variant="warning">
  Button Medium
</Button>
<Button look="outline" variant="warning" size="lg">
  Button Large
</Button>
<Button look="outline" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 12

```tsx
<Button look="filled" variant="primary" size="sm">
  Button Small
</Button>
<Button look="filled" variant="primary">
  {" "}
  Button Medium{" "}
</Button>
<Button look="filled" variant="primary" size="lg">
  Button Large
</Button>
<Button look="filled" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 13

```tsx
<Button look="filled" variant="secondary" size="sm">
  Button Small
</Button>
<Button look="filled" variant="secondary">
  {" "}
  Button Medium{" "}
</Button>
<Button look="filled" variant="secondary" size="lg">
  Button Large
</Button>
<Button look="filled" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 14

```tsx
<Button look="filled" variant="success" size="sm">
  Button Small
</Button>
<Button look="filled" variant="success">
  {" "}
  Button Medium{" "}
</Button>
<Button look="filled" variant="success" size="lg">
  Button Large
</Button>
<Button look="filled" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 15

```tsx
<Button look="filled" variant="danger" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button look="filled" variant="danger">
  {" "}
  Button Medium{" "}
</Button>
<Button look="filled" variant="danger" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button look="filled" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 16

```tsx
<Button look="filled" variant="pending" size="sm">
  Button Small
</Button>
<Button look="filled" variant="pending">
  {" "}
  Button Medium{" "}
</Button>
<Button look="filled" variant="pending" size="lg">
  Button Large
</Button>
<Button look="filled" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 17

```tsx
<Button look="filled" variant="warning" size="sm">
  Button Small
</Button>
<Button look="filled" variant="warning">
  {" "}
  Button Medium{" "}
</Button>
<Button look="filled" variant="warning" size="lg">
  Button Large
</Button>
<Button look="filled" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 18

```tsx
<Button disabled variant="primary" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button disabled variant="primary">
  {" "}
  Button Medium{" "}
</Button>
<Button disabled variant="primary" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button disabled variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 19

```tsx
<Button disabled variant="secondary" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button disabled variant="secondary">
  {" "}
  Button Medium{" "}
</Button>
<Button disabled variant="secondary" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button disabled variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 20

```tsx
<Button disabled variant="success" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button disabled variant="success">
  {" "}
  Button Medium{" "}
</Button>
<Button disabled variant="success" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button disabled variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 21

```tsx
<Button disabled variant="danger" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button disabled variant="danger">
  {" "}
  Button Medium{" "}
</Button>
<Button disabled variant="danger" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button disabled variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 22

```tsx
<Button disabled variant="pending" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button disabled variant="pending">
  {" "}
  Button Medium{" "}
</Button>
<Button disabled variant="pending" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button disabled variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 23

```tsx
<Button disabled variant="warning" size="sm">
  {" "}
  Button Small{" "}
</Button>
<Button disabled variant="warning">
  {" "}
  Button Medium{" "}
</Button>
<Button disabled variant="warning" size="lg">
  {" "}
  Button Large{" "}
</Button>
<Button disabled variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 24

```tsx
<Button disabled look="outline" variant="primary" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="primary">
  Button Medium
</Button>
<Button disabled look="outline" variant="primary" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 25

```tsx
<Button disabled look="outline" variant="secondary" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="secondary">
  Button Medium
</Button>
<Button disabled look="outline" variant="secondary" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 26

```tsx
<Button disabled look="outline" variant="success" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="success">
  Button Medium
</Button>
<Button disabled look="outline" variant="success" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 27

```tsx
<Button disabled look="outline" variant="danger" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="danger">
  Button Medium
</Button>
<Button disabled look="outline" variant="danger" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 28

```tsx
<Button disabled look="outline" variant="pending" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="pending">
  Button Medium
</Button>
<Button disabled look="outline" variant="pending" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 29

```tsx
<Button disabled look="outline" variant="warning" size="sm">
  Button Small
</Button>
<Button disabled look="outline" variant="warning">
  Button Medium
</Button>
<Button disabled look="outline" variant="warning" size="lg">
  Button Large
</Button>
<Button disabled look="outline" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 30

```tsx
<Button disabled look="filled" variant="primary" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="primary">
  Button Medium
</Button>
<Button disabled look="filled" variant="primary" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="primary" size="xl">
  Button Extra Large
</Button>
```

### Example 31

```tsx
<Button disabled look="filled" variant="secondary" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="secondary">
  Button Medium
</Button>
<Button disabled look="filled" variant="secondary" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="secondary" size="xl">
  Button Extra Large
</Button>
```

### Example 32

```tsx
<Button disabled look="filled" variant="success" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="success">
  Button Medium
</Button>
<Button disabled look="filled" variant="success" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="success" size="xl">
  Button Extra Large
</Button>
```

### Example 33

```tsx
<Button disabled look="filled" variant="danger" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="danger">
  {" "}
  Button Medium{" "}
</Button>
<Button disabled look="filled" variant="danger" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="danger" size="xl">
  Button Extra Large
</Button>
```

### Example 34

```tsx
<Button disabled look="filled" variant="pending" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="pending">
  Button Medium
</Button>
<Button disabled look="filled" variant="pending" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="pending" size="xl">
  Button Extra Large
</Button>
```

### Example 35

```tsx
<Button disabled look="filled" variant="warning" size="sm">
  Button Small
</Button>
<Button disabled look="filled" variant="warning">
  Button Medium
</Button>
<Button disabled look="filled" variant="warning" size="lg">
  Button Large
</Button>
<Button disabled look="filled" variant="warning" size="xl">
  Button Extra Large
</Button>
```

### Example 36

```tsx
<Button size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button>
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 37

```tsx
<Button variant="primary" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button variant="primary">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="primary" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button variant="primary" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 38

```tsx
<Button variant="secondary" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button variant="secondary">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="secondary" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button variant="secondary" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 39

```tsx
<Button variant="success" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button variant="success">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="success" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button variant="success" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 40

```tsx
<Button variant="danger" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button variant="danger">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="danger" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button variant="danger" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 41

```tsx
<Button variant="pending" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button variant="pending">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="pending" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button variant="pending" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 42

```tsx
<Button variant="warning" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button variant="warning">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button variant="warning" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button variant="warning" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 43

```tsx
<Button look="outline" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 44

```tsx
<Button look="outline" variant="primary" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="primary">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="primary" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="primary" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 45

```tsx
<Button look="outline" variant="secondary" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="secondary">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="secondary" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="secondary" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 46

```tsx
<Button look="outline" variant="success" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="success">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="success" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="success" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 47

```tsx
<Button look="outline" variant="danger" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="danger">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="danger" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="danger" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 48

```tsx
<Button look="outline" variant="pending" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="pending">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="pending" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="pending" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 49

```tsx
<Button look="outline" variant="warning" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="outline" variant="warning">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="outline" variant="warning" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="outline" variant="warning" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 50

```tsx
<Button look="filled" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 51

```tsx
<Button look="filled" variant="primary" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="primary">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="primary" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="primary" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 52

```tsx
<Button look="filled" variant="secondary" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="secondary">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="secondary" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="secondary" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 53

```tsx
<Button look="filled" variant="success" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="success">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="success" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="success" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 54

```tsx
<Button look="filled" variant="danger" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="danger">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="danger" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="danger" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 55

```tsx
<Button look="filled" variant="pending" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="pending">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="pending" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="pending" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 56

```tsx
<Button look="filled" variant="warning" size="sm">
  <LoaderCircle className="size-4 animate-spin" /> Button Small
</Button>
<Button look="filled" variant="warning">
  <LoaderCircle className="size-4 animate-spin" /> Button Medium
</Button>
<Button look="filled" variant="warning" size="lg">
  <LoaderCircle className="size-4 animate-spin" /> Button Large
</Button>
<Button look="filled" variant="warning" size="xl">
  <LoaderCircle className="size-4 animate-spin" /> Button Extra Large
</Button>
```

### Example 57

```tsx
<Button size="sm">
  <Copy className="size-4" />
</Button>
<Button>
  <Scissors className="size-4" />
</Button>
<Button size="lg">
  <Trash className="size-4" />
</Button>
<Button size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 58

```tsx
<Button variant="primary" size="sm">
  <Copy className="size-4" />
</Button>
<Button variant="primary">
  <Scissors className="size-4" />
</Button>
<Button variant="primary" size="lg">
  <Trash className="size-4" />
</Button>
<Button variant="primary" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 59

```tsx
<Button variant="secondary" size="sm">
  <Copy className="size-4" />
</Button>
<Button variant="secondary">
  <Scissors className="size-4" />
</Button>
<Button variant="secondary" size="lg">
  <Trash className="size-4" />
</Button>
<Button variant="secondary" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 60

```tsx
<Button variant="success" size="sm">
  <Copy className="size-4" />
</Button>
<Button variant="success">
  <Scissors className="size-4" />
</Button>
<Button variant="success" size="lg">
  <Trash className="size-4" />
</Button>
<Button variant="success" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 61

```tsx
<Button variant="danger" size="sm">
  <Copy className="size-4" />
</Button>
<Button variant="danger">
  <Scissors className="size-4" />
</Button>
<Button variant="danger" size="lg">
  <Trash className="size-4" />
</Button>
<Button variant="danger" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 62

```tsx
<Button variant="pending" size="sm">
  <Copy className="size-4" />
</Button>
<Button variant="pending">
  <Scissors className="size-4" />
</Button>
<Button variant="pending" size="lg">
  <Trash className="size-4" />
</Button>
<Button variant="pending" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 63

```tsx
<Button variant="warning" size="sm">
  <Copy className="size-4" />
</Button>
<Button variant="warning">
  <Scissors className="size-4" />
</Button>
<Button variant="warning" size="lg">
  <Trash className="size-4" />
</Button>
<Button variant="warning" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 64

```tsx
<Button look="filled" size="sm">
  <Copy className="size-4" />
</Button>
<Button look="filled">
  <Scissors className="size-4" />
</Button>
<Button look="filled" size="lg">
  <Trash className="size-4" />
</Button>
<Button look="filled" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 65

```tsx
<Button look="filled" variant="primary" size="sm">
  <Copy className="size-4" />
</Button>
<Button look="filled" variant="primary">
  <Scissors className="size-4" />
</Button>
<Button look="filled" variant="primary" size="lg">
  <Trash className="size-4" />
</Button>
<Button look="filled" variant="primary" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 66

```tsx
<Button look="filled" variant="secondary" size="sm">
  <Copy className="size-4" />
</Button>
<Button look="filled" variant="secondary">
  <Scissors className="size-4" />
</Button>
<Button look="filled" variant="secondary" size="lg">
  <Trash className="size-4" />
</Button>
<Button look="filled" variant="secondary" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 67

```tsx
<Button look="filled" variant="success" size="sm">
  <Copy className="size-4" />
</Button>
<Button look="filled" variant="success">
  <Scissors className="size-4" />
</Button>
<Button look="filled" variant="success" size="lg">
  <Trash className="size-4" />
</Button>
<Button look="filled" variant="success" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 68

```tsx
<Button look="filled" variant="danger" size="sm">
  <Copy className="size-4" />
</Button>
<Button look="filled" variant="danger">
  <Scissors className="size-4" />
</Button>
<Button look="filled" variant="danger" size="lg">
  <Trash className="size-4" />
</Button>
<Button look="filled" variant="danger" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 69

```tsx
<Button look="filled" variant="pending" size="sm">
  <Copy className="size-4" />
</Button>
<Button look="filled" variant="pending">
  <Scissors className="size-4" />
</Button>
<Button look="filled" variant="pending" size="lg">
  <Trash className="size-4" />
</Button>
<Button look="filled" variant="pending" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

### Example 70

```tsx
<Button look="filled" variant="warning" size="sm">
  <Copy className="size-4" />
</Button>
<Button look="filled" variant="warning">
  <Scissors className="size-4" />
</Button>
<Button look="filled" variant="warning" size="lg">
  <Trash className="size-4" />
</Button>
<Button look="filled" variant="warning" size="xl">
  <SquarePlus className="size-4" />
</Button>
```

