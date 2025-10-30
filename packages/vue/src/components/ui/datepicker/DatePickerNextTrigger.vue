<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerNextTriggerProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerNextTrigger } from "@midoneui/core/styles/datepicker.styles";
import { MoveRight } from "lucide-vue-next";

const props = defineProps<
  DatePickerNextTriggerProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.NextTrigger
    :class="cn(datePickerNextTrigger, props.class)"
    v-bind="props"
  >
    <template v-if="!$slots.default">
      <MoveRight />
    </template>
    <template v-else>
      <slot />
    </template>
  </DatePicker.NextTrigger>
</template>
