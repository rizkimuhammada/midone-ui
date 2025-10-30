<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerPrevTriggerProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPrevTrigger } from "@midoneui/core/styles/datepicker.styles";
import { MoveLeft } from "lucide-vue-next";

const props = defineProps<
  DatePickerPrevTriggerProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.PrevTrigger
    :class="cn(datePickerPrevTrigger, props.class)"
    v-bind="props"
  >
    <template v-if="!$slots.default">
      <MoveLeft />
    </template>
    <template v-else>
      <slot />
    </template>
  </DatePicker.PrevTrigger>
</template>
```
