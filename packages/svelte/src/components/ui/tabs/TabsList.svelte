<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tabsList, tabsIndicator } from "@midoneui/core/styles/tabs.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("tabsApi");
  const api = $derived(getApi());
</script>

<div class={cn(tabsList, className)} {...api?.getListProps()} {...props}>
  {@render children?.()}
  <div class={cn(tabsIndicator)} {...api?.getIndicatorProps()}></div>
</div>
