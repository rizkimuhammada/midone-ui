<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerControlProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerControl } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerControlProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.Control
    :class="cn(datePickerControl, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.Control>
</template>
