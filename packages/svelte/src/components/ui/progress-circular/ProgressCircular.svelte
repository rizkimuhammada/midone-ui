<script lang="ts">
  import * as progress from "@zag-js/progress";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";

  let {
    class: className,
    value = 50,
    ...props
  }: { class?: string; value?: number } & Record<string, any> = $props();

  const service = useMachine(progress.machine, () => ({ ...props, value, id: crypto.randomUUID() }));
  const api = $derived(progress.connect(service, normalizeProps));
</script>

<div class={cn("flex flex-col items-center gap-1", className)} {...api.getRootProps()}>
  <div {...api.getCircleProps()}>
    <svg {...api.getCircleProps()}>
      <circle {...api.getCircleTrackProps()} />
      <circle {...api.getCircleRangeProps()} />
    </svg>
  </div>
  <span class="text-xs font-medium">{api.valueAsString}</span>
</div>
