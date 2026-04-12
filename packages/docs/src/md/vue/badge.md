# Badge

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
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

### Badge.vue

```vue
<script lang="ts" setup>
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

const {
  class: className,
  look,
  variant,
  content,
  ...props
} = defineProps<
  BadgeVariants & {
    class?: string;
    content?: string;
  }
>();
</script>

<template>
  <TooltipRoot :disabled="!content">
    <TooltipTrigger as-child>
      <span
        :class="cn(badgeVariants({ look, variant }), className)"
        v-bind="{ ...props, ...$attrs }"
      >
        <slot />
      </span>
    </TooltipTrigger>
    <TooltipContent>{{ content }}</TooltipContent>
  </TooltipRoot>
</template>
```

## Usage

```vue
import { Badge } from "@/components/ui/badge";
```

```vue
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
```

## Examples

### Example 1

```vue
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
```

### Example 2

```vue
<Badge variant="primary"> 12% <ChevronDown /> </Badge>
<Badge variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge variant="success"> 12% <ChevronDown /> </Badge>
<Badge variant="danger"> 12% <ChevronDown /> </Badge>
<Badge variant="pending"> 12% <ChevronDown /> </Badge>
<Badge variant="warning"> 12% <ChevronDown /> </Badge>
```

### Example 3

```vue
<Badge look="outline" variant="primary"> 12% </Badge>
<Badge look="outline" variant="secondary"> 12% </Badge>
<Badge look="outline" variant="success"> 12% </Badge>
<Badge look="outline" variant="danger"> 12% </Badge>
<Badge look="outline" variant="pending"> 12% </Badge>
<Badge look="outline" variant="warning"> 12% </Badge>
```

### Example 4

```vue
<Badge look="outline" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="outline" variant="warning"> 12% <ChevronDown /> </Badge>
```

### Example 5

```vue
<Badge look="filled" variant="primary"> 12% </Badge>
<Badge look="filled" variant="secondary"> 12% </Badge>
<Badge look="filled" variant="success"> 12% </Badge>
<Badge look="filled" variant="danger"> 12% </Badge>
<Badge look="filled" variant="pending"> 12% </Badge>
<Badge look="filled" variant="warning"> 12% </Badge>
```

### Example 6

```vue
<Badge look="filled" variant="primary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="secondary"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="success"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="danger"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="pending"> 12% <ChevronDown /> </Badge>
<Badge look="filled" variant="warning"> 12% <ChevronDown /> </Badge>
```

### Example 7

```vue
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

