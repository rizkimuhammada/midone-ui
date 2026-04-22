<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { textareaVariants, type TextareaVariants } from "@midoneui/core/styles/textarea.styles";

const { class: className, size, ...props } = defineProps<TextareaVariants & {
  class?: string;
}>();
</script>

<template>
  <textarea :class="cn(textareaVariants({ size }), className)" v-bind="{ ...props }" />
</template>
