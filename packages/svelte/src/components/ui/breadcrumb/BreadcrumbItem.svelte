<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { breadcrumbItem } from "@midoneui/core/styles/breadcrumb.styles";
  import type { Snippet } from "svelte";

  let { class: className, children, active = false, ...props }: { class?: string; active?: boolean; children?: Snippet } & Record<string, any> = $props();
</script>

<li class={cn(breadcrumbItem, active ? "font-semibold" : "", className)} aria-current={active ? "page" : undefined} {...props}>
  {@render children?.()}
</li>
