import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
} from "@/components/ui/alert";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";
import { Compass } from "lucide-react";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <AlertRoot>
                  <Compass />
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
<AlertRoot>
  <Compass />
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
import { alertRoot } from "@midoneui/core/styles/alert.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Presence } from "@/components/ui/presence";
import { ref, provide } from "vue";

const {
  class: className,
  filled,
  variant,
  raised,
  ...rest
} = defineProps<BoxVariants & { class?: string; filled?: boolean }>();

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
        boxVariants({
          filled,
          variant,
          raised,
          className,
        }),
        alertRoot
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
} from "@/components/ui/alert";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<AlertRoot>
  <Compass />
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
                <AlertRoot>
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="warning">
                  <Compass />
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
<AlertRoot>
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <Compass />
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
                <AlertRoot filled>
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="warning">
                  <Compass />
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
<AlertRoot filled>
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="warning">
  <Compass />
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
                <AlertRoot raised="single">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="warning">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot raised="single">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="warning">
  <Compass />
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
                <AlertRoot filled raised="double">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="warning">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot filled raised="double">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="warning">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
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
