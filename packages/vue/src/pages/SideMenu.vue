<script lang="ts" setup>
import { Lucide } from "@/components/ui/lucide";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuSeparator,
} from "@/components/ui/menu";
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
  <SideMenuRoot
    width="280px"
    collapsed-width="80px"
    class="bg-background"
  >
    <SideMenuPanel class="after:bg-background xl:after:hidden">
      <SideMenuInner class="border-e border-foreground/10 bg-slate-50/50 dark:bg-dark-1/50">
        <SideMenuHeader class="p-6 flex items-center justify-between [&_[data-part=toggle]]:border-foreground/50">
          <div class="flex items-center gap-3.5">
            <div
              class="size-9 bg-primary rounded-xl flex items-center justify-center text-white"
            >
              <Lucide icon="Activity" class="size-5" />
            </div>
            <span
              class="text-nowrap font-medium group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block"
              >Midone UI</span
            >
          </div>
        </SideMenuHeader>
        <div class="px-6 mb-4">
          <div class="relative group/search">
            <Lucide icon="Search" class="absolute left-3 top-1/2 -translate-y-1/2 size-4 opacity-50 z-50" />
            <Input placeholder="Search components..." class="group-[[data-compact-menu=true]]:invisible group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:visible bg-foreground/[.02] shadow-none ps-9 placeholder:opacity-50" />
          </div>
        </div>
        <SideMenuBody class="px-3">
          <nav class="flex flex-col gap-0.5">
            <div
              class="px-3 mb-2 text-xs opacity-50 mt-6 truncate"
            >
              Overview
            </div>
            <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
              <Lucide icon="LayoutDashboard" />
              <span
                class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap"
                >Analytics</span
              >
            </a>
            <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
              <Lucide icon="Users" />
              <span
                class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap"
                >Customers</span
              >
            </a>
            <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
              <Lucide icon="ShoppingBag" />
              <span
                class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap"
                >E-commerce</span
              >
            </a>
            <div
              class="px-3 mb-2 text-xs opacity-50 mt-6 truncate"
            >
              Documentation
            </div>
            <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
              <Lucide icon="Files" />
              <span
                class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap"
                >Introduction</span
              >
            </a>
            <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
              <Lucide icon="Box" />
              <span
                class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap"
                >Components</span
              >
              <Lucide
                icon="ChevronRight"
                class="ml-auto size-3.5 opacity-30 group-hover:translate-x-0.5 transition-transform group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block"
              />
            </a>
            <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
              <Lucide icon="Shield" />
              <span
                class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap"
                >Security</span
              >
            </a>
          </nav>
        </SideMenuBody>
      </SideMenuInner>
    </SideMenuPanel>
    <SideMenuArea class="bg-foreground/5">
      <SideMenuTopBar>
        <SideMenuTopBarInner class="px-6 bg-background/60 border-b border-foreground/5 shadow-sm shadow-foreground/5">
          <div class="mr-auto">
            <Breadcrumb
              :items="['Apps', 'Dashboard']"
            />
          </div>
          <div class="flex items-center gap-3">
            <MenuRoot>
              <MenuTrigger
                class="flex items-center gap-3 pl-1 cursor-pointer group outline-none"
                as-child
              >
                <div class="text-right hidden sm:block">
                  <div class="font-medium">
                    James Doe
                  </div>
                  <div class="text-xs opacity-70">
                    Administrator
                  </div>
                </div>
              </MenuTrigger>
              <MenuContent class="w-48">
                <MenuItem value="profile">
                  <Lucide icon="User" class="size-4" /> Profile
                </MenuItem>
                <MenuItem value="settings">
                  <Lucide icon="Settings" class="size-4" /> Settings
                </MenuItem>
                <MenuSeparator />
                <MenuItem value="logout">
                  <Lucide icon="LogOut" class="size-4" /> Logout
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </div>
        </SideMenuTopBarInner>
      </SideMenuTopBar>
      <div class="p-8 md:p-12">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 class="text-2xl font-medium">Overview</h1>
            <p class="opacity-70">Real-time performance and system status metrics.</p>
          </div>
          <div class="flex items-center gap-2">
            <Button
              look="filled"
              variant="secondary"
            >
              <Lucide icon="Share2" class="size-4" />
              Share
            </Button>
            <Button
              look="filled"
              variant="primary"
            >
              <Lucide icon="Plus" class="size-4" />
              Add Widget
            </Button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Box>
            <Lucide icon="CircleGauge" class="size-7 stroke-1 fill-foreground/10" />
            <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
            <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
          </Box>
          <Box>
            <Lucide icon="CircleGauge" class="size-7 stroke-1 fill-foreground/10" />
            <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
            <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
          </Box>
          <Box>
            <Lucide icon="CircleGauge" class="size-7 stroke-1 fill-foreground/10" />
            <div class="mt-6 text-2xl font-medium leading-8">$724,091.47</div>
            <div class="mt-1.5 text-xs uppercase opacity-70">Item Sales</div>
          </Box>
        </div>
        <br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </SideMenuArea>
  </SideMenuRoot>
</template>
