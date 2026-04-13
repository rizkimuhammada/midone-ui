<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { fieldContent } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-part="field-content"
    :class="cn(fieldContent, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </div>
</template>
