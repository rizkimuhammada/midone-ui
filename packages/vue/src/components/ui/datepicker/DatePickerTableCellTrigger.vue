<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerTableCellTriggerProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableCellTrigger } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerTableCellTriggerProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.TableCellTrigger
    :class="cn(datePickerTableCellTrigger, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.TableCellTrigger>
</template>
