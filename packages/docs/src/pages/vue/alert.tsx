import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
  AlertIcon,
} from "@/components/ui/alert";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";
import { Compass } from "lucide-react";
import { Box } from "@/components/ui/box";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <AlertRoot variant="primary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/alert</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/alert/AlertCloseTrigger.vue">
          {`
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
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/alert/AlertDescription.vue">
          {`
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
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/alert/AlertRoot.vue">
          {`
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
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/alert/AlertIcon.vue">
          {`
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
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/alert/AlertTitle.vue">
          {`
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
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/alert/index.ts">
          {`
export { default as AlertRoot } from "./AlertRoot.vue";
export { default as AlertTitle } from "./AlertTitle.vue";
export { default as AlertDescription } from "./AlertDescription.vue";
export { default as AlertCloseTrigger } from "./AlertCloseTrigger.vue";
export { default as AlertIcon } from "./AlertIcon.vue";
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
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
  AlertIcon,
} from "@/components/ui/alert";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<AlertRoot>
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>
    Success! Your changes have been saved
  </AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box className="p-0">
                  <AlertRoot variant="ghost">
                    <AlertIcon><Compass /></AlertIcon>
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                      This is an alert with icon, title and description.
                    </AlertDescription>
                    <AlertCloseTrigger />
                  </AlertRoot>
                </Box>
                <Box className="p-0" raised="single">
                  <AlertRoot variant="ghost">
                    <AlertIcon><Compass /></AlertIcon>
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                      This is an alert with icon, title and description.
                    </AlertDescription>
                    <AlertCloseTrigger />
                  </AlertRoot>
                </Box>
                <Box className="p-0" raised="double">
                  <AlertRoot variant="ghost">
                    <AlertIcon><Compass /></AlertIcon>
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                      This is an alert with icon, title and description.
                    </AlertDescription>
                    <AlertCloseTrigger />
                  </AlertRoot>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
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
