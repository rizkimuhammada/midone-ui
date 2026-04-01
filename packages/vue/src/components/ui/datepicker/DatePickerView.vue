<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerView } from "@midoneui/core/styles/datepicker.styles";
import type { Api, ViewProps } from "@zag-js/date-picker";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  isManual = true,
  ...props
} = defineProps<
  ViewProps & {
    class?: string;
    asChild?: boolean;
    isManual?: boolean;
  }
>();

const api = inject<Api>("datepickerApi");
const registerContent = inject<(() => void) | undefined>("registerDatePickerContent", undefined);

if (isManual && registerContent) {
  registerContent();
}

provide("datepickerView", props);
</script>

<template>
  <Slot
    :class="cn(datePickerView, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getViewProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
