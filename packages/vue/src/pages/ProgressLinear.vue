<script lang="ts" setup>
import { ProgressLinearRoot } from "@/components/ui/progress-linear";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ProgressLinearRoot
          :defaultValue="42"
          label="Progress Linear"
          trackClass="max-w-72"
          showValueText
        />
      </div>
    </div>
  </div>
</template>
