<script lang="ts">
  import * as avatar from "@zag-js/avatar";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { setContext } from "svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { avatarRootVariants, type AvatarRootVariants } from "@midoneui/core/styles/avatar.styles";
  import type { Snippet } from "svelte";

  let {
    class: className,
    bordered,
    children,
    ...props
  }: AvatarRootVariants & { class?: string; children?: Snippet } & Record<string, any> = $props();

  const service = useMachine(avatar.machine, () => ({ ...props, id: crypto.randomUUID() }));
  const api = $derived(avatar.connect(service, normalizeProps));

  setContext("avatarApi", () => api);
</script>

<div class={cn(avatarRootVariants({ bordered, className }), className)} {...api.getRootProps()}>
  {@render children?.()}
</div>
