<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tableRow } from "@midoneui/core/styles/table.styles";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<tr class={cn(tableRow, className)} {...props}>
  {@render children?.()}
</tr>
