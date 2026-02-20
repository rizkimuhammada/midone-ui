<script lang="ts">
  import * as dialog from "@zag-js/dialog";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    open = undefined,
    closeOnInteractOutside = undefined,
    children,
    ...props
  }: { open?: boolean; closeOnInteractOutside?: boolean; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(dialog.machine, () => ({ ...props, open, closeOnInteractOutside, id: crypto.randomUUID() }));
  const api = $derived(dialog.connect(service, normalizeProps));

  setContext("dialogApi", () => api);
</script>

{@render children?.()}
