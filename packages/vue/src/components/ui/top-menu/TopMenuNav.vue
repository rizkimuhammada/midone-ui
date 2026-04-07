<script setup lang="ts">
import { inject } from "vue";
import type { TopMenuContext } from "./types";

const { mobileMenuOpen } = inject<TopMenuContext>("topMenu")!;
</script>

<template>
  <div v-bind="$attrs" :data-mobile-menu-open="mobileMenuOpen">
    <slot />
  </div>
</template>
