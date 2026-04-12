# Progress Linear

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

### ProgressLinearLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressLabel } from "@midoneui/core/styles/progress-linear.styles";
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

### ProgressLinearRange.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressRange } from "@midoneui/core/styles/progress-linear.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <div
    :class="cn(progressRange, className)"
    v-bind="{ ...api?.getRangeProps(), ...props, ...$attrs }"
  />
</template>
```

### ProgressLinearRoot.vue

```vue
<script lang="ts" setup>
import * as progress from "@zag-js/progress";
import type { Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { progressRoot } from "@midoneui/core/styles/progress-linear.styles";
import { ProgressLinearLabel, ProgressLinearTrack, ProgressLinearRange, ProgressLinearValueText } from ".";

const {
  class: className,
  asChild = false,
  label,
  trackClass,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string; trackClass?: string; showValueText?: boolean }>();

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
      <ProgressLinearLabel v-if="label">{{ label }}</ProgressLinearLabel>
      <ProgressLinearTrack :class="trackClass">
        <ProgressLinearRange />
      </ProgressLinearTrack>
      <ProgressLinearValueText v-if="showValueText" />
      <slot />
    </div>
  </Slot>
</template>
```

### ProgressLinearTrack.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressTrack } from "@midoneui/core/styles/progress-linear.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <div
    :class="cn(progressTrack, className)"
    v-bind="{ ...api?.getTrackProps(), ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
```

### ProgressLinearValueText.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressValueText } from "@midoneui/core/styles/progress-linear.styles";
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
import { ProgressLinearRoot } from "@/components/ui/progress-linear";
```

```vue

```

## Examples

