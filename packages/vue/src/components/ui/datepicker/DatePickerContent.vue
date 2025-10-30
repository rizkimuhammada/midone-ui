<script lang="ts" setup>
import {
  DatePicker,
  type DatePickerContentProps,
} from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerContent } from "@midoneui/core/styles/datepicker.styles";
import { Box } from "@/components/ui/box";

const props = defineProps<
  DatePickerContentProps & {
    class?: string;
  }
>();
</script>

<template>
  <DatePicker.Content v-bind="props" as-child>
    <Box
      raised="single"
      :class="cn(datePickerContent, props.class)"
      v-bind="props"
    >
      <div>
        <slot />
      </div>
    </Box>
  </DatePicker.Content>
</template>
