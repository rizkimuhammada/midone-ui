<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tooltipContent } from "@midoneui/core/styles/tooltip.styles";
  import { TooltipArrow, TooltipArrowTip } from ".";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    children,
    ...props
  }: {
    class?: string;
    children?: Snippet;
  } & Record<string, any> = $props();

  const getApi = getContext<() => any>("tooltipApi");
  const api = $derived(getApi());
</script>

<div class={cn(tooltipContent, className)} {...api?.getContentProps()} {...props}>
  {@render children?.()}
  <TooltipArrow>
    <TooltipArrowTip />
  </TooltipArrow>
</div>
