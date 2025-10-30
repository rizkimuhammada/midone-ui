<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject, type ComputedRef } from "vue";
import { Button } from "@/components/ui/button";
import { Slot } from "@/components/ui/slot";
import { menuTrigger } from "@midoneui/core/styles/menu.styles";

interface Props {
  class?: string;
  asChild?: boolean;
}

const { class: className, ...props } = defineProps<Props>();
const api = inject<ComputedRef<Api>>("menuApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button v-if="!props.asChild" :class="cn(menuTrigger, className)">
      <slot />
      <MenuIndicator />
    </Button>
    <slot v-else />
  </Slot>
</template>
