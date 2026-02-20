<script lang="ts">
  import { ChevronRight } from "lucide-svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<li class="text-foreground/40 {className ?? ''}" aria-hidden="true" {...props}>
  {#if children}
    {@render children()}
  {:else}
    <ChevronRight class="size-4" />
  {/if}
</li>
