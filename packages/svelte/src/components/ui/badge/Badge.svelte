<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { TooltipRoot, TooltipTrigger, TooltipPositioner, TooltipContent } from "@/components/ui/tooltip";
  import { badgeVariants, type BadgeVariants } from "@midoneui/core/styles/badge.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    look,
    variant,
    content,
    children,
    ...props
  }: BadgeVariants & {
    class?: string;
    content?: string;
    children?: Snippet;
  } & Record<string, any> = $props();
</script>

<TooltipRoot disabled={!content}>
  <TooltipTrigger>
    <span class={cn(badgeVariants({ look, variant, className }))} {...props}>
      {@render children?.()}
    </span>
  </TooltipTrigger>
  <TooltipPositioner>
    <TooltipContent>{content}</TooltipContent>
  </TooltipPositioner>
</TooltipRoot>
