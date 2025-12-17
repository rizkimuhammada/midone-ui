<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import { datePickerMonthSelect } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("datepickerApi");
</script>

<template>
  <select
    :class="cn(input, datePickerMonthSelect, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getMonthSelectProps() }"
  >
    <option
      v-for="(month, i) in api?.getMonths()"
      :key="i"
      :value="month.value"
    >
      {{ month.label }}
    </option>
  </select>
</template>
