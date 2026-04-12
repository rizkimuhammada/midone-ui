# Popover

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue

```

## Dependency

```bash
npm install @zag-js/popover . lucide-vue-next @zag-js/vue
```

## Component

### PopoverArrow.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverArrow } from "@midoneui/core/styles/popover.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <div
    :class="cn(popoverArrow, className)"
    v-bind="{ ...api?.getArrowProps(), ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
```

### PopoverArrowTip.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverArrowTip } from "@midoneui/core/styles/popover.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <div
    :class="cn(popoverArrowTip, className)"
    v-bind="{ ...api?.getArrowTipProps(), ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
```

### PopoverContent.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { popoverContent } from "@midoneui/core/styles/popover.styles";
import { PopoverArrow, PopoverArrowTip, PopoverPositioner } from ".";
import { Box } from "@/components/ui/box";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <PopoverPositioner>
    <Slot
      :class="cn(popoverContent, className)"
      v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <Box v-else raised="single" :class="cn(popoverContent, className)">
        <div><slot /></div>
        <PopoverArrow>
          <PopoverArrowTip />
        </PopoverArrow>
      </Box>
    </Slot>
  </PopoverPositioner>
</template>
```

### PopoverDescription.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverDescription } from "@midoneui/core/styles/popover.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot
    :class="cn(popoverDescription, className)"
    v-bind="{ ...api?.getDescriptionProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### PopoverIndicator.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { popoverIndicator } from "@midoneui/core/styles/popover.styles";
import { ChevronDown } from "lucide-vue-next";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot
    :class="cn(popoverIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="$slots.default" />
    <ChevronDown v-else />
  </Slot>
</template>
```

### PopoverPositioner.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverPositioner } from "@midoneui/core/styles/popover.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Teleport to="body">
    <Slot
      :class="cn(popoverPositioner, className)"
      v-bind="{ ...api?.getPositionerProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </Slot>
  </Teleport>
</template>
```

### PopoverRoot.vue

```vue
<script lang="ts" setup>
import * as popover from "@zag-js/popover";
import type { Props } from "@zag-js/popover";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { popoverRoot } from "@midoneui/core/styles/popover.styles";

const {
  class: className,
  asChild = false,
  open = undefined,
  closeOnInteractOutside = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(popover.machine, {
  ...props,
  open,
  closeOnInteractOutside,
  id: crypto.randomUUID(),
});
const api = computed(() => popover.connect(service, normalizeProps));

provide("popoverApi", api);
</script>

<template>
  <Slot :class="cn(popoverRoot, className)" v-bind="{ ...props, ...$attrs }">
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### PopoverTitle.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { popoverTitle } from "@midoneui/core/styles/popover.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot
    :class="cn(popoverTitle, className)"
    v-bind="{ ...api?.getTitleProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### PopoverTrigger.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Button } from "@/components/ui/button";
import { Slot } from "@/components/ui/slot";
import { popoverTrigger } from "@midoneui/core/styles/popover.styles";
import { PopoverIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button
      variant="ghost"
      v-if="!asChild"
      :class="cn(popoverTrigger, className)"
    >
      <slot />
      <PopoverIndicator />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

## Usage

```vue
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
```

```vue

```

## Examples

