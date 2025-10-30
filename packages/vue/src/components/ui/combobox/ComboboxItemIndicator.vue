<script lang="ts" setup>
import {
  Combobox,
  type ComboboxItemIndicatorProps,
} from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemIndicator } from "@midoneui/core/styles/combobox.styles";
import { Check } from "lucide-vue-next";

const props = defineProps<
  ComboboxItemIndicatorProps & {
    class?: string;
  }
>();
</script>

<template>
  <Combobox.ItemIndicator
    :class="cn(comboboxItemIndicator, props.class)"
    v-bind="props"
  >
    <slot>
      <Check class="size-3.5" />
    </slot>
  </Combobox.ItemIndicator>
</template>
