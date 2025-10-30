<script lang="ts" setup>
import { Combobox, type ComboboxItemTextProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemText } from "@midoneui/core/styles/combobox.styles";

const props = defineProps<ComboboxItemTextProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.ItemText :class="cn(comboboxItemText, props.class)" v-bind="props">
    <slot />
  </Combobox.ItemText>
</template>
