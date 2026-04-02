<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerView } from "@midoneui/core/styles/datepicker.styles";
import type { Api, ViewProps } from "@zag-js/date-picker";
import { provide, inject, type ComputedRef } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ViewProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<ComputedRef<Api>>("datepickerApi");

provide("datepickerView", props);
</script>

<template>
  <Slot
    :class="cn(datePickerView, className)"
    v-bind="{ ...props, ...$attrs, ...(api as any)?.getViewProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
