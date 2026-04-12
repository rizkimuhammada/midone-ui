# Radio Group

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<RadioGroupRoot defaultValue="React" label="Framework">
  <RadioGroupItem value="React">
    React
  </RadioGroupItem>
  <RadioGroupItem value="Solid">
    Solid
  </RadioGroupItem>
  <RadioGroupItem value="Vue">
    Vue
  </RadioGroupItem>
  <RadioGroupItem value="Svelte">
    Svelte
  </RadioGroupItem>
</RadioGroupRoot>
```

## Dependency

```bash
npm install @zag-js/radio-group . @zag-js/vue lucide-vue-next
```

## Component

### RadioGroupIndicator.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupIndicator } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
</script>

<template>
  <Slot
    :class="cn(radioGroupIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else><slot /></div>
  </Slot>
</template>
```

### RadioGroupItem.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItem } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import { RadioGroupItemHiddenInput, RadioGroupItemControl, RadioGroupItemText } from ".";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { provide, inject, useSlots } from "vue";

const slots = useSlots();

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ItemProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("radioGroupApi");

provide("radioGroupItem", props);
</script>

<template>
  <Slot
    :class="cn(radioGroupItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <RadioGroupItemControl />
      <RadioGroupItemText v-if="slots.default"><slot /></RadioGroupItemText>
      <RadioGroupItemHiddenInput />
    </label>
  </Slot>
</template>
```

### RadioGroupItemControl.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItemControl } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
const itemProps = inject<ItemProps>("radioGroupItem");
</script>

<template>
  <Slot
    :class="cn(radioGroupItemControl, className)"
    v-bind="{ ...api?.getItemControlProps(itemProps!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### RadioGroupItemHiddenInput.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItemHiddenInput } from "@midoneui/core/styles/radio-group.styles";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("radioGroupApi");
const itemProps = inject<ItemProps>("radioGroupItem");
</script>

<template>
  <input
    :class="cn(radioGroupItemHiddenInput, className)"
    v-bind="{ ...api?.getItemHiddenInputProps(itemProps!), ...props, ...$attrs }"
  />
</template>
```

### RadioGroupItemText.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItemText } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
const itemProps = inject<ItemProps>("radioGroupItem");
</script>

<template>
  <Slot
    :class="cn(radioGroupItemText, className)"
    v-bind="{ ...api?.getItemTextProps(itemProps!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
```

### RadioGroupLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupLabel } from "@midoneui/core/styles/radio-group.styles";
import { label } from "@midoneui/core/styles/label.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
</script>

<template>
  <Slot
    :class="cn([label, radioGroupLabel, className])"
    v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <span v-else><slot /></span>
  </Slot>
</template>
```

### RadioGroupRoot.vue

```vue
<script lang="ts" setup>
import * as radioGroup from "@zag-js/radio-group";
import type { Props } from "@zag-js/radio-group";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { radioGroupRoot } from "@midoneui/core/styles/radio-group.styles";
import { Dot } from "lucide-vue-next";
import { RadioGroupIndicator, RadioGroupLabel } from ".";

const {
  class: className,
  asChild = false,
  label,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string }>();

const service = useMachine(radioGroup.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => radioGroup.connect(service, normalizeProps));

provide("radioGroupApi", api);
</script>

<template>
  <Slot
    :class="cn(radioGroupRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <RadioGroupLabel v-if="label">{{ label }}</RadioGroupLabel>
      <slot />
      <RadioGroupIndicator>
        <Dot />
      </RadioGroupIndicator>
    </div>
  </Slot>
</template>
```

## Usage

```vue
import { RadioGroupRoot, RadioGroupItem } from "@/components/ui/radio-group";
```

```vue
<RadioGroupRoot defaultValue="React" label="Framework">
  <RadioGroupItem value="React">
    React
  </RadioGroupItem>
  <RadioGroupItem value="Solid">
    Solid
  </RadioGroupItem>
  <RadioGroupItem value="Vue">
    Vue
  </RadioGroupItem>
  <RadioGroupItem value="Svelte">
    Svelte
  </RadioGroupItem>
</RadioGroupRoot>
```

## Examples

### Example 1

```vue
<RadioGroupRoot defaultValue="required">
  <RadioGroupItem value="required">
    <div class="font-medium">Required</div>
    <div class="mt-1 text-xs leading-relaxed opacity-70">You require the buyer to activate shipping insurance</div>
  </RadioGroupItem>
  <RadioGroupItem value="optional">
    <div class="font-medium">Optional</div>
    <div class="mt-1 text-xs leading-relaxed opacity-70">You give the buyer the option to activate shipping
      insurance</div>
  </RadioGroupItem>
</RadioGroupRoot>
```

