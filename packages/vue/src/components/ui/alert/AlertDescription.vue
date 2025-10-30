<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { alertDescription } from "@midoneui/core/styles/alert.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="cn([props.class, alertDescription])" v-bind="props">
    <slot />
  </div>
</template>
