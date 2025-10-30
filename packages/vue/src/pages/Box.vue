<script setup lang="ts">
import { CircleGauge } from "lucide-vue-next";
import { Box } from "@/components/ui/box";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid sm:grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <Box class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="primary" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="secondary" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="success" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="danger" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="pending" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="warning" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <Box raised="single" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="primary" raised="single" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="secondary" raised="single" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="success" raised="single" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="danger" raised="single" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="pending" raised="single" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="warning" raised="single" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <Box raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="primary" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="secondary" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="success" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="danger" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="pending" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box variant="warning" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <Box filled raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box filled variant="primary" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box filled variant="secondary" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box filled variant="success" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box filled variant="danger" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box filled variant="pending" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
        <Box filled variant="warning" raised="double" class="w-70">
          <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
          <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
          <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
        </Box>
      </div>
    </div>
  </div>
</template>
