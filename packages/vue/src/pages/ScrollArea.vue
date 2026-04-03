<script setup lang="ts">
import { ScrollAreaRoot } from "@/components/ui/scroll-area";
</script>

<template>
  <ScrollAreaRoot class="h-72 w-70">
    <div class="text-base font-medium mb-4">Scroll Area Example</div>
    <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
      This is line number {{ i }} of the scrollable content. It helps
      demonstrate how the custom scrollbar works within the Midone UI
      system.
    </div>
  </ScrollAreaRoot>
</template>
