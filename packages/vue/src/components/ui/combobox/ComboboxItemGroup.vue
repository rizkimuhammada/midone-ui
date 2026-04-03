<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroup } from "@midoneui/core/styles/combobox.styles";
import { ComboboxItemGroupLabel } from "@/components/ui/combobox";
import type { Api } from "@zag-js/combobox";
import { provide, inject } from "vue";

const { class: className, label } = defineProps<{
  class?: string;
  label?: string;
}>();

const api = inject<Api>("comboboxApi");
const itemGroupId = { id: crypto.randomUUID() };

provide("comboboxItemGroupId", itemGroupId);
</script>

<template>
  <div
    :class="cn(comboboxItemGroup, className)"
    v-bind="api?.getItemGroupProps(itemGroupId)"
  >
    <ComboboxItemGroupLabel v-if="label">
      {{ label }}
    </ComboboxItemGroupLabel>
    <slot />
  </div>
</template>
