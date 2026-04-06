<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from "vue";
import { sideMenuRoot } from "@midoneui/core/styles/side-menu.styles";

const { width = "275px", collapsedWidth = "110px" } = defineProps<{
  width?: string;
  collapsedWidth?: string;
}>();

const compactMenu = ref(localStorage.getItem("compactMenu") === "true");
const compactMenuOnHover = ref(false);
const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const toggleCompactMenu = (event: MouseEvent) => {
  event.preventDefault();
  compactMenu.value = !compactMenu.value;
  localStorage.setItem("compactMenu", compactMenu.value.toString());
};

const onMouseEnterPanel = () => {
  compactMenuOnHover.value = true;
};
const onMouseLeavePanel = () => {
  compactMenuOnHover.value = false;
};
const openMobileMenu = (event: MouseEvent) => {
  event.preventDefault();
  mobileMenuOpen.value = true;
};
const closeMobileMenu = (event: MouseEvent) => {
  event.preventDefault();
  mobileMenuOpen.value = false;
};
const onScrollArea = (event: Event) => {
  scrolled.value = (event.target as HTMLElement).scrollTop > 0;
};

const onResize = () => {
  if (window.innerWidth <= 1600) {
    compactMenu.value = true;
    localStorage.setItem("compactMenu", "true");
  }
};

onMounted(() => {
  window.addEventListener("resize", onResize);
  onResize();
});
onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});

provide("sideMenu", {
  compactMenu,
  compactMenuOnHover,
  mobileMenuOpen,
  scrolled,
  toggleCompactMenu,
  openMobileMenu,
  closeMobileMenu,
  onMouseEnterPanel,
  onMouseLeavePanel,
  onScrollArea,
  width,
  collapsedWidth,
});
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="root"
    :class="sideMenuRoot"
    :style="{
      '--sm-width': width,
      '--sm-collapsed-width': collapsedWidth,
    }"
  >
    <slot />
  </div>
</template>
