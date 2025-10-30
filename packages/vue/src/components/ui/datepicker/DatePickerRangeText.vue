<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerRangeTextProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerRangeText } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerRangeTextProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.RangeText
    :class="cn(datePickerRangeText, props.class)"
    v-bind="props"
  />
</template>
