<script lang="ts" setup>
import { FileIcon } from "@/components/ui/file-icon";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <FileIcon variant="empty-directory" class="w-16" />
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <FileIcon variant="directory" class="w-16" />
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <FileIcon variant="file" type="PDF" class="w-16" />
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <FileIcon variant="file" type="TXT" class="w-16" />
      </div>
    </div>
  </div>
</template>
