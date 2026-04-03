<script lang="ts" setup>
import * as select from "@zag-js/select";
import type { Props } from "@zag-js/select";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide, ref } from "vue";
import { selectRoot } from "@midoneui/core/styles/select.styles";
import SelectLabel from "./SelectLabel.vue";
import SelectControl from "./SelectControl.vue";
import SelectContent from "./SelectContent.vue";
import { SelectHiddenSelect } from ".";

defineOptions({ inheritAttrs: false });

const {
  class: className,
  multiple,
  open = undefined,
  closeOnSelect,
  value,
  label,
  placeholder,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    label?: string;
    placeholder?: string;
  }
>();

const emit = defineEmits<{
  (e: "update:value", value: string[]): void;
}>();

const internalValue = ref(value ?? []);

const _value = computed({
  get: () => (value !== undefined ? value : internalValue.value),
  set: (val) => {
    internalValue.value = val;
    emit("update:value", val);
  },
});

const id = crypto.randomUUID();
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

const internalCollection = computed(() =>
  select.collection({
    items: staticItems.value,
    itemToValue: (item) => (typeof item === "string" ? item : item.value || item.label),
    itemToString: (item) => (typeof item === "string" ? item : item.label || item.value),
  })
);

const service = useMachine(
  select.machine,
  computed(() => ({
    ...props,
    ...(multiple !== undefined ? { multiple } : {}),
    ...(open !== undefined ? { open } : {}),
    ...(closeOnSelect !== undefined ? { closeOnSelect } : {}),
    collection: internalCollection.value,
    value: _value.value,
    onValueChange(details) {
      _value.value = details.value;
    },
    id,
  }))
);

const selectApi = computed(() => select.connect(service, normalizeProps));

provide("selectApi", selectApi);
provide("selectPlaceholder", placeholder);
</script>

<template>
  <div
    :class="cn(selectRoot, className)"
    :data-multiple="multiple"
    v-bind="{ ...$attrs, ...selectApi.getRootProps() }"
  >
    <SelectLabel v-if="label">{{ label }}</SelectLabel>
    <SelectControl />
    <SelectContent>
      <slot />
    </SelectContent>
    <SelectHiddenSelect />
  </div>
</template>
