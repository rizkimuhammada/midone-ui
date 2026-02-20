<script lang="ts">
  import type { Snippet } from "svelte";

  let { children, ...props }: { children: Snippet<[Record<string, any>]> } & Record<
    string,
    any
  > = $props();
</script>

{@render children(props)}
