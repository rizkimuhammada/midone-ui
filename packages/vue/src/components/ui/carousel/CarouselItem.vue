<script lang="ts" setup>
import { Carousel, type CarouselItemProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { Box } from "@/components/ui/box";
import { carouselItem } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselItemProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.Item v-bind="props" as-child>
    <Box :class="cn(carouselItem, props.class)">
      <slot />
    </Box>
  </Carousel.Item>
</template>
