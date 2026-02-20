<script lang="ts">
  import { ChevronDown } from "lucide-svelte";
  import { accordionTrigger, accordionItemIndicator } from "@midoneui/core/styles/accordion.styles";
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
    class: cn(accordionTrigger, className),
    ...api?.getItemTriggerProps(item),
    ...props
  })}
{:else}
  <button class={cn(accordionTrigger, className)} {...api?.getItemTriggerProps(item)} {...props}>
    {@render children?.({})}
    <div {...api?.getItemIndicatorProps(item)} class={cn(accordionItemIndicator)}>
      <ChevronDown />
    </div>
  </button>
{/if}
