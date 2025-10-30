<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerViewControlProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerViewControl } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerViewControlProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.ViewControl
    :class="cn(datePickerViewControl, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.ViewControl>
</template>
