<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { ChevronsUpDownIcon } from "lucide-vue-next";
import { comboboxTrigger } from "@midoneui/core/styles/combobox.styles";
import { ComboboxClearTrigger } from ".";
import type { Api } from "@zag-js/combobox";
import { inject, type Ref } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  placeholder = "Select Options...",
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  placeholder?: string;
}>();

const api = inject<Api>("comboboxApi");
const displayValue = inject<Ref<string>>("comboboxDisplayValue");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps() }">
    <Button
      variant="ghost"
      v-if="!asChild"
      :class="cn(comboboxTrigger, className)"
    >
      <div>{{ displayValue || placeholder }}</div>
      <ComboboxClearTrigger>Clear</ComboboxClearTrigger>
      <ChevronsUpDownIcon />
    </Button>
    <slot v-else />
  </Slot>
</template>
