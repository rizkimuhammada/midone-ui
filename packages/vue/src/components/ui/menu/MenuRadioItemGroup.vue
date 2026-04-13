<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { menuRadioItemGroup } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";
import { inject, provide } from "vue";
import { type Api } from "@zag-js/menu";
import { MenuItemGroupLabel } from ".";

const {
  class: className,
  asChild = false,
  label,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  label?: string;
}>();

const api = inject<Api>("menuApi");
const id = crypto.randomUUID();
provide("itemGroupId", id);
</script>

<template>
  <Slot
    :class="cn(menuRadioItemGroup, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getItemGroupProps({ id }),
    }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <MenuItemGroupLabel v-if="label">{{ label }}</MenuItemGroupLabel>
      <slot />
    </div>
  </Slot>
</template>
