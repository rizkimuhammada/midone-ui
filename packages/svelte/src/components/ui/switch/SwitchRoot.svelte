<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { switchRoot, switchControl, switchThumb, switchLabel } from "@midoneui/core/styles/switch.styles";
  import { label } from "@midoneui/core/styles/label.styles";
  import * as switchMachine from "@zag-js/switch";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    checked = undefined,
    children,
    ...props
  }: { class?: string; checked?: boolean; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(switchMachine.machine, () => ({ ...props, checked, id: crypto.randomUUID() }));
  const api = $derived(switchMachine.connect(service, normalizeProps));
</script>

<label class={cn(switchRoot, className)} {...api.getRootProps()}>
  <input {...api.getHiddenInputProps()} />
  <div class={cn(switchControl)} {...api.getControlProps()}>
    <div class={cn(switchThumb)} {...api.getThumbProps()}></div>
  </div>
  {#if children}
    <span class={cn(label, switchLabel)} {...api.getLabelProps()}>
      {@render children()}
    </span>
  {/if}
</label>
