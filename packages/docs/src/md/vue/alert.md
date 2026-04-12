# Alert

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
```

## Dependency

```bash
npm install lucide-vue-next
```

## Component

### AlertCloseTrigger.vue

```vue
<script lang="ts" setup>
import { X } from "lucide-vue-next";
import { cn } from "@midoneui/core/utils/cn";
import { Slot } from "@/components/ui/slot";
import { alertCloseTrigger } from "@midoneui/core/styles/alert.styles";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const context = inject<{
  present: boolean;
  setPresent: (value: boolean) => void;
} | null>("alertPresent", null);
</script>

<template>
  <Slot
    :class="cn([className, alertCloseTrigger])"
    v-bind="{ ...props, ...$attrs }"
    @click="context?.setPresent(false)"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <X v-else />
    </div>
  </Slot>
</template>
```

### AlertDescription.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Slot } from "@/components/ui/slot";
import { alertDescription } from "@midoneui/core/styles/alert.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();
</script>

<template>
  <Slot
    :class="cn([className, alertDescription])"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### AlertIcon.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Slot } from "@/components/ui/slot";
import { alertIcon } from "@midoneui/core/styles/alert.styles";

const {
  class: className,
  ...props
} = defineProps<{
  class?: string;
}>();
</script>

<template>
  <Slot
    v-if="$slots.default"
    :class="cn([alertIcon, className])"
    data-part="icon"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </Slot>
</template>
```

### AlertRoot.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  alertRootVariants,
  type AlertRootVariants,
} from "@midoneui/core/styles/alert.styles";
import { Presence } from "@/components/ui/presence";
import { ref, provide } from "vue";

const {
  class: className,
  look,
  variant,
  ...rest
} = defineProps<AlertRootVariants & { class?: string }>();

const present = ref(true);
const setPresent = (value: boolean) => {
  present.value = value;
};

provide("alertPresent", { present, setPresent });
</script>

<template>
  <Presence
    :class="
      cn(
        alertRootVariants({
          look,
          variant,
        }),
        className
      )
    "
    v-bind="rest"
    :present="present"
  >
    <slot />
  </Presence>
</template>
```

### AlertTitle.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Slot } from "@/components/ui/slot";
import { alertTitle } from "@midoneui/core/styles/alert.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();
</script>

<template>
  <Slot :class="cn([className, alertTitle])" v-bind="{ ...props, ...$attrs }">
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

## Usage

```vue
import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
  AlertIcon,
} from "@/components/ui/alert";
import { Box } from "@/components/ui/box";
```

```vue
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
```

## Examples

### Example 1

```vue
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
```

### Example 2

```vue
<AlertRoot look="filled" variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="warning">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
```

### Example 3

```vue
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
```

### Example 4

```vue
<AlertRoot look="filled" variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="warning">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
```

### Example 5

```vue
<Box class="p-0">
  <AlertRoot variant="ghost">
    <AlertIcon><Compass /></AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
<Box class="p-0" raised="single">
  <AlertRoot variant="ghost">
    <AlertIcon><Compass /></AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
<Box class="p-0" raised="double">
  <AlertRoot variant="ghost">
    <AlertIcon><Compass /></AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
```

