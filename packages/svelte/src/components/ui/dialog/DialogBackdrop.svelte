<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { dialogBackdrop } from "@midoneui/core/styles/dialog.styles";
  import { getContext } from "svelte";

  let { class: className, ...props }: { class?: string } & Record<string, any> = $props();
  const getApi = getContext<() => any>("dialogApi");
  const api = $derived(getApi());
</script>

<div class={cn(dialogBackdrop, className)} {...api?.getBackdropProps()} {...props}></div>
