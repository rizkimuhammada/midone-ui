# Badge

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
```

## Dependency

No external dependencies.

## Component

```tsx
import { cn } from "@midoneui/core/utils/cn";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

function Badge({
  className,
  children,
  look,
  variant,
  content,
  ...props
}: React.ComponentProps<"span"> &
  BadgeVariants & {
    content?: string;
  }) {
  return (
    <TooltipRoot disabled={!content}>
      <TooltipTrigger asChild>
        <span
          {...props}
          className={cn(badgeVariants({ look, variant }), className)}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </TooltipRoot>
  );
}

export { Badge };
```

## Usage

```tsx
import { Badge } from "@/components/ui/badge";
```

```tsx
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
```

## Examples

### Example 1

```tsx
<Badge variant="primary">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge variant="secondary">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge variant="success">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge variant="danger">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge variant="pending">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge variant="warning">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
```

### Example 2

```tsx
<Badge look="outline" variant="primary">
  {" "}
  12%{" "}
</Badge>
<Badge look="outline" variant="secondary">
  {" "}
  12%{" "}
</Badge>
<Badge look="outline" variant="success">
  {" "}
  12%{" "}
</Badge>
<Badge look="outline" variant="danger">
  {" "}
  12%{" "}
</Badge>
<Badge look="outline" variant="pending">
  {" "}
  12%{" "}
</Badge>
<Badge look="outline" variant="warning">
  {" "}
  12%{" "}
</Badge>
```

### Example 3

```tsx
<Badge look="outline" variant="primary">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="outline" variant="secondary">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="outline" variant="success">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="outline" variant="danger">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="outline" variant="pending">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="outline" variant="warning">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
```

### Example 4

```tsx
<Badge look="filled" variant="primary">
  {" "}
  12%{" "}
</Badge>
<Badge look="filled" variant="secondary">
  {" "}
  12%{" "}
</Badge>
<Badge look="filled" variant="success">
  {" "}
  12%{" "}
</Badge>
<Badge look="filled" variant="danger">
  {" "}
  12%{" "}
</Badge>
<Badge look="filled" variant="pending">
  {" "}
  12%{" "}
</Badge>
<Badge look="filled" variant="warning">
  {" "}
  12%{" "}
</Badge>
```

### Example 5

```tsx
<Badge look="filled" variant="primary">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="filled" variant="secondary">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="filled" variant="success">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="filled" variant="danger">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="filled" variant="pending">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
<Badge look="filled" variant="warning">
  {" "}
  12% <ChevronDown />{" "}
</Badge>
```

### Example 6

```tsx
<Badge
  look="outline"
  variant="primary"
  content="12% Higher than last month"
>
  <CheckSquare /> 12%
</Badge>
<Badge
  look="outline"
  variant="secondary"
  content="12% Higher than last month"
>
  <CheckSquare /> 12%
</Badge>
<Badge
  look="outline"
  variant="success"
  content="12% Higher than last month"
>
  <CheckSquare /> 12%
</Badge>
<Badge
  look="outline"
  variant="danger"
  content="12% Higher than last month"
>
  <CheckSquare /> 12%
</Badge>
<Badge
  look="outline"
  variant="pending"
  content="12% Higher than last month"
>
  <CheckSquare /> 12%
</Badge>
<Badge
  look="outline"
  variant="warning"
  content="12% Higher than last month"
>
  <CheckSquare /> 12%
</Badge>
```

