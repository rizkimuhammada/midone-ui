<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { inject, type ComputedRef } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { ChevronRight } from "lucide-vue-next";
import { Slot } from "@/components/ui/slot";
import { menuItem } from "@midoneui/core/styles/menu.styles";

interface Props extends Api {
  class?: string;
  asChild?: boolean;
}

const { class: className, ...props } = defineProps<Props>();
const api = inject<ComputedRef<Api>>("menuApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerItemProps(props), ...props, ...$attrs }">
    <div v-if="!props.asChild" :class="cn(menuItem, className)">
      <div>
        <slot />
      </div>
      <ChevronRight />
    </div>
    <slot v-else />
  </Slot>
</template>
