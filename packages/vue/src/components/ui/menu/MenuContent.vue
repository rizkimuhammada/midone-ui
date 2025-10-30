<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject, type ComputedRef } from "vue";
import { Box } from "@/components/ui/box";
import { Slot } from "@/components/ui/slot";
import { menuContent } from "@midoneui/core/styles/menu.styles";

interface Props {
  class?: string;
  asChild?: boolean;
}

const { class: className, ...props } = defineProps<Props>();
const api = inject<ComputedRef<Api>>("menuApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }">
    <Box
      v-if="!props.asChild"
      raised="single"
      :class="cn(menuContent, className)"
    >
      <div>
        <slot />
      </div>
    </Box>
    <slot v-else />
  </Slot>
</template>
