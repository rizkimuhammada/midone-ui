# Pagination

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<PaginationRoot :count="5000" :pageSize="10" :siblingCount="2" />
```

## Dependency

```bash
npm install @zag-js/pagination @zag-js/vue
```

## Component

### PaginationContext.vue

```vue
<script setup lang="ts">
import type { Api } from "@zag-js/pagination";
import { inject } from "vue";

const api = inject<Api>("paginationApi");
</script>

<template>
  <slot :pagination="api"></slot>
</template>
```

### PaginationEllipsis.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationEllipsis } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, EllipsisProps } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  EllipsisProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationEllipsis, className)"
    v-bind="{ ...api?.getEllipsisProps(props), ...props, ...$attrs }"
  >
    <div v-if="!$slots.default">…</div>
    <template v-else>
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </template>
  </Slot>
</template>
```

### PaginationItem.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationItem } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/pagination";
import { inject } from "vue";

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

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### PaginationNextTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationNextTrigger } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationNextTrigger, className)"
    v-bind="{ ...api?.getNextTriggerProps(), ...props, ...$attrs }"
  >
    <template v-if="asChild">
      <slot />
    </template>
    <div v-else>
      <slot>Next</slot>
    </div>
  </Slot>
</template>
```

### PaginationPrevTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { paginationPrevTrigger } from "@midoneui/core/styles/pagination.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/pagination";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("paginationApi");
</script>

<template>
  <Slot
    :class="cn(paginationPrevTrigger, className)"
    v-bind="{ ...api?.getPrevTriggerProps(), ...props, ...$attrs }"
  >
    <template v-if="asChild">
      <slot />
    </template>
    <div v-else>
      <slot>Previous</slot>
    </div>
  </Slot>
</template>
```

### PaginationRoot.vue

```vue
<script lang="ts" setup>
import * as pagination from "@zag-js/pagination";
import type { Props } from "@zag-js/pagination";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { paginationRoot } from "@midoneui/core/styles/pagination.styles";

import PaginationEllipsis from "./PaginationEllipsis.vue";
import PaginationItem from "./PaginationItem.vue";
import PaginationNextTrigger from "./PaginationNextTrigger.vue";
import PaginationPrevTrigger from "./PaginationPrevTrigger.vue";

const {
  class: className,
  asChild = false,
  count,
  pageSize,
  siblingCount,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(pagination.machine, {
  ...props,
  count,
  pageSize,
  siblingCount,
  id: crypto.randomUUID(),
});
const api = computed(() => pagination.connect(service, normalizeProps));

provide("paginationApi", api);
</script>

<template>
  <Slot
    :class="cn(paginationRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <template v-else>
        <PaginationPrevTrigger />
        <template v-for="(page, index) in api?.pages" :key="index">
          <PaginationItem v-if="page.type === 'page'" v-bind="{ ...page }">
            {{ page.value }}
          </PaginationItem>
          <PaginationEllipsis v-else :index="index" />
        </template>
        <PaginationNextTrigger />
      </template>
    </div>
  </Slot>
</template>
```

## Usage

```vue
import { PaginationRoot } from "@/components/ui/pagination";
```

```vue
<PaginationRoot :count="5000" :pageSize="10" :siblingCount="2" />
```

