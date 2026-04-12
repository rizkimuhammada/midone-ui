# Scroll Area

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<ScrollAreaRoot class="h-72 w-70">
  <div class="text-base font-medium mb-4">Scroll Area Example</div>
  <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
    This is line number {{ i }} of the scrollable content. It helps
    demonstrate how the custom scrollbar works within the Midone UI
    system.
  </div>
</ScrollAreaRoot>
```

## Dependency

```bash
npm install @zag-js/scroll-area @zag-js/vue .
```

## Component

### ScrollAreaContent.vue

```vue
<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaContent } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<{ class?: string }>();

const api = inject<Api<any>>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getContentProps(), ...props }"
    :class="cn(scrollAreaContent, className)"
  >
    <slot />
  </div>
</template>
```

### ScrollAreaCorner.vue

```vue
<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaCorner } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<{ class?: string }>();

const api = inject<Api<any>>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getCornerProps(), ...props }"
    :class="cn(scrollAreaCorner, className)"
  />
</template>
```

### ScrollAreaRoot.vue

```vue
<script lang="ts" setup>
import * as scrollArea from "@zag-js/scroll-area";
import type { Props } from "@zag-js/scroll-area";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { cn } from "@midoneui/core/utils/cn";
import { computed, provide } from "vue";
import { scrollAreaRoot } from "@midoneui/core/styles/scroll-area.styles";
import {
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from ".";

const { class: className, ...props } = defineProps<
  Partial<Props> & {
    class?: string;
  }
>();

const service = useMachine(scrollArea.machine, {
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => scrollArea.connect(service, normalizeProps));

provide("scrollAreaApi", api);
</script>

<template>
  <div
    v-bind="{ ...api.getRootProps() }"
    :class="cn(scrollAreaRoot, className)"
  >
    <ScrollAreaViewport>
      <ScrollAreaContent>
        <slot />
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </div>
</template>
```

### ScrollAreaScrollbar.vue

```vue
<script lang="ts" setup>
import type { Api, ScrollbarProps } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaScrollbar } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<
  ScrollbarProps & { class?: string }
>();

const api = inject<Api<any>>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getScrollbarProps(), ...props }"
    :class="cn(scrollAreaScrollbar, className)"
  >
    <slot />
  </div>
</template>
```

### ScrollAreaThumb.vue

```vue
<script lang="ts" setup>
import type { Api, ScrollbarProps } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaThumb } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<
  ScrollbarProps & { class?: string }
>();

const api = inject<Api<any>>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getThumbProps(props), ...props }"
    :class="cn(scrollAreaThumb, className)"
  />
</template>
```

### ScrollAreaViewport.vue

```vue
<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaViewport } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<{ class?: string }>();

const api = inject<Api<any>>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getViewportProps(), ...props }"
    :class="cn(scrollAreaViewport, className)"
  >
    <slot />
  </div>
</template>
```

## Usage

```vue
import { ScrollAreaRoot } from "@/components/ui/scroll-area";
```

```vue
<ScrollAreaRoot class="h-72 w-70">
  <div class="text-base font-medium mb-4">Scroll Area Example</div>
  <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
    This is line number {{ i }} of the scrollable content. It helps
    demonstrate how the custom scrollbar works within the Midone UI
    system.
  </div>
</ScrollAreaRoot>
```

