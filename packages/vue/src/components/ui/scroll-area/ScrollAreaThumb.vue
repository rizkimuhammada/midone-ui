<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject, type ComputedRef } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaThumb } from "@midoneui/core/styles/scroll-area.styles";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<ComputedRef<Api>>("scrollAreaApi");
</script>

<template>
  <div v-bind="api?.getThumbProps()" :class="cn(scrollAreaThumb, className)" />
</template>
