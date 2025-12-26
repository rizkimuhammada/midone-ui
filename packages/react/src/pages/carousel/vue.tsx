import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`
  );

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <CarouselRoot
                  defaultPage={0}
                  slideCount={images.length}
                  className="size-72"
                >
                  <CarouselControl>
                    <CarouselPrevTrigger />
                    <CarouselNextTrigger />
                  </CarouselControl>
                  <CarouselIndicatorGroup>
                    {images.map((_, index) => (
                      <CarouselIndicator key={index} index={index} />
                    ))}
                  </CarouselIndicatorGroup>
                  <CarouselItemGroup>
                    {images.map((_image, index) => (
                      <CarouselItem
                        key={index}
                        index={index}
                        className="text-5xl bold flex items-center justify-center"
                      >
                        {index + 1}
                      </CarouselItem>
                    ))}
                  </CarouselItemGroup>
                </CarouselRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
const images = Array.from(
  { length: 5 },
  (_, i) => \`https://picsum.photos/seed/\${i + 1}/500/300\`
);

<CarouselRoot
  :default-page="0"
  :slide-count="images.length"
  class="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselIndicatorGroup>
    <CarouselIndicator
      v-for="(_, index) in images"
      :key="index"
      :index="index"
    />
  </CarouselIndicatorGroup>
  <CarouselItemGroup>
    <CarouselItem
      v-for="(image, index) in images"
      :key="index"
      :index="index"
      class="text-5xl bold flex items-center justify-center"
    >
      {{ index + 1 }}
    </CarouselItem>
  </CarouselItemGroup>
</CarouselRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/carousel</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/carousel/CarouselRoot.vue">
          {`
<script lang="ts" setup>
import * as carousel from "@zag-js/carousel";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/carousel";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselRoot } from "@midoneui/core/styles/carousel.styles";
import { computed, provide } from "vue";

const {
  class: className,
  defaultPage,
  slideCount,
  asChild = false,
  ...props
} = defineProps<Partial<Props> & { asChild?: boolean; class?: string }>();

const service = useMachine(carousel.machine, {
  defaultPage,
  slideCount,
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => carousel.connect(service, normalizeProps));

provide("carouselApi", api);
</script>

<template>
  <Slot
    :class="cn(carouselRoot, className)"
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
        <PreviewCode title="components/ui/carousel/CarouselControl.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselControl } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot
    :class="cn(carouselControl, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getControlProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/carousel/CarouselPrevTrigger.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-vue-next";
import { carouselPrevTrigger } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getPrevTriggerProps() }">
    <slot v-if="asChild" />
    <Button v-else :class="cn(carouselPrevTrigger, className)">
      <slot v-if="$slots.default" />
      <ArrowLeft v-else />
    </Button>
    <slot />
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/carousel/CarouselNextTrigger.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { carouselNextTrigger } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getNextTriggerProps() }">
    <slot v-if="asChild" />
    <Button v-else :class="cn(carouselNextTrigger, className)">
      <slot v-if="$slots.default" />
      <ArrowRight v-else />
    </Button>
    <slot />
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/carousel/CarouselIndicatorGroup.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselIndicatorGroup } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot
    :class="cn(carouselIndicatorGroup, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorGroupProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/carousel/CarouselIndicator.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { carouselIndicator } from "@midoneui/core/styles/carousel.styles";
import type { Api, IndicatorProps } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  index,
  ...props
} = defineProps<
  {
    class?: string;
    asChild?: boolean;
  } & IndicatorProps
>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <button
    :class="cn(carouselIndicator, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getIndicatorProps({ index }) }"
  />
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/carousel/CarouselItemGroup.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { carouselItemGroup } from "@midoneui/core/styles/carousel.styles";
import type { Api } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot
    :class="cn(carouselItemGroup, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getItemGroupProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/carousel/CarouselItem.vue">
          {`
<script lang="ts" setup>
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { Box } from "@/components/ui/box";
import { carouselItem } from "@midoneui/core/styles/carousel.styles";
import type { Api, ItemProps } from "@zag-js/carousel";
import { inject } from "vue";

const {
  class: className,
  asChild = false,
  index,
  ...props
} = defineProps<
  {
    class?: string;
    asChild?: boolean;
  } & ItemProps
>();

const api = inject<Api>("carouselApi");
</script>

<template>
  <Slot v-bind="{ ...props, ...$attrs, ...api?.getItemProps({ index }) }">
    <slot v-if="asChild" />
    <Box v-else :class="cn(carouselItem, className)"><slot /></Box>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/carousel/index.ts">
          {`
export { default as CarouselRoot } from "./CarouselRoot.vue";
export { default as CarouselControl } from "./CarouselControl.vue";
export { default as CarouselPrevTrigger } from "./CarouselPrevTrigger.vue";
export { default as CarouselNextTrigger } from "./CarouselNextTrigger.vue";
export { default as CarouselIndicatorGroup } from "./CarouselIndicatorGroup.vue";
export { default as CarouselIndicator } from "./CarouselIndicator.vue";
export { default as CarouselItemGroup } from "./CarouselItemGroup.vue";
export { default as CarouselItem } from "./CarouselItem.vue";
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
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
} from "@/components/ui/carousel";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<CarouselRoot
  :default-page="0"
  :slide-count="images.length"
  class="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselIndicatorGroup>
    <CarouselIndicator
      v-for="(_, index) in images"
      :key="index"
      :index="index"
    />
  </CarouselIndicatorGroup>
  <CarouselItemGroup>
    <CarouselItem
      v-for="(image, index) in images"
      :key="index"
      :index="index"
      class="text-5xl bold flex items-center justify-center"
    >
      {{ index + 1 }}
    </CarouselItem>
  </CarouselItemGroup>
</CarouselRoot>
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
                <CarouselRoot
                  defaultPage={0}
                  slideCount={images.length}
                  className="size-72"
                >
                  <CarouselControl>
                    <CarouselPrevTrigger />
                    <CarouselNextTrigger />
                  </CarouselControl>
                  <CarouselIndicatorGroup>
                    {images.map((_, index) => (
                      <CarouselIndicator key={index} index={index} />
                    ))}
                  </CarouselIndicatorGroup>
                  <CarouselItemGroup>
                    {images.map((image, index) => (
                      <CarouselItem key={index} index={index}>
                        <img src={image} alt={`Slide ${index}`} />
                      </CarouselItem>
                    ))}
                  </CarouselItemGroup>
                </CarouselRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<CarouselRoot
  :default-page="0"
  :slide-count="images.length"
  class="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselIndicatorGroup>
    <CarouselIndicator
      v-for="(_, index) in images"
      :key="index"
      :index="index"
    />
  </CarouselIndicatorGroup>
  <CarouselItemGroup>
    <CarouselItem
      v-for="(image, index) in images"
      :key="index"
      :index="index"
    >
      <img :src="image" :alt="\`Slide $\{index\}\`" />
    </CarouselItem>
  </CarouselItemGroup>
</CarouselRoot>
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
