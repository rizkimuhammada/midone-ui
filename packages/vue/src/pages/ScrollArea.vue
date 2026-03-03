<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/components/ui/scroll-area";

import * as scrollArea from "@zag-js/scroll-area"
  import { useMachine, normalizeProps } from "@zag-js/vue"
  import { computed, useId } from "vue"

  const service = useMachine(scrollArea.machine, { id: useId() })

  const api = computed(() => scrollArea.connect(service, normalizeProps))
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid sm:grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ScrollAreaRoot class="h-72 w-70">
          <ScrollAreaViewport>
            <ScrollAreaContent>
              <div class="text-xl font-medium mb-4">Scroll Area Example</div>
              <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
                This is line number {{ i }} of the scrollable content. It helps
                demonstrate how the custom scrollbar works within the
                Midone UI system.
              </div>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar>
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
        </ScrollAreaRoot>
      </div>
    </div>
  </div>
  <!-- <div v-bind="api.getRootProps()" class="h-72 w-70">
    <div v-bind="api.getViewportProps()" class="h-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div v-bind="api.getContentProps()">
        <div class="text-xl font-medium mb-4">Scroll Area Example</div>
              <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
                This is line number {{ i }} of the scrollable content. It helps
                demonstrate how the custom scrollbar works within the
                Midone UI system.
              </div>
      </div>
    </div>
    <div v-bind="api.getScrollbarProps()">
      <div v-bind="api.getThumbProps()" />
    </div>
  </div> -->
</template>