<script lang="ts" setup>
import * as menu from "@zag-js/menu";
import { type Api } from "@zag-js/menu";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide, type ComputedRef } from "vue";
import { menuRoot } from "@midoneui/core/styles/menu.styles";

const service = useMachine(menu.machine, { id: crypto.randomUUID() });
const api = computed(() => menu.connect(service, normalizeProps));

interface Props {
  class?: string;
  asChild?: boolean;
}

const { class: className, ...props } = defineProps<Props>();
provide<ComputedRef<Api>>("menuApi", api);
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs }">
    <div v-if="!props.asChild" :class="cn(menuRoot, className)">
      <slot />
    </div>
    <slot v-else />
  </Slot>
</template>
