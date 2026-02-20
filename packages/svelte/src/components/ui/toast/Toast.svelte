<script lang="ts">
  import * as toast from "@zag-js/toast";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { toastRoot } from "@midoneui/core/styles/toast.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    children,
    ...props
  }: { class?: string; children?: Snippet } & Record<string, any> = $props();

  // Toast uses a group pattern - simplified version
</script>

<div class={cn(toastRoot, className)} {...props}>
  {@render children?.()}
</div>
