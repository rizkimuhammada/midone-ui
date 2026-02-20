<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { setupSvgRenderer, type Paths } from "@/utils/frame";
  import { onMount, onDestroy } from "svelte";

  let {
    class: className,
    paths = [],
    enableBackdropBlur = false,
    enableViewBox = false,
    ...props
  }: {
    class?: string;
    paths: Paths;
    enableBackdropBlur?: boolean;
    enableViewBox?: boolean;
  } & Record<string, any> = $props();

  let svgEl: SVGSVGElement;
  let cleanup: (() => void) | null = null;

  onMount(() => {
    const result = setupSvgRenderer({
      el: svgEl,
      paths,
      enableBackdropBlur,
      enableViewBox,
    });
    cleanup = result.destroy;
  });

  onDestroy(() => {
    cleanup?.();
  });
</script>

<svg bind:this={svgEl} class={cn("absolute inset-0 w-full h-full pointer-events-none", className)} {...props}></svg>
