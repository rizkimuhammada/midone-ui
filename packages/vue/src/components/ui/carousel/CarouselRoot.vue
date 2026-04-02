<script lang="ts" setup>
import * as carousel from "@zag-js/carousel";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/carousel";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselRoot } from "@midoneui/core/styles/carousel.styles";
import { computed, provide } from "vue";
import CarouselIndicatorGroup from "./CarouselIndicatorGroup.vue";
import CarouselIndicator from "./CarouselIndicator.vue";

const {
  class: className,
  defaultPage,
  slideCount,
  spacing = "2rem",
  allowMouseDrag = true,
  asChild = false,
  showIndicators = false,
  ...props
} = defineProps<
  Partial<Props> & {
    asChild?: boolean;
    class?: string;
    showIndicators?: boolean;
  }
>();

const service = useMachine(carousel.machine, {
  defaultPage,
  slideCount,
  spacing,
  allowMouseDrag,
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => carousel.connect(service, normalizeProps));

provide("carouselApi", api);
</script>

<template>
  <Slot
    :class="cn(carouselRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else class="relative">
      <slot />
      <CarouselIndicatorGroup
        v-if="showIndicators"
        class="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <CarouselIndicator
          v-for="(_, index) in api.pageSnapPoints"
          :key="index"
          :index="index"
        />
      </CarouselIndicatorGroup>
    </div>
  </Slot>
</template>
