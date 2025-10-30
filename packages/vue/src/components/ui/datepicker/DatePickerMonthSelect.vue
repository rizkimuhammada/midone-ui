<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerMonthSelectProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import { datePickerMonthSelect } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerMonthSelectProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.MonthSelect
    :class="cn(input, datePickerMonthSelect, props.class)"
    v-bind="props"
  />
</template>
