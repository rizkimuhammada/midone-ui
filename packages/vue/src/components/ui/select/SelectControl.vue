<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectControl } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { SelectTrigger, SelectValueText } from ".";
import type { Api } from "@zag-js/select";
import { inject, useSlots } from "vue";

const {
  class: className,
  asChild = false,
  placeholder,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  placeholder?: string;
}>();

const api = inject<Api>("selectApi");
const slots = useSlots();
</script>

<template>
  <Slot
    :class="cn(selectControl, className)"
    v-bind="{ ...api?.getControlProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <template v-if="!slots.default">
        <SelectTrigger>
          <SelectValueText :placeholder="placeholder" />
        </SelectTrigger>
      </template>
      <slot v-else />
    </div>
  </Slot>
</template>
