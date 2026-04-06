<script setup lang="ts">
import { inject } from "vue";
import {
  sideMenuInner,
} from "@/components/ui/styles/side-menu.styles";
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="inner"
    :class="sideMenuInner"
  >
    <slot />
  </div>
</template>
