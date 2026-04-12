# Toast

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue

```

## Dependency

```bash
npm install lucide-vue-next @zag-js/toast @zag-js/vue .
```

## Component

### ToastCloseTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { toastCloseTrigger } from "@midoneui/core/styles/toast.styles";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";
import { X } from "lucide-vue-next";
import type { Api } from "@zag-js/toast";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  look = "outline",
  variant = "secondary",
  size,
  ...props
} = defineProps<
  ButtonVariants & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("toastApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getCloseTriggerProps(), ...props, ...$attrs }">
    <Button
      variant="ghost"
      v-if="!$slots.default"
      :class="cn(toastCloseTrigger, className)"
      v-bind="{ ...props }"
    >
      <X class="size-4" />
    </Button>
    <template v-else>
      <slot v-if="asChild" />
      <Button
        v-else
        :class="
          cn(buttonVariants({ look, variant, size }), className)
        "
      >
        <slot />
      </Button>
    </template>
  </Slot>
</template>
```

### ToastDescription.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { toastDescription } from "@midoneui/core/styles/toast.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/toast";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("toastApi");
</script>

<template>
  <Slot
    :class="cn(toastDescription, className)"
    v-bind="{ ...api?.getDescriptionProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### ToastItem.vue

```vue
<script lang="ts" setup>
import * as toast from "@zag-js/toast";
import { provide, computed } from "vue";
import { useMachine, normalizeProps } from "@zag-js/vue";

const { toastGroup, serviceGroup, index } = defineProps<{
  class?: string;
  asChild?: boolean;
  toastGroup: toast.Options;
  serviceGroup: toast.GroupService;
  index: number;
}>();

const composedProps = computed(() => ({
  ...toastGroup,
  index,
  parent: serviceGroup,
}));
const service = useMachine(toast.machine, composedProps);
const api = toast.connect(service, normalizeProps);

provide("toastApi", api);
</script>

<template>
  <slot
    :toast="{
      ...api,
      id: toastGroup.id,
    }"
  />
</template>
```

### ToastRoot.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { toastRoot } from "@midoneui/core/styles/toast.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/toast";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  raised = "single",
  ...props
} = defineProps<
  BoxVariants & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("toastApi");
</script>

<template>
  <Slot
    :class="cn([boxVariants({ raised }), toastRoot, className])"
    v-bind="{ ...api?.getRootProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <span v-bind="{ ...api?.getGhostBeforeProps() }" />
      <div data-scope="toast" data-part="progressbar" />
      <slot />
      <span v-bind="{ ...api?.getGhostAfterProps() }" />
    </div>
  </Slot>
</template>
```

### ToastTitle.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { toastTitle } from "@midoneui/core/styles/toast.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/toast";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("toastApi");
</script>

<template>
  <Slot
    :class="cn(toastTitle, className)"
    v-bind="{ ...api?.getTitleProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### ToasterContainer.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import * as toast from "@zag-js/toast";
import { toasterContainer } from "@midoneui/core/styles/toast.styles";
import type { Store } from "@zag-js/toast";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed } from "vue";
import { ToastItem } from ".";

const {
  class: className,
  asChild = false,
  toaster,
  ...props
} = defineProps<{ class?: string; asChild?: boolean; toaster: Store }>();

const serviceGroup = useMachine(toast.group.machine, {
  id: crypto.randomUUID(),
  store: toaster,
});
const apiGroup = computed(() =>
  toast.group.connect(serviceGroup, normalizeProps)
);
</script>

<template>
  <Teleport to="body">
    <div
      :class="cn(toasterContainer, className)"
      v-bind="{ ...apiGroup?.getGroupProps(), ...props, ...$attrs }"
    >
      <ToastItem
        v-for="(toastGroup, index) in apiGroup.getToasts()"
        :key="toastGroup.id"
        :index="index"
        :toastGroup="toastGroup"
        :serviceGroup="serviceGroup"
        v-slot="{ toast }"
      >
        <slot :toast="toast" />
      </ToastItem>
    </div>
  </Teleport>
</template>
```

## Usage

```vue
import { Button } from "@/components/ui/button";
import {
  toaster,
  ToasterContainer,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from "@/components/ui/toast";
```

```vue

```

## Examples

