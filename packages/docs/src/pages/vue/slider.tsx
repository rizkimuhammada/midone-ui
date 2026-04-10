import {
  SliderRoot,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderMarkerGroup,
  SliderMarker,
} from "@/components/ui/slider";
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
                <SliderRoot className="w-72" value={[20]}>
                  <SliderLabel>Max Items</SliderLabel>
                  <SliderControl>
                    <SliderTrack>
                      <SliderRange />
                    </SliderTrack>
                    <SliderThumb index={0}>
                      <SliderHiddenInput />
                    </SliderThumb>
                  </SliderControl>
                  <div className="flex items-center text-xs gap-1 font-medium justify-center opacity-70">
                    <SliderValueText /> Items
                  </div>
                </SliderRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SliderRoot class="w-72" :defaultValue="[20]">
  <SliderLabel>Max Items</SliderLabel>
  <SliderControl>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb :index="0">
      <SliderHiddenInput />
    </SliderThumb>
  </SliderControl>
  <div
    class="flex items-center text-xs gap-1 font-medium justify-center opacity-70"
  >
    <SliderValueText /> Items
  </div>
</SliderRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/slider</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/slider/SliderRoot.vue">
          {`
<script lang="ts" setup>
import * as slider from "@zag-js/slider";
import type { Props } from "@zag-js/slider";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { sliderRoot } from "@midoneui/core/styles/slider.styles";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(slider.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => slider.connect(service, normalizeProps));

provide("sliderApi", api);
</script>

<template>
  <Slot
    :class="cn(sliderRoot, className)"
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
        <PreviewCode title="components/ui/slider/SliderLabel.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderLabel } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import { Label } from "@/components/ui/label";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot v-bind="{ ...api?.getLabelProps(), ...props, ...$attrs }">
    <slot v-if="asChild" />
    <Label v-else :class="cn(sliderLabel, className)">
      <slot />
    </Label>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderValueText.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderValueText } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderValueText, className)"
    v-bind="{ ...api?.getValueTextProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <output v-else>{{ api?.value?.[0] }}</output>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderControl.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderControl } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderControl, className)"
    v-bind="{ ...api?.getControlProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderTrack.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderTrack } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderTrack, className)"
    v-bind="{ ...api?.getTrackProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderRange.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderRange } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderRange, className)"
    v-bind="{ ...api?.getRangeProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderThumb.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderThumb } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, ThumbProps } from "@zag-js/slider";
import { provide, inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  ThumbProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("sliderApi");

provide("sliderThumb", props);
</script>

<template>
  <Slot
    :class="cn(sliderThumb, className)"
    v-bind="{ ...api?.getThumbProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderHiddenInput.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderHiddenInput } from "@midoneui/core/styles/slider.styles";
import type { Api, ThumbProps } from "@zag-js/slider";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("sliderApi");
const thumbProps = inject<ThumbProps>("sliderThumb");
</script>

<template>
  <input
    :class="cn(sliderHiddenInput, className)"
    v-bind="{ ...api?.getHiddenInputProps(thumbProps!), ...props, ...$attrs }"
  />
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderMarkerGroup.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderMarkerGroup } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderMarkerGroup, className)"
    v-bind="{ ...api?.getMarkerGroupProps(), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/SliderMarker.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { sliderMarker } from "@midoneui/core/styles/slider.styles";
import { Slot } from "@/components/ui/slot";
import type { Api, MarkerProps } from "@zag-js/slider";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<
  MarkerProps & {
    class?: string;
    asChild?: boolean;
  }
>();

const api = inject<Api>("sliderApi");
</script>

<template>
  <Slot
    :class="cn(sliderMarker, className)"
    v-bind="{ ...api?.getMarkerProps(props), ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/slider/index.ts">
          {`
export { default as SliderRoot } from "./SliderRoot.vue";
export { default as SliderLabel } from "./SliderLabel.vue";
export { default as SliderValueText } from "./SliderValueText.vue";
export { default as SliderControl } from "./SliderControl.vue";
export { default as SliderTrack } from "./SliderTrack.vue";
export { default as SliderRange } from "./SliderRange.vue";
export { default as SliderThumb } from "./SliderThumb.vue";
export { default as SliderHiddenInput } from "./SliderHiddenInput.vue";
export { default as SliderMarkerGroup } from "./SliderMarkerGroup.vue";
export { default as SliderMarker } from "./SliderMarker.vue";
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
  SliderRoot,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderMarkerGroup,
  SliderMarker,
} from "@/components/ui/slider";
                    `}
        </PreviewCode>
        <PreviewCode>
          {`
<SliderRoot class="w-72" :defaultValue="[20]">
    <SliderLabel>Max Items</SliderLabel>
    <SliderControl>
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb :index="0">
        <SliderHiddenInput />
      </SliderThumb>
    </SliderControl>
    <div
      class="flex items-center text-xs gap-1 font-medium justify-center opacity-70"
    >
      <SliderValueText /> Items
    </div>
  </SliderRoot>
                    `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <SliderRoot className="w-72" value={[20, 80]}>
                  <SliderLabel>Price Range</SliderLabel>
                  <SliderControl>
                    <SliderTrack>
                      <SliderRange />
                    </SliderTrack>
                    <SliderThumb index={0}>
                      <SliderHiddenInput />
                    </SliderThumb>
                    <SliderThumb index={1}>
                      <SliderHiddenInput />
                    </SliderThumb>
                  </SliderControl>
                  <SliderMarkerGroup>
                    <SliderMarker value={0}>$0</SliderMarker>
                    <SliderMarker value={25}>$25</SliderMarker>
                    <SliderMarker value={50}>$50</SliderMarker>
                    <SliderMarker value={75}>$75</SliderMarker>
                    <SliderMarker value={100}>$100</SliderMarker>
                  </SliderMarkerGroup>
                </SliderRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SliderRoot class="w-72" :value="[20, 80]">
  <SliderLabel>Price Range</SliderLabel>
  <SliderControl>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb :index="0">
      <SliderHiddenInput />
    </SliderThumb>
    <SliderThumb :index="1">
      <SliderHiddenInput />
    </SliderThumb>
  </SliderControl>
  <SliderMarkerGroup>
    <SliderMarker :value="0">$0</SliderMarker>
    <SliderMarker :value="25">$25</SliderMarker>
    <SliderMarker :value="50">$50</SliderMarker>
    <SliderMarker :value="75">$75</SliderMarker>
    <SliderMarker :value="100">$100</SliderMarker>
  </SliderMarkerGroup>
</SliderRoot>
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
