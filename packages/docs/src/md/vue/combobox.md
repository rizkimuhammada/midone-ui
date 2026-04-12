# Combobox

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<ComboboxRoot
  label="Single"
  v-model:value="stateSingle"
  combobox-input-placeholder="Search frameworks..."
  class="w-56"
>
  <ComboboxItemGroup label="Frameworks">
    <ComboboxItem value="React">React</ComboboxItem>
    <ComboboxItem value="Solid">Solid</ComboboxItem>
    <ComboboxItem value="Vue">Vue</ComboboxItem>
    <ComboboxItem value="Svelte">Svelte</ComboboxItem>
    <ComboboxItem value="Vanilla">Vanilla JS</ComboboxItem>
  </ComboboxItemGroup>
</ComboboxRoot>
```

## Dependency

```bash
npm install @zag-js/combobox . lucide-vue-next @zag-js/vue
```

## Component

### ComboboxClearTrigger.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxClearTrigger } from "@midoneui/core/styles/combobox.styles";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Slot
    v-if="api?.value.length"
    v-bind="{ ...props, ...$attrs, ...api?.getClearTriggerProps() }"
  >
    <slot v-if="asChild" />
    <span :class="cn(comboboxClearTrigger, className)" v-else>
      <slot />
    </span>
  </Slot>
</template>
```

### ComboboxContent.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxContent } from "@midoneui/core/styles/combobox.styles";
import { Box } from "@/components/ui/box";
import { ComboboxPositioner } from "@/components/ui/combobox";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import ComboboxInput from "./ComboboxInput.vue";

const { class: className, searchPlaceholder } = defineProps<{
  class?: string;
  searchPlaceholder?: string;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <ComboboxPositioner>
    <div v-bind="api?.getContentProps()">
      <Box raised="single" :class="cn(comboboxContent, className)">
        <div>
          <ComboboxInput
            v-if="searchPlaceholder"
            :placeholder="searchPlaceholder"
          />
          <slot />
        </div>
      </Box>
    </div>
  </ComboboxPositioner>
</template>
```

### ComboboxControl.vue

```vue
<script lang="ts" setup>
import { ComboboxTrigger } from ".";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxControl } from "@midoneui/core/styles/combobox.styles";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <div :class="cn(comboboxControl, className)" v-bind="api?.getControlProps()">
    <ComboboxTrigger />
  </div>
</template>
```

### ComboboxInput.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxInput } from "@midoneui/core/styles/combobox.styles";
import { Input } from "@/components/ui/input";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";

const { class: className, placeholder } = defineProps<{
  class?: string;
  placeholder?: string;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Input
    :class="cn(comboboxInput, className)"
    v-bind="{ ...$attrs, ...api?.getInputProps() }"
    :placeholder="placeholder"
  />
</template>
```

### ComboboxItem.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItem } from "@midoneui/core/styles/combobox.styles";
import type { ItemProps } from "@zag-js/combobox";
import type { Api } from "@zag-js/combobox";
import {
  provide,
  inject,
  onUnmounted,
  computed,
  reactive,
  watchEffect,
  useSlots,
} from "vue";
import type { Ref } from "vue";
import { ComboboxItemIndicator, ComboboxItemText } from ".";

