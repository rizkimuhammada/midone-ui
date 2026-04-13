<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@/utils/cn";
import { comboboxItem } from "@midoneui/core/styles/combobox.styles";
import type { ItemProps } from "@zag-js/combobox";
import type { Api } from "@zag-js/combobox";
import {
  provide,
  inject,
  onUnmounted,
  computed,
  reactive,
  watchEffect,
  useSlots,
} from "vue";
import type { Ref } from "vue";
import { ComboboxItemIndicator, ComboboxItemText } from ".";

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

const api = inject<Api>("comboboxApi");
const registerStaticItem = inject<((item: any) => void) | undefined>(
  "registerStaticItem",
  undefined
);
const unregisterStaticItem = inject<((item: any) => void) | undefined>(
  "unregisterStaticItem",
  undefined
);
const comboboxInputValue = inject<Ref<string>>("comboboxInputValue");
const slots = useSlots();

const isStaticItem = itemProp === undefined && valueProp !== undefined;

const displayLabel = textProp ?? valueProp ?? "";

// For static items: show/hide based on whether label matches current input
const shouldShow = computed(() => {
  if (!isStaticItem) return true;
  const query = comboboxInputValue?.value ?? "";
  if (!query) return true;
  return displayLabel.toLowerCase().includes(query.toLowerCase());
});

// Resolve: use `item` prop if given, else create static item object from `value` prop
const resolvedItem = computed(() => {
  if (itemProp !== undefined) return itemProp;
  if (valueProp !== undefined) return { value: valueProp, label: displayLabel };
  return undefined;
});

// Reactive context for ComboboxItemIndicator via inject
const itemContext = reactive({ item: null as any });
watchEffect(() => {
  itemContext.item = resolvedItem.value;
});

const itemText = computed(() => {
  if (textProp) return textProp;
  const item = resolvedItem.value;
  if (!item) return "";
  return typeof item === "string" ? item : item.label || item.value || "";
});

// For static items: register/unregister from collection based on visibility
// flush: 'sync' ensures collection updates before zag-js renders
if (isStaticItem) {
  watchEffect(() => {
    if (shouldShow.value) {
      registerStaticItem?.({ value: valueProp, label: displayLabel });
    } else {
      unregisterStaticItem?.({ value: valueProp, label: displayLabel });
    }
  }, { flush: 'sync' });
} else {
  // Initial registration for non-watchEffect path (shouldn't happen, but defensive)
}

onUnmounted(() => {
  if (isStaticItem && unregisterStaticItem) {
    unregisterStaticItem({ value: valueProp, label: valueProp });
  }
});

provide("comboboxItem", itemContext);
</script>

<template>
  <template v-if="!isStaticItem || shouldShow">
    <Slot
      :class="cn(comboboxItem, className)"
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
          <ComboboxItemText>
            {{ itemText }}
          </ComboboxItemText>
        </template>
        <slot v-else />
        <ComboboxItemIndicator />
      </div>
    </Slot>
  </template>
</template>
