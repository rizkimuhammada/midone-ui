<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { dialogDescription } from "@midoneui/core/styles/dialog.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("dialogApi");
  const api = $derived(getApi());
</script>

<div class={cn(dialogDescription, className)} {...api?.getDescriptionProps()} {...props}>
  {@render children?.()}
</div>
