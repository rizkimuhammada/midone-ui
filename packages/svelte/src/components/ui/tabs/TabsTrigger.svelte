<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tabsTrigger } from "@midoneui/core/styles/tabs.styles";
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

<button class={cn(tabsTrigger, className)} {...api?.getTriggerProps({ value })} {...props}>
  {@render children?.()}
</button>
