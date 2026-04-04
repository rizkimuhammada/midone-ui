import {
  ProgressLinearRoot,
  ProgressLinearLabel,
  ProgressLinearValueText,
  ProgressLinearTrack,
  ProgressLinearRange,
} from "@/components/ui/progress-linear";
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
                <ProgressLinearRoot defaultValue={42}>
                  <ProgressLinearLabel>Progress Linear</ProgressLinearLabel>
                  <ProgressLinearTrack className="max-w-72">
                    <ProgressLinearRange />
                  </ProgressLinearTrack>
                  <ProgressLinearValueText />
                </ProgressLinearRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<ProgressLinearRoot :defaultValue="42">
  <ProgressLinearLabel>Progress Linear</ProgressLinearLabel>
  <ProgressLinearTrack class="max-w-72">
    <ProgressLinearRange />
  </ProgressLinearTrack>
  <ProgressLinearValueText />
</ProgressLinearRoot>
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
        <PreviewCode title="components/ui/progress-linear/ProgressLinearLabel.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressLabel } from "@midoneui/core/styles/progress-linear.styles";
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
        <PreviewCode title="components/ui/progress-linear/ProgressLinearRange.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressRange } from "@midoneui/core/styles/progress-linear.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <div
    :class="cn(progressRange, className)"
    v-bind="{ ...api?.getRangeProps(), ...props, ...$attrs }"
  />
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-linear/ProgressLinearRoot.vue">
          {`
<script lang="ts" setup>
import * as progress from "@zag-js/progress";
import type { Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { progressRoot } from "@midoneui/core/styles/progress-linear.styles";

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
        <PreviewCode title="components/ui/progress-linear/ProgressLinearTrack.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressTrack } from "@midoneui/core/styles/progress-linear.styles";
import type { Api } from "@zag-js/progress";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("progressApi");
</script>

<template>
  <div
    :class="cn(progressTrack, className)"
    v-bind="{ ...api?.getTrackProps(), ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/progress-linear/ProgressLinearValueText.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { progressValueText } from "@midoneui/core/styles/progress-linear.styles";
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
        <PreviewCode title="components/ui/progress-linear/index.ts">
          {`
export { default as ProgressLinearLabel } from "./ProgressLinearLabel.vue";
export { default as ProgressLinearRange } from "./ProgressLinearRange.vue";
export { default as ProgressLinearRoot } from "./ProgressLinearRoot.vue";
export { default as ProgressLinearTrack } from "./ProgressLinearTrack.vue";
export { default as ProgressLinearValueText } from "./ProgressLinearValueText.vue";
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
  ProgressLinearRoot,
  ProgressLinearLabel,
  ProgressLinearValueText,
  ProgressLinearTrack,
  ProgressLinearRange,
} from "@/components/ui/progress-linear";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<ProgressLinearRoot :defaultValue="42">
  <ProgressLinearLabel>Progress Linear</ProgressLinearLabel>
  <ProgressLinearTrack class="max-w-72">
    <ProgressLinearRange />
  </ProgressLinearTrack>
  <ProgressLinearValueText />
</ProgressLinearRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
