<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { input } from "@midoneui/core/styles/input.styles";
  import type { HTMLInputAttributes } from "svelte/elements";

  let {
    class: className,
    type,
    ...props
  }: {
    class?: string;
    type?: string;
  } & HTMLInputAttributes = $props();
</script>

<input {type} class={cn(input, className)} {...props} />
