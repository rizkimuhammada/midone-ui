<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerTableCellProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableCell } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerTableCellProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.TableCell
    :class="cn(datePickerTableCell, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.TableCell>
</template>
```
