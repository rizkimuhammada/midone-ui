<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { breadcrumbList } from "@midoneui/core/styles/breadcrumb.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <ol :class="cn(breadcrumbList, props.class)" v-bind="props">
    <slot />
  </ol>
</template>