const {
  class: className,
  asChild = false,
  value: valueProp,
  item: itemProp,
  text: textProp,
  ...restProps
} = defineProps<
  Omit<ItemProps, "item"> & {
    item?: any;
    value?: string;
    text?: string;
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("comboboxApi");
const registerStaticItem = inject<((item: any) => void) | undefined>(
  "registerStaticItem",
  undefined
);
const unregisterStaticItem = inject<((item: any) => void) | undefined>(
  "unregisterStaticItem",
  undefined
);
const comboboxInputValue = inject<Ref<string>>("comboboxInputValue");
const slots = useSlots();

const isStaticItem = itemProp === undefined && valueProp !== undefined;

const displayLabel = textProp ?? valueProp ?? "";

// For static items: show/hide based on whether label matches current input
const shouldShow = computed(() => {
  if (!isStaticItem) return true;
  const query = comboboxInputValue?.value ?? "";
  if (!query) return true;
  return displayLabel.toLowerCase().includes(query.toLowerCase());
});

// Resolve: use `item` prop if given, else create static item object from `value` prop
const resolvedItem = computed(() => {
  if (itemProp !== undefined) return itemProp;
  if (valueProp !== undefined) return { value: valueProp, label: displayLabel };
  return undefined;
});

// Reactive context for ComboboxItemIndicator via inject
const itemContext = reactive({ item: null as any });
watchEffect(() => {
  itemContext.item = resolvedItem.value;
});

const itemText = computed(() => {
  if (textProp) return textProp;
  const item = resolvedItem.value;
  if (!item) return "";
  return typeof item === "string" ? item : item.label || item.value || "";
});

// For static items: register/unregister from collection based on visibility
// flush: 'sync' ensures collection updates before zag-js renders
if (isStaticItem) {
  watchEffect(() => {
    if (shouldShow.value) {
      registerStaticItem?.({ value: valueProp, label: displayLabel });
    } else {
      unregisterStaticItem?.({ value: valueProp, label: displayLabel });
    }
  }, { flush: 'sync' });
} else {
  // Initial registration for non-watchEffect path (shouldn't happen, but defensive)
}

onUnmounted(() => {
  if (isStaticItem && unregisterStaticItem) {
    unregisterStaticItem({ value: valueProp, label: valueProp });
  }
});

provide("comboboxItem", itemContext);
</script>

<template>
  <template v-if="!isStaticItem || shouldShow">
    <Slot
      :class="cn(comboboxItem, className)"
      v-bind="{
        item: resolvedItem,
        ...restProps,
        ...$attrs,
        ...api?.getItemProps({ item: resolvedItem, ...restProps }),
      }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <template v-if="!slots.default">
          <ComboboxItemText>
            {{ itemText }}
          </ComboboxItemText>
        </template>
        <slot v-else />
        <ComboboxItemIndicator />
      </div>
    </Slot>
  </template>
</template>
```

### ComboboxItemGroup.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroup } from "@midoneui/core/styles/combobox.styles";
import { ComboboxItemGroupLabel } from "@/components/ui/combobox";
import type { Api } from "@zag-js/combobox";
import { provide, inject } from "vue";

const { class: className, label } = defineProps<{
  class?: string;
  label?: string;
}>();

const api = inject<Api>("comboboxApi");
const itemGroupId = { id: crypto.randomUUID() };

provide("comboboxItemGroupId", itemGroupId);
</script>

<template>
  <div
    :class="cn(comboboxItemGroup, className)"
    v-bind="api?.getItemGroupProps(itemGroupId)"
  >
    <ComboboxItemGroupLabel v-if="label">
      {{ label }}
    </ComboboxItemGroupLabel>
    <slot />
  </div>
</template>
```

### ComboboxItemGroupLabel.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemGroupLabel } from "@midoneui/core/styles/combobox.styles";
import type { Api, ItemGroupProps } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const itemGroupId = inject<ItemGroupProps>("comboboxItemGroupId");
</script>

<template>
  <Slot
    :class="cn(comboboxItemGroupLabel, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      }) }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <slot />
    </label>
  </Slot>
</template>
```

### ComboboxItemIndicator.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemIndicator } from "@midoneui/core/styles/combobox.styles";
import { Check } from "lucide-vue-next";
import type { Api, ItemProps } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const item = inject<ItemProps>("comboboxItem");
</script>

<template>
  <Slot
    :class="cn(comboboxItemIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemIndicatorProps(item!) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <Check v-else class="size-3.5" />
    </div>
  </Slot>
</template>
```

### ComboboxItemText.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxItemText } from "@midoneui/core/styles/combobox.styles";
import type { Api, ItemProps } from "@zag-js/combobox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("comboboxApi");
const item = inject<ItemProps>("comboboxItem");
</script>

<template>
  <Slot
    :class="cn(comboboxItemText, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemTextProps(item!) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### ComboboxLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxLabel } from "@midoneui/core/styles/combobox.styles";
import { Label } from "@/components/ui/label";
import { inject } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<any>("comboboxApi");
</script>

<template>
  <Label :class="cn(comboboxLabel, className)" v-bind="api?.getLabelProps()">
    <slot />
  </Label>
</template>
```

### ComboboxPositioner.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxPositioner } from "@midoneui/core/styles/combobox.styles";
import type { Api } from "@zag-js/combobox";
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

const api = inject<Api>("comboboxApi");
</script>

<template>
  <Teleport to="body">
    <Slot
      :class="cn(comboboxPositioner, className)"
      v-bind="{ ...props, ...$attrs, ...api?.getPositionerProps() }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </Slot>
  </Teleport>
</template>
```

