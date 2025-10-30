<script lang="ts" setup>
import { Combobox } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxRoot } from "@midoneui/core/styles/combobox.styles";
import { provide, computed } from "vue";

const props = defineProps<{
  class?: string;
  multiple?: boolean;
  value?: string[];
}>();

provide(
  "comboboxValue",
  computed(() => props.value)
);
</script>

<template>
  <Combobox.Root
    :class="cn(comboboxRoot, props.class)"
    v-bind="props"
    :data-multiple="props.multiple"
    selection-behavior="clear"
    :multiple="props.multiple"
  >
    <slot />
  </Combobox.Root>
</template>
