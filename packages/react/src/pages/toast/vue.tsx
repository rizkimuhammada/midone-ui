import { Button } from "@/components/ui/button";
import {
  toaster,
  ToasterContainer,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from "@/components/ui/toast";
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
                <Button
                  onClick={() =>
                    toaster.create({
                      title: "Event has been created",
                      description: "Sunday, December 03, 2023 at 9:00 AM",
                      type: "info",
                    })
                  }
                >
                  Show Toast
                </Button>
                <ToasterContainer toaster={toaster}>
                  {(toast) => (
                    <ToastRoot key={toast.id}>
                      <ToastTitle>{toast.title}</ToastTitle>
                      <ToastDescription>{toast.description}</ToastDescription>
                      <ToastCloseTrigger />
                    </ToastRoot>
                  )}
                </ToasterContainer>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Button
  @click="
    () =>
      toaster.create({
        title: 'Event has been created',
        description: 'Sunday, December 03, 2023 at 9:00 AM',
        type: 'info',
      })
  "
>
  Show Toast
</Button>
<ToasterContainer :toaster="toaster" v-slot="{ toast }">
  <ToastRoot :key="toast.id">
    <ToastTitle>{{ toast.title }}</ToastTitle>
    <ToastDescription>
      {{ toast.description }}
    </ToastDescription>
    <ToastCloseTrigger />
  </ToastRoot>
</ToasterContainer>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/toast</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/toast/toaster.ts">
          {`
import * as toast from "@zag-js/toast";

const toaster = toast.createStore({
  placement: "bottom-end",
  overlap: true,
  gap: 24,
});

export default toaster;
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/toast/ToastRoot.vue">
          {`
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
  filled,
  variant,
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
    :class="
      cn([
        boxVariants({ filled, variant, raised, className }),
        toastRoot,
        className,
      ])
    "
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/toast/ToastTitle.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/toast/ToastDescription.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/toast/ToastCloseTrigger.vue">
          {`
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
  filled,
  variant,
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
        <PreviewCode title="components/ui/toast/ToastItem.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/toast/ToasterContainer.vue">
          {`
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
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/toast/index.ts">
          {`
export { default as toaster } from "./toaster";
export { default as ToastRoot } from "./ToastRoot.vue";
export { default as ToastTitle } from "./ToastTitle.vue";
export { default as ToastDescription } from "./ToastDescription.vue";
export { default as ToastCloseTrigger } from "./ToastCloseTrigger.vue";
export { default as ToastItem } from "./ToastItem.vue";
export { default as ToasterContainer } from "./ToasterContainer.vue";
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
  toaster,
  ToasterContainer,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastCloseTrigger,
} from "@/components/ui/toast";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Button
  @click="
    () =>
      toaster.create({
        title: 'Event has been created',
        description: 'Sunday, December 03, 2023 at 9:00 AM',
        type: 'info',
      })
  "
>
  Show Toast
</Button>
<ToasterContainer :toaster="toaster" v-slot="{ toast }">
  <ToastRoot :key="toast.id">
    <ToastTitle>{{ toast.title }}</ToastTitle>
    <ToastDescription>
      {{ toast.description }}
    </ToastDescription>
    <ToastCloseTrigger />
  </ToastRoot>
</ToasterContainer>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
