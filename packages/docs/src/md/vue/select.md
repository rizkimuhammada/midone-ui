# Select

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<SelectRoot
  label="Single"
  v-model:value="stateSingle"
  placeholder="Select a Framework"
  class="w-56"
>
  <SelectItemGroup label="Frameworks">
    <SelectItem value="React" />
    <SelectItem value="Solid" />
    <SelectItem value="Vue" />
    <SelectItem value="Svelte" />
    <SelectItem value="Vanilla">Vanilla JS</SelectItem>
  </SelectItemGroup>
</SelectRoot>
```

## Dependency

```bash
npm install @zag-js/select . lucide-vue-next @zag-js/vue
```

## Component

### SelectClearTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectClearTrigger } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getClearTriggerProps(), ...props, ...$attrs }">
    <slot v-if="asChild" />
    <span v-else :class="cn(selectClearTrigger, className)"><slot /></span>
  </Slot>
</template>
```

### SelectContent.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectContent } from "@midoneui/core/styles/select.styles";
import { Box } from "@/components/ui/box";
import { SelectPositioner } from ".";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<Api>("selectApi");
</script>

<template>
  <SelectPositioner>
    <div v-bind="api?.getContentProps()">
      <Box raised="single" :class="cn(selectContent, className)">
        <div><slot /></div>
      </Box>
    </div>
  </SelectPositioner>
</template>
```

### SelectControl.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectControl } from "@midoneui/core/styles/select.styles";
import { SelectTrigger, SelectValueText } from ".";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<Api>("selectApi");
const selectPlaceholder = inject<string>("selectPlaceholder");
</script>

<template>
  <div :class="cn(selectControl, className)" v-bind="api?.getControlProps()">
    <SelectTrigger>
      <SelectValueText :placeholder="selectPlaceholder" />
    </SelectTrigger>
  </div>
</template>
```

### SelectHiddenSelect.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectHiddenSelect } from "@midoneui/core/styles/select.styles";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <select
    :class="cn(selectHiddenSelect, className)"
    v-bind="{ ...api?.getHiddenSelectProps(), ...props, ...$attrs }"
  />
</template>
```

### SelectIndicator.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectIndicator } from "@midoneui/core/styles/select.styles";
import { ChevronDownIcon } from "lucide-vue-next";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot
    :class="cn(selectIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <ChevronDownIcon v-else class="size-3.5" />
    </div>
  </Slot>
</template>
```

### SelectItem.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItem } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { SelectItemIndicator, SelectItemText } from ".";
import type { Api, ItemProps } from "@zag-js/select";
import { provide, inject, computed, reactive, watchEffect, onUnmounted, useSlots } from "vue";

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

const api = inject<Api>("selectApi");
const registerStaticItem = inject<((item: any) => void) | undefined>("registerStaticItem", undefined);
const unregisterStaticItem = inject<((item: any) => void) | undefined>("unregisterStaticItem", undefined);
const slots = useSlots();

const isStaticItem = itemProp === undefined && valueProp !== undefined;
const displayLabel = textProp ?? valueProp ?? "";

const resolvedItem = computed(() => {
  if (itemProp !== undefined) return itemProp;
  if (valueProp !== undefined) return { value: valueProp, label: displayLabel };
  return undefined;
});

const itemContext = reactive({ item: null as any });
watchEffect(() => {
  itemContext.item = resolvedItem.value;
});

if (isStaticItem) {
  watchEffect(() => {
    registerStaticItem?.({ value: valueProp, label: displayLabel });
  }, { flush: 'sync' });
}

onUnmounted(() => {
  if (isStaticItem && unregisterStaticItem) {
    unregisterStaticItem({ value: valueProp, label: displayLabel });
  }
});

provide("selectItem", itemContext);
</script>

<template>
  <Slot
    :class="cn(selectItem, className)"
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
        <SelectItemText>{{ displayLabel }}</SelectItemText>
      </template>
      <slot v-else />
      <SelectItemIndicator />
    </div>
  </Slot>
</template>
```

### SelectItemGroup.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemGroup } from "@midoneui/core/styles/select.styles";
import { SelectItemGroupLabel } from "@/components/ui/select";
import type { Api } from "@zag-js/select";
import { provide, inject } from "vue";

const { class: className, label } = defineProps<{
  class?: string;
  label?: string;
}>();

const api = inject<Api>("selectApi");
const itemGroupId = { id: crypto.randomUUID() };

provide("selectItemGroup", { id: itemGroupId.id });
</script>

<template>
  <div
    :class="cn(selectItemGroup, className)"
    v-bind="api?.getItemGroupProps(itemGroupId)"
  >
    <SelectItemGroupLabel v-if="label">
      {{ label }}
    </SelectItemGroupLabel>
    <slot />
  </div>
</template>
```

### SelectItemGroupLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemGroupLabel } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemGroupProps } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
const itemGroupId = inject<ItemGroupProps>("selectItemGroup");
</script>

<template>
  <Slot
    :class="cn(selectItemGroupLabel, className)"
    v-bind="{ ...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      }), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <label v-else><slot /></label>
  </Slot>
</template>
```

### SelectItemIndicator.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemIndicator } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/select";
import { Check } from "lucide-vue-next";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
const item = inject<ItemProps>("selectItem");
</script>

<template>
  <Slot
    :class="cn(selectItemIndicator, className)"
    v-bind="{ ...api?.getItemIndicatorProps(item!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <Check v-else class="size-3.5" />
    </div>
  </Slot>
</template>
```

### SelectItemText.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectItemText } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
const item = inject<ItemProps>("selectItem");
</script>

