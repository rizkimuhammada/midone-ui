<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { inputVariants, type InputVariants } from "@midoneui/core/styles/input.styles";

const {
  class: className,
  type,
  size,
  ...props
} = defineProps<InputVariants & {
  class?: string;
  type?: string;
}>();
</script>

<template>
  <input :type="type" :class="cn(inputVariants({ size }), className)" v-bind="{ ...props }" />
</template>
