# Switch

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<SwitchRoot label="Airplane Mode" />
```

## Dependency

```bash
npm install . @zag-js/switch @zag-js/vue
```

## Component

### SwitchControl.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchControl } from "@midoneui/core/styles/switch.styles";
import { SwitchThumb } from ".";
import type { Api } from "@zag-js/switch";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("switchApi");
</script>

<template>
  <Slot
    :class="cn(switchControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <SwitchThumb />
    </span>
  </Slot>
</template>
```

### SwitchHiddenInput.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchHiddenInput } from "@midoneui/core/styles/switch.styles";
import type { Api } from "@zag-js/switch";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("switchApi");
</script>

<template>
  <input
    :class="cn(switchHiddenInput, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getHiddenInputProps() }"
  />
</template>
```

### SwitchLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchLabel } from "@midoneui/core/styles/switch.styles";
import { label } from "@midoneui/core/styles/label.styles";
import type { Api } from "@zag-js/switch";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("switchApi");
</script>

<template>
  <Slot
    :class="cn([label, switchLabel, className])"
    v-bind="{ ...props, ...$attrs, ...api?.getLabelProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
```

### SwitchRoot.vue

```vue
<script lang="ts" setup>
import * as zagSwitch from "@zag-js/switch";
import type { Props } from "@zag-js/switch";
import { cn } from "@midoneui/core/utils/cn";
import { switchRoot } from "@midoneui/core/styles/switch.styles";
import { SwitchHiddenInput, SwitchControl, SwitchLabel } from ".";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide, useSlots } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  checked = undefined,
  label,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string }>();

const service = useMachine(zagSwitch.machine, {
  ...props,
  checked,
  id: crypto.randomUUID(),
});
const slots = useSlots();
const api = computed(() => zagSwitch.connect(service, normalizeProps));

provide("switchApi", api);
</script>

<template>
  <Slot
    :class="cn(switchRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getRootProps() }"
  >
    <slot v-if="asChild" />
    <label v-else v-bind="api?.getLabelProps()">
      <slot v-if="slots.default" />
      <template v-else>
        <SwitchControl />
        <SwitchLabel v-if="label">{{ label }}</SwitchLabel>
      </template>
      <SwitchHiddenInput />
    </label>
  </Slot>
</template>
```

### SwitchThumb.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchThumb } from "@midoneui/core/styles/switch.styles";
import type { Api } from "@zag-js/switch";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("switchApi");
</script>

<template>
  <Slot
    :class="cn(switchThumb, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getThumbProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
```

## Usage

```vue
import { SwitchRoot, SwitchControl, SwitchLabel } from "@/components/ui/switch";
```

```vue
<SwitchRoot label="Airplane Mode" />
```

## Examples

### Example 1

```vue
<SwitchRoot>
  <SwitchControl />
  <SwitchLabel class="font-normal">
      Activate PreOrder if you need a longer shipping process.
      <a class="text-primary" href="">
          Learn more
      </a>
      .
  </SwitchLabel>
</SwitchRoot>
```

