<script lang="ts" setup>
import { DatePicker, type DatePickerViewProps } from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerView } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerViewProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.View :class="cn(datePickerView, props.class)" v-bind="props">
    <slot />
  </DatePicker.View>
</template>
