<script lang="ts" setup>
import { Combobox, type ComboboxItemProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItem } from "@midoneui/core/styles/combobox.styles";

const props = defineProps<ComboboxItemProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.Item :class="cn(comboboxItem, props.class)" v-bind="props">
    <slot />
  </Combobox.Item>
</template>
