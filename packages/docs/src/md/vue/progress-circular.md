# Progress Circular

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue

```

## Dependency

```bash
npm install @zag-js/progress @zag-js/vue .
```

## Component

### ProgressCircularCircle.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressCircle } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <svg
    :class="cn(progressCircle, className)"
    v-bind="{ ...api?.getCircleProps(), ...props, ...$attrs }"
  >
    <slot />
  </svg>
</template>
```

### ProgressCircularCircleRange.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressCircleRange } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <circle
    :class="cn(progressCircleRange, className)"
    v-bind="{ ...api?.getCircleRangeProps(), ...props, ...$attrs }"
  />
</template>
```

### ProgressCircularCircleTrack.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressCircleTrack } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <circle
    :class="cn(progressCircleTrack, className)"
    v-bind="{ ...api?.getCircleTrackProps(), ...props, ...$attrs }"
  />
</template>
```

### ProgressCircularLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressLabel } from "@midoneui/core/styles/progress-circular.styles";
import { Label } from "@/components/ui/label";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }">
    <Label v-if="!asChild" :class="cn(progressLabel, className)">
      <slot />
    </Label>
    <slot v-else />
  </Slot>
</template>
```

### ProgressCircularRoot.vue

```vue
<script lang="ts" setup>
import * as progress from "@zag-js/progress";
import type { Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { progressRoot } from "@midoneui/core/styles/progress-circular.styles";
import { ProgressCircularLabel, ProgressCircularCircle, ProgressCircularCircleTrack, ProgressCircularCircleRange, ProgressCircularValueText } from ".";

const {
  class: className,
  asChild = false,
  label,
  circleClass,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string; circleClass?: string; showValueText?: boolean }>();

const service = useMachine(progress.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => progress.connect(service, normalizeProps));

provide("progressApi", api);
</script>

<template>
  <Slot
    :class="cn(progressRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <ProgressCircularLabel v-if="label">{{ label }}</ProgressCircularLabel>
      <ProgressCircularCircle :class="circleClass">
        <ProgressCircularCircleTrack />
        <ProgressCircularCircleRange />
      </ProgressCircularCircle>
      <ProgressCircularValueText v-if="showValueText" />
      <slot />
    </div>
  </Slot>
</template>
```

### ProgressCircularValueText.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressValueText } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <div
    :class="cn(progressValueText, className)"
    v-bind="{ ...api?.getValueTextProps(), ...props, ...$attrs }"
  >
    {{ api?.valueAsString }}
  </div>
</template>
```

## Usage

```vue
import { ProgressCircularRoot } from "@/components/ui/progress-circular";
```

```vue

```

## Examples

