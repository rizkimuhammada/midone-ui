<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { menuTrigger } from "@midoneui/core/styles/menu.styles";
  import { Button } from "@/components/ui/button";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("menuApi");
  const api = $derived(getApi());
</script>

<Button variant="secondary" look="outline" class={cn(menuTrigger, className)} {...api?.getTriggerProps()} {...props}>
  {@render children?.()}
</Button>
