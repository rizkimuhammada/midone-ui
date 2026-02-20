<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    children,
    ...props
  }: {
    class?: string;
    children?: Snippet;
  } & Record<string, any> = $props();

  const getApi = getContext<() => any>("tooltipApi");
  const api = $derived(getApi());
</script>

<button {...api?.getTriggerProps()} {...props}>
  {@render children?.()}
</button>
