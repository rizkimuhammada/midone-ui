<script setup lang="ts">
import { inject } from "vue";
import { sideMenuTopBar } from "@midoneui/core/styles/side-menu.styles";

const { scrolled } = inject<any>("sideMenu");
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
