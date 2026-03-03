<script lang="ts" setup>
import ScrollAreaScrollbar from "./ScrollAreaScrollbar.vue";
import ScrollAreaThumb from "./ScrollAreaThumb.vue";
import { scrollAreaThumb, scrollAreaScrollbar } from "@midoneui/core/styles/scroll-area.styles";
import * as scrollArea from "@zag-js/scroll-area"
import type { Props } from "@zag-js/scroll-area";
  import { useMachine, normalizeProps } from "@zag-js/vue"
  import { computed, useId, provide } from "vue"

  const { class: className, ...props } = defineProps<
  Partial<Props> & {
    class?: string;
  }
>();

  const service = useMachine(scrollArea.machine, { ...props, id: crypto.randomUUID() })

  const api = computed(() => scrollArea.connect(service, normalizeProps))

  provide("scrollAreaApi", api);
</script>

<template>
  <div v-bind="api.getRootProps()" class="h-72 w-70">
    <slot />
  </div>
</template>
