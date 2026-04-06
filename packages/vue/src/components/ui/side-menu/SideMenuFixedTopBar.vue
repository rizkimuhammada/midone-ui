<script setup lang="ts">
import { inject } from "vue";
import { sideMenuFixedTopBar } from "@/components/ui/styles/side-menu.styles";

const { compactMenu, compactMenuOnHover } = inject<any>("sideMenu");
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="fixed-top-bar"
    :data-compact-menu="compactMenu && !compactMenuOnHover"
    :class="sideMenuFixedTopBar"
  >
    <slot />
  </div>
</template>
