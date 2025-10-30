<script lang="ts" setup>
import { Checkbox, type CheckboxHiddenInputProps } from "@ark-ui/vue/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxHiddenInput } from "@midoneui/core/styles/checkbox.styles";

const props = defineProps<CheckboxHiddenInputProps & {
  class?: string;
}>();
</script>

<template>
  <Checkbox.HiddenInput
    :class="cn(checkboxHiddenInput, props.class)"
    v-bind="props"
  />
</template>
