<script lang="ts" setup>
import { ProgressCircularRoot } from "@/components/ui/progress-circular";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ProgressCircularRoot
          :defaultValue="42"
          label="Progress Circular"
          circleClass="max-w-48"
          showValueText
        />
      </div>
    </div>
  </div>
</template>
