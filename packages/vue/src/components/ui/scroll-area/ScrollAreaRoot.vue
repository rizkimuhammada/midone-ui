<script lang="ts" setup>
import { provide, computed } from "vue";
import * as scrollArea from "@zag-js/scroll-area";
import type { Props } from "@zag-js/scroll-area";
import { useMachine, normalizeProps } from "@zag-js/vue";

import { scrollAreaRoot } from "@midoneui/core/styles/scroll-area.styles";
import { cn } from "@midoneui/core/utils/cn";

const {
  class: className,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
  }
>();

const service = useMachine(scrollArea.machine, {
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => scrollArea.connect(service, normalizeProps));

provide("scrollAreaApi", api);
</script>

<template>
  <div v-bind="api?.getRootProps()" :class="cn(scrollAreaRoot, className)">
    <slot />
  </div>
</template>