### ComboboxRoot.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxRoot } from "@midoneui/core/styles/combobox.styles";
import { provide, computed, ref } from "vue";
import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps } from "@zag-js/vue";
import ComboboxLabel from "./ComboboxLabel.vue";
import ComboboxControl from "./ComboboxControl.vue";
import ComboboxContent from "./ComboboxContent.vue";

defineOptions({ inheritAttrs: false });

const {
  class: className,
  multiple = false,
  selectionBehavior = "clear" as "clear" | "replace" | "preserve",
  value,
  open = undefined,
  comboboxInputPlaceholder,
  label,
} = defineProps<{
  class?: string;
  multiple?: boolean;
  selectionBehavior?: "clear" | "replace" | "preserve";
  value?: string[];
  open?: boolean;
  comboboxInputPlaceholder?: string;
  label?: string;
}>();

const emit = defineEmits<{
  (e: "update:value", value: string[]): void;
}>();

const internalValue = ref(value ?? []);
const internalInputValue = ref("");

const _inputValue = computed({
  get: () => internalInputValue.value,
  set: (val) => { internalInputValue.value = val; },
});

const _value = computed({
  get: () => value !== undefined ? value : internalValue.value,
  set: (val) => {
    internalValue.value = val;
    emit("update:value", val);
  },
});

// Static items self-register from ComboboxItem children
const staticItems = ref<any[]>([]);

provide("registerStaticItem", (item: any) => {
  const key = typeof item === "string" ? item : item.value || item.label;
  if (!staticItems.value.some((i) => (typeof i === "string" ? i : i.value || i.label) === key)) {
    staticItems.value = [...staticItems.value, item];
  }
});

provide("unregisterStaticItem", (item: any) => {
  const key = typeof item === "string" ? item : item.value || item.label;
  staticItems.value = staticItems.value.filter(
    (i) => (typeof i === "string" ? i : i.value || i.label) !== key
  );
});

provide("comboboxInputValue", _inputValue);

const internalCollection = computed(() =>
  combobox.collection({
    items: staticItems.value,
    itemToValue: (item) => (typeof item === "string" ? item : item.value || item.label),
    itemToString: (item) => (typeof item === "string" ? item : item.label || item.value),
  })
);

const displayValue = computed(() => {
  const values = _value.value;
  if (!values.length) return "";
  return values
    .map((v) => {
      const found = staticItems.value.find(
        (item: any) => (typeof item === "string" ? item : item.value || item.label) === v
      );
      return found ? (typeof found === "string" ? found : found.label || found.value) : v;
    })
    .join(", ");
});

provide("comboboxDisplayValue", displayValue);

const service = useMachine(
  combobox.machine,
  computed(() => ({
    multiple,
    selectionBehavior,
    collection: internalCollection.value,
    value: _value.value,
    inputValue: _inputValue.value,
    onValueChange(details) {
      _value.value = details.value;
    },
    onInputValueChange(details) {
      _inputValue.value = details.inputValue;
    },
    open,
    id: crypto.randomUUID(),
  }))
);

const api = computed(() => combobox.connect(service, normalizeProps));
provide("comboboxApi", api);
</script>

<template>
  <div :class="cn(comboboxRoot, className)" :data-multiple="multiple" v-bind="{ ...$attrs, ...api.getRootProps() }">
    <ComboboxLabel v-if="label">{{ label }}</ComboboxLabel>
    <ComboboxControl />
    <ComboboxContent :search-placeholder="comboboxInputPlaceholder">
      <slot />
    </ComboboxContent>
  </div>
</template>
```

### ComboboxTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ChevronsUpDownIcon } from "lucide-vue-next";
import { comboboxTrigger } from "@midoneui/core/styles/combobox.styles";
import { ComboboxClearTrigger } from ".";
import type { Api } from "@zag-js/combobox";
import { inject, type Ref } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  placeholder = "Select Options...",
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  placeholder?: string;
}>();

const api = inject<Api>("comboboxApi");
const displayValue = inject<Ref<string>>("comboboxDisplayValue");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps() }">
    <Button
      variant="ghost"
      v-if="!asChild"
      :class="cn(comboboxTrigger, className)"
    >
      <div>{{ displayValue || placeholder }}</div>
      <ComboboxClearTrigger>Clear</ComboboxClearTrigger>
      <ChevronsUpDownIcon />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

## Usage

```vue
import {
  ComboboxRoot,
  ComboboxItemGroup,
  ComboboxItem,
} from "@/components/ui/combobox";
```

```vue
<ComboboxRoot
  label="Single"
  v-model:value="stateSingle"
  combobox-input-placeholder="Search frameworks..."
  class="w-56"
