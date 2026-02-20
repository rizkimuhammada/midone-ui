<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tableCellVariants, type TableCellVariants } from "@midoneui/core/styles/table.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    variant,
    raised,
    children,
    ...props
  }: TableCellVariants & { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<td class={cn(tableCellVariants({ variant, raised }), className)} {...props}>
  {@render children?.()}
</td>
