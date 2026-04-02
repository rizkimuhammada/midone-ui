<script lang="ts" setup>
import {
  AvatarRoot,
} from "@/components/ui/avatar";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-2">
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <AvatarRoot fallback-text="PA" src="https://i.pravatar.cc/300" />
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <AvatarRoot :bordered="false" fallback-text="PA" src="https://i.pravatar.cc/300" />
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <AvatarRoot class="rounded-full" fallback-text="PA" src="https://i.pravatar.cc/300" />
      </div>
      <div class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
        <AvatarRoot class="rounded-full" :bordered="false" fallback-text="PA" src="https://i.pravatar.cc/300" />
      </div>
    </div>
  </div>
</template>