<template>
  <Slot
    :class="cn(selectItemText, className)"
    v-bind="{ ...api?.getItemTextProps(item!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SelectLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectLabel } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { Label } from "@/components/ui/label";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }">
    <slot v-if="asChild" />
    <Label v-else :class="cn(selectLabel, className)"><slot /></Label>
  </Slot>
</template>
```

### SelectPositioner.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectPositioner } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Teleport to="body">
    <Slot
      :class="cn(selectPositioner, className)"
      v-bind="{ ...api?.getPositionerProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <div v-else><slot /></div>
    </Slot>
  </Teleport>
</template>
```

### SelectRoot.vue

```vue
<script lang="ts" setup>
import * as select from "@zag-js/select";
import type { Props } from "@zag-js/select";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide, ref } from "vue";
import { selectRoot } from "@midoneui/core/styles/select.styles";
import SelectLabel from "./SelectLabel.vue";
import SelectControl from "./SelectControl.vue";
import SelectContent from "./SelectContent.vue";
import { SelectHiddenSelect } from ".";

defineOptions({ inheritAttrs: false });

const {
  class: className,
  multiple,
  open = undefined,
  closeOnSelect,
  value,
  label,
  placeholder,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    label?: string;
    placeholder?: string;
  }
>();

const emit = defineEmits<{
  (e: "update:value", value: string[]): void;
}>();

const internalValue = ref(value ?? []);

const _value = computed({
  get: () => (value !== undefined ? value : internalValue.value),
  set: (val) => {
    internalValue.value = val;
    emit("update:value", val);
  },
});

const id = crypto.randomUUID();
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

const internalCollection = computed(() =>
  select.collection({
    items: staticItems.value,
    itemToValue: (item) => (typeof item === "string" ? item : item.value || item.label),
    itemToString: (item) => (typeof item === "string" ? item : item.label || item.value),
  })
);

const service = useMachine(
  select.machine,
  computed(() => ({
    ...props,
    ...(multiple !== undefined ? { multiple } : {}),
    ...(open !== undefined ? { open } : {}),
    ...(closeOnSelect !== undefined ? { closeOnSelect } : {}),
    collection: internalCollection.value,
    value: _value.value,
    onValueChange(details) {
      _value.value = details.value;
    },
    id,
  }))
);

const selectApi = computed(() => select.connect(service, normalizeProps));

provide("selectApi", selectApi);
provide("selectPlaceholder", placeholder);
</script>

<template>
  <div
    :class="cn(selectRoot, className)"
    :data-multiple="multiple"
    v-bind="{ ...$attrs, ...selectApi.getRootProps() }"
  >
    <SelectLabel v-if="label">{{ label }}</SelectLabel>
    <SelectControl />
    <SelectContent>
      <slot />
    </SelectContent>
    <SelectHiddenSelect />
  </div>
</template>
```

### SelectTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectTrigger } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";
import { SelectClearTrigger, SelectIndicator } from ".";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button
      variant="ghost"
      v-if="!asChild"
      :class="cn(selectTrigger, className)"
    >
      <slot />
      <SelectClearTrigger>Clear</SelectClearTrigger>
      <SelectIndicator />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

### SelectValueText.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectValueText } from "@midoneui/core/styles/select.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  placeholder,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  placeholder?: string;
}>();

const api = inject<Api>("selectApi");
</script>

<template>
  <Slot
    :class="cn(selectValueText, className)"
    v-bind="{ ...api?.getValueTextProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>{{ api?.valueAsString || placeholder }}</div>
  </Slot>
</template>
```

## Usage

```vue
import {
  SelectRoot,
  SelectItemGroup,
  SelectItem,
} from "@/components/ui/select";
```

```vue
<SelectRoot
  label="Single"
  v-model:value="stateSingle"
  placeholder="Select a Framework"
  class="w-56"
>
  <SelectItemGroup label="Frameworks">
    <SelectItem value="React" />
    <SelectItem value="Solid" />
    <SelectItem value="Vue" />
    <SelectItem value="Svelte" />
    <SelectItem value="Vanilla">Vanilla JS</SelectItem>
  </SelectItemGroup>
</SelectRoot>
```

## Examples

### Example 1

```vue
<SelectRoot
  label="Single"
  v-model:value="stateSingle"
  placeholder="Select a Framework"
  class="w-56"
>
  <SelectItemGroup label="Frameworks">
    <SelectItem value="React" />
    <SelectItem value="Solid" />
    <SelectItem value="Vue" />
    <SelectItem value="Svelte" />
    <SelectItem value="Vanilla">Vanilla JS</SelectItem>
  </SelectItemGroup>
</SelectRoot>
```

### Example 2

```vue
<SelectRoot
  label="Multiple"
  v-model:value="stateMultiple"
  placeholder="Select Frameworks"
  class="w-56"
  multiple
>
  <SelectItemGroup label="Frameworks">
    <SelectItem value="React" />
    <SelectItem value="Solid" />
    <SelectItem value="Vue" />
    <SelectItem value="Svelte" />
    <SelectItem value="Vanilla">Vanilla JS</SelectItem>
  </SelectItemGroup>
</SelectRoot>
```

### Example 3

```vue
<SelectRoot
  label="Scrollable"
  v-model:value="stateTimezone"
  placeholder="Select a Timezone"
  class="w-56"
  multiple
>
  <SelectItemGroup label="North America">
    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
  </SelectItemGroup>
  <SelectItemGroup label="Europe & Africa">
    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
    <SelectItem value="cet">Central European Time (CET)</SelectItem>
    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
    <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
  </SelectItemGroup>
  <SelectItemGroup label="Asia">
    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
  </SelectItemGroup>
</SelectRoot>
```

