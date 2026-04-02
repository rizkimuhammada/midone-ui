<script lang="ts" setup>
import { DatePickerRoot } from "@/components/ui/datepicker";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <DatePickerRoot label="Basic" class="w-84" />
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <DatePickerRoot
          label="Range Selection"
          selection-mode="range"
          class="w-140"
          with-presets="thisWeek|lastWeek|thisMonth"
        />
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <DatePickerRoot label="Multiple Months" :num-of-months="2" class="w-84" />
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <DatePickerRoot with-trigger label="With Trigger" class="w-84" />
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <DatePickerRoot open label="Inline" class="w-84" />
      </div>
    </div>
  </div>
</template>
