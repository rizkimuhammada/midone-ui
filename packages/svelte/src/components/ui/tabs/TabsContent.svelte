<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tabsContent } from "@midoneui/core/styles/tabs.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    value,
    children,
    ...props
  }: { class?: string; value: string; children?: Snippet } & Record<string, any> = $props();

  const getApi = getContext<() => any>("tabsApi");
  const api = $derived(getApi());
</script>

<div class={cn(tabsContent, className)} {...api?.getContentProps({ value })} {...props}>
  {@render children?.()}
</div>
