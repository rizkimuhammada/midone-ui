<script lang="ts">
  import { X } from "lucide-svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { dialogCloseTrigger } from "@midoneui/core/styles/dialog.styles";
  import { Button } from "@/components/ui/button";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("dialogApi");
  const api = $derived(getApi());
</script>

{#if children}
  <Button variant="secondary" look="outline" class={className} {...api?.getCloseTriggerProps()} {...props}>
    {@render children()}
  </Button>
{:else}
  <Button variant="ghost" class={cn(dialogCloseTrigger, className)} {...api?.getCloseTriggerProps()} {...props}>
    <X class="size-4" />
  </Button>
{/if}
