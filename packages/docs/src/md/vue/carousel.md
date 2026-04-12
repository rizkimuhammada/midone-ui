# Carousel

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<CarouselRoot
  :default-page="0"
  :slide-count="images.length"
  show-indicators
  class="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    <CarouselItem
      v-for="(_, index) in images"
      :key="index"
      :index="index"
      class="text-5xl bold flex items-center justify-center"
    >
      {{ index + 1 }}
    </CarouselItem>
  </CarouselItemGroup>
</CarouselRoot>
```

## Dependency

```bash
npm install @zag-js/carousel lucide-vue-next @zag-js/vue
```

## Component

### CarouselControl.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselControl } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot
    :class="cn(carouselControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### CarouselIndicator.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { carouselIndicator } from "@midoneui/core/styles/carousel.styles";
import type { Api, IndicatorProps } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  index,
  ...props
} = defineProps<
  {
    class?: string;
    asChild?: boolean;
  } & IndicatorProps
>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <button
    :class="cn(carouselIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorProps({ index }) }"
  />
</template>
```

### CarouselIndicatorGroup.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselIndicatorGroup } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot
    :class="cn(carouselIndicatorGroup, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorGroupProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### CarouselItem.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { Box } from "@/components/ui/box";
import { carouselItem } from "@midoneui/core/styles/carousel.styles";
import type { Api, ItemProps } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  index,
  ...props
} = defineProps<
  {
    class?: string;
    asChild?: boolean;
  } & ItemProps
>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getItemProps({ index }) }">
    <slot v-if="asChild" />
    <Box v-else :class="cn(carouselItem, className)"><slot /></Box>
  </Slot>
</template>
```

### CarouselItemGroup.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselItemGroup } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot
    :class="cn(carouselItemGroup, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemGroupProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### CarouselNextTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { carouselNextTrigger } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getNextTriggerProps() }">
    <slot v-if="asChild" />
    <Button variant="ghost" v-else :class="cn(carouselNextTrigger, className)">
      <slot v-if="$slots.default" />
      <ArrowRight v-else />
    </Button>
  </Slot>
</template>
```

### CarouselPrevTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-vue-next";
import { carouselPrevTrigger } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getPrevTriggerProps() }">
    <slot v-if="asChild" />
    <Button variant="ghost" v-else :class="cn(carouselPrevTrigger, className)">
      <slot v-if="$slots.default" />
      <ArrowLeft v-else />
    </Button>
  </Slot>
</template>
```

### CarouselRoot.vue

```vue
<script lang="ts" setup>
import * as carousel from "@zag-js/carousel";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/carousel";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselRoot } from "@midoneui/core/styles/carousel.styles";
import { computed, provide } from "vue";
import CarouselIndicatorGroup from "./CarouselIndicatorGroup.vue";
import CarouselIndicator from "./CarouselIndicator.vue";

const {
  class: className,
  defaultPage,
  slideCount,
  spacing = "2rem",
  allowMouseDrag = true,
  asChild = false,
  showIndicators = false,
  ...props
} = defineProps<
  Partial<Props> & {
    asChild?: boolean;
    class?: string;
    showIndicators?: boolean;
  }
>();

const service = useMachine(carousel.machine, {
  defaultPage,
  slideCount,
  spacing,
  allowMouseDrag,
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => carousel.connect(service, normalizeProps));

provide("carouselApi", api);
</script>

<template>
  <Slot
    :class="cn(carouselRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else class="relative">
      <slot />
      <CarouselIndicatorGroup
        v-if="showIndicators"
        class="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <CarouselIndicator
          v-for="(_, index) in api.pageSnapPoints"
          :key="index"
          :index="index"
        />
      </CarouselIndicatorGroup>
    </div>
  </Slot>
</template>
```

## Usage

```vue
import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselItemGroup,
  CarouselItem,
} from "@/components/ui/carousel";
```

```vue
<CarouselRoot
  :default-page="0"
  :slide-count="images.length"
  show-indicators
  class="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    <CarouselItem
      v-for="(_, index) in images"
      :key="index"
      :index="index"
      class="text-5xl bold flex items-center justify-center"
    >
      {{ index + 1 }}
    </CarouselItem>
  </CarouselItemGroup>
</CarouselRoot>
```

## Examples

### Example 1

```vue
<CarouselRoot
  :default-page="0"
  :slide-count="images.length"
  show-indicators
  class="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    <CarouselItem
      v-for="(image, index) in images"
      :key="index"
      :index="index"
    >
      <img :src="image" :alt="`Slide ${index}`" />
    </CarouselItem>
  </CarouselItemGroup>
</CarouselRoot>
```

