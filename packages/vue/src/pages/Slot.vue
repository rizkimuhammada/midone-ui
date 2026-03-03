<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronLeft, ChevronRight, Info } from "lucide-vue-next";
</script>

<template>
    <div class="flex flex-col gap-20">
    <div class="grid sm:grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <Box as-child>
            <Button variant="ghost" class="box me-2 px-2">
              <ChevronLeft class="size-5" />
            </Button>
          </Box>
          <Box as-child>
            <Button variant="ghost" class="box px-2">
              <ChevronRight class="size-5" />
            </Button>
          </Box>
      </div>
    </div>
  </div>
</template>