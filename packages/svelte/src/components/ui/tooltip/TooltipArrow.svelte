<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tooltipArrow } from "@midoneui/core/styles/tooltip.styles";
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

<div class={cn(tooltipArrow, className)} {...api?.getArrowProps()} {...props}>
  {@render children?.()}
</div>
