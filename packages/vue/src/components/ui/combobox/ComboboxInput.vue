<script lang="ts" setup>
import { Combobox, type ComboboxInputProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxInput } from "@midoneui/core/styles/combobox.styles";
import { Input } from "@/components/ui/input";

const props = defineProps<ComboboxInputProps & {
  class?: string;
}>();
</script>

<template>
  <Combobox.Input v-bind="props" as-child>
    <Input :class="cn(comboboxInput, props.class)" />
  </Combobox.Input>
</template>
