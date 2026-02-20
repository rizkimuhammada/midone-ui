<script lang="ts">
  import * as tabs from "@zag-js/tabs";
  import { cn } from "@midoneui/core/utils/cn";
  import { tabsRoot } from "@midoneui/core/styles/tabs.styles";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    children,
    ...props
  }: { class?: string; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(tabs.machine, () => ({ ...props, id: crypto.randomUUID() }));
  const api = $derived(tabs.connect(service, normalizeProps));

  setContext("tabsApi", () => api);
</script>

<div class={cn(tabsRoot, className)} {...api.getRootProps()}>
  {@render children?.()}
</div>
