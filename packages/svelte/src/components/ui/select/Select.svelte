<script lang="ts">
  import * as select from "@zag-js/select";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { selectRoot, selectTrigger, selectContent, selectPositioner, selectItem } from "@midoneui/core/styles/select.styles";
  import { Box } from "@/components/ui/box";
  import { ChevronDown } from "lucide-svelte";
  import type { Snippet } from "svelte";

  type Item = { label: string; value: string };

  let {
    class: className,
    items = [],
    placeholder = "Select...",
    children,
    ...props
  }: { class?: string; items: Item[]; placeholder?: string; children?: Snippet } & Record<string, any> = $props();

  const collection = $derived(select.collection({ items, itemToString: (item: Item) => item.label, itemToValue: (item: Item) => item.value }));

  const service = useMachine(select.machine, () => ({ ...props, collection, id: crypto.randomUUID() }));
  const api = $derived(select.connect(service, normalizeProps));
</script>

<div class={cn(selectRoot, className)} {...api.getRootProps()}>
  <button class={cn(selectTrigger)} {...api.getTriggerProps()}>
    {api.valueAsString || placeholder}
    <ChevronDown class="size-4 ml-auto" />
  </button>
  <div class={cn(selectPositioner)} {...api.getPositionerProps()}>
    <div {...api.getContentProps()}>
      <Box raised="double" class={cn(selectContent)}>
        {#each items as item}
          <div class={cn(selectItem)} {...api.getItemProps({ item })}>
            {item.label}
          </div>
        {/each}
      </Box>
    </div>
  </div>
</div>
