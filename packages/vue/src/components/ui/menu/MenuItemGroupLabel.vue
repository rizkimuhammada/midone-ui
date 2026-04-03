<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { menuItemGroupLabel } from "@midoneui/core/styles/menu.styles";
import { inject } from "vue";
import { type Api } from "@zag-js/menu";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
const itemGroupId = inject<string | undefined>("itemGroupId");
</script>

<template>
  <Slot
    :class="cn(menuItemGroupLabel, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getItemGroupLabelProps({ htmlFor: itemGroupId! }),
    }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <slot />
    </label>
  </Slot>
</template>
