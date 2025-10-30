<script lang="ts" setup>
import { Checkbox, type CheckboxRootProps } from "@ark-ui/vue/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxRoot } from "@midoneui/core/styles/checkbox.styles";
import CheckboxHiddenInput from "./CheckboxHiddenInput.vue";

const props = defineProps<
  CheckboxRootProps & {
    class?: string;
  }
>();
</script>

<template>
  <Checkbox.Root :class="cn(checkboxRoot, props.class)" v-bind="props">
    <slot />
    <CheckboxHiddenInput />
  </Checkbox.Root>
</template>
