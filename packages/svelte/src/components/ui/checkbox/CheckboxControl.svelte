<script lang="ts">
  import { Check } from "lucide-svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { checkboxControl, checkboxIndicator } from "@midoneui/core/styles/checkbox.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("checkboxApi");
  const api = $derived(getApi());
</script>

<div class={cn(checkboxControl, className)} {...api?.getControlProps()} {...props}>
  <div class={cn(checkboxIndicator)} {...api?.getIndicatorProps()}>
    {#if children}
      {@render children()}
    {:else}
      <Check />
    {/if}
  </div>
</div>
