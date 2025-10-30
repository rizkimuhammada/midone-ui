<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

const props = defineProps<
  BadgeVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <span
    :class="
      cn(
        badgeVariants({
          filled: props.filled,
          variant: props.variant,
          className: props.class,
        })
      )
    "
    v-bind="props"
  >
    <slot />
  </span>
</template>
