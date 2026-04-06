<script setup lang="ts">
import { sideMenuInner } from "@midoneui/core/styles/side-menu.styles";

const { reverse = false } = defineProps<{ reverse?: boolean }>();
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="inner"
    :data-reverse="reverse"
    :class="sideMenuInner"
  >
    <slot />
  </div>
</template>
