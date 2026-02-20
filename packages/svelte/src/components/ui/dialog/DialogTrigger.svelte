<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { dialogTrigger } from "@midoneui/core/styles/dialog.styles";
  import { Button } from "@/components/ui/button";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("dialogApi");
  const api = $derived(getApi());
</script>

<Button variant="secondary" look="outline" class={cn(dialogTrigger, className)} {...api?.getTriggerProps()} {...props}>
  {@render children?.()}
</Button>
