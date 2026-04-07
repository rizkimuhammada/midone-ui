<script setup lang="ts">
import { inject } from "vue";
import {
  sideMenuPanel,
} from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const {
  compactMenu,
  compactMenuOnHover,
  mobileMenuOpen,
  onMouseEnterPanel,
  onMouseLeavePanel,
} = inject<SideMenuContext>("sideMenu")!;
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
