<script lang="ts" setup>
import { RadioGroupRoot, RadioGroupItem } from "@/components/ui/radio-group";
</script>

<template>
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
</template>
