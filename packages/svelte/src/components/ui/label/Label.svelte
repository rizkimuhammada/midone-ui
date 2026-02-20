<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { label } from "@midoneui/core/styles/label.styles";
  import type { Snippet } from "svelte";
  import type { HTMLLabelAttributes } from "svelte/elements";

  let {
    class: className,
    children,
    ...props
  }: {
    class?: string;
    children?: Snippet;
  } & HTMLLabelAttributes = $props();
</script>

<label class={cn(label, className)} {...props}>
  {@render children?.()}
</label>
