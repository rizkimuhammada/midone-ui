<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerTriggerProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerTrigger } from "@midoneui/core/styles/datepicker.styles";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-vue-next";

const props = defineProps<
  DatePickerTriggerProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.Trigger v-bind="props" as-child>
    <template v-if="props.asChild">
      <slot />
    </template>
    <template v-else>
      <Button :class="cn(datePickerTrigger, props.class)">
        <template v-if="!$slots.default">
          <Calendar />
        </template>
        <template v-else>
          <slot />
        </template>
      </Button>
    </template>
  </DatePicker.Trigger>
</template>
