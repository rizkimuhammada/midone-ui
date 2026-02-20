<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { sheetTrigger } from "@midoneui/core/styles/sheet.styles";
  import { Button } from "@/components/ui/button";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("sheetApi");
  const api = $derived(getApi());
</script>

<Button variant="secondary" look="outline" class={cn(sheetTrigger, className)} {...api?.getTriggerProps()} {...props}>
  {@render children?.()}
</Button>
