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

function Main() {
  return (
    <SideMenuRoot
      width="280px"
      collapsedWidth="80px"
      className="bg-background"
    >
      <SideMenuPanel className="after:bg-background xl:after:hidden">
        <SideMenuInner className="border-e border-foreground/10 bg-slate-50/50 dark:bg-dark-1/50">
          <SideMenuHeader className="p-6 flex items-center justify-between [&_[data-part=toggle]]:border-foreground/50">
            <div className="flex items-center gap-3.5">
              <div className="size-9 bg-primary rounded-xl flex items-center justify-center text-white">
                <Lucide icon="Activity" className="size-5" />
              </div>
              <span className="text-nowrap font-medium group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block">
                Midone UI
              </span>
            </div>
          </SideMenuHeader>
          <div className="px-6 mb-4">
            <div className="relative group/search">
              <Lucide
                icon="Search"
                className="absolute left-3 top-1/2 -translate-y-1/2 size-4 opacity-50 z-50"
              />
              <Input
                placeholder="Search components..."
                className="group-[[data-compact-menu=true]]:invisible group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:visible bg-foreground/[.02] shadow-none ps-9 placeholder:opacity-50"
              />
            </div>
          </div>
          <SideMenuBody className="px-3">
            <nav className="flex flex-col gap-0.5">
              <div className="px-3 mb-2 text-xs opacity-50 mt-6 truncate">
                Overview
              </div>
              <a
                href="#"
                className="px-4 py-2.5 rounded-xl flex items-center gap-2"
              >
                <Lucide icon="LayoutDashboard" />
                <span className="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">
                  Analytics
                </span>
              </a>
              <a
                href="#"
                className="px-4 py-2.5 rounded-xl flex items-center gap-2"
              >
                <Lucide icon="Users" />
                <span className="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">
                  Customers
                </span>
              </a>
              <a
                href="#"
                className="px-4 py-2.5 rounded-xl flex items-center gap-2"
              >
                <Lucide icon="ShoppingBag" />
                <span className="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">
                  E-commerce
                </span>
              </a>
              <div className="px-3 mb-2 text-xs opacity-50 mt-6 truncate">
                Documentation
              </div>
              <a
                href="#"
                className="px-4 py-2.5 rounded-xl flex items-center gap-2"
              >
                <Lucide icon="Files" />
                <span className="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">
                  Introduction
                </span>
              </a>
              <a
                href="#"
                className="px-4 py-2.5 rounded-xl flex items-center gap-2"
              >
                <Lucide icon="Box" />
                <span className="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">
                  Components
                </span>
                <Lucide
                  icon="ChevronRight"
                  className="ml-auto size-3.5 opacity-30 group-hover:translate-x-0.5 transition-transform group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block"
                />
              </a>
              <a
                href="#"
                className="px-4 py-2.5 rounded-xl flex items-center gap-2"
              >
                <Lucide icon="Shield" />
                <span className="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">
                  Security
                </span>
              </a>
            </nav>
          </SideMenuBody>
        </SideMenuInner>
      </SideMenuPanel>
      <SideMenuArea className="bg-foreground/5">
        <SideMenuTopBar className="transition-[padding] duration-300 ease-in-out [&[data-scrolled=true]]:sticky [&[data-scrolled=true]]:px-5 [&[data-scrolled=true]]:top-4 [&[data-scrolled=true]]:z-[999]">
          <SideMenuTopBarInner className="px-6 bg-background/60 border-foreground/5 shadow-sm shadow-foreground/5 transition-all duration-300 ease-in-out group-[[data-scrolled=true]]:rounded-2xl group-[[data-scrolled=true]]:bg-background group-[[data-scrolled=true]]:border group-[[data-scrolled=true]]:shadow-lg group-[[data-scrolled=true]]:shadow-foreground/5">
            <div className="mr-auto">
              <Breadcrumb items={["Apps", "Dashboard"]} />
            </div>
            <div className="flex items-center gap-3">
              <MenuRoot>
                <MenuTrigger
                  className="flex items-center gap-3 pl-1 cursor-pointer group outline-none"
                  asChild
                >
                  <div className="text-right hidden sm:block">
                    <div className="font-medium">James Doe</div>
                    <div className="text-xs opacity-70">Administrator</div>
                  </div>
                </MenuTrigger>
                <MenuContent className="w-48">
                  <MenuItem value="profile">
                    <Lucide icon="User" className="size-4" /> Profile
                  </MenuItem>
                  <MenuItem value="settings">
                    <Lucide icon="Settings" className="size-4" /> Settings
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem value="logout">
                    <Lucide icon="LogOut" className="size-4" /> Logout
                  </MenuItem>
                </MenuContent>
              </MenuRoot>
            </div>
          </SideMenuTopBarInner>
        </SideMenuTopBar>
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-2xl font-medium">Overview</h1>
              <p className="opacity-70">
                Real-time performance and system status metrics.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button look="filled" variant="secondary">
                <Lucide icon="Share2" className="size-4" />
                Share
              </Button>
              <Button look="filled" variant="primary">
                <Lucide icon="Plus" className="size-4" />
                Add Widget
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Box>
              <Lucide
                icon="CircleGauge"
                className="size-7 stroke-1 fill-foreground/10"
              />
              <div className="mt-6 text-2xl font-medium leading-8">
                $724,091.47
              </div>
              <div className="mt-1.5 text-xs uppercase opacity-70">
                Item Sales
              </div>
            </Box>
            <Box>
              <Lucide
                icon="CircleGauge"
                className="size-7 stroke-1 fill-foreground/10"
              />
              <div className="mt-6 text-2xl font-medium leading-8">
                $724,091.47
              </div>
              <div className="mt-1.5 text-xs uppercase opacity-70">
                Item Sales
              </div>
            </Box>
            <Box>
              <Lucide
                icon="CircleGauge"
                className="size-7 stroke-1 fill-foreground/10"
              />
              <div className="mt-6 text-2xl font-medium leading-8">
                $724,091.47
              </div>
              <div className="mt-1.5 text-xs uppercase opacity-70">
                Item Sales
              </div>
            </Box>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </SideMenuArea>
    </SideMenuRoot>
  );
}

export default Main;
