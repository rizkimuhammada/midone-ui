# Input

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<Input type="email" placeholder="Email" />
```

## Dependency

No external dependencies.

## Component

```tsx
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";

function Input({
  className,
  children,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return <input type={type} className={cn(input, className)} {...props} />;
}

export { Input };
```

## Usage

```tsx
import { Input } from "@/components/ui/input";
```

```tsx
<Input type="email" placeholder="Email" />
```

