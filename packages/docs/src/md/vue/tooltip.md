# Tooltip

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue

```

## Dependency

```bash
npm install @zag-js/tooltip . @zag-js/vue
```

## Component

### TooltipArrow.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipArrow } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot
    :class="cn(tooltipArrow, className)"
    v-bind="{ ...api?.getArrowProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### TooltipArrowTip.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipArrowTip } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot
    :class="cn(tooltipArrowTip, className)"
    v-bind="{ ...api?.getArrowTipProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### TooltipContent.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipContent } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import { TooltipArrow, TooltipArrowTip, TooltipPositioner } from ".";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <TooltipPositioner>
    <Slot
      :class="cn(tooltipContent, className)"
      v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
        <TooltipArrow>
          <TooltipArrowTip />
        </TooltipArrow>
      </div>
    </Slot>
  </TooltipPositioner>
</template>
```

### TooltipPositioner.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipPositioner } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Teleport to="body">
    <Slot
      :class="cn(tooltipPositioner, className)"
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

### TooltipRoot.vue

```vue
<script lang="ts" setup>
import * as tooltip from "@zag-js/tooltip";
import type { Props } from "@zag-js/tooltip";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";

const {
  class: className,
  asChild = false,
  open = undefined,
  disabled = false,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(tooltip.machine, {
  ...props,
  positioning: {
    placement: "top",
    offset: { mainAxis: 10 },
  },
  closeDelay: 0,
  openDelay: 0,
  open,
  disabled,
  id: crypto.randomUUID(),
});
const api = computed(() => tooltip.connect(service, normalizeProps));

provide("tooltipApi", api);
</script>

<template>
  <slot />
</template>
```

### TooltipTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipTrigger } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button
      variant="secondary"
      look="outline"
      v-if="!asChild"
      :class="cn(tooltipTrigger, className)"
    >
      <slot />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

## Usage

```vue
import { TooltipRoot, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
```

```vue

```

## Examples

