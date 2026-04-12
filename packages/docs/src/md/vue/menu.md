# Menu

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuItem value="react"
      ><Activity class="size-4 stroke-1.5" /> React</MenuItem
    >
    <MenuItem value="solid"
      ><Layout class="size-4 stroke-1.5" /> Solid</MenuItem
    >
    <MenuItem value="vue"
      ><Zap class="size-4 stroke-1.5" /> Vue</MenuItem
    >
    <MenuItem value="svelte"
      ><MapPin class="size-4 stroke-1.5" /> Svelte</MenuItem
    >
  </MenuContent>
</MenuRoot>
```

## Dependency

```bash
npm install @zag-js/menu lucide-vue-next . @zag-js/vue
```

## Component

### MenuCheckboxItem.vue

```vue
<script lang="ts" setup>
import type { Api, OptionItemProps } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { Check } from "lucide-vue-next";
import { menuItem } from "@midoneui/core/styles/menu.styles";
import { inject } from "vue";

const {
  shortcut,
  class: className,
  type = "checkbox",
  ...props
} = defineProps<
  Omit<OptionItemProps, "type"> & {
    class?: string;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }
>();

const api = inject<Api>("menuApi");
</script>

<template>
  <div
    :class="cn(menuItem, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getOptionItemProps({
        ...props,
        type,
      }),
    }"
  >
    <div>
      <span
        data-part="item-indicator"
        v-bind="{ ...api?.getItemIndicatorProps(props) }"
      >
        <Check />
      </span>
      <slot />
    </div>
    <div>{{ shortcut }}</div>
  </div>
</template>
```

### MenuContent.vue

```vue
<script lang="ts" setup>
import { MenuPositioner } from "@/components/ui/menu";
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Box } from "@/components/ui/box";
import { Slot } from "@/components/ui/slot";
import { menuContent } from "@midoneui/core/styles/menu.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <MenuPositioner>
    <Slot
      :class="cn(menuContent, className)"
      v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <Box v-else raised="single" :class="cn(menuContent, className)">
        <div><slot /></div>
      </Box>
    </Slot>
  </MenuPositioner>
</template>
```

### MenuIndicator.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { ChevronDown } from "lucide-vue-next";
import { menuIndicator } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/menu";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="$slots.default" />
    <ChevronDown v-else />
  </Slot>
</template>
```

### MenuItem.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { type Api, type ItemProps } from "@zag-js/menu";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { menuItem } from "@midoneui/core/styles/menu.styles";

const {
  class: className,
  shortcut,
  asChild = false,
  ...props
} = defineProps<
  ItemProps & {
    class?: string;
    shortcut?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <div><slot /></div>
      <div>{{ shortcut }}</div>
    </div>
  </Slot>
</template>
```

### MenuItemGroupLabel.vue

```vue
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { menuItemGroupLabel } from "@midoneui/core/styles/menu.styles";
import { inject } from "vue";
import { type Api } from "@zag-js/menu";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
const itemGroupId = inject<string | undefined>("itemGroupId");
</script>

<template>
  <Slot
    :class="cn(menuItemGroupLabel, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getItemGroupLabelProps({ htmlFor: itemGroupId! }),
    }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <slot />
    </label>
  </Slot>
</template>
```

### MenuPositioner.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { menuPositioner } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Teleport to="body" v-if="api?.open">
    <Slot
      :class="cn(menuPositioner, className)"
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

### MenuRadioItem.vue

```vue
<script lang="ts" setup>
import type { Api, OptionItemProps } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { Dot } from "lucide-vue-next";
import { menuItem } from "@midoneui/core/styles/menu.styles";
import { inject } from "vue";

const {
  shortcut,
  class: className,
  asChild = false,
  type = "radio",
  ...props
} = defineProps<
  Omit<OptionItemProps, "type"> & {
    class?: string;
    asChild?: boolean;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }
>();

const api = inject<Api>("menuApi");
</script>

