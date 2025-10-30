<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerPositionerProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPositioner } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerPositionerProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.Positioner
    :class="cn(datePickerPositioner, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.Positioner>
</template>
