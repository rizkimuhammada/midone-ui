<script lang="ts">
  import * as progress from "@zag-js/progress";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { progressTrack, progressRange } from "@midoneui/core/styles/progress-linear.styles";

  let {
    class: className,
    value = 50,
    ...props
  }: { class?: string; value?: number } & Record<string, any> = $props();

  const service = useMachine(progress.machine, () => ({ ...props, value, id: crypto.randomUUID() }));
  const api = $derived(progress.connect(service, normalizeProps));
</script>

<div class={cn("w-full flex flex-col gap-2", className)} {...api.getRootProps()}>
  <div class={cn(progressTrack)} {...api.getTrackProps()}>
    <div class={cn(progressRange)} {...api.getRangeProps()}></div>
  </div>
</div>
