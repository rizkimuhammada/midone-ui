<script lang="ts" setup>
import { Checkbox, type CheckboxIndicatorProps } from "@ark-ui/vue/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxIndicator } from "@midoneui/core/styles/checkbox.styles";

const props = defineProps<CheckboxIndicatorProps & {
  class?: string;
}>();
</script>

<template>
  <Checkbox.Indicator :class="cn(checkboxIndicator, props.class)" v-bind="props">
    <slot />
  </Checkbox.Indicator>
</template>
