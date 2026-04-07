<script setup lang="ts">
import { inject } from "vue";
import { sideMenuTopBar } from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const { scrolled } = inject<SideMenuContext>("sideMenu")!;
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="top-bar"
    :data-scrolled="scrolled"
    :class="sideMenuTopBar"
  >
    <slot />
  </div>
</template>
