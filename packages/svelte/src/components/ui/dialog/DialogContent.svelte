<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { dialogContent } from "@midoneui/core/styles/dialog.styles";
  import { Box } from "@/components/ui/box";
  import { DialogBackdrop } from ".";
  import { DialogPositioner } from ".";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("dialogApi");
  const api = $derived(getApi());
</script>

<DialogBackdrop />
<DialogPositioner>
  <div {...api?.getContentProps()} {...props}>
    <Box raised="double" class={cn(dialogContent, className)}>
      <div>{@render children?.()}</div>
    </Box>
  </div>
</DialogPositioner>
