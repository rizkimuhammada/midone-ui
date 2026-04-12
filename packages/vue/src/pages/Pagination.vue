<script lang="ts" setup>
import { PaginationRoot } from "@/components/ui/pagination";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <PaginationRoot :count="5000" :pageSize="10" :siblingCount="2" />
      </div>
    </div>
  </div>
</template>
