<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

const {
  class: className,
  look,
  variant,
  ...props
} = defineProps<
  BadgeVariants & {
    class?: string;
  }
>();
</script>

<template>
  <span
    :class="cn(badgeVariants({ look, variant, className }))"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </span>
</template>
