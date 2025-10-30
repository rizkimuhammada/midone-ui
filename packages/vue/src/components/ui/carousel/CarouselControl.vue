<script lang="ts" setup>
import { Carousel, type CarouselControlProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { carouselControl } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselControlProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.Control :class="cn(carouselControl, props.class)" v-bind="props">
    <slot />
  </Carousel.Control>
</template>
