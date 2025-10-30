<script lang="ts" setup>
import { Checkbox, type CheckboxLabelProps } from "@ark-ui/vue/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxLabel } from "@midoneui/core/styles/checkbox.styles";
import { label } from "@midoneui/core/styles/label.styles";

const props = defineProps<CheckboxLabelProps & {
  class?: string;
}>();
</script>

<template>
  <Checkbox.Label
    :class="cn([label, checkboxLabel, props.class])"
    v-bind="props"
  >
    <slot />
  </Checkbox.Label>
</template>
