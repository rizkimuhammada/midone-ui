<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerTableRowProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableRow } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerTableRowProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.TableRow
    :class="cn(datePickerTableRow, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.TableRow>
</template>
