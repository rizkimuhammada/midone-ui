<script lang="ts">
  import * as pagination from "@zag-js/pagination";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { paginationRoot, paginationItem, paginationEllipsis, paginationPrevTrigger, paginationNextTrigger } from "@midoneui/core/styles/pagination.styles";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  let {
    class: className,
    count = 100,
    pageSize = 10,
    ...props
  }: { class?: string; count?: number; pageSize?: number } & Record<string, any> = $props();

  const service = useMachine(pagination.machine, () => ({ ...props, count, pageSize, id: crypto.randomUUID() }));
  const api = $derived(pagination.connect(service, normalizeProps));
</script>

<nav class={cn(paginationRoot, className)} {...api.getRootProps()}>
  <button class={cn(paginationPrevTrigger)} {...api.getPrevTriggerProps()}>
    <ChevronLeft class="size-4" />
  </button>
  {#each api.pages as page}
    {#if page.type === "page"}
      <button class={cn(paginationItem)} {...api.getItemProps(page)}>
        {page.value}
      </button>
    {:else}
      <span class={cn(paginationEllipsis)} {...api.getEllipsisProps({ index: page.value })}>…</span>
    {/if}
  {/each}
  <button class={cn(paginationNextTrigger)} {...api.getNextTriggerProps()}>
    <ChevronRight class="size-4" />
  </button>
</nav>
