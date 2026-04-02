<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroup } from "@midoneui/core/styles/combobox.styles";
import { comboboxItemGroupLabel } from "@midoneui/core/styles/combobox.styles";
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
    <label
      v-if="label"
      :class="comboboxItemGroupLabel"
      v-bind="api?.getItemGroupLabelProps({ htmlFor: itemGroupId.id })"
    >
      {{ label }}
    </label>
    <slot />
  </div>
</template>
