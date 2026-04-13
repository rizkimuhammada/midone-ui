<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { tooltipContent } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import { TooltipArrow, TooltipArrowTip, TooltipPositioner } from ".";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <TooltipPositioner>
    <Slot
      :class="cn(tooltipContent, className)"
      v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
      </div>
    </Slot>
  </TooltipPositioner>
</template>
