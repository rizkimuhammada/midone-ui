<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { datePickerInput } from "@midoneui/core/styles/datepicker.styles";
import { Input } from "@/components/ui/input";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";
import type { ComputedRef } from "vue";

const { class: className, index } = defineProps<{
  class?: string;
  index?: number;
}>();

const api = inject<ComputedRef<Api>>("datepickerApi");
const withTrigger = inject<boolean>("datepickerWithTrigger", true);
const inline = inject<boolean>("datepickerInline", false);

const handleClick = () => {
  if (!withTrigger && !inline && api?.value) {
    api.value.setOpen(true);
  }
};
</script>

<template>
  <Input
    :class="cn(datePickerInput, className)"
    v-bind="{ ...$attrs, ...(api as any)?.getInputProps({ index }) }"
    @click="handleClick"
  />
</template>
