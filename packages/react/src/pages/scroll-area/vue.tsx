import {
    Preview,
    SectionTitle,
    SectionContent,
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
                                <div className="h-72 w-80 relative overflow-hidden flex bg-white dark:bg-darkmode-600 rounded-md border border-foreground/10">
                                    <div className="h-full w-full overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                        <div className="p-4 pr-10">
                                            <div className="text-xl font-medium mb-4">
                                                Scroll Area Example (Vue)
                                            </div>
                                            {Array.from({ length: 20 }).map((_, i) => (
                                                <div key={i} className="mb-4 last:mb-0 opacity-80">
                                                    This is line number {i + 1} of the scrollable content.
                                                    It helps demonstrate how the custom scrollbar works.
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex relative bg-foreground/5 rounded-md m-2 w-2.5 opacity-100">
                                        <div className="w-full rounded-[inherit] bg-foreground/20 h-10" />
                                    </div>
                                </div>
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
  ScrollAreaCorner
} from "@/components/ui/scroll-area"
</script>

<template>
  <ScrollAreaRoot class="h-72 w-80">
    <ScrollAreaViewport>
      <ScrollAreaContent>
        <div class="p-4 pr-10">
          <div class="text-xl font-medium mb-4">Scroll Area Example</div>
          <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
            This is line number {{ i }} of the scrollable content.
          </div>
        </div>
      </ScrollAreaContent>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
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
            </div>
        </>
    );
}

export default Main;
