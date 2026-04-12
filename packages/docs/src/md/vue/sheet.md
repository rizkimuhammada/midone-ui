# Sheet

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<div class="text-sm text-muted-foreground">
  <SheetRoot>
    <SheetTrigger>Open Sheet</SheetTrigger>
    <SheetContent>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
      <div class="grid gap-4 mt-2">
        <div class="grid gap-2.5">
          <Label htmlFor="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div class="grid gap-2.5">
          <Label htmlFor="username-1">Username</Label>
          <Input
            id="username-1"
            name="username"
            defaultValue="@peduarte"
          />
        </div>
      </div>
      <div class="flex gap-2 justify-end mt-7">
        <SheetCloseTrigger>
          <SquareX />
          Close
        </SheetCloseTrigger>
        <Button variant="primary">
          <Save />
          Submit
        </Button>
      </div>
      <SheetCloseTrigger />
    </SheetContent>
  </SheetRoot>
</div>
```

## Dependency

```bash
npm install @zag-js/dialog lucide-vue-next @zag-js/vue
```

## Component

### SheetBackdrop.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sheetBackdrop } from "@midoneui/core/styles/sheet.styles";
import type { Api } from "@zag-js/dialog";
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

const api = inject<Api>("sheetApi");
</script>

<template>
  <Slot
    :class="cn(sheetBackdrop, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getBackdropProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SheetCloseTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sheetCloseTrigger } from "@midoneui/core/styles/sheet.styles";
import { Button } from "@/components/ui/button";
import type { Api } from "@zag-js/dialog";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import { X } from "lucide-vue-next";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  look = "outline",
  variant = "secondary",
  size,
  asChild = false,
  ...props
} = defineProps<
  ButtonVariants & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("sheetApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getCloseTriggerProps() }">
    <Button
      variant="ghost"
      v-if="!$slots.default"
      :class="cn(sheetCloseTrigger, className)"
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

### SheetContent.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sheetContent } from "@midoneui/core/styles/sheet.styles";
import { Box } from "@/components/ui/box";
import { SheetBackdrop, SheetPositioner } from "@/components/ui/sheet";
import type { Api } from "@zag-js/dialog";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  side = "right",
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
  side?: "top" | "right" | "bottom" | "left";
}>();

const api = inject<Api>("sheetApi");
</script>

<template>
  <Teleport to="body">
    <SheetBackdrop />
    <SheetPositioner>
      <Slot v-bind="{ ...props, ...$attrs, ...api?.getContentProps() }">
        <slot v-if="asChild" />
        <div v-else>
          <Box
            raised="double"
            :data-side="side"
            :class="cn(sheetContent, className)"
            v-bind="{ ...props }"
          >
            <div><slot /></div>
          </Box>
        </div>
      </Slot>
    </SheetPositioner>
  </Teleport>
</template>
```

### SheetDescription.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sheetDescription } from "@midoneui/core/styles/sheet.styles";
import type { Api } from "@zag-js/dialog";
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

const api = inject<Api>("sheetApi");
</script>

<template>
  <Slot
    :class="cn(sheetDescription, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getDescriptionProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SheetPositioner.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sheetPositioner } from "@midoneui/core/styles/sheet.styles";
import type { Api } from "@zag-js/dialog";
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

const api = inject<Api>("sheetApi");
</script>

<template>
  <Slot
    :class="cn(sheetPositioner, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getPositionerProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SheetRoot.vue

```vue
<script lang="ts" setup>
import { provide, computed } from "vue";
import * as dialog from "@zag-js/dialog";
import type { Props } from "@zag-js/dialog";
import { useMachine, normalizeProps } from "@zag-js/vue";

const {
  class: className,
  asChild = false,
  open = undefined,
  closeOnInteractOutside = undefined,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    asChild?: boolean;
  }
>();

const service = useMachine(dialog.machine, {
  ...props,
  get open() {
    return open;
  },
  closeOnInteractOutside,
  id: crypto.randomUUID(),
});

const api = computed(() => dialog.connect(service, normalizeProps));

provide("sheetApi", api);
</script>

<template>
  <slot />
</template>
```

### SheetTitle.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sheetTitle } from "@midoneui/core/styles/sheet.styles";
import type { Api } from "@zag-js/dialog";
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

const api = inject<Api>("sheetApi");
</script>

<template>
  <Slot
    :class="cn(sheetTitle, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getTitleProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### SheetTrigger.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sheetTrigger } from "@midoneui/core/styles/sheet.styles";
import { Button } from "@/components/ui/button";
import type { Api } from "@zag-js/dialog";
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

const api = inject<Api>("sheetApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps() }">
    <Button
      variant="secondary"
      look="outline"
      v-if="!asChild"
      :class="cn(sheetTrigger, className)"
    >
      <slot />
    </Button>
    <slot v-else />
  </Slot>
</template>
```

## Usage

```vue
import {
  SheetRoot,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetCloseTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
```

```vue
<div class="text-sm text-muted-foreground">
  <SheetRoot>
    <SheetTrigger>Open Sheet</SheetTrigger>
    <SheetContent>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
      <div class="grid gap-4 mt-2">
        <div class="grid gap-2.5">
          <Label htmlFor="name-1">Name</Label>
          <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
        </div>
        <div class="grid gap-2.5">
          <Label htmlFor="username-1">Username</Label>
          <Input
            id="username-1"
            name="username"
            defaultValue="@peduarte"
          />
        </div>
      </div>
      <div class="flex gap-2 justify-end mt-7">
        <SheetCloseTrigger>
          <SquareX />
          Close
        </SheetCloseTrigger>
        <Button variant="primary">
          <Save />
          Submit
        </Button>
      </div>
      <SheetCloseTrigger />
    </SheetContent>
  </SheetRoot>
</div>
```

## Examples

### Example 1

```vue
<div class="text-sm text-muted-foreground">
  <SheetRoot>
    <SheetTrigger>Custom Close</SheetTrigger>
    <SheetContent>
      <SheetTitle>Share Link</SheetTitle>
      <SheetDescription>
        Anyone who has this link will be able to view this.
      </SheetDescription>
      <div class="grid gap-4 mt-2">
        <Input
          id="name-1"
          name="name"
          defaultValue="https://midone-ui.com/docs/installation"
        />
      </div>
      <div class="flex gap-2 mt-5">
        <SheetCloseTrigger>
          <ExternalLink />
          Share Link
        </SheetCloseTrigger>
      </div>
    </SheetContent>
  </SheetRoot>
</div>
```

