<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

const {
  class: className,
  filled,
  variant,
  size,
  ...props
} = defineProps<
  ButtonVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <button
    v-bind="{ ...props, ...$attrs }"
    :class="cn(buttonVariants({ filled, variant, size, className }), className)"
  >
    <slot />
  </button>
</template>
