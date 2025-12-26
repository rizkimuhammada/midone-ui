import { SwitchRoot, SwitchControl, SwitchLabel } from "@/components/ui/switch";
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
                <SwitchRoot>
                  <SwitchControl />
                  <SwitchLabel>Airplane Mode</SwitchLabel>
                </SwitchRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SwitchRoot>
  <SwitchControl />
  <SwitchLabel>Airplane Mode</SwitchLabel>
</SwitchRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/switch</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/switch/SwitchRoot.vue">
          {`
<script lang="ts" setup>
import * as zagSwitch from "@zag-js/switch";
import type { Props } from "@zag-js/switch";
import { cn } from "@midoneui/core/utils/cn";
import { switchRoot } from "@midoneui/core/styles/switch.styles";
import { SwitchHiddenInput } from ".";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  checked = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(zagSwitch.machine, {
  ...props,
  checked,
  id: crypto.randomUUID(),
});
const api = computed(() => zagSwitch.connect(service, normalizeProps));

provide("switchApi", api);
</script>

<template>
  <Slot
    :class="cn(switchRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getRootProps() }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <slot />
      <SwitchHiddenInput />
    </label>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/switch/SwitchControl.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchControl } from "@midoneui/core/styles/switch.styles";
import { SwitchThumb } from ".";
import type { Api } from "@zag-js/switch";
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

const api = inject<Api>("switchApi");
</script>

<template>
  <Slot
    :class="cn(switchControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <SwitchThumb />
    </span>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/switch/SwitchThumb.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchThumb } from "@midoneui/core/styles/switch.styles";
import type { Api } from "@zag-js/switch";
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

const api = inject<Api>("switchApi");
</script>

<template>
  <Slot
    :class="cn(switchThumb, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getThumbProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/switch/SwitchLabel.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchLabel } from "@midoneui/core/styles/switch.styles";
import { label } from "@midoneui/core/styles/label.styles";
import type { Api } from "@zag-js/switch";
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

const api = inject<Api>("switchApi");
</script>

<template>
  <Slot
    :class="cn([label, switchLabel, className])"
    v-bind="{ ...props, ...$attrs, ...api?.getLabelProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/switch/SwitchHiddenInput.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { switchHiddenInput } from "@midoneui/core/styles/switch.styles";
import type { Api } from "@zag-js/switch";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("switchApi");
</script>

<template>
  <input
    :class="cn(switchHiddenInput, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getHiddenInputProps() }"
  />
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/switch/index.ts">
          {`
export { default as SwitchRoot } from "./SwitchRoot.vue";
export { default as SwitchControl } from "./SwitchControl.vue";
export { default as SwitchThumb } from "./SwitchThumb.vue";
export { default as SwitchLabel } from "./SwitchLabel.vue";
export { default as SwitchHiddenInput } from "./SwitchHiddenInput.vue";
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
import { SwitchRoot, SwitchControl, SwitchLabel } from "@/components/ui/switch";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<SwitchRoot>
  <SwitchControl />
  <SwitchLabel>Airplane Mode</SwitchLabel>
</SwitchRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
