<script lang="ts" setup>
import { Carousel, type CarouselIndicatorGroupProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { carouselIndicatorGroup } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselIndicatorGroupProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.IndicatorGroup :class="cn(carouselIndicatorGroup, props.class)" v-bind="props">
    <slot />
  </Carousel.IndicatorGroup>
</template>
