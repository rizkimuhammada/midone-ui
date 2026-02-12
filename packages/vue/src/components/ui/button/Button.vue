<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

const {
  class: className,
  look,
  variant,
  size,
  ...props
} = defineProps<
  ButtonVariants & {
    class?: string;
  }
>();
</script>

<template>
  <button
    v-bind="{ ...props, ...$attrs }"
    :class="cn(buttonVariants({ look, variant, size, className }), className)"
  >
    <slot />
  </button>
</template>
