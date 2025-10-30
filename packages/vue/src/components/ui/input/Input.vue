<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";

const props = defineProps<{
  class?: string;
  type?: string;
  [key: string]: any;
}>();
</script>

<template>
  <input :type="props.type" :class="cn(input, props.class)" v-bind="props" />
</template>
