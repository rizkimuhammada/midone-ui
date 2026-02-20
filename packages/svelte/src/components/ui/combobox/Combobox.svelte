<script lang="ts">
  import * as combobox from "@zag-js/combobox";
  import { useMachine, normalizeProps } from "@zag-js/svelte";
  import { cn } from "@midoneui/core/utils/cn";
  import { comboboxRoot, comboboxControl, comboboxInput as comboboxInputStyle, comboboxTrigger, comboboxPositioner, comboboxContent, comboboxItem } from "@midoneui/core/styles/combobox.styles";
  import { input } from "@midoneui/core/styles/input.styles";
  import { Box } from "@/components/ui/box";
  import { ChevronsUpDown } from "lucide-svelte";

  type ComboboxItem = { label: string; value: string };

  let {
    class: className,
    items: itemsProp = [],
    placeholder = "Search...",
    ...props
  }: { class?: string; items: ComboboxItem[]; placeholder?: string } & Record<string, any> = $props();

  let matchingItems = $state([...itemsProp]);

  const collection = $derived(combobox.collection({
    items: matchingItems,
    itemToString: (item: ComboboxItem) => item.label,
    itemToValue: (item: ComboboxItem) => item.value,
  }));

  const service = useMachine(combobox.machine, () => ({
    ...props,
    id: crypto.randomUUID(),
    collection,
    onInputValueChange: ({ inputValue }: { inputValue: string }) => {
      const filtered = itemsProp.filter((item) =>
        item.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      matchingItems = filtered.length > 0 ? filtered : [...itemsProp];
    },
  }));

  const api = $derived(combobox.connect(service, normalizeProps));
</script>

<div class={cn(comboboxRoot, className)} {...api.getRootProps()}>
  <div class={cn(comboboxControl)} {...api.getControlProps()}>
    <input class={cn(input, comboboxInputStyle)} {placeholder} {...api.getInputProps()} />
    <button class={cn(comboboxTrigger)} {...api.getTriggerProps()}>
      <ChevronsUpDown class="size-4" />
    </button>
  </div>
  <div class={cn(comboboxPositioner)} {...api.getPositionerProps()}>
    <div {...api.getContentProps()}>
      <Box raised="double" class={cn(comboboxContent)}>
        {#each matchingItems as item}
          <div class={cn(comboboxItem)} {...api.getItemProps({ item })}>
            {item.label}
          </div>
        {/each}
        {#if matchingItems.length === 0}
          <div class="p-2 text-foreground/50">No results found</div>
        {/if}
      </Box>
    </div>
  </div>
</div>
