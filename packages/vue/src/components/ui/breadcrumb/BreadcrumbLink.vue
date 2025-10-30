<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { breadcrumbLink } from "@midoneui/core/styles/breadcrumb.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <a :class="cn(breadcrumbLink, props.class)" v-bind="props">
    <slot />
  </a>
</template>
