# Input

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<Input type="email" placeholder="Email" />
```

## Dependency

No external dependencies.

## Component

### Input.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";

const {
  class: className,
  type,
  ...props
} = defineProps<{
  class?: string;
  type?: string;
}>();
</script>

<template>
  <input :type="type" :class="cn(input, className)" v-bind="{ ...props }" />
</template>
```

## Usage

```vue
import { Input } from "@/components/ui/input";
```

```vue
<Input type="email" placeholder="Email" />
```

