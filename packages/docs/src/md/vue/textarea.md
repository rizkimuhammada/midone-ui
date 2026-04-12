# Textarea

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<Textarea placeholder="Type your message here." />
```

## Dependency

No external dependencies.

## Component

### Textarea.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { textarea } from "@midoneui/core/styles/textarea.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <textarea :class="cn(textarea, className)" v-bind="{ ...props }" />
</template>
```

## Usage

```vue
import { Textarea } from "@/components/ui/textarea";
```

```vue
<Textarea placeholder="Type your message here." />
```

## Examples

### Example 1

```vue
<Textarea placeholder="Type your message here." />
```

