<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import Chart from "chart.js/auto";
  import { onMount, onDestroy } from "svelte";

  let {
    class: className,
    type = "bar",
    data,
    options = {},
    ...props
  }: { class?: string; type?: string; data: any; options?: any } & Record<string, any> = $props();

  let canvasEl: HTMLCanvasElement;
  let chart: Chart | null = null;

  onMount(() => {
    chart = new Chart(canvasEl, {
      type: type as any,
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        ...options,
      },
    });
  });

  onDestroy(() => {
    chart?.destroy();
  });
</script>

<div class={cn("relative", className)} {...props}>
  <canvas bind:this={canvasEl}></canvas>
</div>
