<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { datePickerRoot, datePickerPresets } from "@midoneui/core/styles/datepicker.styles";
import { DatePickerPositioner, DatePickerContent, DatePickerLabel, DatePickerControl } from ".";
import { provide, computed, ref } from "vue";
import * as datepicker from "@zag-js/date-picker";
import type { Props } from "@zag-js/date-picker";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { Slot } from "@/components/ui/slot";
import { Badge } from "@/components/ui/badge";
import DatePickerPresetTrigger from "./DatePickerPresetTrigger.vue";
const PRESET_LABELS: Record<string, string> = {
  today: "Today",
  yesterday: "Yesterday",
  thisWeek: "This Week",
  lastWeek: "Last Week",
  thisMonth: "This Month",
  lastMonth: "Last Month",
  thisYear: "This Year",
  lastYear: "Last Year",
};

const {
  class: className,
  asChild = false,
  open = undefined,
  label = undefined,
  withPresets = undefined,
  withTrigger = false,
  numOfMonths = undefined,
  selectionMode = "single",
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    asChild?: boolean;
    label?: string;
    withPresets?: string;
    withTrigger?: boolean;
  }
>();

const inline = open === true;

const presets = withPresets
  ? withPresets.split("|").map((v) => {
      const key = v.trim();
      return { value: key, label: PRESET_LABELS[key] ?? key };
    })
  : [];

const service = useMachine(datepicker.machine, {
  ...props,
  ...(numOfMonths !== undefined ? { numOfMonths } : {}),
  inline,
  selectionMode,
  open: inline ? true : open,
  id: crypto.randomUUID(),
});

const api = computed(() => datepicker.connect(service, normalizeProps));

const hasManualContent = ref(false);

provide("datepickerApi", api);
provide("datepickerNumOfMonths", numOfMonths ?? 1);
provide("datepickerInline", inline);
provide("datepickerSelectionMode", selectionMode);
provide("datepickerWithTrigger", withTrigger);
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
      <DatePickerLabel v-if="label">{{ label }}</DatePickerLabel>
      <DatePickerControl />
      <div v-if="presets.length" :class="datePickerPresets">
        <DatePickerPresetTrigger
          v-for="preset in presets"
          :key="preset.value"
          :value="(preset.value as any)"
          as-child
        >
          <Badge variant="secondary" look="outline">
            {{ preset.label }}
          </Badge>
        </DatePickerPresetTrigger>
      </div>
      <slot />
      <template v-if="!hasManualContent">
        <template v-if="inline">
          <DatePickerContent :is-manual="false" />
        </template>
        <template v-else>
          <DatePickerPositioner :is-manual="false">
            <DatePickerContent :is-manual="false" />
          </DatePickerPositioner>
        </template>
      </template>
    </div>
  </Slot>
</template>
