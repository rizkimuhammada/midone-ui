<script setup lang="ts">
import { inject } from "vue";
import { Lucide } from "@/components/ui/lucide";
import {
  sideMenuTopBarMobileOpen,
  sideMenuTopBarMobileOpenIcon,
} from "@midoneui/core/styles/side-menu.styles";

const { openMobileMenu } = inject<any>("sideMenu");
</script>

<template>
  <div
    v-bind="$attrs"
    @click="openMobileMenu"
    data-scope="side-menu"
    data-part="mobile-open"
    :class="sideMenuTopBarMobileOpen"
  >
    <Lucide
      data-scope="side-menu"
      data-part="mobile-open-icon"
      :class="sideMenuTopBarMobileOpenIcon"
      icon="ChartNoAxesColumn"
    />
  </div>
</template>
