<script lang="ts" setup>
import { Combobox, type ComboboxItemGroupProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroup } from "@midoneui/core/styles/combobox.styles";

const props = defineProps<ComboboxItemGroupProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.ItemGroup :class="cn(comboboxItemGroup, props.class)" v-bind="props">
    <slot />
  </Combobox.ItemGroup>
</template>