<template>
  <div
    :class="cn(menuItem, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getOptionItemProps({
        ...props,
        type,
      }),
    }"
  >
    <div>
      <span
        data-part="item-indicator"
        v-bind="{ ...api?.getItemIndicatorProps(props) }"
      >
        <Dot />
      </span>
      <slot />
    </div>
    <div>{{ shortcut }}</div>
  </div>
</template>
```

### MenuRadioItemGroup.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { menuRadioItemGroup } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";
import { inject, provide } from "vue";
import { type Api } from "@zag-js/menu";
import { MenuItemGroupLabel } from ".";

const {
  class: className,
  asChild = false,
  label,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  label?: string;
}>();

const api = inject<Api>("menuApi");
const id = crypto.randomUUID();
provide("itemGroupId", id);
</script>

<template>
  <Slot
    :class="cn(menuRadioItemGroup, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getItemGroupProps({ id }),
    }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <MenuItemGroupLabel v-if="label">{{ label }}</MenuItemGroupLabel>
      <slot />
    </div>
  </Slot>
</template>
```

### MenuRoot.vue

```vue
<script lang="ts" setup>
import * as menu from "@zag-js/menu";
import type { Props } from "@zag-js/menu";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { menuRoot } from "@midoneui/core/styles/menu.styles";

const {
  class: className,
  asChild = false,
  closeOnSelect = false,
  open = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(menu.machine, {
  ...props,
  open,
  closeOnSelect,
  id: crypto.randomUUID(),
});
const api = computed(() => menu.connect(service, normalizeProps));

provide("menuApi", api);
</script>

<template>
  <Slot :class="cn(menuRoot, className)" v-bind="{ ...props, ...$attrs }">
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### MenuSeparator.vue

```vue
<script lang="ts" setup>
import type { Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { menuSeparator } from "@midoneui/core/styles/menu.styles";
import { Slot } from "@/components/ui/slot";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuSeparator, className)"
    v-bind="{
      ...props,
      ...$attrs,
      ...api?.getSeparatorProps(),
    }"
  >
    <slot v-if="asChild" />
    <hr v-else>
      <slot />
    </hr>
  </Slot>
</template>
```

### MenuTrigger.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Button } from "@/components/ui/button";
import { Slot } from "@/components/ui/slot";
import { menuTrigger } from "@midoneui/core/styles/menu.styles";
import { MenuIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button variant="ghost" v-if="!asChild" :class="cn(menuTrigger, className)">
      <slot />
      <MenuIndicator />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

### MenuTriggerItem.vue

```vue
<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { ChevronRight } from "lucide-vue-next";
import { Slot } from "@/components/ui/slot";
import { menuItem } from "@midoneui/core/styles/menu.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("menuApi");
</script>

<template>
  <Slot
    :class="cn(menuItem, className)"
    v-bind="{ ...api?.getTriggerItemProps(api), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <div><slot /></div>
      <ChevronRight data-part="nested-menu-chevron" />
    </div>
  </Slot>
</template>
```

## Usage

```vue
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuSeparator,
  MenuTriggerItem,
  MenuRadioItemGroup,
  MenuRadioItem,
} from "@/components/ui/menu";
```

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuItem value="react"
      ><Activity class="size-4 stroke-1.5" /> React</MenuItem
    >
    <MenuItem value="solid"
      ><Layout class="size-4 stroke-1.5" /> Solid</MenuItem
    >
    <MenuItem value="vue"
      ><Zap class="size-4 stroke-1.5" /> Vue</MenuItem
    >
    <MenuItem value="svelte"
      ><MapPin class="size-4 stroke-1.5" /> Svelte</MenuItem
    >
  </MenuContent>
</MenuRoot>
```

## Examples

### Example 1

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuItem value="react"
      ><Activity class="size-4 stroke-1.5" /> React</MenuItem
    >
    <MenuItem value="solid"
      ><Layout class="size-4 stroke-1.5" /> Solid</MenuItem
    >
    <MenuItem value="vue"
      ><Zap class="size-4 stroke-1.5" /> Vue</MenuItem
    >
    <MenuItem value="svelte"
      ><MapPin class="size-4 stroke-1.5" /> Svelte</MenuItem
    >
  </MenuContent>
