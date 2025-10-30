<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { alertTitle } from "@midoneui/core/styles/alert.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="cn([props.class, alertTitle])" v-bind="props">
    <slot />
  </div>
</template>
