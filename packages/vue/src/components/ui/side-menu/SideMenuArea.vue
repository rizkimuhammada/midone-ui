<script setup lang="ts">
import { inject } from "vue";
import {
  sideMenuArea,
  sideMenuAreaInner,
  sideMenuAreaWrapper,
  sideMenuAreaScroll,
} from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const { compactMenu, compactMenuOnHover, mobileMenuOpen, onScrollArea } =
  inject<SideMenuContext>("sideMenu")!;
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="area"
    :data-compact-menu="compactMenu && !compactMenuOnHover"
    :class="sideMenuArea"
  >
    <div
      data-scope="side-menu"
      data-part="inner"
      :class="sideMenuAreaInner"
    >
      <div
        data-scope="side-menu"
        data-part="wrapper"
        :class="sideMenuAreaWrapper"
      >
        <div
          @scroll="onScrollArea"
          data-scope="side-menu"
          data-part="scroll"
          :data-compact-menu="compactMenu && compactMenuOnHover && !mobileMenuOpen"
          :class="sideMenuAreaScroll"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
