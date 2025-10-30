<script lang="ts" setup>
import { Carousel, type CarouselNextTriggerProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { carouselNextTrigger } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselNextTriggerProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.NextTrigger v-bind="props" as-child>
    <Button :class="cn(carouselNextTrigger, props.class)">
      <slot>
        <ArrowRight />
      </slot>
    </Button>
  </Carousel.NextTrigger>
</template>
