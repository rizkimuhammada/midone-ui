<script lang="ts" setup>
import { Combobox, type ComboboxPositionerProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxPositioner } from "@midoneui/core/styles/combobox.styles";

const props = defineProps<ComboboxPositionerProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.Positioner :class="cn(comboboxPositioner, props.class)" v-bind="props">
    <slot />
  </Combobox.Positioner>
</template>
