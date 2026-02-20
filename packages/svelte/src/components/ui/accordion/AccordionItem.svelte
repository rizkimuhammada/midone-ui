<script lang="ts">
  import { accordionItemVariants } from "@midoneui/core/styles/accordion.styles";
  import { boxVariants, type BoxVariants } from "@midoneui/core/styles/box.styles";
  import { cn } from "@midoneui/core/utils/cn";
  import { getContext, setContext } from "svelte";
  import type { Snippet } from "svelte";
  import type { ItemProps } from "@zag-js/accordion";

  let {
    raised,
    class: className,
    value,
    asChild = false,
    children,
    ...props
  }: BoxVariants & ItemProps & { class?: string; children?: Snippet<[Record<string, any>]>; asChild?: boolean } & Record<string, any> = $props();

  const getVariant = getContext<() => string>("accordionVariant");
  const getApi = getContext<() => any>("accordionApi");
  const variant = $derived(getVariant());
  const api = $derived(getApi());

  setContext("accordionItem", () => ({ value }));
</script>

{#if asChild}
  {@render children?.({
    class: cn(
    variant === "boxed" ? boxVariants({ raised, className }) : "",
    accordionItemVariants({ variant: variant as any, className }),
    className
  ),
  ...api?.getItemProps({ value })
})}
{:else}
  <div
    class={cn(
      variant === "boxed" ? boxVariants({ raised, className }) : "",
      accordionItemVariants({ variant: variant as any, className }),
      className
    )}
    {...api?.getItemProps({ value })}
  >
    {@render children?.({})}
  </div>
{/if}
