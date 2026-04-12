<script lang="ts" setup>
import { TooltipRoot, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <TooltipRoot>
          <TooltipTrigger>Hover Me</TooltipTrigger>
          <TooltipContent>I am a tooltip!</TooltipContent>
        </TooltipRoot>
      </div>
    </div>
  </div>
</template>

