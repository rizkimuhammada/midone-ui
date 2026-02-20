<script lang="ts">
  import * as radioGroup from "@zag-js/radio-group";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { radioGroupRoot, radioGroupItem, radioGroupItemControl, radioGroupLabel } from "@midoneui/core/styles/radio-group.styles";
  import type { Snippet } from "svelte";

  type RadioItem = { label: string; value: string };

  let {
    class: className,
    items = [],
    value = undefined,
    children,
    ...props
  }: { class?: string; items?: RadioItem[]; value?: string; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(radioGroup.machine, () => ({ ...props, value, id: crypto.randomUUID() }));
  const api = $derived(radioGroup.connect(service, normalizeProps));
</script>

<div class={cn(radioGroupRoot, className)} {...api.getRootProps()}>
  {#each items as item}
    <label class={cn(radioGroupItem)} {...api.getItemProps({ value: item.value })}>
      <div class={cn(radioGroupItemControl)} {...api.getItemControlProps({ value: item.value })}></div>
      <span class={cn(radioGroupLabel)} {...api.getItemTextProps({ value: item.value })}>{item.label}</span>
      <input {...api.getItemHiddenInputProps({ value: item.value })} />
    </label>
  {/each}
</div>
