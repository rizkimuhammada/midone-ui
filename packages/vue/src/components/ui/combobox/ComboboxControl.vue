<script lang="ts" setup>
import { ComboboxTrigger } from ".";
import type { Api } from "@zag-js/combobox";
import { inject, useSlots } from "vue";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxControl } from "@midoneui/core/styles/combobox.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const slots = useSlots();
</script>

<template>
  <Slot
    :class="cn(comboboxControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="slots.default" />
      <ComboboxTrigger v-else />
    </div>
  </Slot>
</template>
