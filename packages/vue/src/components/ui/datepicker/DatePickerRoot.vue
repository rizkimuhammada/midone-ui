<script lang="ts" setup>
import { DatePicker } from "@ark-ui/vue/date-picker";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerRoot } from "@midoneui/core/styles/datepicker.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <DatePicker.Root :class="cn(datePickerRoot, props.class)" v-bind="props">
    <slot />
  </DatePicker.Root>
</template>
