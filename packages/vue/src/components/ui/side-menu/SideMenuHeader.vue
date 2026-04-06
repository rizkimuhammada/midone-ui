<script setup lang="ts">
import { inject } from "vue";
import { Lucide } from "@/components/ui/lucide";
import {
  sideMenuHeader,
  sideMenuHeaderToggle,
} from "@/components/ui/styles/side-menu.styles";

defineProps<{
  toggleClass?: string | string[] | Record<string, boolean>;
}>();

const { toggleCompactMenu } = inject<any>("sideMenu");
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="header"
    :class="sideMenuHeader"
  >
    <slot />
    <a
      @click="toggleCompactMenu"
      data-scope="side-menu"
      data-part="toggle"
      :class="[sideMenuHeaderToggle, toggleClass]"
      href=""
    >
      <Lucide icon="ChevronLeft" />
    </a>
  </div>
</template>
