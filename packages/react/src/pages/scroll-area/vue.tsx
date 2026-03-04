import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/components/ui/scroll-area";
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
                <ScrollAreaRoot className="h-72 w-70">
                  <ScrollAreaViewport>
                    <ScrollAreaContent>
                      <div className="text-base font-medium mb-4">
                        Scroll Area Example
                      </div>
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="mb-4 last:mb-0 opacity-80">
                          This is line number {i + 1} of the scrollable content. It helps demonstrate how the custom scrollbar works within the Midone UI system.
                        </div>
                      ))}
                    </ScrollAreaContent>
                  </ScrollAreaViewport>
                  <ScrollAreaScrollbar>
                    <ScrollAreaThumb />
                  </ScrollAreaScrollbar>
                  <ScrollAreaCorner />
                </ScrollAreaRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/components/ui/scroll-area";
</script>

<template>
  <ScrollAreaRoot class="h-72 w-70">
    <ScrollAreaViewport>
      <ScrollAreaContent>
        <div class="text-base font-medium mb-4">Scroll Area Example</div>
        <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
          This is line number {{ i }} of the scrollable content. It helps
          demonstrate how the custom scrollbar works within the Midone UI
          system.
        </div>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>

      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/scroll-area</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/scroll-area/ScrollAreaRoot.vue">
          {`
<script lang="ts" setup>
import * as scrollArea from "@zag-js/scroll-area";
import type { Props } from "@zag-js/scroll-area";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { cn } from "@midoneui/core/utils/cn";
import { computed, provide } from "vue";
import { scrollAreaRoot } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<
  Partial<Props> & {
    class?: string;
  }
>();

const service = useMachine(scrollArea.machine, {
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => scrollArea.connect(service, normalizeProps));

provide("scrollAreaApi", api);
</script>

<template>
  <div
    v-bind="{ ...api.getRootProps() }"
    :class="cn(scrollAreaRoot, className)"
  >
    <slot />
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/scroll-area/ScrollAreaViewport.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaViewport } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<{ class?: string }>();

const api = inject<Api>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getViewportProps(), ...props }"
    :class="cn(scrollAreaViewport, className)"
  >
    <slot />
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/scroll-area/ScrollAreaContent.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaContent } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<{ class?: string }>();

const api = inject<Api>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getContentProps(), ...props }"
    :class="cn(scrollAreaContent, className)"
  >
    <slot />
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/scroll-area/ScrollAreaScrollbar.vue">
          {`
<script lang="ts" setup>
import type { Api, ScrollbarProps } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaScrollbar } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<
  ScrollbarProps & { class?: string }
>();

const api = inject<Api>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api.getScrollbarProps(), ...props }"
    :class="cn(scrollAreaScrollbar, className)"
  >
    <slot />
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/scroll-area/ScrollAreaThumb.vue">
          {`
<script lang="ts" setup>
import type { Api, ScrollbarProps } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaThumb } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<
  ScrollbarProps & { class?: string }
>();

const api = inject<Api>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api.getThumbProps(props), ...props }"
    :class="cn(scrollAreaThumb, className)"
  />
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/scroll-area/ScrollAreaCorner.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { scrollAreaCorner } from "@midoneui/core/styles/scroll-area.styles";

const { class: className, ...props } = defineProps<{ class?: string }>();

const api = inject<Api>("scrollAreaApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getCornerProps(), ...props }"
    :class="cn(scrollAreaCorner, className)"
  />
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/scroll-area/index.ts">
          {`
export { default as ScrollAreaRoot } from "./ScrollAreaRoot.vue";
export { default as ScrollAreaViewport } from "./ScrollAreaViewport.vue";
export { default as ScrollAreaContent } from "./ScrollAreaContent.vue";
export { default as ScrollAreaScrollbar } from "./ScrollAreaScrollbar.vue";
export { default as ScrollAreaThumb } from "./ScrollAreaThumb.vue";
export { default as ScrollAreaCorner } from "./ScrollAreaCorner.vue";
          `}
        </PreviewCode>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/components/ui/scroll-area";
          `}
        </PreviewCode>
        <PreviewCode>
          {`
<ScrollAreaRoot class="h-72 w-70">
  <ScrollAreaViewport>
    <ScrollAreaContent>
      <!-- Scrollable content here -->
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar>
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
  <ScrollAreaCorner />
</ScrollAreaRoot>
          `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
