<script lang="ts">
  import * as menu from "@zag-js/menu";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    children,
    ...props
  }: { class?: string; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(menu.machine, () => ({ ...props, id: crypto.randomUUID() }));
  const api = $derived(menu.connect(service, normalizeProps));

  setContext("menuApi", () => api);
</script>

{@render children?.()}
