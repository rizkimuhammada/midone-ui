<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { comboboxRoot } from "@midoneui/core/styles/combobox.styles";
import { provide, computed, ref } from "vue";
import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps } from "@zag-js/vue";
import ComboboxLabel from "./ComboboxLabel.vue";
import ComboboxControl from "./ComboboxControl.vue";
import ComboboxContent from "./ComboboxContent.vue";

defineOptions({ inheritAttrs: false });

const {
  class: className,
  multiple = false,
  selectionBehavior = "clear" as "clear" | "replace" | "preserve",
  value,
  open = undefined,
  comboboxInputPlaceholder,
  label,
} = defineProps<{
  class?: string;
  multiple?: boolean;
  selectionBehavior?: "clear" | "replace" | "preserve";
  value?: string[];
  open?: boolean;
  comboboxInputPlaceholder?: string;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:value", value: string[]): void;
}>();

const internalValue = ref(value ?? []);
const internalInputValue = ref("");

const _inputValue = computed({
  get: () => internalInputValue.value,
  set: (val) => { internalInputValue.value = val; },
});

const _value = computed({
  get: () => value !== undefined ? value : internalValue.value,
  set: (val) => {
    internalValue.value = val;
    emit("update:value", val);
  },
});

// Static items self-register from ComboboxItem children
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

provide("comboboxInputValue", _inputValue);

const internalCollection = computed(() =>
  combobox.collection({
    items: staticItems.value,
    itemToValue: (item) => (typeof item === "string" ? item : item.value || item.label),
    itemToString: (item) => (typeof item === "string" ? item : item.label || item.value),
  })
);

const displayValue = computed(() => {
  const values = _value.value;
  if (!values.length) return "";
  return values
    .map((v) => {
      const found = staticItems.value.find(
        (item: any) => (typeof item === "string" ? item : item.value || item.label) === v
      );
      return found ? (typeof found === "string" ? found : found.label || found.value) : v;
    })
    .join(", ");
});

provide("comboboxDisplayValue", displayValue);

const service = useMachine(
  combobox.machine,
  computed(() => ({
    multiple,
    selectionBehavior,
    collection: internalCollection.value,
    value: _value.value,
    inputValue: _inputValue.value,
    onValueChange(details) {
      _value.value = details.value;
    },
    onInputValueChange(details) {
      _inputValue.value = details.inputValue;
    },
    open,
    id: crypto.randomUUID(),
  }))
);

const api = computed(() => combobox.connect(service, normalizeProps));
provide("comboboxApi", api);
</script>

<template>
  <div :class="cn(comboboxRoot, className)" :data-multiple="multiple" v-bind="{ ...$attrs, ...api.getRootProps() }">
    <ComboboxLabel v-if="label">{{ label }}</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent :search-placeholder="comboboxInputPlaceholder">
      <slot />
    </ComboboxContent>
  </div>
</template>
