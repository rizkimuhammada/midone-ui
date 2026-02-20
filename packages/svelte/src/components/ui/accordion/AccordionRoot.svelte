<script lang="ts">
  import { accordionRootVariants } from "@midoneui/core/styles/accordion.styles";
  import { cn } from "@midoneui/core/utils/cn";
  import * as accordion from "@zag-js/accordion";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    variant = "default",
    collapsible = true,
    asChild = false,
    children,
    ...props
  }: {
    class?: string;
    variant?: "default" | "boxed";
    collapsible?: boolean;
    asChild?: boolean;
    children?: Snippet<[Record<string, any>]>;
  } & Record<string, any> = $props();

  const service = useMachine(accordion.machine, () => ({
    collapsible,
    ...props,
    id: crypto.randomUUID(),
  }));

  const api = $derived(accordion.connect(service, normalizeProps));

  setContext("accordionVariant", () => variant);
  setContext("accordionApi", () => api);
</script>

{#if asChild}
  {@render children?.({
    class: cn(accordionRootVariants({ variant, className }), className),
    ...api.getRootProps(),
  })}
{:else}
  <div class={cn(accordionRootVariants({ variant, className }), className)} {...api.getRootProps()}>
    {@render children?.({})}
  </div>
{/if}
