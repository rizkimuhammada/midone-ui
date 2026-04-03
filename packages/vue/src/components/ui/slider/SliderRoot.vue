<script lang="ts" setup>
import * as slider from "@zag-js/slider";
import type { Props } from "@zag-js/slider";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { sliderRoot } from "@midoneui/core/styles/slider.styles";
import { SliderLabel, SliderControl, SliderTrack, SliderRange, SliderThumb, SliderHiddenInput } from ".";

const {
  class: className,
  asChild = false,
  label,
  type = "single",
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string; type?: "single" | "range" }>();

const service = useMachine(slider.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => slider.connect(service, normalizeProps));

provide("sliderApi", api);
</script>

<template>
  <Slot
    :class="cn(sliderRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <SliderLabel v-if="label">{{ label }}</SliderLabel>
      <SliderControl>
        <SliderTrack><SliderRange /></SliderTrack>
        <SliderThumb :index="0"><SliderHiddenInput /></SliderThumb>
        <SliderThumb v-if="type === 'range'" :index="1"><SliderHiddenInput /></SliderThumb>
      </SliderControl>
      <slot />
    </div>
  </Slot>
</template>
