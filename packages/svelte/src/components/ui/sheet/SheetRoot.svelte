<script lang="ts">
  import * as dialog from "@zag-js/dialog";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    side = "right",
    children,
    ...props
  }: { class?: string; side?: "left" | "right" | "top" | "bottom"; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(dialog.machine, () => ({ ...props, id: crypto.randomUUID() }));
  const api = $derived(dialog.connect(service, normalizeProps));

  setContext("sheetApi", () => api);
  setContext("sheetSide", () => side);
</script>

{@render children?.()}
