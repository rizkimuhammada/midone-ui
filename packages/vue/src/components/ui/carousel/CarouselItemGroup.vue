<script lang="ts" setup>
import { Carousel, type CarouselItemGroupProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { carouselItemGroup } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselItemGroupProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.ItemGroup :class="cn(carouselItemGroup, props.class)" v-bind="props">
    <slot />
  </Carousel.ItemGroup>
</template>
