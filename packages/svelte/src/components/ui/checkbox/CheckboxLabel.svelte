<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { checkboxLabel } from "@midoneui/core/styles/checkbox.styles";
  import { label } from "@midoneui/core/styles/label.styles";
  import { getContext } from "svelte";
  import type { Snippet } from "svelte";

  let { class: className, children, ...props }: { class?: string; children?: Snippet } & Record<string, any> = $props();
  const getApi = getContext<() => any>("checkboxApi");
  const api = $derived(getApi());
</script>

<span class={cn(label, checkboxLabel, className)} {...api?.getLabelProps()} {...props}>
  {@render children?.()}
</span>
