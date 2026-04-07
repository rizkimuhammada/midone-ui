<script setup lang="ts">
import { inject } from "vue";
import type { TopMenuContext } from "./types";

const { mobileMenuOpen, closeMobileMenu } = inject<TopMenuContext>("topMenu")!;
</script>

<template>
  <div
    v-bind="$attrs"
    @click="closeMobileMenu"
    :data-mobile-menu-open="mobileMenuOpen"
  >
    <slot />
  </div>
</template>
