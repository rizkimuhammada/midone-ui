<script lang="ts">
  import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
</script>

<div class="flex flex-col gap-8 max-w-2xl">
  <div>
    <h3 class="text-lg font-semibold mb-3">Default Accordion</h3>
    <AccordionRoot>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that matches the other components aesthetic.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </div>
  <div>
    <h3 class="text-lg font-semibold mb-3">Boxed Accordion</h3>
    <AccordionRoot variant="boxed">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is MidoneUI?</AccordionTrigger>
        <AccordionContent>MidoneUI is a multi-framework UI component library for Vue, React, and Svelte.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>Run npm install in the packages/svelte directory.</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </div>
</div>
