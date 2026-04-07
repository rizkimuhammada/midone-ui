<script setup lang="ts">
import { inject } from "vue";
import type { TopMenuContext } from "./types";

const { openMobileMenu } = inject<TopMenuContext>("topMenu")!;
</script>

<template>
  <div v-bind="$attrs" @click="openMobileMenu">
    <slot />
  </div>
</template>
