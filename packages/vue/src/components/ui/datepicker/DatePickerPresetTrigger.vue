<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerPresetTriggerProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPresetTrigger } from "@midoneui/core/styles/datepicker.styles";
import { Button } from "@/components/ui/button";

const props = defineProps<
  DatePickerPresetTriggerProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.PresetTrigger v-bind="props" as-child>
    <template v-if="props.asChild">
      <slot />
    </template>
    <template v-else>
      <Button :class="cn(datePickerPresetTrigger, props.class)">
        <slot />
      </Button>
    </template>
  </DatePicker.PresetTrigger>
</template>
