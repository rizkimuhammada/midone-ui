import {
  ProgressCircularRoot,
  ProgressCircularLabel,
  ProgressCircularValueText,
  ProgressCircularCircle,
  ProgressCircularCircleTrack,
  ProgressCircularCircleRange,
} from "@/components/ui/progress-circular";
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
                <ProgressCircularRoot defaultValue={42}>
                  <ProgressCircularLabel>Progress Circular</ProgressCircularLabel>
                  <ProgressCircularCircle className="max-w-48">
                    <ProgressCircularCircleTrack />
                    <ProgressCircularCircleRange />
                  </ProgressCircularCircle>
                  <ProgressCircularValueText />
                </ProgressCircularRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<ProgressCircularRoot :defaultValue="42">
  <ProgressCircularLabel>Progress Circular</ProgressCircularLabel>
  <ProgressCircularCircle class="max-w-48">
    <ProgressCircularCircleTrack />
    <ProgressCircularCircleRange />
  </ProgressCircularCircle>
  <ProgressCircularValueText />
</ProgressCircularRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/progress</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/progress-circular/ProgressCircularCircle.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressCircle } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <svg
    :class="cn(progressCircle, className)"
    v-bind="{ ...api?.getCircleProps(), ...props, ...$attrs }"
  >
    <slot />
  </svg>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-circular/ProgressCircularCircleRange.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressCircleRange } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <circle
    :class="cn(progressCircleRange, className)"
    v-bind="{ ...api?.getCircleRangeProps(), ...props, ...$attrs }"
  />
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-circular/ProgressCircularCircleTrack.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressCircleTrack } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <circle
    :class="cn(progressCircleTrack, className)"
    v-bind="{ ...api?.getCircleTrackProps(), ...props, ...$attrs }"
  />
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-circular/ProgressCircularLabel.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressLabel } from "@midoneui/core/styles/progress-circular.styles";
import { Label } from "@/components/ui/label";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }">
    <Label v-if="!asChild" :class="cn(progressLabel, className)">
      <slot />
    </Label>
    <slot v-else />
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-circular/ProgressCircularRoot.vue">
          {`
<script lang="ts" setup>
import * as progress from "@zag-js/progress";
import type { Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { progressRoot } from "@midoneui/core/styles/progress-circular.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(progress.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => progress.connect(service, normalizeProps));

provide("progressApi", api);
</script>

<template>
  <Slot
    :class="cn(progressRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-circular/ProgressCircularValueText.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressValueText } from "@midoneui/core/styles/progress-circular.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <div
    :class="cn(progressValueText, className)"
    v-bind="{ ...api?.getValueTextProps(), ...props, ...$attrs }"
  >
    {{ api?.valueAsString }}
  </div>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-circular/index.ts">
          {`
export { default as ProgressCircularCircle } from "./ProgressCircularCircle.vue";
export { default as ProgressCircularCircleRange } from "./ProgressCircularCircleRange.vue";
export { default as ProgressCircularCircleTrack } from "./ProgressCircularCircleTrack.vue";
export { default as ProgressCircularLabel } from "./ProgressCircularLabel.vue";
export { default as ProgressCircularRoot } from "./ProgressCircularRoot.vue";
export { default as ProgressCircularValueText } from "./ProgressCircularValueText.vue";
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
  ProgressCircularRoot,
  ProgressCircularLabel,
  ProgressCircularValueText,
  ProgressCircularCircle,
  ProgressCircularCircleTrack,
  ProgressCircularCircleRange,
} from "@/components/ui/progress-circular";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<ProgressCircularRoot :defaultValue="42">
  <ProgressCircularLabel>Progress Circular</ProgressCircularLabel>
  <ProgressCircularCircle class="max-w-48">
    <ProgressCircularCircleTrack />
    <ProgressCircularCircleRange />
  </ProgressCircularCircle>
  <ProgressCircularValueText />
</ProgressCircularRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
