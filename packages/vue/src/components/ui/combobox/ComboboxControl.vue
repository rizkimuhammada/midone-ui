<script lang="ts" setup>
import { Combobox, type ComboboxControlProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxControl } from "@midoneui/core/styles/combobox.styles";

const props = defineProps<ComboboxControlProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.Control :class="cn(comboboxControl, props.class)" v-bind="props">
    <slot />
  </Combobox.Control>
</template>
