<script setup lang="ts">
import { sideMenuTopBarInner } from "@/components/ui/styles/side-menu.styles";
import SideMenuTopBarMobileOpen from "./SideMenuTopBarMobileOpen.vue";
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="top-bar-inner"
    :class="sideMenuTopBarInner"
  >
    <SideMenuTopBarMobileOpen />
    <slot />
  </div>
</template>
