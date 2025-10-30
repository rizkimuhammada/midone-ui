<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerViewTriggerProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerViewTrigger } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerViewTriggerProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.ViewTrigger
    :class="cn(datePickerViewTrigger, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.ViewTrigger>
</template>
