# Tabs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue

```

## Dependency

```bash
npm install @zag-js/tabs . @zag-js/vue
```

## Component

### TabsContent.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsContent } from "@midoneui/core/styles/tabs.styles";
import type { Api, ContentProps } from "@zag-js/tabs";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ContentProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsContent, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getContentProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### TabsIndicator.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsIndicator } from "@midoneui/core/styles/tabs.styles";
import type { Api } from "@zag-js/tabs";
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

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### TabsList.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsList } from "@midoneui/core/styles/tabs.styles";
import type { Api } from "@zag-js/tabs";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { TabsIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsList, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getListProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
      <TabsIndicator />
    </div>
  </Slot>
</template>
```

### TabsRoot.vue

```vue
<script lang="ts" setup>
import * as tabs from "@zag-js/tabs";
import type { Props } from "@zag-js/tabs";
import { cn } from "@midoneui/core/utils/cn";
import { tabsRoot } from "@midoneui/core/styles/tabs.styles";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(tabs.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => tabs.connect(service, normalizeProps));

provide("tabsApi", api);
</script>

<template>
  <Slot
    :class="cn(tabsRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### TabsTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tabsTrigger } from "@midoneui/core/styles/tabs.styles";
import type { Api, TriggerProps } from "@zag-js/tabs";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  TriggerProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("tabsApi");
</script>

<template>
  <Slot
    :class="cn(tabsTrigger, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps(props) }"
  >
    <slot v-if="asChild" />
    <button v-else>
      <slot />
    </button>
  </Slot>
</template>
```

## Usage

```vue
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
```

```vue

```

## Examples

