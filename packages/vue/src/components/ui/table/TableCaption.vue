<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableCaption } from "@midoneui/core/styles/table.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <caption :class="cn(tableCaption, props.class)" v-bind="props">
    <slot />
  </caption>
</template>
