<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { textarea } from "@midoneui/core/styles/textarea.styles";

const props = defineProps<{
  class?: string;
  [key: string]: any;
}>();
</script>

<template>
  <textarea :class="cn(textarea, props.class)" v-bind="props" />
</template>
