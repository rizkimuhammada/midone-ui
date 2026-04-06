<script lang="ts" setup>
import { Lucide } from "@/components/ui/lucide";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
    collapsed-width="100px"
    class="bg-background"
  >
    <SideMenuPanel class="after:bg-background xl:after:hidden">
      <SideMenuInner class="border-e border-foreground/5 bg-slate-50/50 dark:bg-dark-1/50 backdrop-blur-md">
        <SideMenuHeader class="p-6 flex items-center justify-between">
          <div class="flex items-center gap-3.5">
            <div class="size-9 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Lucide icon="Activity" class="size-5" />
            </div>
            <span class="text-[17px] font-bold tracking-tight text-foreground/90">Midone UI</span>
          </div>
        </SideMenuHeader>

        <div class="px-6 mb-4">
          <div class="relative group/search">
            <Lucide icon="Search" class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/30 transition-colors group-focus-within/search:text-primary" />
            <input
              type="text"
              placeholder="Search components..."
              class="w-full bg-foreground/[0.03] border border-foreground/5 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary/20 transition-all placeholder:text-foreground/30"
            />
          </div>
        </div>

        <SideMenuBody class="px-3">
          <nav class="flex flex-col gap-0.5">
            <div class="px-3 mb-2 text-[11px] font-bold uppercase tracking-widest text-foreground/40 mt-4">
              Overview
            </div>
            <a href="#" class="px-4 py-2.5 bg-primary/5 text-primary rounded-xl font-semibold text-[13.5px] flex items-center gap-3.5 transition-all hover:bg-primary/10">
              <Lucide icon="LayoutDashboard" class="size-4.5 stroke-[2.5px]" />
              Analytics
            </a>
            <a href="#" class="px-4 py-2.5 hover:bg-foreground/[0.03] rounded-xl text-[13.5px] text-foreground/60 flex items-center gap-3.5 transition-all hover:text-foreground/90">
              <Lucide icon="Users" class="size-4.5 stroke-[2px]" />
              Customers
            </a>
            <a href="#" class="px-4 py-2.5 hover:bg-foreground/[0.03] rounded-xl text-[13.5px] text-foreground/60 flex items-center gap-3.5 transition-all hover:text-foreground/90">
              <Lucide icon="ShoppingBag" class="size-4.5 stroke-[2px]" />
              E-commerce
            </a>

            <div class="px-3 mb-2 text-[11px] font-bold uppercase tracking-widest text-foreground/40 mt-6">
              Documentation
            </div>
            <a href="#" class="px-4 py-2.5 hover:bg-foreground/[0.03] rounded-xl text-[13.5px] text-foreground/60 flex items-center gap-3.5 transition-all hover:text-foreground/90">
              <Lucide icon="Files" class="size-4.5 stroke-[2px]" />
              Introduction
            </a>
            <a href="#" class="px-4 py-2.5 hover:bg-foreground/[0.03] rounded-xl text-[13.5px] text-foreground/60 flex items-center gap-3.5 transition-all hover:text-foreground/90 group/link">
              <Lucide icon="Box" class="size-4.5 stroke-[2px]" />
              Components
              <Lucide icon="ChevronRight" class="ml-auto size-3.5 opacity-30 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#" class="px-4 py-2.5 hover:bg-foreground/[0.03] rounded-xl text-[13.5px] text-foreground/60 flex items-center gap-3.5 transition-all hover:text-foreground/90">
              <Lucide icon="Shield" class="size-4.5 stroke-[2px]" />
              Security
            </a>
          </nav>

          <div class="mt-auto px-3 pb-6">
            <div class="p-4 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden group">
              <Lucide icon="Zap" class="absolute -right-4 -bottom-4 size-16 text-primary/5 -rotate-12 transition-transform group-hover:scale-110" />
              <div class="relative z-10">
                <div class="text-[13px] font-bold text-primary/80">Pro Version</div>
                <div class="text-[11px] text-foreground/50 mt-1 line-clamp-2 leading-tight">Unlock premium themes and layout systems.</div>
                <button class="mt-3 w-full bg-primary text-white py-1.5 rounded-lg text-[11px] font-bold shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </SideMenuBody>
      </SideMenuInner>
    </SideMenuPanel>

    <SideMenuArea class="bg-slate-50/30 dark:bg-dark-1/30">
      <SideMenuTopBar>
        <SideMenuTopBarInner class="px-6 bg-background/60 backdrop-blur-md border-b border-foreground/5 shadow-sm shadow-foreground/5">
          <div class="mr-auto">
            <Breadcrumb
              class="text-xs font-medium [&_ol]:text-foreground/40 [&_li]:last:text-foreground/80"
              :items="['Apps', 'Dashboard']"
            />
          </div>
          <div class="flex items-center gap-3">
            <button class="size-10 flex items-center justify-center rounded-xl hover:bg-foreground/[0.03] transition-colors relative">
              <Lucide icon="Bell" class="size-5 text-foreground/60" />
              <span class="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-background"></span>
            </button>
            <div class="h-6 w-px bg-foreground/10 mx-1"></div>
            <div class="flex items-center gap-3 pl-1 cursor-pointer group">
              <div class="text-right hidden sm:block">
                <div class="text-[13px] font-bold text-foreground/80 leading-none">James Doe</div>
                <div class="text-[10px] text-foreground/40 mt-1 leading-none">Administrator</div>
              </div>
              <div class="size-9 bg-foreground/10 rounded-xl flex items-center justify-center text-xs font-bold ring-2 ring-transparent group-hover:ring-primary/20 transition-all overflow-hidden border border-foreground/5">
                <img src="https://ui-avatars.com/api/?name=James+Doe&background=random" class="size-full object-cover" />
              </div>
            </div>
          </div>
        </SideMenuTopBarInner>
      </SideMenuTopBar>

      <div class="p-8 md:p-12">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 class="text-3xl font-black tracking-tight text-foreground/90 italic uppercase">Overview</h1>
            <p class="text-foreground/50 mt-1 text-sm">Real-time performance and system status metrics.</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-4 py-2 bg-background border border-foreground/10 rounded-xl text-sm font-bold shadow-sm hover:bg-foreground/[0.01] transition-all flex items-center gap-2 text-foreground/70">
              <Lucide icon="Share2" class="size-4" />
              Share
            </button>
            <button class="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
              <Lucide icon="Plus" class="size-4" />
              Add Widget
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-7 bg-background border border-foreground/10 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <Lucide icon="Users" class="size-20" />
            </div>
            <div class="size-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Lucide icon="Users" class="size-5" />
            </div>
            <div class="text-sm font-bold text-foreground/40 uppercase tracking-widest">Total Users</div>
            <div class="text-3xl font-black mt-2 text-foreground/90">24.5k</div>
            <div class="mt-4 flex items-center gap-2 text-xs font-bold text-green-500">
              <Lucide icon="ArrowUpRight" class="size-3" />
              +12.5%
              <span class="text-foreground/30 font-normal">than last month</span>
            </div>
          </div>

          <div class="p-7 bg-background border border-foreground/10 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <Lucide icon="ShoppingBag" class="size-20" />
            </div>
            <div class="size-10 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mb-4">
              <Lucide icon="ShoppingBag" class="size-5" />
            </div>
            <div class="text-sm font-bold text-foreground/40 uppercase tracking-widest">Sales</div>
            <div class="text-3xl font-black mt-2 text-foreground/90">$182.3k</div>
            <div class="mt-4 flex items-center gap-2 text-xs font-bold text-orange-500">
              <Lucide icon="ArrowDownRight" class="size-3" />
              -2.4%
              <span class="text-foreground/30 font-normal">than last week</span>
            </div>
          </div>

          <div class="p-7 bg-background border border-foreground/10 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <Lucide icon="Globe" class="size-20" />
            </div>
            <div class="size-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <Lucide icon="Globe" class="size-5" />
            </div>
            <div class="text-sm font-bold text-foreground/40 uppercase tracking-widest">Sessions</div>
            <div class="text-3xl font-black mt-2 text-foreground/90">2.1M</div>
            <div class="mt-4 flex items-center gap-2 text-xs font-bold text-green-500">
              <Lucide icon="ArrowUpRight" class="size-3" />
              +8.2%
              <span class="text-foreground/30 font-normal">than average</span>
            </div>
          </div>
        </div>

        <div class="mt-10 p-10 bg-background border border-foreground/10 rounded-2xl flex flex-col items-center text-center">
          <div class="size-20 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
            <Lucide icon="Layout" class="size-10" />
          </div>
          <h2 class="text-xl font-bold italic uppercase tracking-tight">Flexible Composition</h2>
          <p class="mt-4 text-foreground/50 max-w-lg">
            The SideMenu component system is designed to be fully composable.
            You can rearrange parts, add your own wrappers, and target specific components
            using standard CSS or Tailwind classes.
          </p>
          <div class="flex gap-3 mt-8">
            <code class="px-4 py-2 bg-foreground/[0.03] rounded-lg text-xs font-mono border border-foreground/5">&lt;SideMenuRoot&gt;</code>
            <code class="px-4 py-2 bg-foreground/[0.03] rounded-lg text-xs font-mono border border-foreground/5">&lt;SideMenuPanel&gt;</code>
            <code class="px-4 py-2 bg-foreground/[0.03] rounded-lg text-xs font-mono border border-foreground/5">&lt;SideMenuArea&gt;</code>
          </div>
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
