import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
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
                <DialogRoot>
                  <DialogTrigger>Open Dialog</DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
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
                      <DialogCloseTrigger>
                        <SquareX />
                        Close
                      </DialogCloseTrigger>
                      <Button variant="primary">
                        <Save />
                        Submit
                      </Button>
                    </div>
                    <DialogCloseTrigger />
                  </DialogContent>
                </DialogRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DialogRoot>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>
      Make changes to your profile here. Click save when you're done.
    </DialogDescription>
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
      <DialogCloseTrigger>
        <SquareX />
        Close
      </DialogCloseTrigger>
      <Button variant="primary">
        <Save />
        Submit
      </Button>
    </div>
    <DialogCloseTrigger />
  </DialogContent>
</DialogRoot>
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
        <PreviewCode title="components/ui/dialog/DialogRoot.vue">
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

provide("dialogApi", api);
</script>

<template>
  <slot />
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/dialog/DialogTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { dialogTrigger } from "@midoneui/core/styles/dialog.styles";
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

const api = inject<Api>("dialogApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getTriggerProps() }">
    <Button v-if="!asChild" :class="cn(dialogTrigger, className)">
      <slot />
    </Button>
    <slot v-else />
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/dialog/DialogBackdrop.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { dialogBackdrop } from "@midoneui/core/styles/dialog.styles";
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

const api = inject<Api>("dialogApi");
</script>

<template>
  <Slot
    :class="cn(dialogBackdrop, className)"
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
        <PreviewCode title="components/ui/dialog/DialogPositioner.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { dialogPositioner } from "@midoneui/core/styles/dialog.styles";
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

const api = inject<Api>("dialogApi");
</script>

<template>
  <Slot
    :class="cn(dialogPositioner, className)"
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
        <PreviewCode title="components/ui/dialog/DialogContent.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { dialogContent } from "@midoneui/core/styles/dialog.styles";
import { Box } from "@/components/ui/box";
import { DialogBackdrop, DialogPositioner } from "@/components/ui/dialog";
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

const api = inject<Api>("dialogApi");
</script>

<template>
  <Teleport to="body">
    <DialogBackdrop />
    <DialogPositioner>
      <Slot v-bind="{ ...props, ...$attrs, ...api?.getContentProps() }">
        <slot v-if="asChild" />
        <div v-else>
          <Box
            raised="double"
            :class="cn(dialogContent, className)"
            v-bind="{ ...props }"
          >
            <div><slot /></div>
          </Box>
        </div>
      </Slot>
    </DialogPositioner>
  </Teleport>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/dialog/DialogTitle.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { dialogTitle } from "@midoneui/core/styles/dialog.styles";
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

const api = inject<Api>("dialogApi");
</script>

<template>
  <Slot
    :class="cn(dialogTitle, className)"
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
        <PreviewCode title="components/ui/dialog/DialogDescription.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { dialogDescription } from "@midoneui/core/styles/dialog.styles";
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

const api = inject<Api>("dialogApi");
</script>

<template>
  <Slot
    :class="cn(dialogDescription, className)"
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
        <PreviewCode title="components/ui/dialog/DialogCloseTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { dialogCloseTrigger } from "@midoneui/core/styles/dialog.styles";
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

const api = inject<Api>("dialogApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getCloseTriggerProps() }">
    <Button
      v-if="!$slots.default"
      :class="cn(dialogCloseTrigger, className)"
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
        <PreviewCode title="components/ui/dialog/index.ts">
          {`
export { default as DialogRoot } from "./DialogRoot.vue";
export { default as DialogTrigger } from "./DialogTrigger.vue";
export { default as DialogBackdrop } from "./DialogBackdrop.vue";
export { default as DialogPositioner } from "./DialogPositioner.vue";
export { default as DialogContent } from "./DialogContent.vue";
export { default as DialogTitle } from "./DialogTitle.vue";
export { default as DialogDescription } from "./DialogDescription.vue";
export { default as DialogCloseTrigger } from "./DialogCloseTrigger.vue";
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
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<DialogRoot>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>
      Make changes to your profile here. Click save when you're done.
    </DialogDescription>
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
      <DialogCloseTrigger>
        <SquareX />
        Close
      </DialogCloseTrigger>
      <Button variant="primary">
        <Save />
        Submit
      </Button>
    </div>
    <DialogCloseTrigger />
  </DialogContent>
</DialogRoot>
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
                <DialogRoot>
                  <DialogTrigger>Custom Close</DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Share Link</DialogTitle>
                    <DialogDescription>
                      Anyone who has this link will be able to view this.
                    </DialogDescription>
                    <div className="grid gap-4 mt-2">
                      <Input
                        id="name-1"
                        name="name"
                        defaultValue="https://midone-ui.com/docs/installation"
                      />
                    </div>
                    <div className="flex gap-2 mt-5">
                      <DialogCloseTrigger>
                        <ExternalLink />
                        Share Link
                      </DialogCloseTrigger>
                    </div>
                  </DialogContent>
                </DialogRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DialogRoot>
  <DialogTrigger>Custom Close</DialogTrigger>
  <DialogContent>
    <DialogTitle>Share Link</DialogTitle>
    <DialogDescription>
      Anyone who has this link will be able to view this.
    </DialogDescription>
    <div class="grid gap-4 mt-2">
      <Input
        id="name-1"
        name="name"
        defaultValue="https://midone-ui.com/docs/installation"
      />
    </div>
    <div class="flex gap-2 mt-5">
      <DialogCloseTrigger>
        <ExternalLink />
        Share Link
      </DialogCloseTrigger>
    </div>
  </DialogContent>
</DialogRoot>
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
