<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableBody } from "@midoneui/core/styles/table.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <tbody :class="cn(tableBody, props.class)" v-bind="props">
    <slot />
  </tbody>
</template>
