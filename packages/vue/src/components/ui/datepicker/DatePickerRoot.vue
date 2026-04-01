<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerRoot } from "@midoneui/core/styles/datepicker.styles";
import { DatePickerPositioner, DatePickerContent, DatePickerLabel, DatePickerControl } from ".";
import { provide, computed, useSlots, ref } from "vue";
import * as datepicker from "@zag-js/date-picker";
import type { Props } from "@zag-js/date-picker";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  open = undefined,
  label = undefined,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    asChild?: boolean;
    label?: string;
  }
>();

const slots = useSlots();

const service = useMachine(datepicker.machine, {
  ...props,
  open,
  id: crypto.randomUUID(),
});

const api = computed(() => datepicker.connect(service, normalizeProps));

const hasManualContent = ref(false);

provide("datepickerApi", api);
provide("registerDatePickerContent", () => {
  hasManualContent.value = true;
});
</script>

<template>
  <Slot
    :class="cn(datePickerRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <template v-if="!slots.default">
        <DatePickerLabel v-if="label">{{ label }}</DatePickerLabel>
        <DatePickerControl />
      </template>
      <slot v-else />
      <template v-if="!slots.content && !hasManualContent">
        <DatePickerPositioner :is-manual="false">
          <DatePickerContent :is-manual="false" />
        </DatePickerPositioner>
      </template>
    </div>
  </Slot>
</template>
