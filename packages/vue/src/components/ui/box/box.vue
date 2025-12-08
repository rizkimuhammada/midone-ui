<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";

const {
  class: className,
  filled,
  variant,
  raised,
  ...props
} = defineProps<
  BoxVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <div
    :class="cn(boxVariants({ filled, variant, raised, className }), className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
