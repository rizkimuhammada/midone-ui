<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tableHead } from "@midoneui/core/styles/table.styles";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<th class={cn(tableHead, className)} {...props}>
  {@render children?.()}
</th>
