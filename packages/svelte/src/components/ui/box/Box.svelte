<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import {
    boxVariants,
    type BoxVariants,
  } from "@midoneui/core/styles/box.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    raised,
    children,
    ...props
  }: BoxVariants & {
    class?: string;
    children?: Snippet;
  } & Record<string, any> = $props();
</script>

<div class={cn(boxVariants({ raised, className }), className)} {...props}>
  {@render children?.()}
</div>
