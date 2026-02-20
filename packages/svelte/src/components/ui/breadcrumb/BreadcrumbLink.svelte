<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { breadcrumbLink } from "@midoneui/core/styles/breadcrumb.styles";
  import type { Snippet } from "svelte";

  let { class: className, href = "#", children, ...props }: { class?: string; href?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<a class={cn(breadcrumbLink, className)} {href} {...props}>
  {@render children?.()}
</a>
