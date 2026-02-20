<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { popoverContent, popoverPositioner } from "@midoneui/core/styles/popover.styles";
  import { Box } from "@/components/ui/box";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("popoverApi");
  const api = $derived(getApi());
</script>

<div class={cn(popoverPositioner)} {...api?.getPositionerProps()}>
  <div {...api?.getContentProps()} {...props}>
    <Box raised="double" class={cn(popoverContent, className)}>
      {@render children?.()}
    </Box>
  </div>
</div>
