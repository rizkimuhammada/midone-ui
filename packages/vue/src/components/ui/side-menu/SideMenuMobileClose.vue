<script setup lang="ts">
import { inject } from "vue";
import { Lucide } from "@/components/ui/lucide";
import {
  sideMenuMobileClose,
  sideMenuMobileCloseIconWrapper,
  sideMenuMobileCloseIcon,
} from "@/components/ui/styles/side-menu.styles";

const { mobileMenuOpen, closeMobileMenu } = inject<any>("sideMenu");
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="mobile-close"
    @click="closeMobileMenu"
    :data-mobile-menu-open="mobileMenuOpen"
    :class="sideMenuMobileClose"
  >
    <div
      data-scope="side-menu"
      data-part="mobile-close-icon-wrapper"
      :class="sideMenuMobileCloseIconWrapper"
    >
      <Lucide
        data-scope="side-menu"
        data-part="mobile-close-icon"
        :class="sideMenuMobileCloseIcon"
        icon="X"
      />
    </div>
  </div>
</template>
