<script setup lang="ts">
import { inject } from "vue";
import {
  sideMenuArea,
  sideMenuAreaWrapper,
  sideMenuAreaScroll,
} from "@/components/ui/styles/side-menu.styles";

const { compactMenu, compactMenuOnHover, mobileMenuOpen, onScrollArea } =
  inject<any>("sideMenu");

defineProps<{
  scrollClass?: string | string[] | Record<string, boolean>;
}>();
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="area"
    :data-compact-menu="compactMenu && !compactMenuOnHover"
    :class="sideMenuArea"
  >
    <div :class="sideMenuAreaWrapper">
      <div
        @scroll="onScrollArea"
        data-scope="side-menu"
        data-part="scroll"
        :data-compact-menu="compactMenu && compactMenuOnHover && !mobileMenuOpen"
        :class="[sideMenuAreaScroll, scrollClass]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
