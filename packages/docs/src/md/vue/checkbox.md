# Checkbox

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<CheckboxRoot label="Accept terms and conditions" />
```

## Dependency

```bash
npm install lucide-vue-next . @zag-js/checkbox @zag-js/vue
```

## Component

### CheckboxControl.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { CheckIcon } from "lucide-vue-next";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxControl } from "@midoneui/core/styles/checkbox.styles";
import { CheckboxIndicator } from ".";
import type { Api } from "@zag-js/checkbox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <Slot
    :class="cn(checkboxControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </div>
  </Slot>
</template>
```

### CheckboxHiddenInput.vue

```vue
<script lang="ts" setup>
import type { Api } from "@zag-js/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxHiddenInput } from "@midoneui/core/styles/checkbox.styles";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <input
    :class="cn(checkboxHiddenInput, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getHiddenInputProps() }"
  />
</template>
```

### CheckboxIndicator.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxIndicator } from "@midoneui/core/styles/checkbox.styles";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <Slot
    :class="cn(checkboxIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### CheckboxLabel.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import type { Api } from "@zag-js/checkbox";
import { checkboxLabel } from "@midoneui/core/styles/checkbox.styles";
import { label } from "@midoneui/core/styles/label.styles";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <Slot
    :class="cn([label, checkboxLabel, className])"
    v-bind="{ ...props, ...$attrs, ...api?.getLabelProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
```

### CheckboxRoot.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { checkboxRoot } from "@midoneui/core/styles/checkbox.styles";
import * as checkbox from "@zag-js/checkbox";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/checkbox";
import { CheckboxHiddenInput, CheckboxLabel, CheckboxControl } from ".";
import { computed, provide, useSlots } from "vue";

const {
  class: className,
  checked = undefined,
  label,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    label?: string;
  }
>();

const slots = useSlots();

const service = useMachine(
  checkbox.machine,
  computed(() => ({
    ...props,
    checked,
    id: crypto.randomUUID(),
  }))
);

const api = computed(() => checkbox.connect(service, normalizeProps));

provide("checkboxApi", api);
</script>

<template>
  <label
    :class="cn(checkboxRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="slots.default" />
    <template v-else>
      <CheckboxControl />
      <CheckboxLabel v-if="label">
        {{ label }}
      </CheckboxLabel>
    </template>
    <CheckboxHiddenInput />
  </label>
</template>
```

## Usage

```vue
import {
  CheckboxRoot
} from "@/components/ui/checkbox";
```

```vue
<CheckboxRoot label="Accept terms and conditions" />
```

