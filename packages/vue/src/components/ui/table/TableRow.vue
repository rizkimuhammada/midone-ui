<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableRow } from "@midoneui/core/styles/table.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <tr :class="cn(tableRow, props.class)" v-bind="props">
    <slot />
  </tr>
</template>
