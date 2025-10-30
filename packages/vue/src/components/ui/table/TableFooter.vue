<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableFooter } from "@midoneui/core/styles/table.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <tfoot :class="cn(tableFooter, props.class)" v-bind="props">
    <slot />
  </tfoot>
</template>
