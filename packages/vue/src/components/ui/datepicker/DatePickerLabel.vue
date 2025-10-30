<script lang="ts" setup>
import { DatePicker, type DatePickerLabelProps } from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerLabel } from "@midoneui/core/styles/datepicker.styles";
import { Label } from "@/components/ui/label";

const props = defineProps<
  DatePickerLabelProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.Label v-bind="props" as-child>
    <Label :class="cn(datePickerLabel, props.class)">
      <slot />
    </Label>
  </DatePicker.Label>
</template>
