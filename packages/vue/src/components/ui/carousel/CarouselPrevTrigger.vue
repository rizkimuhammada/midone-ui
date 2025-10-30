<script lang="ts" setup>
import { Carousel, type CarouselPrevTriggerProps } from "@ark-ui/vue/carousel";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-vue-next";
import { carouselPrevTrigger } from "@midoneui/core/styles/carousel.styles";

const props = defineProps<CarouselPrevTriggerProps & {
  class?: string;
}>();
</script>

<template>
  <Carousel.PrevTrigger v-bind="props" as-child>
    <Button :class="cn(carouselPrevTrigger, props.class)">
      <slot>
        <ArrowLeft />
      </slot>
    </Button>
  </Carousel.PrevTrigger>
</template>
