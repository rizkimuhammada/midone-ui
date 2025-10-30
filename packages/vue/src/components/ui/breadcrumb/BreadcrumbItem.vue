<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { breadcrumbItem } from "@midoneui/core/styles/breadcrumb.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <li :class="cn(breadcrumbItem, props.class)" v-bind="props">
    <slot />
  </li>
</template>
