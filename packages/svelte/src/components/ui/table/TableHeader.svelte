<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { tableHeader } from "@midoneui/core/styles/table.styles";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<thead class={cn(tableHeader, className)} {...props}>
  {@render children?.()}
</thead>
