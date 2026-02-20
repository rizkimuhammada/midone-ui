<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { alertDescription } from "@midoneui/core/styles/alert.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    children,
    ...props
  }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<div class={cn(alertDescription, className)} {...props}>
  {@render children?.()}
</div>
