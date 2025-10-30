<script lang="ts" setup>
import { DatePicker, type DatePickerTableProps } from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTable } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerTableProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.Table :class="cn(datePickerTable, props.class)" v-bind="props">
    <slot />
  </DatePicker.Table>
</template>
