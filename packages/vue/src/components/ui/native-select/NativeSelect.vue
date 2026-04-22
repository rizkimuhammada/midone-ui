<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { inputVariants } from "@midoneui/core/styles/input.styles";
import { nativeSelectVariants, type NativeSelectVariants } from "@midoneui/core/styles/native-select.styles";

const { class: className, size, ...props } = defineProps<NativeSelectVariants & {
  class?: string;
}>();
</script>

<template>
  <select
    :class="cn(inputVariants({ size }), nativeSelectVariants({ size }), className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </select>
</template>
