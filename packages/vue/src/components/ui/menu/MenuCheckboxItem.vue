<script lang="ts" setup>
import type { Api, OptionItemProps } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { Check } from "lucide-vue-next";
import { menuItem } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";
import { inject } from "vue";

const {
  shortcut,
  class: className,
  asChild = false,
  type = "checkbox",
  ...props
} = defineProps<
  Omit<OptionItemProps, "type"> & {
    class?: string;
    asChild?: boolean;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }
>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuItem, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getOptionItemProps({
        ...props,
        type,
      }),
    }"
  >
    <div>
      <span v-bind="{ ...api?.getItemIndicatorProps(props) }">
        <Check />
      </span>
      <slot />
    </div>
    <div>{{ shortcut }}</div>
  </Slot>
</template>
