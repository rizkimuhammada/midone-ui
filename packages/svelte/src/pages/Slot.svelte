<script lang="ts">
  import { Slot } from "@/components/ui/slot";
  import { mergeProps } from "@/utils/merge-props";
  import { Button } from "@/components/ui/button";
</script>

<div class="flex flex-col gap-10">
  <div class="flex flex-col gap-4">
    <h3 class="text-lg font-medium font-instrument-sans">Slot Composition</h3>
    <div class="p-5 border border-foreground/10 rounded-lg flex flex-col gap-4">
      <div class="text-sm text-muted-foreground">
        The <code>Slot</code> component allows you to pass props to a child snippet, similar to Radix UI's <code>asChild</code> pattern.
        The child snippet uses <code>mergeProps</code> to combine parent props with its own.
      </div>
      
      <div class="flex gap-4 items-center">
        <!-- Example 1: Basic Element -->
         <Slot class="bg-primary text-primary-foreground px-4 py-2 rounded-md shadow hover:bg-primary/90 transition-colors">
            {#snippet children(slotProps)}
                <button {...mergeProps(slotProps, { onclick: () => alert('Button clicked!') })}>
                    Composed Button
                </button>
            {/snippet}
         </Slot>

         <!-- Example 2: Component -->
         <Slot class="shadow-xl" onclick={() => console.log('Wrapper click')}>
            {#snippet children(slotProps)}
                <Button {...mergeProps(slotProps, { variant: "outline" })}>
                    Composed Component
                </Button>
            {/snippet}
         </Slot>
      </div>
    </div>
  </div>
</div>
