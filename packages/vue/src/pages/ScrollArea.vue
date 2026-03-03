<script setup lang="ts">
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@/components/ui/scroll-area";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid sm:grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ScrollAreaRoot class="h-72 w-70 border rounded-xl bg-background shadow-sm">
          <ScrollAreaViewport class="h-full w-full p-4">
            <ScrollAreaContent>
              <div class="text-xl font-medium mb-4">Scroll Area Example</div>
              <div v-for="i in 20" :key="i" class="mb-4 last:mb-0 opacity-80">
                This is line number {{ i }} of the scrollable content. It helps
                demonstrate how the custom scrollbar works within the
                Midone UI system.
              </div>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar
            orientation="vertical"
            class="w-2.5 hover:bg-foreground/5"
          >
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollAreaRoot>
      </div>

      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
        <ScrollAreaRoot class="h-40 w-70 border rounded-xl bg-background shadow-sm">
          <ScrollAreaViewport class="h-full w-full p-4">
            <ScrollAreaContent>
              <div class="whitespace-nowrap px-2 py-8">
                <div class="inline-flex gap-4">
                  <div
                    v-for="i in 10"
                    :key="i"
                    class="size-20 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary"
                  >
                    Card {{ i }}
                  </div>
                </div>
              </div>
            </ScrollAreaContent>
          </ScrollAreaViewport>
          <ScrollAreaScrollbar
            orientation="horizontal"
            class="h-2.5 hover:bg-foreground/5 mr-1"
          >
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>
        </ScrollAreaRoot>
      </div>
    </div>
  </div>
</template>
