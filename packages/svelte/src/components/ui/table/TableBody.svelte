<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tableBody } from "@midoneui/core/styles/table.styles";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<tbody class={cn(tableBody, className)} {...props}>
  {@render children?.()}
</tbody>
