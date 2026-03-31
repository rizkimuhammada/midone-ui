<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxRoot } from "@midoneui/core/styles/combobox.styles";
import { provide, computed, ref } from "vue";
import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/combobox";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  multiple = false,
  selectionBehavior = "clear",
  value,
  inputValue,
  asChild = false,
  onOpenChange,
  onInputValueChange,
  onValueChange,
  open = undefined,
  collection,
  items = [],
  itemToValue,
  itemToString,
  ...props
} = defineProps<
  Partial<Props> & {
    asChild?: boolean;
    class?: string;
    items?: any[];
    itemToValue?: (item: any) => string;
    itemToString?: (item: any) => string;
  }
>();

const emit = defineEmits<{
  (e: "update:value", value: string[]): void;
  (e: "update:inputValue", value: string): void;
  (e: "valueChange", details: combobox.ValueChangeDetails): void;
  (e: "inputValueChange", details: combobox.InputValueChangeDetails): void;
  (e: "openChange", details: combobox.OpenChangeDetails): void;
}>();

const internalValue = ref(value || []);
const internalInputValue = ref(inputValue || "");

const _inputValue = computed({
  get: () => (inputValue !== undefined ? inputValue : internalInputValue.value),
  set: (val) => {
    internalInputValue.value = val;
    emit("update:inputValue", val);
  },
});

const _value = computed({
  get: () => {
    const v = value !== undefined ? value : internalValue.value;
    return v;
  },
  set: (val) => {
    internalValue.value = val;
    emit("update:value", val);
  },
});

const filteredItems = computed(() => {
  if (!items || items.length === 0) return [];
  const query = _inputValue.value.toLowerCase();
  if (!query) return items;
  return items.filter((item) => {
    const label = itemToString
      ? itemToString(item)
      : typeof item === "string"
      ? item
      : item.label || item.value;
    return label?.toLowerCase().includes(query);
  });
});

const staticItems = ref<any[]>([]);

provide("registerStaticItem", (item: any) => {
  const key = typeof item === "string" ? item : item.value || item.label;
  if (!staticItems.value.some((i) => (typeof i === "string" ? i : i.value || i.label) === key)) {
    staticItems.value = [...staticItems.value, item];
  }
});

provide("unregisterStaticItem", (item: any) => {
  const key = typeof item === "string" ? item : item.value || item.label;
  staticItems.value = staticItems.value.filter(
    (i) => (typeof i === "string" ? i : i.value || i.label) !== key
  );
});

// Provide input value so ComboboxItem can self-filter when static
provide("comboboxInputValue", _inputValue);

const internalCollection = computed(() => {
  if (collection) return collection;
  const allItems = [...filteredItems.value, ...staticItems.value];
  return combobox.collection({
    items: allItems,
    itemToValue:
      itemToValue ||
      ((item) => (typeof item === "string" ? item : item.value || item.label)),
    itemToString:
      itemToString ||
      ((item) => (typeof item === "string" ? item : item.label || item.value)),
  });
});

const service = useMachine(
  combobox.machine,
  computed(() => ({
    ...props,
    multiple,
    selectionBehavior,
    collection: internalCollection.value,
    value: _value.value,
    inputValue: _inputValue.value,
    onValueChange(details) {
      _value.value = details.value;
      emit("valueChange", details);
      onValueChange?.(details);
    },
    onInputValueChange(details) {
      _inputValue.value = details.inputValue;
      emit("inputValueChange", details);
      onInputValueChange?.(details);
    },
    onOpenChange(details) {
      emit("openChange", details);
      onOpenChange?.(details);
    },
    open,
    id: crypto.randomUUID(),
  }))
);

const api = computed(() => combobox.connect(service, normalizeProps));

provide("comboboxApi", api);
</script>

<template>
  <Slot
    :class="cn(comboboxRoot, className)"
    :data-multiple="multiple"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <template v-else>
      <slot :items="filteredItems" />
    </template>
  </Slot>
</template>
