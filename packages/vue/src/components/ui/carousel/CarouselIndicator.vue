<script lang="ts" setup>
import { Carousel, type CarouselIndicatorProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { carouselIndicator } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselIndicatorProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.Indicator :class="cn(carouselIndicator, props.class)" v-bind="props" />
</template>
