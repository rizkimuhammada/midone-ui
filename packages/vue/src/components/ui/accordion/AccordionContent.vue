<script lang="ts" setup>
import { accordionContent } from "@midoneui/core/styles/accordion.styles";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/accordion";

const {
  class: className,
  asChild,
  ...props
} = withDefaults(
  defineProps<{
    class?: string;
    asChild?: boolean;
  }>(),
  {
    asChild: false,
  }
);

const api = inject<Api>("accordionApi");
const item = inject<ItemProps>("accordionItem");
</script>

<template>
  <Slot
    :class="cn([className, accordionContent])"
    v-bind="{ ...props, ...$attrs, ...api?.getItemContentProps(item!) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
