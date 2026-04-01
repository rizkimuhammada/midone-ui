<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerControl } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { DatePickerInput, DatePickerTrigger, DatePickerClearTrigger } from ".";
import { inject, useSlots } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
const slots = useSlots();
</script>

<template>
  <Slot
    :class="cn(datePickerControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <template v-if="!slots.default">
        <DatePickerInput />
        <DatePickerTrigger />
        <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
      </template>
      <slot v-else />
    </div>
  </Slot>
</template>
