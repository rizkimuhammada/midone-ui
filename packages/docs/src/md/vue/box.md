# Box

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

## Dependency

No external dependencies.

## Component

### Box.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  raised,
  ...props
} = defineProps<
  BoxVariants & {
    class?: string;
    asChild?: boolean;
  }
>();
</script>

<template>
  <Slot
    :class="cn(boxVariants({ raised }), className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

## Usage

```vue
import { Box } from "@/components/ui/box";
```

```vue
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

## Examples

### Example 1

```vue
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

### Example 2

```vue
<Box raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

### Example 3

```vue
<Box raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
  <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
</Box>
```

