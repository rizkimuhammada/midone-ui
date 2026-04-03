<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemGroup } from "@midoneui/core/styles/select.styles";
import { SelectItemGroupLabel } from "@/components/ui/select";
import type { Api } from "@zag-js/select";
import { provide, inject } from "vue";

const { class: className, label } = defineProps<{
  class?: string;
  label?: string;
}>();

const api = inject<Api>("selectApi");
const itemGroupId = { id: crypto.randomUUID() };

provide("selectItemGroup", { id: itemGroupId.id });
</script>

<template>
  <div
    :class="cn(selectItemGroup, className)"
    v-bind="api?.getItemGroupProps(itemGroupId)"
  >
    <SelectItemGroupLabel v-if="label">
      {{ label }}
    </SelectItemGroupLabel>
    <slot />
  </div>
</template>
