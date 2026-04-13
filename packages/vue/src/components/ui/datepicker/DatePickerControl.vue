<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { datePickerControl } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { DatePickerInput, DatePickerTrigger, DatePickerClearTrigger } from ".";
import { inject } from "vue";
import type { ComputedRef } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<ComputedRef<Api>>("datepickerApi");
const selectionMode = inject<string>("datepickerSelectionMode", "single");
const inline = inject<boolean>("datepickerInline", false);
const withTrigger = inject<boolean>("datepickerWithTrigger", true);
</script>

<template>
  <div :class="cn(datePickerControl, className)" v-bind="(api as any)?.getControlProps()">
    <template v-if="selectionMode === 'range'">
      <DatePickerInput :index="0" />
      <DatePickerInput :index="1" />
    </template>
    <DatePickerInput v-else />
    <DatePickerTrigger v-if="!inline && withTrigger" />
    <DatePickerClearTrigger />
  </div>
</template>
