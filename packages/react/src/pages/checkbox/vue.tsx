import {
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
} from "@/components/ui/checkbox";
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
                <CheckboxRoot>
                  <CheckboxControl />
                  <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
                </CheckboxRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<CheckboxRoot>
  <CheckboxControl />
  <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
</CheckboxRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/checkbox</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/checkbox/CheckboxRoot.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { checkboxRoot } from "@midoneui/core/styles/checkbox.styles";
import * as checkbox from "@zag-js/checkbox";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/checkbox";
import { CheckboxHiddenInput } from ".";
import { computed, provide } from "vue";

const {
  class: className,
  checked = undefined,
  ...props
} = defineProps<Partial<Props> & { class?: string }>();

const service = useMachine(checkbox.machine, {
  ...props,
  checked,
  id: crypto.randomUUID(),
});

const api = computed(() => checkbox.connect(service, normalizeProps));

provide("checkboxApi", api);
</script>

<template>
  <label
    :class="cn(checkboxRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot />
    <CheckboxHiddenInput />
  </label>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/checkbox/CheckboxLabel.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import type { Api } from "@zag-js/checkbox";
import { checkboxLabel } from "@midoneui/core/styles/checkbox.styles";
import { label } from "@midoneui/core/styles/label.styles";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <Slot
    :class="cn([label, checkboxLabel, className])"
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
        <PreviewCode title="components/ui/checkbox/CheckboxControl.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { CheckIcon } from "lucide-vue-next";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxControl } from "@midoneui/core/styles/checkbox.styles";
import { CheckboxIndicator } from ".";
import type { Api } from "@zag-js/checkbox";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <Slot
    :class="cn(checkboxControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </div>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/checkbox/CheckboxIndicator.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxIndicator } from "@midoneui/core/styles/checkbox.styles";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <Slot
    :class="cn(checkboxIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/checkbox/CheckboxHiddenInput.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/checkbox";
import { cn } from "@midoneui/core/utils/cn";
import { checkboxHiddenInput } from "@midoneui/core/styles/checkbox.styles";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("checkboxApi");
</script>

<template>
  <input
    :class="cn(checkboxHiddenInput, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getHiddenInputProps() }"
  />
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/checkbox/index.ts">
          {`
export { default as CheckboxRoot } from "./CheckboxRoot.vue";
export { default as CheckboxLabel } from "./CheckboxLabel.vue";
export { default as CheckboxControl } from "./CheckboxControl.vue";
export { default as CheckboxIndicator } from "./CheckboxIndicator.vue";
export { default as CheckboxHiddenInput } from "./CheckboxHiddenInput.vue";
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
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
} from "@/components/ui/checkbox";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<CheckboxRoot>
  <CheckboxControl />
  <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
</CheckboxRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
