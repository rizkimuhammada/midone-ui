<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { popoverTrigger } from "@midoneui/core/styles/popover.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("popoverApi");
  const api = $derived(getApi());
</script>

<button class={cn(popoverTrigger, className)} {...api?.getTriggerProps()} {...props}>
  {@render children?.()}
</button>
