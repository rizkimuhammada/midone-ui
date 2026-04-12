# Native Select

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<NativeSelect class="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress"
    >In Progress</NativeSelectOption
  >
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
```

## Dependency

No external dependencies.

## Component

### NativeSelect.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import { nativeSelect } from "@midoneui/core/styles/native-select.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <select
    :class="cn(input, nativeSelect, className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </select>
</template>
```

### NativeSelectOption.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { nativeSelectOption } from "@midoneui/core/styles/native-select.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <option
    :class="cn(nativeSelectOption, className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </option>
</template>
```

### NativeSelectOptionGroup.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { NativeSelectOptGroup } from "@midoneui/core/styles/native-select.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <optgroup
    :class="cn(NativeSelectOptGroup, className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </optgroup>
</template>
```

## Usage

```vue
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptionGroup,
} from "@/components/ui/native-select";
```

```vue
<NativeSelect class="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress"
    >In Progress</NativeSelectOption
  >
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
```

## Examples

### Example 1

```vue
<NativeSelect class="w-56">
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress"
    >In Progress</NativeSelectOption
  >
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
```

### Example 2

```vue
<NativeSelect class="w-56">
  <NativeSelectOption value="">Select department</NativeSelectOption>
  <NativeSelectOptionGroup label="Engineering">
    <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
    <NativeSelectOption value="backend">Backend</NativeSelectOption>
    <NativeSelectOption value="devops">DevOps</NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Sales">
    <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
    <NativeSelectOption value="account-manager">
      Account Manager
    </NativeSelectOption>
    <NativeSelectOption value="sales-director">
      Sales Director
    </NativeSelectOption>
  </NativeSelectOptionGroup>
  <NativeSelectOptionGroup label="Operations">
    <NativeSelectOption value="support">
      Customer Support
    </NativeSelectOption>
    <NativeSelectOption value="product-manager">
      Product Manager
    </NativeSelectOption>
    <NativeSelectOption value="ops-manager">
      Operations Manager
    </NativeSelectOption>
  </NativeSelectOptionGroup>
</NativeSelect>
```

### Example 3

```vue
<NativeSelect class="w-56" disabled>
  <NativeSelectOption value="">Select status</NativeSelectOption>
  <NativeSelectOption value="todo">Todo</NativeSelectOption>
  <NativeSelectOption value="in-progress"
    >In Progress</NativeSelectOption
  >
  <NativeSelectOption value="done">Done</NativeSelectOption>
  <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
</NativeSelect>
```

