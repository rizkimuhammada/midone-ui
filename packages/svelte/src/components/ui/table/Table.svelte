<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tableContainer, tableVariants, type TableVariants } from "@midoneui/core/styles/table.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    variant,
    raised,
    children,
    ...props
  }: TableVariants & { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<div class={cn(tableContainer)}>
  <table class={cn(tableVariants({ variant, raised }), className)} {...props}>
    {@render children?.()}
  </table>
</div>
