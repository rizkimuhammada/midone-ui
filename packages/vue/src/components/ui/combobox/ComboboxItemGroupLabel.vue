<script lang="ts" setup>
import { Combobox, type ComboboxItemGroupLabelProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroupLabel } from "@midoneui/core/styles/combobox.styles";

const props = defineProps<ComboboxItemGroupLabelProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.ItemGroupLabel :class="cn(comboboxItemGroupLabel, props.class)" v-bind="props">
    <slot />
  </Combobox.ItemGroupLabel>
</template>
