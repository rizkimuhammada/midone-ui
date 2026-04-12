# Avatar

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<AvatarRoot fallback-text="PA" src="https://i.pravatar.cc/300" />
```

## Dependency

```bash
npm install @zag-js/avatar @zag-js/vue
```

## Component

### AvatarFallback.vue

```vue
<script lang="ts" setup>
import type { Api } from "@zag-js/avatar";
import { cn } from "@midoneui/core/utils/cn";
import { avatarFallback } from "@midoneui/core/styles/avatar.styles";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("avatarApi");
</script>

<template>
  <Slot
    :class="cn(avatarFallback, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getFallbackProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
```

### AvatarImage.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { avatarImage } from "@midoneui/core/styles/avatar.styles";
import { inject } from "vue";
import type { Api } from "@zag-js/avatar";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("avatarApi");
</script>

<template>
  <img
    :class="cn(avatarImage, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getImageProps() }"
  />
</template>
```

### AvatarRoot.vue

```vue
<script lang="ts" setup>
import * as avatar from "@zag-js/avatar";
import { provide, computed } from "vue";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/avatar";
import { cn } from "@midoneui/core/utils/cn";
import { avatarRootVariants, type AvatarRootVariants } from "@midoneui/core/styles/avatar.styles";
import { Slot } from "@/components/ui/slot";
import AvatarFallback from "./AvatarFallback.vue";
import AvatarImage from "./AvatarImage.vue";

const {
  class: className,
  bordered,
  asChild = false,
  src,
  fallbackText,
  ...props
} = defineProps<
  AvatarRootVariants &
    Partial<Props> & {
      class?: string;
      asChild?: boolean;
      src?: string;
      fallbackText?: string;
    }
>();

const service = useMachine(avatar.machine, {
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => avatar.connect(service, normalizeProps));

provide("avatarApi", api);
</script>

<template>
  <Slot
    :class="
      cn(
        avatarRootVariants({
          bordered,
        }),
        className
      )
    "
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <template v-else>
        <AvatarFallback v-if="fallbackText">{{ fallbackText }}</AvatarFallback>
        <AvatarImage v-if="src" :src="src" />
      </template>
    </div>
  </Slot>
</template>
```

## Usage

```vue
import {
  AvatarRoot,
} from "@/components/ui/avatar";
```

```vue
<AvatarRoot fallback-text="PA" src="https://i.pravatar.cc/300" />
```

## Examples

### Example 1

```vue
<AvatarRoot :bordered="false" fallback-text="PA" src="https://i.pravatar.cc/300" />
```

### Example 2

```vue
<AvatarRoot class="rounded-full" fallback-text="PA" src="https://i.pravatar.cc/300" />
```

### Example 3

```vue
<AvatarRoot class="rounded-full" :bordered="false" fallback-text="PA" src="https://i.pravatar.cc/300" />
```

