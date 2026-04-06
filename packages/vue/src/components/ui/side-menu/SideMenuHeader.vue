<script setup lang="ts">
import { inject } from "vue";
import { Lucide } from "@/components/ui/lucide";
import {
  sideMenuHeader,
  sideMenuHeaderToggle,
} from "@midoneui/core/styles/side-menu.styles";

const { toggleCompactMenu } = inject<any>("sideMenu");
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="header"
    :class="sideMenuHeader"
  >
    <slot />
    <a
      @click="toggleCompactMenu"
      data-scope="side-menu"
      data-part="toggle"
      :class="sideMenuHeaderToggle"
      href=""
    >
      <Lucide
        data-scope="side-menu"
        data-part="toggle-icon"
        icon="ChevronLeft"
      />
    </a>
  </div>
</template>
