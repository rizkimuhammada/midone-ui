<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { label } from "@midoneui/core/styles/label.styles";

const props = defineProps<{
  class?: string;
  [key: string]: any;
}>();
</script>

<template>
  <label :class="cn(label, props.class)" v-bind="props">
    <slot />
  </label>
</template>
