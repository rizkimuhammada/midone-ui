<script setup lang="ts">
import { inject } from "vue";
import {
  sideMenuPanel,
} from "@/components/ui/styles/side-menu.styles";

const {
  compactMenu,
  compactMenuOnHover,
  mobileMenuOpen,
  onMouseEnterPanel,
  onMouseLeavePanel,
} = inject<any>("sideMenu");
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="panel"
    @mouseenter="onMouseEnterPanel"
    @mouseleave="onMouseLeavePanel"
    :data-compact-menu="compactMenu"
    :data-compact-menu-on-hover="compactMenuOnHover"
    :data-mobile-menu-open="mobileMenuOpen"
    :class="sideMenuPanel"
  >
    <slot />
  </div>
</template>
