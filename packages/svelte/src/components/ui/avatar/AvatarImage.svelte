<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { avatarImage } from "@midoneui/core/styles/avatar.styles";
  import { getContext } from "svelte";

  let { class: className, ...props }: { class?: string } & Record<string, any> = $props();
  const getApi = getContext<() => any>("avatarApi");
  const api = $derived(getApi());
</script>

<img class={cn(avatarImage, className)} {...api?.getImageProps()} {...props} alt="" />
