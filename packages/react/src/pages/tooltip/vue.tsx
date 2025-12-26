import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from "@/components/ui/tooltip";
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
                <TooltipRoot>
                  <TooltipTrigger>Hover Me</TooltipTrigger>
                  <TooltipPositioner>
                    <TooltipContent>I am a tooltip!</TooltipContent>
                  </TooltipPositioner>
                </TooltipRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<TooltipRoot>
  <TooltipTrigger>Hover Me</TooltipTrigger>
  <TooltipPositioner>
    <TooltipContent>I am a tooltip!</TooltipContent>
  </TooltipPositioner>
</TooltipRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/tooltip</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/tooltip/TooltipRoot.vue">
          {`
<script lang="ts" setup>
import * as tooltip from "@zag-js/tooltip";
import type { Props } from "@zag-js/tooltip";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";

const {
  class: className,
  asChild = false,
  open = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(tooltip.machine, {
  ...props,
  positioning: {
    placement: "top",
    offset: { mainAxis: 10 },
  },
  closeDelay: 0,
  openDelay: 0,
  open,
  id: crypto.randomUUID(),
});
const api = computed(() => tooltip.connect(service, normalizeProps));

provide("tooltipApi", api);
</script>

<template>
  <slot />
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tooltip/TooltipTrigger.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipTrigger } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import { Button } from "@/components/ui/button";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getTriggerProps(), ...props, ...$attrs }">
    <Button v-if="!asChild" :class="cn(tooltipTrigger, className)">
      <slot />
    </Button>
    <slot v-else />
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tooltip/TooltipPositioner.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipPositioner } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot
    :class="cn(tooltipPositioner, className)"
    v-bind="{ ...api?.getPositionerProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tooltip/TooltipContent.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipContent } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import { TooltipArrow, TooltipArrowTip } from ".";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot
    :class="cn(tooltipContent, className)"
    v-bind="{ ...api?.getContentProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
      <TooltipArrow>
        <TooltipArrowTip />
      </TooltipArrow>
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tooltip/TooltipArrow.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipArrow } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot
    :class="cn(tooltipArrow, className)"
    v-bind="{ ...api?.getArrowProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tooltip/TooltipArrowTip.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tooltipArrowTip } from "@midoneui/core/styles/tooltip.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/tooltip";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("tooltipApi");
</script>

<template>
  <Slot
    :class="cn(tooltipArrowTip, className)"
    v-bind="{ ...api?.getArrowTipProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/tooltip/index.ts">
          {`
export { default as TooltipRoot } from "./TooltipRoot.vue";
export { default as TooltipTrigger } from "./TooltipTrigger.vue";
export { default as TooltipPositioner } from "./TooltipPositioner.vue";
export { default as TooltipContent } from "./TooltipContent.vue";
export { default as TooltipArrow } from "./TooltipArrow.vue";
export { default as TooltipArrowTip } from "./TooltipArrowTip.vue";
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
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from "@/components/ui/tooltip";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<TooltipRoot>
  <TooltipTrigger>Hover Me</TooltipTrigger>
  <TooltipPositioner>
    <TooltipContent>I am a tooltip!</TooltipContent>
  </TooltipPositioner>
</TooltipRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
