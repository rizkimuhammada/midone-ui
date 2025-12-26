import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router";
import { MobileMenuContext, FrameworkContext } from "../../App";
import { X } from "lucide-react";
import {
  SelectRoot,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
} from "@/components/ui/select";
import * as select from "@zag-js/select";

function Main({ className }: React.ComponentProps<"div">) {
  const { showMenu, setShowMenu } = useContext(MobileMenuContext);
  const { framework, setFramework } = useContext(FrameworkContext);
  const menus = [
    {
      title: "Accordion",
      link: "/docs/accordion",
      isNew: false,
    },
    {
      title: "Alert",
      link: "/docs/alert",
      isNew: false,
    },
    {
      title: "Avatar",
      link: "/docs/avatar",
      isNew: false,
    },
    {
      title: "Badge",
      link: "/docs/badge",
      isNew: false,
    },
    {
      title: "Box",
      link: "/docs/box",
      isNew: false,
    },
    {
      title: "Breadcrumb",
      link: "/docs/breadcrumb",
      isNew: false,
    },
    {
      title: "Button",
      link: "/docs/button",
      isNew: false,
    },
    {
      title: "Carousel",
      link: "/docs/carousel",
      isNew: false,
    },
    {
      title: "Chart",
      link: "/docs/chart",
      isNew: false,
    },
    {
      title: "Checkbox",
      link: "/docs/checkbox",
      isNew: false,
    },
    {
      title: "Combobox",
      link: "/docs/combobox",
      isNew: false,
    },
    {
      title: "Datatable",
      link: "/docs/data-table",
      isNew: false,
    },
    {
      title: "Datepicker",
      link: "/docs/datepicker",
      isNew: false,
    },
    {
      title: "Dialog",
      link: "/docs/dialog",
      isNew: false,
    },
    {
      title: "Input",
      link: "/docs/input",
      isNew: false,
    },
    {
      title: "Menu",
      link: "/docs/menu",
      isNew: false,
    },
    {
      title: "Pagination",
      link: "/docs/pagination",
      isNew: false,
    },
    {
      title: "Popover",
      link: "/docs/popover",
      isNew: false,
    },
    {
      title: "Progress Circular",
      link: "/docs/progress-circular",
      isNew: false,
    },
    {
      title: "Progress Linear",
      link: "/docs/progress-linear",
      isNew: false,
    },
    {
      title: "Radio Group",
      link: "/docs/radio-group",
      isNew: false,
    },
    {
      title: "Select",
      link: "/docs/select",
      isNew: false,
    },
    {
      title: "Sheet",
      link: "/docs/sheet",
      isNew: false,
    },
    {
      title: "Slider",
      link: "/docs/slider",
      isNew: false,
    },
    {
      title: "Switch",
      link: "/docs/switch",
      isNew: false,
    },
    {
      title: "Table",
      link: "/docs/table",
      isNew: false,
    },
    {
      title: "Tabs",
      link: "/docs/tabs",
      isNew: false,
    },
    {
      title: "Textarea",
      link: "/docs/textarea",
      isNew: false,
    },
    {
      title: "Toast",
      link: "/docs/toast",
      isNew: false,
    },
    {
      title: "Tooltip",
      link: "/docs/tooltip",
      isNew: false,
    },
  ];
  const collection = select.collection({
    items: [
      { label: "React", code: "react" },
      { label: "Vue", code: "vue" },
    ],
    itemToValue: (item) => item.label,
  });

  return (
    <div
      className={twMerge([
        "before:fixed before:w-screen before:left-0 before:top-0 before:h-screen before:bg-background/5 before:backdrop-blur before:z-[-1]",
        "after:fixed after:w-70 after:inset-0 after:bg-background/80 after:border-r after:border-foreground/15 lg:after:backdrop-none after:z-[-1]",
        "h-screen pb-10 sm:h-[calc(100vh-14rem)] overflow-y-auto pt-10 top-0 left-0 fixed flex flex-col gap-10 text-foreground/50 w-70 lg:w-[25%] xl:w-[15%] lg:top-30 bottom-0 lg:pt-0 lg:pt-10 pl-10 [&.active]:z-[99999] -ml-[100%] transition-[margin] lg:left-auto lg:ml-0 before:hidden after:hidden [&.active]:ml-0 [&.active]:after:block [&.active]:before:block [&.active]:lg:before:hidden [&.active]:lg:after:hidden",
        showMenu && "active",
        className,
      ])}
    >
      <div
        onClick={() => setShowMenu(false)}
        className="absolute top-0 right-0 mt-8 cursor-pointer text-foreground lg:hidden border-s border-y border-white/20 z-[9999] py-1 px-2"
      >
        <X className="size-5" />
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-foreground mb-2">
          Select a Framework
        </div>
        <SelectRoot
          collection={collection}
          className="w-[80%] mt-2"
          value={framework}
          onValueChange={(val) => {
            localStorage.setItem("framework", val.value[0]);
            setFramework(val.value);
          }}
        >
          <SelectControl>
            <SelectTrigger>
              <SelectValueText placeholder="Select a Framework" />
            </SelectTrigger>
          </SelectControl>
          <SelectContent>
            <SelectItemGroup>
              <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
              {collection.items.map((item) => (
                <SelectItem key={item.code} item={item}>
                  <SelectItemText>{item.label}</SelectItemText>
                </SelectItem>
              ))}
            </SelectItemGroup>
          </SelectContent>
        </SelectRoot>
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-foreground mb-2">Getting Started</div>
        <NavLink
          onClick={() => setShowMenu(false)}
          to="/docs/introduction"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1.5",
              isActive && "text-foreground",
            ])
          }
        >
          Introduction
        </NavLink>
        <NavLink
          onClick={() => setShowMenu(false)}
          to="/docs/how-to-use"
          className={({ isActive }) =>
            twMerge([
              "hover:text-foreground py-1.5",
              isActive && "text-foreground",
            ])
          }
        >
          How to Use
        </NavLink>
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-foreground mb-2">Components</div>
        {menus.map((menu, menuKey) => (
          <NavLink
            onClick={() => setShowMenu(false)}
            to={menu.link}
            className={({ isActive }) =>
              twMerge([
                "hover:text-foreground py-1.5",
                isActive && "text-foreground",
              ])
            }
            key={menuKey}
          >
            {menu.title}
            {menu.isNew && (
              <span className="px-2 py-px border border-foreground/30 bg-foreground/10 text-xs ms-2">
                New
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Main;
