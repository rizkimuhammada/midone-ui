<script setup lang="ts">
import { ScrollAreaRoot } from "@/components/ui/scroll-area";
import { sideMenuBody } from "@/components/ui/styles/side-menu.styles";
</script>

<template>
  <ScrollAreaRoot
    data-scope="side-menu"
    data-part="body"
    :class="sideMenuBody"
  >
    <slot />
  </ScrollAreaRoot>
</template>
