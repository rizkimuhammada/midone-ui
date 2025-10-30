<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

const props = defineProps<
  ButtonVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <button
    :class="
      cn(
        buttonVariants({
          filled: props.filled,
          variant: props.variant,
          size: props.size,
          className: props.class,
        }),
        props.class
      )
    "
    v-bind="props"
  >
    <slot />
  </button>
</template>
