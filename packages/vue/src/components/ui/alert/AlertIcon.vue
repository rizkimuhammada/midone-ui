<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Slot } from "@/components/ui/slot";
import { alertIcon } from "@midoneui/core/styles/alert.styles";

const {
  class: className,
  ...props
} = defineProps<{
  class?: string;
}>();
</script>

<template>
  <Slot
    v-if="$slots.default"
    :class="cn([alertIcon, className])"
    data-part="icon"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </Slot>
</template>
