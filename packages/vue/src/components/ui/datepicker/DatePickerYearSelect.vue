<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerYearSelectProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import { datePickerYearSelect } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerYearSelectProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.YearSelect
    :class="cn(input, datePickerYearSelect, props.class)"
    v-bind="props"
  />
</template>
