<script lang="ts">
  import * as presence from "@zag-js/presence";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import type { Snippet } from "svelte";

  let {
    present,
    unmountOnExit = false,
    onExitComplete,
    children,
    ...props
  }: {
    present: boolean;
    unmountOnExit?: boolean;
    onExitComplete?: () => void;
    children?: Snippet;
  } & Record<string, any> = $props();

  const service = useMachine(presence.machine, () => ({
    present,
    onExitComplete,
  }));

  const api = $derived(presence.connect(service, normalizeProps));

  let nodeRef: HTMLElement | null = $state(null);

  $effect(() => {
    if (nodeRef) {
      api.setNode(nodeRef);
    }
  });

  const shouldUnmount = $derived(!api.present && unmountOnExit);
</script>

{#if !shouldUnmount}
  <div
    bind:this={nodeRef}
    hidden={!api.present}
    data-scope="presence"
    data-state={api.skip ? undefined : present ? "open" : "closed"}
    {...props}
  >
    {@render children?.()}
  </div>
{/if}
