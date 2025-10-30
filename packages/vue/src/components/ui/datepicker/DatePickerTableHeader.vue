<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerTableHeaderProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableHeader } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerTableHeaderProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.TableHeader
    :class="cn(datePickerTableHeader, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.TableHeader>
</template>
