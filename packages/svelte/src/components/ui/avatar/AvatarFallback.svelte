<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { avatarFallback } from "@midoneui/core/styles/avatar.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("avatarApi");
  const api = $derived(getApi());
</script>

<span class={cn(avatarFallback, className)} {...api?.getFallbackProps()} {...props}>
  {@render children?.()}
</span>
