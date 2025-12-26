<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

const {
  class: className,
  filled,
  variant,
  ...props
} = defineProps<
  BadgeVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <span
    :class="cn(badgeVariants({ filled, variant, className }))"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </span>
</template>
