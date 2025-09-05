<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";

const props = defineProps<
  {
    class?: string;
    [key: string]: any;
  } & BoxVariants
>();
</script>

<template>
  <div
    :class="
      cn(
        boxVariants({
          filled: props.filled,
          variant: props.variant,
          raised: props.raised,
          className: props.class,
        }),
        props.class
      )
    "
    v-bind="props"
  >
    <slot />
  </div>
</template>
