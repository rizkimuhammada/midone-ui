<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { alertRootVariants, type AlertRootVariants } from "@midoneui/core/styles/alert.styles";
  import { Presence } from "@/components/ui/presence";
  import { setContext } from "svelte";
  import type { Snippet } from "svelte";

  let {
    class: className,
    look,
    variant,
    children,
    ...rest
  }: AlertRootVariants & { class?: string; children?: Snippet } & Record<string, any> = $props();

  let present = $state(true);
  const setPresent = (value: boolean) => { present = value; };

  setContext("alertPresent", { getPresent: () => present, setPresent });
</script>

<Presence
  class={cn(alertRootVariants({ look, variant }), className)}
  {present}
  {...rest}
>
  {@render children?.()}
</Presence>
