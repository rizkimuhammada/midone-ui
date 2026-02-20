<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { nativeSelect } from "@midoneui/core/styles/native-select.styles";
  import { Label } from "@/components/ui/label";
  import type { Snippet } from "svelte";

  let {
    class: className,
    label: labelText,
    children,
    ...props
  }: { class?: string; label?: string; children?: Snippet } & Record<string, any> = $props();
</script>

<div class="flex flex-col gap-2.5 {className ?? ''}" {...props}>
  {#if labelText}
    <Label>{labelText}</Label>
  {/if}
  <select class={cn(nativeSelect)}>
    {@render children?.()}
  </select>
</div>
