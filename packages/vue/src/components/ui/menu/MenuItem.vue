<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { type Api, type ItemProps } from "@zag-js/menu";
import { inject, type ComputedRef } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { menuItem } from "@midoneui/core/styles/menu.styles";

interface Props extends ItemProps {
  class?: string;
  asChild?: boolean;
}

const { class: className, ...props } = withDefaults(defineProps<Props>(), {
  closeOnSelect: true,
});
const api = inject<ComputedRef<Api>>("menuApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }">
    <div v-if="!props.asChild" :class="cn(menuItem, className)">
      <slot />
    </div>
    <slot v-else />
  </Slot>
</template>
