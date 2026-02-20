<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { sheetBackdrop, sheetContent, sheetPositioner } from "@midoneui/core/styles/sheet.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("sheetApi");
  const getSide = getContext<() => string>("sheetSide");
  const api = $derived(getApi());
  const side = $derived(getSide());
</script>

<div class={cn(sheetBackdrop)} {...api?.getBackdropProps()}></div>
<div class={cn(sheetPositioner)} {...api?.getPositionerProps()}>
  <div {...api?.getContentProps()} class={cn(sheetContent, className)} data-side={side} {...props}>
    {@render children?.()}
  </div>
</div>
