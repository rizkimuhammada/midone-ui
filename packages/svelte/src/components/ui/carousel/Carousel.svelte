<script lang="ts">
  import * as carousel from "@zag-js/carousel";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { carouselRoot, carouselControl, carouselPrevTrigger, carouselNextTrigger, carouselIndicatorGroup, carouselIndicator, carouselItemGroup, carouselItem } from "@midoneui/core/styles/carousel.styles";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    slides = [],
    children,
    ...props
  }: { class?: string; slides?: any[]; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(carousel.machine, () => ({
    ...props,
    id: crypto.randomUUID(),
    slideCount: slides.length,
  }));
  const api = $derived(carousel.connect(service, normalizeProps));
</script>

<div class={cn(carouselRoot, className)} {...api.getRootProps()}>
  <div class="overflow-hidden" {...api.getViewportProps()}>
    <div class={cn(carouselItemGroup)} {...api.getItemGroupProps()}>
      {#each slides as slide, index}
        <div class={cn(carouselItem)} {...api.getItemProps({ index })}>
          {#if typeof slide === "string"}
            <img src={slide} alt="Slide {index + 1}" class="w-full h-full object-cover" />
          {:else}
            <div class="w-full h-48 bg-foreground/5 rounded flex items-center justify-center">
              Slide {index + 1}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  <div class={cn(carouselControl)}>
    <button class={cn(carouselPrevTrigger)} {...api.getPrevTriggerProps()}>
      <ChevronLeft class="size-4" />
    </button>
    <div class={cn(carouselIndicatorGroup)} {...api.getIndicatorGroupProps()}>
      {#each slides as _, index}
        <button class={cn(carouselIndicator)} {...api.getIndicatorProps({ index })}></button>
      {/each}
    </div>
    <button class={cn(carouselNextTrigger)} {...api.getNextTriggerProps()}>
      <ChevronRight class="size-4" />
    </button>
  </div>
</div>
