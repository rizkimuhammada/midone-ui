<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { popoverContent } from "@midoneui/core/styles/popover.styles";
import { PopoverArrow, PopoverArrowTip, PopoverPositioner } from ".";
import { Box } from "@/components/ui/box";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <PopoverPositioner>
    <Slot
      :class="cn(popoverContent, className)"
      v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <Box v-else raised="single" :class="cn(popoverContent, className)">
        <div><slot /></div>
        <PopoverArrow>
          <PopoverArrowTip />
        </PopoverArrow>
      </Box>
    </Slot>
  </PopoverPositioner>
</template>
