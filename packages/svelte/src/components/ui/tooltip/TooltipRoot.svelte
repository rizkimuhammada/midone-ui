<script lang="ts">
  import * as tooltip from "@zag-js/tooltip";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    disabled,
    children,
    ...props
  }: {
    disabled?: boolean;
    children?: Snippet;
  } & Record<string, any> = $props();

  const service = useMachine(tooltip.machine, () => ({
    ...props,
    disabled,
    id: crypto.randomUUID(),
  }));

  const api = $derived(tooltip.connect(service, normalizeProps));

  setContext("tooltipApi", () => api);
</script>

{@render children?.()}
