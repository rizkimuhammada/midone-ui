<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import {
    buttonVariants,
    type ButtonVariants,
  } from "@midoneui/core/styles/button.styles";
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  let {
    class: className,
    look,
    variant,
    size,
    children,
    ...props
  }: ButtonVariants & {
    class?: string;
    children?: Snippet;
  } & HTMLButtonAttributes = $props();
</script>

<button class={cn(buttonVariants({ look, variant, size, className }), className)} {...props}>
  {@render children?.()}
</button>
