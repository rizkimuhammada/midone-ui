<script lang="ts" setup>
import type { Api, ScrollbarProps } from "@zag-js/scroll-area";
import { inject, type ComputedRef } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaScrollbar } from "@midoneui/core/styles/scroll-area.styles";

interface Props extends ScrollbarProps {
  class?: string;
}

const props = defineProps<Props>();

const api = inject<ComputedRef<Api>>("scrollAreaApi");
</script>

<template>
  <div v-bind="api?.getScrollbarProps(props)" :class="cn(scrollAreaScrollbar, props.class)">
    <slot />
  </div>
</template>
