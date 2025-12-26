import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
                <PopoverRoot>
                  <PopoverTrigger className="w-56">Open Popover</PopoverTrigger>
                  <PopoverPositioner>
                    <PopoverContent className="w-100">
                      <PopoverTitle>Dimensions</PopoverTitle>
                      <PopoverDescription>
                        Set the dimensions for the layer.
                      </PopoverDescription>
                      <div className="grid gap-3 mt-4 mb-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Width</Label>
                          <Input
                            id="width"
                            defaultValue="100%"
                            className="col-span-2"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxWidth">Max. width</Label>
                          <Input
                            id="maxWidth"
                            defaultValue="300px"
                            className="col-span-2"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="height">Height</Label>
                          <Input
                            id="height"
                            defaultValue="25px"
                            className="col-span-2"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxHeight">Max. height</Label>
                          <Input
                            id="maxHeight"
                            defaultValue="none"
                            className="col-span-2"
                          />
                        </div>
                      </div>
                    </PopoverContent>
                  </PopoverPositioner>
                </PopoverRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<PopoverRoot>
    <PopoverTrigger class="w-56">Open Popover</PopoverTrigger>
    <PopoverPositioner>
      <PopoverContent class="w-100">
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
        <div class="grid gap-3 mt-4 mb-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" class="col-span-2" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxWidth">Max. width</Label>
            <Input id="maxWidth" defaultValue="300px" class="col-span-2" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" class="col-span-2" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxHeight">Max. height</Label>
            <Input id="maxHeight" defaultValue="none" class="col-span-2" />
          </div>
        </div>
      </PopoverContent>
    </PopoverPositioner>
  </PopoverRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/popover</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/popover/PopoverArrow.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverArrow } from "@midoneui/core/styles/popover.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <div
    :class="cn(popoverArrow, className)"
    v-bind="{ ...api?.getArrowProps(), ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/popover/PopoverArrowTip.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverArrowTip } from "@midoneui/core/styles/popover.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <div
    :class="cn(popoverArrowTip, className)"
    v-bind="{ ...api?.getArrowTipProps(), ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/popover/PopoverContent.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { popoverContent } from "@midoneui/core/styles/popover.styles";
import { PopoverArrow, PopoverArrowTip } from ".";
import { Box } from "@/components/ui/box";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot
    :class="cn(popoverContent, className)"
    v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <Box v-else raised="single" :class="cn(popoverContent, className)">
      <div><slot /></div>
      <PopoverArrow>
        <PopoverArrowTip />
      </PopoverArrow>
    </Box>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/popover/PopoverDescription.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverDescription } from "@midoneui/core/styles/popover.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot
    :class="cn(popoverDescription, className)"
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
        <PreviewCode title="components/ui/popover/PopoverIndicator.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { popoverIndicator } from "@midoneui/core/styles/popover.styles";
import { ChevronDown } from "lucide-vue-next";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot
    :class="cn(popoverIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="$slots.default" />
    <ChevronDown v-else />
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/popover/PopoverPositioner.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { popoverPositioner } from "@midoneui/core/styles/popover.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Teleport to="body">
    <Slot
      :class="cn(popoverPositioner, className)"
      v-bind="{ ...api?.getPositionerProps(), ...props, ...$attrs }"
    >
      <slot v-if="asChild" />
      <div v-else>
        <slot />
      </div>
    </Slot>
  </Teleport>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/popover/PopoverRoot.vue">
          {`
<script lang="ts" setup>
import * as popover from "@zag-js/popover";
import type { Props } from "@zag-js/popover";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { popoverRoot } from "@midoneui/core/styles/popover.styles";

const {
  class: className,
  asChild = false,
  open = undefined,
  closeOnInteractOutside = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(popover.machine, {
  ...props,
  open,
  closeOnInteractOutside,
  id: crypto.randomUUID(),
});
const api = computed(() => popover.connect(service, normalizeProps));

provide("popoverApi", api);
</script>

<template>
  <Slot :class="cn(popoverRoot, className)" v-bind="{ ...props, ...$attrs }">
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/popover/PopoverTitle.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import { popoverTitle } from "@midoneui/core/styles/popover.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot
    :class="cn(popoverTitle, className)"
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
        <PreviewCode title="components/ui/popover/PopoverTrigger.vue">
          {`
<script lang="ts" setup>
import { type Api } from "@zag-js/popover";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Button } from "@/components/ui/button";
import { Slot } from "@/components/ui/slot";
import { popoverTrigger } from "@midoneui/core/styles/popover.styles";
import { PopoverIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("popoverApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button v-if="!asChild" :class="cn(popoverTrigger, className)">
      <slot />
      <PopoverIndicator />
    </Button>
    <slot v-else />
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/popover/index.ts">
          {`
export { default as PopoverArrow } from "./PopoverArrow.vue";
export { default as PopoverArrowTip } from "./PopoverArrowTip.vue";
export { default as PopoverContent } from "./PopoverContent.vue";
export { default as PopoverDescription } from "./PopoverDescription.vue";
export { default as PopoverIndicator } from "./PopoverIndicator.vue";
export { default as PopoverPositioner } from "./PopoverPositioner.vue";
export { default as PopoverRoot } from "./PopoverRoot.vue";
export { default as PopoverTitle } from "./PopoverTitle.vue";
export { default as PopoverTrigger } from "./PopoverTrigger.vue";
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
  PopoverRoot,
  PopoverTrigger,
  PopoverPositioner,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<PopoverRoot>
    <PopoverTrigger class="w-56"> Open Popover </PopoverTrigger>
    <PopoverPositioner>
      <PopoverContent class="w-100">
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
        <div class="grid gap-3 mt-4 mb-2">
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" class="col-span-2" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxWidth">Max. width</Label>
            <Input id="maxWidth" defaultValue="300px" class="col-span-2" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" class="col-span-2" />
          </div>
          <div class="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="maxHeight">Max. height</Label>
            <Input id="maxHeight" defaultValue="none" class="col-span-2" />
          </div>
        </div>
      </PopoverContent>
    </PopoverPositioner>
  </PopoverRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
