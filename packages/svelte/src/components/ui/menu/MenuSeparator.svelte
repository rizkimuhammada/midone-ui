<script lang="ts">
  import { cn } from "@midoneui/core/utils/cn";
  import { menuSeparator } from "@midoneui/core/styles/menu.styles";

  let { class: className, ...props }: { class?: string } & Record<string, any> = $props();
</script>

<div class={cn(menuSeparator, className)} {...props}></div>
