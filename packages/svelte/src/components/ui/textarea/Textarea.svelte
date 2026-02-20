<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { textarea } from "@midoneui/core/styles/textarea.styles";
  import type { HTMLTextareaAttributes } from "svelte/elements";

  let {
    class: className,
    ...props
  }: {
    class?: string;
  } & HTMLTextareaAttributes = $props();
</script>

<textarea class={cn(textarea, className)} {...props}></textarea>
