<script lang="ts" setup>
import * as select from "@zag-js/select";
import type { Props } from "@zag-js/select";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide, ref } from "vue";
import { selectRoot } from "@midoneui/core/styles/select.styles";
import { SelectHiddenSelect } from ".";

const {
  class: className,
  asChild = false,
  multiple = undefined,
  open = undefined,
  closeOnSelect = undefined,
  value,
  collection,
  items = [],
  itemToValue,
  itemToString,
  onValueChange,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    asChild?: boolean;
    items?: any[];
    itemToValue?: (item: any) => string;
    itemToString?: (item: any) => string;
  }
>();

const emit = defineEmits<{
  (e: "update:value", value: string[]): void;
  (e: "valueChange", details: select.ValueChangeDetails): void;
}>();

const internalValue = ref(value || []);

const _value = computed({
  get: () => (value !== undefined ? value : internalValue.value),
  set: (val) => {
    internalValue.value = val;
    emit("update:value", val);
  },
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

const internalCollection = computed(() => {
  if (collection) return collection;
  const allItems = [
    ...(items || []),
    ...staticItems.value,
  ];
  return select.collection({
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
  select.machine,
  computed(() => ({
    ...props,
    multiple,
    open,
    closeOnSelect,
    collection: internalCollection.value,
    value: _value.value,
    onValueChange(details) {
      _value.value = details.value;
      emit("valueChange", details);
      onValueChange?.(details);
    },
    id: crypto.randomUUID(),
  }))
);

const api = computed(() => select.connect(service, normalizeProps));

provide("selectApi", api);
</script>

<template>
  <Slot
    :class="cn(selectRoot, className)"
    :data-multiple="multiple"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot :items="items" />
      <SelectHiddenSelect />
    </div>
  </Slot>
</template>
