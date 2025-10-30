<script lang="ts" setup>
import { Checkbox, type CheckboxControlProps } from "@ark-ui/vue/checkbox";
import { CheckIcon } from "lucide-vue-next";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxControl } from "@midoneui/core/styles/checkbox.styles";
import CheckboxIndicator from "./CheckboxIndicator.vue";

const props = defineProps<CheckboxControlProps & {
  class?: string;
}>();
</script>

<template>
  <Checkbox.Control :class="cn(checkboxControl, props.class)" v-bind="props">
    <CheckboxIndicator>
      <CheckIcon />
    </CheckboxIndicator>
  </Checkbox.Control>
</template>
