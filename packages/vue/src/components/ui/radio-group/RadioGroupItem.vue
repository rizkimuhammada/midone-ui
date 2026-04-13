<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { radioGroupItem } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import { RadioGroupItemHiddenInput, RadioGroupItemControl, RadioGroupItemText } from ".";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { provide, inject, useSlots } from "vue";

const slots = useSlots();

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ItemProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("radioGroupApi");

provide("radioGroupItem", props);
</script>

<template>
  <Slot
    :class="cn(radioGroupItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <RadioGroupItemControl />
      <RadioGroupItemText v-if="slots.default"><slot /></RadioGroupItemText>
      <RadioGroupItemHiddenInput />
    </label>
  </Slot>
</template>
