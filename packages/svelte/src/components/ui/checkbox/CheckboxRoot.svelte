<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { checkboxRoot } from "@midoneui/core/styles/checkbox.styles";
  import * as checkbox from "@zag-js/checkbox";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    checked = undefined,
    children,
    ...props
  }: { class?: string; checked?: boolean; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(checkbox.machine, () => ({ ...props, checked, id: crypto.randomUUID() }));
  const api = $derived(checkbox.connect(service, normalizeProps));

  setContext("checkboxApi", () => api);
</script>

<label class={cn(checkboxRoot, className)} {...api.getRootProps()}>
  {@render children?.()}
  <input {...api.getHiddenInputProps()} />
</label>
