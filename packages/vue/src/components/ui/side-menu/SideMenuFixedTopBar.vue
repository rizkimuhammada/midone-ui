<script setup lang="ts">
import { inject } from "vue";
import { sideMenuFixedTopBar } from "@midoneui/core/styles/side-menu.styles";

const { compactMenu, compactMenuOnHover } = inject<any>("sideMenu");
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="fixed-top-bar"
    :data-compact-menu="compactMenu && !compactMenuOnHover"
    :class="sideMenuFixedTopBar"
  >
    <slot />
  </div>
</template>
