<script lang="ts" setup>
import { Combobox, type ComboboxLabelProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxLabel } from "@midoneui/core/styles/combobox.styles";
import { Label } from "@/components/ui/label";

const props = defineProps<ComboboxLabelProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.Label v-bind="props" as-child>
    <Label :class="cn(comboboxLabel, props.class)">
      <slot />
    </Label>
  </Combobox.Label>
</template>
