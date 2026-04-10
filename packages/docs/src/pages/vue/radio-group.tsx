import {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
} from "@/components/ui/radio-group";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  const frameworks = ["React", "Solid", "Vue", "Svelte"];

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <RadioGroupRoot defaultValue="React">
                  <RadioGroupLabel>Framework</RadioGroupLabel>
                  {frameworks.map((framework) => (
                    <RadioGroupItem key={framework} value={framework}>
                      <RadioGroupItemControl />
                      <RadioGroupItemText>{framework}</RadioGroupItemText>
                    </RadioGroupItem>
                  ))}
                </RadioGroupRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
const frameworks = ["React", "Solid", "Vue", "Svelte"];

<RadioGroupRoot defaultValue="React">
  <RadioGroupLabel>Framework</RadioGroupLabel>
  <RadioGroupItem
    v-for="framework in frameworks"
    :key="framework"
    :value="framework"
  >
    <RadioGroupItemControl />
    <RadioGroupItemText>{{ framework }}</RadioGroupItemText>
  </RadioGroupItem>
</RadioGroupRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/radio-group</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/radio-group/RadioGroupRoot.vue">
          {`
<script lang="ts" setup>
import * as radioGroup from "@zag-js/radio-group";
import type { Props } from "@zag-js/radio-group";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { radioGroupRoot } from "@midoneui/core/styles/radio-group.styles";
import { Dot } from "lucide-vue-next";
import { RadioGroupIndicator } from ".";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(radioGroup.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => radioGroup.connect(service, normalizeProps));

provide("radioGroupApi", api);
</script>

<template>
  <Slot
    :class="cn(radioGroupRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
      <RadioGroupIndicator>
        <Dot />
      </RadioGroupIndicator>
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/radio-group/RadioGroupLabel.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupLabel } from "@midoneui/core/styles/radio-group.styles";
import { label } from "@midoneui/core/styles/label.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
</script>

<template>
  <Slot
    :class="cn([label, radioGroupLabel, className])"
    v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <span v-else><slot /></span>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/radio-group/RadioGroupIndicator.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupIndicator } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
</script>

<template>
  <Slot
    :class="cn(radioGroupIndicator, className)"
    v-bind="{ ...api?.getIndicatorProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else><slot /></div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/radio-group/RadioGroupItem.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItem } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import { RadioGroupItemHiddenInput } from ".";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ItemProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("radioGroupApi");

provide("radioGroupItem", props);
</script>

<template>
  <Slot
    :class="cn(radioGroupItem, className)"
    v-bind="{ ...api?.getItemProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <label v-else>
      <slot />
      <RadioGroupItemHiddenInput />
    </label>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/radio-group/RadioGroupItemText.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItemText } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
const itemProps = inject<ItemProps>("radioGroupItem");
</script>

<template>
  <Slot
    :class="cn(radioGroupItemText, className)"
    v-bind="{ ...api?.getItemTextProps(itemProps!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/radio-group/RadioGroupItemControl.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItemControl } from "@midoneui/core/styles/radio-group.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("radioGroupApi");
const itemProps = inject<ItemProps>("radioGroupItem");
</script>

<template>
  <Slot
    :class="cn(radioGroupItemControl, className)"
    v-bind="{ ...api?.getItemControlProps(itemProps!), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/radio-group/RadioGroupItemHiddenInput.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { radioGroupItemHiddenInput } from "@midoneui/core/styles/radio-group.styles";
import type { Api, ItemProps } from "@zag-js/radio-group";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("radioGroupApi");
const itemProps = inject<ItemProps>("radioGroupItem");
</script>

<template>
  <input
    :class="cn(radioGroupItemHiddenInput, className)"
    v-bind="{ ...api?.getItemHiddenInputProps(itemProps!), ...props, ...$attrs }"
  />
</template>
            `}
        </PreviewCode>
        <PreviewCode title="components/ui/radio-group/index.ts">
          {`
export { default as RadioGroupRoot } from "./RadioGroupRoot.vue";
export { default as RadioGroupLabel } from "./RadioGroupLabel.vue";
export { default as RadioGroupIndicator } from "./RadioGroupIndicator.vue";
export { default as RadioGroupItem } from "./RadioGroupItem.vue";
export { default as RadioGroupItemText } from "./RadioGroupItemText.vue";
export { default as RadioGroupItemControl } from "./RadioGroupItemControl.vue";
export { default as RadioGroupItemHiddenInput } from "./RadioGroupItemHiddenInput.vue";
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
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
} from "@/components/ui/radio-group";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<RadioGroupRoot defaultValue="React">
  <RadioGroupLabel>Framework</RadioGroupLabel>
  <RadioGroupItem
    v-for="framework in frameworks"
    :key="framework"
    :value="framework"
  >
    <RadioGroupItemControl />
    <RadioGroupItemText>{{ framework }}</RadioGroupItemText>
  </RadioGroupItem>
</RadioGroupRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
