<script lang="ts">
  import { type Snippet } from "svelte";
  import { cn } from "@midoneui/core/utils/cn";

  let {
    class: className,
    children,
    ...props
  }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<div class={cn(className)} {...props}>
  {@render children?.()}
</div>
