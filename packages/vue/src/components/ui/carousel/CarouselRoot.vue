<script lang="ts" setup>
import { Carousel, type CarouselRootProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { carouselRoot } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselRootProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.Root :class="cn(carouselRoot, props.class)" v-bind="props">
    <slot />
  </Carousel.Root>
</template>
