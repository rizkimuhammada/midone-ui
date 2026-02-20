<script lang="ts">
  import { X } from "lucide-svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { sheetCloseTrigger } from "@midoneui/core/styles/sheet.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("sheetApi");
  const api = $derived(getApi());
</script>

<button class={cn(sheetCloseTrigger, className)} {...api?.getCloseTriggerProps()} {...props}>
  {#if children}
    {@render children()}
  {:else}
    <X class="size-4" />
  {/if}
</button>