>
  <ComboboxItemGroup label="Frameworks">
    <ComboboxItem value="React">React</ComboboxItem>
    <ComboboxItem value="Solid">Solid</ComboboxItem>
    <ComboboxItem value="Vue">Vue</ComboboxItem>
    <ComboboxItem value="Svelte">Svelte</ComboboxItem>
    <ComboboxItem value="Vanilla">Vanilla JS</ComboboxItem>
  </ComboboxItemGroup>
</ComboboxRoot>
```

## Examples

### Example 1

```vue
<ComboboxRoot
  label="Single"
  v-model:value="stateSingle"
  combobox-input-placeholder="Search frameworks..."
  class="w-56"
>
  <ComboboxItemGroup label="Frameworks">
    <ComboboxItem value="React">React</ComboboxItem>
    <ComboboxItem value="Solid">Solid</ComboboxItem>
    <ComboboxItem value="Vue">Vue</ComboboxItem>
    <ComboboxItem value="Svelte">Svelte</ComboboxItem>
    <ComboboxItem value="Vanilla">Vanilla JS</ComboboxItem>
  </ComboboxItemGroup>
</ComboboxRoot>
```

### Example 2

```vue
<ComboboxRoot
  label="Multiple"
  v-model:value="stateMultiple"
  combobox-input-placeholder="Search frameworks..."
  class="w-56"
  multiple
>
  <ComboboxItemGroup label="Frameworks">
    <ComboboxItem value="React">React</ComboboxItem>
    <ComboboxItem value="Solid">Solid</ComboboxItem>
    <ComboboxItem value="Vue">Vue</ComboboxItem>
    <ComboboxItem value="Svelte">Svelte</ComboboxItem>
    <ComboboxItem value="Vanilla">Vanilla JS</ComboboxItem>
  </ComboboxItemGroup>
</ComboboxRoot>
```

### Example 3

```vue
<ComboboxRoot
  label="Scrollable"
  v-model:value="stateTimezone"
  combobox-input-placeholder="Search region..."
  class="w-56"
  multiple
>
  <ComboboxItemGroup label="North America">
    <ComboboxItem value="est">Eastern Standard Time (EST)</ComboboxItem>
    <ComboboxItem value="cst">Central Standard Time (CST)</ComboboxItem>
    <ComboboxItem value="mst">Mountain Standard Time (MST)</ComboboxItem>
    <ComboboxItem value="pst">Pacific Standard Time (PST)</ComboboxItem>
    <ComboboxItem value="akst">Alaska Standard Time (AKST)</ComboboxItem>
    <ComboboxItem value="hst">Hawaii Standard Time (HST)</ComboboxItem>
  </ComboboxItemGroup>
  <ComboboxItemGroup label="Europe & Africa">
    <ComboboxItem value="gmt">Greenwich Mean Time (GMT)</ComboboxItem>
    <ComboboxItem value="cet">Central European Time (CET)</ComboboxItem>
    <ComboboxItem value="eet">Eastern European Time (EET)</ComboboxItem>
    <ComboboxItem value="west">Western European Summer Time (WEST)</ComboboxItem>
    <ComboboxItem value="cat">Central Africa Time (CAT)</ComboboxItem>
    <ComboboxItem value="eat">East Africa Time (EAT)</ComboboxItem>
  </ComboboxItemGroup>
  <ComboboxItemGroup label="Asia">
    <ComboboxItem value="msk">Moscow Time (MSK)</ComboboxItem>
    <ComboboxItem value="ist">India Standard Time (IST)</ComboboxItem>
    <ComboboxItem value="jst">Japan Standard Time (JST)</ComboboxItem>
    <ComboboxItem value="kst">Korea Standard Time (KST)</ComboboxItem>
  </ComboboxItemGroup>
</ComboboxRoot>
```

