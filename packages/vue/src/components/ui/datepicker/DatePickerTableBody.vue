<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerTableBodyProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableBody } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerTableBodyProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.TableBody
    :class="cn(datePickerTableBody, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.TableBody>
</template>
