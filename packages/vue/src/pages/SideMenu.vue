<script lang="ts" setup>
import {
  SideMenuRoot,
  SideMenuPanel,
  SideMenuInner,
  SideMenuHeader,
  SideMenuBody,
  SideMenuArea,
  SideMenuTopBar,
  SideMenuTopBarInner,
} from "@/components/ui/side-menu";
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid grid-cols-1">
      <div class="border-b border-e border-foreground/10 p-10">
        <SideMenuRoot
          width="275px"
          collapsed-width="110px"
          class="bg-background min-h-[600px] border border-foreground/10 rounded-xl overflow-hidden relative shadow-sm"
        >
          <SideMenuPanel class="after:bg-background xl:after:hidden">
            <SideMenuInner class="border-e border-foreground/10">
              <SideMenuHeader class="p-5 border-b border-foreground/10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">M</div>
                  <span class="text-lg font-bold">Midone</span>
                </div>
              </SideMenuHeader>
              <SideMenuBody class="p-5">
                <nav class="flex flex-col gap-1">
                  <a href="#" class="px-3 py-2 bg-primary/10 text-primary rounded-md font-medium text-sm flex items-center gap-3">
                    Dashboard
                  </a>
                  <a href="#" class="px-3 py-2 hover:bg-foreground/5 rounded-md text-sm text-foreground/70 flex items-center gap-3">
                    Users
                  </a>
                  <a href="#" class="px-3 py-2 hover:bg-foreground/5 rounded-md text-sm text-foreground/70 flex items-center gap-3">
                    Products
                  </a>
                  <div class="mt-4 mb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                    Application
                  </div>
                  <a href="#" class="px-3 py-2 hover:bg-foreground/5 rounded-md text-sm text-foreground/70 flex items-center gap-3">
                    Calendar
                  </a>
                  <a href="#" class="px-3 py-2 hover:bg-foreground/5 rounded-md text-sm text-foreground/70 flex items-center gap-3">
                    Messages
                  </a>
                </nav>
              </SideMenuBody>
            </SideMenuInner>
          </SideMenuPanel>
          <SideMenuArea class="bg-foreground/[0.02]">
            <SideMenuTopBar>
              <SideMenuTopBarInner class="px-5 bg-background border-b border-foreground/10">
                <div class="mr-auto font-medium text-sm">Overview</div>
                <div class="flex items-center gap-4">
                  <div class="size-8 bg-foreground/10 rounded-full flex items-center justify-center text-xs font-bold">JD</div>
                </div>
              </SideMenuTopBarInner>
            </SideMenuTopBar>
            <div class="p-10">
              <h1 class="text-2xl font-bold">Design System</h1>
              <p class="mt-4 text-foreground/60 leading-relaxed max-w-2xl">
                The SideMenu component system provides a robust foundation for building sidebar navigations. 
                It is built using a compositional approach, allowing themes to fully customize 
                layouts while maintaining consistent state management and accessibility.
              </p>
              
              <div class="grid grid-cols-2 gap-5 mt-10">
                <div class="p-6 bg-background border border-foreground/10 rounded-xl shadow-sm">
                  <h3 class="font-bold">Full Composition</h3>
                  <p class="mt-2 text-xs text-foreground/50">Control every part of the layout via sub-components.</p>
                </div>
                <div class="p-6 bg-background border border-foreground/10 rounded-xl shadow-sm">
                  <h3 class="font-bold">Attribute Driven</h3>
                  <p class="mt-2 text-xs text-foreground/50">Styled using data-attributes for various states.</p>
                </div>
              </div>
            </div>
          </SideMenuArea>
        </SideMenuRoot>
      </div>
    </div>
  </div>
</template>
