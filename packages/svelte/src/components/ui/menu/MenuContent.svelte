<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { menuContent, menuPositioner } from "@midoneui/core/styles/menu.styles";
  import { Box } from "@/components/ui/box";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("menuApi");
  const api = $derived(getApi());
</script>

<div class={cn(menuPositioner)} {...api?.getPositionerProps()}>
  <div {...api?.getContentProps()} {...props}>
    <Box raised="double" class={cn(menuContent, className)}>
      {@render children?.()}
    </Box>
  </div>
</div>