</MenuRoot>
```

### Example 2

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuItem value="react">React</MenuItem>
    <MenuItem value="solid">Solid</MenuItem>
    <MenuItem value="vue">Vue</MenuItem>
    <MenuItem value="svelte">Svelte</MenuItem>
    <MenuSeparator />
    <MenuItem value="react">React</MenuItem>
    <MenuItem value="solid">Solid</MenuItem>
    <MenuItem value="vue">Vue</MenuItem>
    <MenuItem value="svelte">Svelte</MenuItem>
  </MenuContent>
</MenuRoot>
```

### Example 3

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuItem shortcut="⇧⌘P" value="react"> React </MenuItem>
    <MenuItem shortcut="⌘B" value="solid"> Solid </MenuItem>
    <MenuItem shortcut="⌘S" value="vue"> Vue </MenuItem>
    <MenuItem shortcut="⌘K" value="svelte"> Svelte </MenuItem>
    <MenuSeparator />
    <MenuItem value="react">React</MenuItem>
    <MenuItem value="solid">Solid</MenuItem>
    <MenuItem value="vue">Vue</MenuItem>
    <MenuItem shortcut="⇧⌘Q" value="svelte"> Svelte </MenuItem>
  </MenuContent>
</MenuRoot>
```

### Example 4

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuItem shortcut="⇧⌘P" value="react"> React </MenuItem>
    <MenuItem shortcut="⌘B" value="solid"> Solid </MenuItem>
    <MenuItem shortcut="⌘S" value="vue"> Vue </MenuItem>
    <MenuItem shortcut="⌘K" value="svelte"> Svelte </MenuItem>
    <MenuRoot
      :positioning="{
        placement: 'right-start',
        gutter: 12,
      }"
    >
      <MenuTriggerItem>Frameworks</MenuTriggerItem>
      <MenuContent>
        <MenuItem value="react">React</MenuItem>
        <MenuItem value="solid">Solid</MenuItem>
        <MenuItem value="vue">Vue</MenuItem>
        <MenuItem value="svelte">Svelte</MenuItem>
      </MenuContent>
    </MenuRoot>
    <MenuSeparator />
    <MenuItem disabled value="react"> React </MenuItem>
    <MenuItem value="solid">Solid</MenuItem>
    <MenuItem value="vue">Vue</MenuItem>
    <MenuItem shortcut="⇧⌘Q" value="svelte"> Svelte </MenuItem>
  </MenuContent>
</MenuRoot>
```

### Example 5

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuCheckboxItem
      :checked="react"
      :onCheckedChange="(checked) => (react = checked)"
      value="checked"
    >
      React
    </MenuCheckboxItem>
    <MenuCheckboxItem
      :checked="solid"
      :onCheckedChange="(checked) => (solid = checked)"
      value="checked"
    >
      Solid
    </MenuCheckboxItem>
    <MenuCheckboxItem
      :checked="vue"
      :onCheckedChange="(checked) => (vue = checked)"
      value="checked"
    >
      Vue
    </MenuCheckboxItem>
    <MenuCheckboxItem
      :checked="svelte"
      :onCheckedChange="(checked) => (svelte = checked)"
      value="checked"
    >
      Svelte
    </MenuCheckboxItem>
  </MenuContent>
</MenuRoot>
```

### Example 6

```vue
<MenuRoot class="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuContent>
    <MenuRadioItemGroup label="Frameworks">
      <MenuRadioItem
        v-for="framework in ['React', 'Solid', 'Vue', 'Svelte']"
        :key="framework"
        :value="framework"
        :checked="framework == value"
        :onCheckedChange="
          (checked) => (checked ? (value = framework) : '')
        "
      >
        {{ framework }}
      </MenuRadioItem>
    </MenuRadioItemGroup>
  </MenuContent>
</MenuRoot>
```

