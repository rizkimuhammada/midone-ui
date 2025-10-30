<script lang="ts" setup>
import { DatePicker, type DatePickerInputProps } from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerInput } from "@midoneui/core/styles/datepicker.styles";
import { Input } from "@/components/ui/input";

const props = defineProps<
  DatePickerInputProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.Input v-bind="props" as-child>
    <Input :class="cn(datePickerInput, props.class)" />
  </DatePicker.Input>
</template>
