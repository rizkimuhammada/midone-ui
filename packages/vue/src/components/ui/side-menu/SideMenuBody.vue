<script setup lang="ts">
import { ScrollAreaRoot } from "@/components/ui/scroll-area";
import { sideMenuBody } from "@midoneui/core/styles/side-menu.styles";
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
