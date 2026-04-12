# Side Menu

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue

```

## Dependency

```bash
npm install lucide-vue-next . @zag-js/menu @zag-js/vue
```

## Component

### SideMenuArea.vue

```vue
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
```

### SideMenuBody.vue

```vue
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
```

### SideMenuFixedTopBar.vue

```vue
<script setup lang="ts">
import { inject } from "vue";
import { sideMenuFixedTopBar } from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const { compactMenu, compactMenuOnHover } = inject<SideMenuContext>("sideMenu")!;
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="fixed-top-bar"
    :data-compact-menu="compactMenu && !compactMenuOnHover"
    :class="sideMenuFixedTopBar"
  >
    <slot />
  </div>
</template>
```

### SideMenuHeader.vue

```vue
<script setup lang="ts">
import { inject } from "vue";
import { Lucide } from "@/components/ui/lucide";
import {
  sideMenuHeader,
  sideMenuHeaderToggle,
} from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const { toggleCompactMenu } = inject<SideMenuContext>("sideMenu")!;
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
```

### SideMenuInner.vue

```vue
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
```

### SideMenuMobileClose.vue

```vue
<script setup lang="ts">
import { inject } from "vue";
import { Lucide } from "@/components/ui/lucide";
import {
  sideMenuMobileClose,
  sideMenuMobileCloseIconWrapper,
  sideMenuMobileCloseIcon,
} from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const { mobileMenuOpen, closeMobileMenu } = inject<SideMenuContext>("sideMenu")!;
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
```

### SideMenuPanel.vue

```vue
<script setup lang="ts">
import { inject } from "vue";
import {
  sideMenuPanel,
} from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const {
  compactMenu,
  compactMenuOnHover,
  mobileMenuOpen,
  onMouseEnterPanel,
  onMouseLeavePanel,
} = inject<SideMenuContext>("sideMenu")!;
</script>

<template>
  <div
    data-scope="side-menu"
    data-part="panel"
    @mouseenter="onMouseEnterPanel"
    @mouseleave="onMouseLeavePanel"
    :data-compact-menu="compactMenu"
    :data-compact-menu-on-hover="compactMenuOnHover"
    :data-mobile-menu-open="mobileMenuOpen"
    :class="sideMenuPanel"
  >
    <slot />
  </div>
</template>
```

### SideMenuRoot.vue

```vue
<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from "vue";
import type { SideMenuContext } from "./types";
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

provide<SideMenuContext>("sideMenu", {
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
```

### SideMenuTopBar.vue

```vue
<script setup lang="ts">
import { inject } from "vue";
import { sideMenuTopBar } from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const { scrolled } = inject<SideMenuContext>("sideMenu")!;
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="top-bar"
    :data-scrolled="scrolled"
    :class="sideMenuTopBar"
  >
    <slot />
  </div>
</template>
```

### SideMenuTopBarInner.vue

```vue
<script setup lang="ts">
import { sideMenuTopBarInner } from "@midoneui/core/styles/side-menu.styles";
import SideMenuTopBarMobileOpen from "./SideMenuTopBarMobileOpen.vue";
</script>

<template>
  <div
    v-bind="$attrs"
    data-scope="side-menu"
    data-part="top-bar-inner"
    :class="sideMenuTopBarInner"
  >
    <SideMenuTopBarMobileOpen />
    <slot />
  </div>
</template>
```

### SideMenuTopBarMobileOpen.vue

```vue
<script setup lang="ts">
import { inject } from "vue";
import { Lucide } from "@/components/ui/lucide";
import {
  sideMenuTopBarMobileOpen,
  sideMenuTopBarMobileOpenIcon,
} from "@midoneui/core/styles/side-menu.styles";
import type { SideMenuContext } from "./types";

const { openMobileMenu } = inject<SideMenuContext>("sideMenu")!;
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
```

## Usage

```vue
import { Lucide } from "@/components/ui/lucide";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from "@/components/ui/menu";
import {
  SideMenuRoot,
  SideMenuPanel,
  SideMenuInner,
  SideMenuHeader,
  SideMenuBody,
  SideMenuArea,
  SideMenuTopBar,
  SideMenuTopBarInner,
} from "@/components/ui/side-menu";
```

```vue

```

