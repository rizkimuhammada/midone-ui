<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tooltipArrowTip } from "@midoneui/core/styles/tooltip.styles";
  import { getContext } from "svelte";

  let {
    class: className,
    ...props
  }: {
    class?: string;
  } & Record<string, any> = $props();

  const getApi = getContext<() => any>("tooltipApi");
  const api = $derived(getApi());
</script>

<div class={cn(tooltipArrowTip, className)} {...api?.getArrowTipProps()} {...props}></div>
