<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerTableHeadProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTableHead } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<
  DatePickerTableHeadProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.TableHead
    :class="cn(datePickerTableHead, props.class)"
    v-bind="props"
  >
    <slot />
  </DatePicker.TableHead>
</template>
