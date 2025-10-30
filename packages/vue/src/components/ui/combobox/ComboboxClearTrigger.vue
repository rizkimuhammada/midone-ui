<script lang="ts" setup>
import { Combobox, type ComboboxClearTriggerProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxClearTrigger } from "@midoneui/core/styles/combobox.styles";

const props = defineProps<ComboboxClearTriggerProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.ClearTrigger v-bind="props" as-child>
    <span :class="cn(comboboxClearTrigger, props.class)">
      <slot />
    </span>
  </Combobox.ClearTrigger>
</template>
