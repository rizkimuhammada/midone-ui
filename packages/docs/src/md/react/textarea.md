# Textarea

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<Textarea placeholder="Type your message here." />
```

## Dependency

No external dependencies.

## Component

```tsx
import { cn } from "@midoneui/core/utils/cn";
import { textarea } from "@midoneui/core/styles/textarea.styles";

function Textarea({
  className,
  children,
  ...props
}: React.ComponentProps<"textarea">) {
  return <textarea className={cn(textarea, className)} {...props} />;
}

export { Textarea };
```

## Usage

```tsx
import { Textarea } from "@/components/ui/textarea";
```

```tsx
<Textarea placeholder="Type your message here." />
```

