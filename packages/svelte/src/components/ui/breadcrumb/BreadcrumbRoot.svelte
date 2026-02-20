<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { breadcrumbList } from "@midoneui/core/styles/breadcrumb.styles";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<nav class={cn(breadcrumbList, className)} aria-label="Breadcrumb" {...props}>
  <ol class="flex items-center gap-1.5">
    {@render children?.()}
  </ol>
</nav>
