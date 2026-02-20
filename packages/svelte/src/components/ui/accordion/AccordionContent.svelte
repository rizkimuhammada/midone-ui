<script lang="ts">
  import { accordionContent } from "@midoneui/core/styles/accordion.styles";
  import { cn } from "@midoneui/core/utils/cn";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    asChild = false,
    children,
    ...props
  }: { class?: string; children?: Snippet<[Record<string, any>]>; asChild?: boolean } & Record<string, any> = $props();

  const getApi = getContext<() => any>("accordionApi");
  const getItem = getContext<() => any>("accordionItem");
  const api = $derived(getApi());
  const item = $derived(getItem());
</script>

{#if asChild}
  {@render children?.({
    class: cn(accordionContent, className),
    ...api?.getItemContentProps(item),
    ...props
  })}
{:else}
  <div class={cn(accordionContent, className)} {...api?.getItemContentProps(item)} {...props}>
    {@render children?.({})}
  </div>
{/if}
