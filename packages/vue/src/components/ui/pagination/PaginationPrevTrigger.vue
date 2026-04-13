<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { paginationPrevTrigger } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationPrevTrigger, className)"
    v-bind="{ ...api?.getPrevTriggerProps(), ...props, ...$attrs }"
  >
    <template v-if="asChild">
      <slot />
    </template>
    <div v-else>
      <slot>Previous</slot>
    </div>
  </Slot>
</template>
