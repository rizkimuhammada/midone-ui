<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { selectItem } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { SelectItemIndicator, SelectItemText } from ".";
import type { Api, ItemProps } from "@zag-js/select";
import { provide, inject, computed, reactive, watchEffect, onUnmounted, useSlots } from "vue";

const {
  class: className,
  asChild = false,
  value: valueProp,
  item: itemProp,
  text: textProp,
  ...restProps
} = defineProps<
  Omit<ItemProps, "item"> & {
    item?: any;
    value?: string;
    text?: string;
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("selectApi");
const registerStaticItem = inject<((item: any) => void) | undefined>("registerStaticItem", undefined);
const unregisterStaticItem = inject<((item: any) => void) | undefined>("unregisterStaticItem", undefined);
const slots = useSlots();

const isStaticItem = itemProp === undefined && valueProp !== undefined;
const displayLabel = textProp ?? valueProp ?? "";

const resolvedItem = computed(() => {
  if (itemProp !== undefined) return itemProp;
  if (valueProp !== undefined) return { value: valueProp, label: displayLabel };
  return undefined;
});

const itemContext = reactive({ item: null as any });
watchEffect(() => {
  itemContext.item = resolvedItem.value;
});

if (isStaticItem) {
  watchEffect(() => {
    registerStaticItem?.({ value: valueProp, label: displayLabel });
  }, { flush: 'sync' });
}

onUnmounted(() => {
  if (isStaticItem && unregisterStaticItem) {
    unregisterStaticItem({ value: valueProp, label: displayLabel });
  }
});

provide("selectItem", itemContext);
</script>

<template>
  <Slot
    :class="cn(selectItem, className)"
    v-bind="{
      item: resolvedItem,
      ...restProps,
      ...$attrs,
      ...api?.getItemProps({ item: resolvedItem, ...restProps }),
    }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <template v-if="!slots.default">
        <SelectItemText>{{ displayLabel }}</SelectItemText>
      </template>
      <slot v-else />
      <SelectItemIndicator />
    </div>
  </Slot>
</template>
