<script lang="ts" setup>
import { RadioGroupRoot, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <RadioGroupRoot defaultValue="React" label="Framework">
          <RadioGroupItem value="React">
            React
          </RadioGroupItem>
          <RadioGroupItem value="Solid">
            Solid
          </RadioGroupItem>
          <RadioGroupItem value="Vue">
            Vue
          </RadioGroupItem>
          <RadioGroupItem value="Svelte">
            Svelte
          </RadioGroupItem>
        </RadioGroupRoot>
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <RadioGroupRoot defaultValue="required">
          <RadioGroupItem value="required">
            <div class="font-medium">Required</div>
            <div class="mt-1 text-xs leading-relaxed opacity-70">You require the buyer to activate shipping insurance</div>
          </RadioGroupItem>
          <RadioGroupItem value="optional">
            <div class="font-medium">Optional</div>
            <div class="mt-1 text-xs leading-relaxed opacity-70">You give the buyer the option to activate shipping
              insurance</div>
          </RadioGroupItem>
        </RadioGroupRoot>
      </div>
    </div>
  </div>
</template>
