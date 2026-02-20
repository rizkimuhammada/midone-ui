<script lang="ts">
  import * as slider from "@zag-js/slider";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { sliderRoot, sliderTrack, sliderRange, sliderThumb } from "@midoneui/core/styles/slider.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    min = 0,
    max = 100,
    value = [50],
    children,
    ...props
  }: { class?: string; min?: number; max?: number; value?: number[]; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(slider.machine, () => ({ ...props, min, max, value, id: crypto.randomUUID() }));
  const api = $derived(slider.connect(service, normalizeProps));
</script>

<div class={cn(sliderRoot, className)} {...api.getRootProps()}>
  <div class={cn(sliderTrack)} {...api.getControlProps()}>
    <div class={cn(sliderTrack)} {...api.getTrackProps()}>
      <div class={cn(sliderRange)} {...api.getRangeProps()}></div>
    </div>
    {#each api.value as _, index}
      <div class={cn(sliderThumb)} {...api.getThumbProps({ index })}></div>
    {/each}
  </div>
  <input {...api.getHiddenInputProps()} />
</div>
