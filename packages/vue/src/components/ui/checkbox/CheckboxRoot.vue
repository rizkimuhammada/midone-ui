<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { checkboxRoot } from "@midoneui/core/styles/checkbox.styles";
import * as checkbox from "@zag-js/checkbox";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/checkbox";
import { CheckboxHiddenInput, CheckboxLabel, CheckboxControl } from ".";
import { computed, provide, useSlots } from "vue";

const {
  class: className,
  checked = undefined,
  label,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    label?: string;
  }
>();

const slots = useSlots();

const service = useMachine(
  checkbox.machine,
  computed(() => ({
    ...props,
    checked,
    id: crypto.randomUUID(),
  }))
);

const api = computed(() => checkbox.connect(service, normalizeProps));

provide("checkboxApi", api);
</script>

<template>
  <label
    :class="cn(checkboxRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="slots.default" />
    <template v-else>
      <CheckboxControl />
      <CheckboxLabel v-if="label">
        {{ label }}
      </CheckboxLabel>
    </template>
    <CheckboxHiddenInput />
  </label>
</template>
