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
import { SquareX, Save, ExternalLink } from "lucide-react";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <SheetRoot>
                  <SheetTrigger>Open Sheet</SheetTrigger>
                  <SheetContent>
                    <SheetTitle>Sheet Title</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </SheetDescription>
                    <div className="grid gap-4 mt-2">
                      <div className="grid gap-2.5">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                          id="name-1"
                          name="name"
                          defaultValue="Pedro Duarte"
                        />
                      </div>
                      <div className="grid gap-2.5">
                        <Label htmlFor="username-1">Username</Label>
                        <Input
                          id="username-1"
                          name="username"
                          defaultValue="@peduarte"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end mt-7">
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/dialog</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/sheet/SheetRoot.vue">
          {`
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
  open,
  closeOnInteractOutside,
  id: crypto.randomUUID(),
});

const api = computed(() => dialog.connect(service, normalizeProps));

provide("sheetApi", api);
</script>

<template>
  <slot />
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/SheetTrigger.vue">
          {`
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
    <Button v-if="!asChild" :class="cn(sheetTrigger, className)">
      <slot />
    </Button>
    <slot v-else />
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/SheetBackdrop.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/SheetPositioner.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/SheetContent.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/SheetTitle.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/SheetDescription.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/SheetCloseTrigger.vue">
          {`
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
  filled,
  variant,
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
          cn(buttonVariants({ filled, variant, size, className }), className)
        "
      >
        <slot />
      </Button>
    </template>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/sheet/index.ts">
          {`
export { default as SheetRoot } from "./SheetRoot.vue";
export { default as SheetTrigger } from "./SheetTrigger.vue";
export { default as SheetBackdrop } from "./SheetBackdrop.vue";
export { default as SheetPositioner } from "./SheetPositioner.vue";
export { default as SheetContent } from "./SheetContent.vue";
export { default as SheetTitle } from "./SheetTitle.vue";
export { default as SheetDescription } from "./SheetDescription.vue";
export { default as SheetCloseTrigger } from "./SheetCloseTrigger.vue";
              `}
        </PreviewCode>
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import {
  SheetRoot,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetCloseTrigger,
} from "@/components/ui/sheet";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
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
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <SheetRoot>
                  <SheetTrigger>Custom Close</SheetTrigger>
                  <SheetContent>
                    <SheetTitle>Share Link</SheetTitle>
                    <SheetDescription>
                      Anyone who has this link will be able to view this.
                    </SheetDescription>
                    <div className="grid gap-4 mt-2">
                      <Input
                        id="name-1"
                        name="name"
                        defaultValue="https://midone-ui.com/docs/installation"
                      />
                    </div>
                    <div className="flex gap-2 mt-5">
                      <SheetCloseTrigger>
                        <ExternalLink />
                        Share Link
                      </SheetCloseTrigger>
                    </div>
                  </SheetContent>
                </SheetRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
    </>
  );
}

export default Main;
