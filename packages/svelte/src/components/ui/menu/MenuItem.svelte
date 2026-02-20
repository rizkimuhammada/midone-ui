<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { menuItem } from "@midoneui/core/styles/menu.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    value,
    children,
    ...props
  }: { class?: string; value: string; children?: Snippet } & Record<string, any> = $props();

  const getApi = getContext<() => any>("menuApi");
  const api = $derived(getApi());
</script>

<div class={cn(menuItem, className)} {...api?.getItemProps({ value })} {...props}>
  {@render children?.()}
</div>
