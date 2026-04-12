# Slider

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<div class="text-sm text-muted-foreground">
  <SliderRoot class="w-72" :defaultValue="[20]" label="Max Items">
    <div
      class="flex items-center text-xs gap-1 font-medium justify-center opacity-70"
    >
      <SliderValueText /> Items
    </div>
  </SliderRoot>
</div>
```

## Dependency

```bash
npm install @zag-js/slider @zag-js/vue .
```

## Component

### SliderControl.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderControl } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderControl, className)"
    v-bind="{ ...api?.getControlProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SliderHiddenInput.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderHiddenInput } from "@midoneui/core/styles/slider.styles";
import type { Api, ThumbProps } from "@zag-js/slider";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("sliderApi");
const thumbProps = inject<ThumbProps>("sliderThumb");
</script>

<template>
  <input
    :class="cn(sliderHiddenInput, className)"
    v-bind="{ ...api?.getHiddenInputProps(thumbProps!), ...props, ...$attrs }"
  />
</template>
```

### SliderLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderLabel } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import { Label } from "@/components/ui/label";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }">
    <slot v-if="asChild" />
    <Label v-else :class="cn(sliderLabel, className)">
      <slot />
    </Label>
  </Slot>
</template>
```

### SliderMarker.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderMarker } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, MarkerProps } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  MarkerProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderMarker, className)"
    v-bind="{ ...api?.getMarkerProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SliderMarkerGroup.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderMarkerGroup } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderMarkerGroup, className)"
    v-bind="{ ...api?.getMarkerGroupProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SliderRange.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderRange } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderRange, className)"
    v-bind="{ ...api?.getRangeProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SliderRoot.vue

```vue
<script lang="ts" setup>
import * as slider from "@zag-js/slider";
import type { Props } from "@zag-js/slider";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { sliderRoot } from "@midoneui/core/styles/slider.styles";
import { SliderLabel, SliderControl, SliderTrack, SliderRange, SliderThumb, SliderHiddenInput } from ".";

const {
  class: className,
  asChild = false,
  label,
  type = "single",
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string; type?: "single" | "range" }>();

const service = useMachine(slider.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => slider.connect(service, normalizeProps));

provide("sliderApi", api);
</script>

<template>
  <Slot
    :class="cn(sliderRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <SliderLabel v-if="label">{{ label }}</SliderLabel>
      <SliderControl>
        <SliderTrack><SliderRange /></SliderTrack>
        <SliderThumb :index="0"><SliderHiddenInput /></SliderThumb>
        <SliderThumb v-if="type === 'range'" :index="1"><SliderHiddenInput /></SliderThumb>
      </SliderControl>
      <slot />
    </div>
  </Slot>
</template>
```

### SliderThumb.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderThumb } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ThumbProps } from "@zag-js/slider";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ThumbProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("sliderApi");

provide("sliderThumb", props);
</script>

<template>
  <Slot
    :class="cn(sliderThumb, className)"
    v-bind="{ ...api?.getThumbProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SliderTrack.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderTrack } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderTrack, className)"
    v-bind="{ ...api?.getTrackProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SliderValueText.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderValueText } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderValueText, className)"
    v-bind="{ ...api?.getValueTextProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <output v-else>{{ api?.value?.[0] }}</output>
  </Slot>
</template>
```

## Usage

```vue
import {
  SliderRoot,
  SliderValueText,
  SliderMarkerGroup,
  SliderMarker,
} from "@/components/ui/slider";
```

```vue
<div class="text-sm text-muted-foreground">
  <SliderRoot class="w-72" :defaultValue="[20]" label="Max Items">
    <div
      class="flex items-center text-xs gap-1 font-medium justify-center opacity-70"
    >
      <SliderValueText /> Items
    </div>
  </SliderRoot>
</div>
```

## Examples

### Example 1

```vue
<div class="text-sm text-muted-foreground">
  <SliderRoot class="w-72" :value="[20, 80]" label="Price Range" type="range">
    <SliderMarkerGroup>
      <SliderMarker :value="0">$0</SliderMarker>
      <SliderMarker :value="25">$25</SliderMarker>
      <SliderMarker :value="50">$50</SliderMarker>
      <SliderMarker :value="75">$75</SliderMarker>
      <SliderMarker :value="100">$100</SliderMarker>
    </SliderMarkerGroup>
  </SliderRoot>
</div>
```

