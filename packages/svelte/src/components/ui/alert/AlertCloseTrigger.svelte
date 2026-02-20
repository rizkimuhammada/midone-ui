<script lang="ts">
  import { X } from "lucide-svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { alertCloseTrigger } from "@midoneui/core/styles/alert.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    children,
    ...props
  }: { class?: string; children?: Snippet } & Record<string, any> = $props();

  const context = getContext<{ getPresent: () => boolean; setPresent: (v: boolean) => void } | null>("alertPresent");
</script>

<div
  class={cn(alertCloseTrigger, className)}
  {...props}
  role="button"
  tabindex="0"
  onclick={() => context?.setPresent(false)}
  onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') context?.setPresent(false); }}
>
  {#if children}
    {@render children()}
  {:else}
    <X />
  {/if}
</div>
