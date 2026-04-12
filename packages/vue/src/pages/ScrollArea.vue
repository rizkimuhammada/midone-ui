<script setup lang="ts">
import { ScrollAreaRoot } from "@/components/ui/scroll-area";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ScrollAreaRoot class="h-72 w-70">
          <div class="text-base font-medium mb-4">Scroll Area Example</div>
          <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
            This is line number {{ i }} of the scrollable content. It helps
            demonstrate how the custom scrollbar works within the Midone UI
            system.
          </div>
        </ScrollAreaRoot>
      </div>
    </div>
  </div>
</template>

