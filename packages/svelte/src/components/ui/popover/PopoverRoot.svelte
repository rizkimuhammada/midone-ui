<script lang="ts">
  import * as popover from "@zag-js/popover";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let { children, ...props }: { children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(popover.machine, () => ({ ...props, id: crypto.randomUUID() }));
  const api = $derived(popover.connect(service, normalizeProps));

  setContext("popoverApi", () => api);
</script>

{@render children?.()}
