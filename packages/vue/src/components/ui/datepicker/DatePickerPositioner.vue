<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { datePickerPositioner } from "@midoneui/core/styles/datepicker.styles";
import type { Api } from "@zag-js/date-picker";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  isManual = true,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  isManual?: boolean;
}>();

const api = inject<Api>("datepickerApi");
const registerContent = inject<(() => void) | undefined>("registerDatePickerContent", undefined);

if (isManual && registerContent) {
  registerContent();
}
</script>

<template>
  <Teleport to="body" v-if="api?.open">
    <Slot
      :class="cn(datePickerPositioner, className)"
      v-bind="{ ...props, ...$attrs, ...api?.getPositionerProps() }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </Slot>
  </Teleport>
</template>
