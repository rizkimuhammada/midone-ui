# Side Menu

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="side-menu-root" data-width="280px" data-collapsed-width="80px" class="bg-background">
    <div data-component="side-menu-panel" data-part="panel" class="after:bg-background xl:after:hidden">
      <div data-component="side-menu-inner" data-part="inner"
        class="border-e border-foreground/10 bg-slate-50/50 dark:bg-dark-1/50 backdrop-blur-md">
        <header data-component="side-menu-header" data-part="header"
          class="p-6 flex items-center justify-between [&_[data-part=toggle]]:border-foreground/50">
          <div class="flex items-center gap-3.5">
            <div class="size-9 bg-primary rounded-xl flex items-center justify-center text-white">
              <i data-lucide="activity" class="size-5"></i>
            </div>
            <span
              class="text-nowrap font-medium group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block">Midone
              UI</span>
          </div>
        </header>
        <div class="px-6 mb-4">
          <div class="relative group/search">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 size-4 opacity-50 z-50"></i>
            <input data-component="input" placeholder="Search components..."
              class="group-[[data-compact-menu=true]]:invisible group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:visible bg-foreground/[.02] shadow-none ps-9 placeholder:opacity-50" />
          </div>
        </div>
        <div data-component="side-menu-body" data-part="body" class="px-3">
          <div data-part="content">
            <nav class="flex flex-col gap-0.5">
              <div class="px-3 mb-2 text-xs opacity-50 mt-6 truncate">
                Overview
              </div>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="layout-dashboard"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Analytics</span>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="users"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Customers</span>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="shopping-bag"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">E-commerce</span>
              </a>
              <div class="px-3 mb-2 text-xs opacity-50 mt-6 truncate">
                Documentation
              </div>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="files"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Introduction</span>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="box"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Components</span>
                <i data-lucide="chevron-right"
                  class="ml-auto size-3.5 opacity-30 group-hover:translate-x-0.5 transition-transform group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block"></i>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="shield"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Security</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div data-component="side-menu-area" data-part="area" class="bg-foreground/5">
      <div data-part="inner">
        <div data-part="wrapper">
          <div data-part="scroll">
            <header data-component="side-menu-top-bar" data-part="top-bar"
              class="transition-[padding] duration-300 ease-in-out [&[data-scrolled=true]]:sticky [&[data-scrolled=true]]:px-5 [&[data-scrolled=true]]:top-4 [&[data-scrolled=true]]:z-[999]">
              <div data-component="side-menu-top-bar-inner" data-part="top-bar-inner"
                class="px-6 bg-background/60 border-foreground/5 shadow-sm shadow-foreground/5 transition-all duration-300 ease-in-out group-[[data-scrolled=true]]:rounded-2xl group-[[data-scrolled=true]]:bg-background group-[[data-scrolled=true]]:border group-[[data-scrolled=true]]:shadow-lg group-[[data-scrolled=true]]:shadow-foreground/5">
                <div class="mr-auto">
                  <div data-component="breadcrumb" data-items="['Apps', 'Dashboard']"></div>
                </div>
                <div class="flex items-center gap-3">
                  <div data-component="menu-root">
                    <div data-component="menu-trigger" data-as-child
                      class="flex items-center gap-3 pl-1 cursor-pointer group outline-none">
                      <div class="text-right hidden sm:block">
                        <div class="font-medium">James Doe</div>
                        <div class="text-xs opacity-70">Administrator</div>
                      </div>
                    </div>
                    <div data-component="menu-content" class="w-48">
                      <div data-component="menu-item" data-value="profile">
                        <i data-lucide="user" class="size-4"></i> Profile
                      </div>
                      <div data-component="menu-item" data-value="settings">
                        <i data-lucide="settings" class="size-4"></i> Settings
                      </div>
                      <hr data-component="menu-separator" />
                      <div data-component="menu-item" data-value="logout">
                        <i data-lucide="log-out" class="size-4"></i> Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div class="p-8 md:p-12">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                  <h1 class="text-2xl font-medium">Overview</h1>
                  <p class="opacity-70">
                    Real-time performance and system status metrics.
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <button data-component="button" data-look="filled" data-variant="secondary">
                    <i data-lucide="share-2" class="size-4"></i>
                    Share
                  </button>
                  <button data-component="button" data-look="filled" data-variant="primary">
                    <i data-lucide="plus" class="size-4"></i>
                    Add Widget
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div data-component="box">
                  <i data-lucide="circle-gauge" class="size-7 stroke-1 fill-foreground/10"></i>
                  <div class="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div class="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </div>
                <div data-component="box">
                  <i data-lucide="circle-gauge" class="size-7 stroke-1 fill-foreground/10"></i>
                  <div class="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div class="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </div>
                <div data-component="box">
                  <i data-lucide="circle-gauge" class="size-7 stroke-1 fill-foreground/10"></i>
                  <div class="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div class="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
```

## Dependency

No external dependencies.

## Component

### side-menu.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import { initScrollArea } from "./scroll-area";
import {
  sideMenuRoot,
  sideMenuPanel,
  sideMenuInner,
  sideMenuHeader,
  sideMenuHeaderToggle,
  sideMenuBody,
  sideMenuArea,
  sideMenuAreaInner,
  sideMenuAreaWrapper,
  sideMenuAreaScroll,
  sideMenuTopBar,
  sideMenuTopBarInner,
  sideMenuTopBarMobileOpen,
  sideMenuTopBarMobileOpenIcon,
  sideMenuMobileClose,
  sideMenuMobileCloseIconWrapper,
  sideMenuMobileCloseIcon,
  sideMenuFixedTopBar,
} from "@midoneui/core/src/styles/side-menu.styles";

/**
 * Optimized State Management
 */
let compactMenu = localStorage.getItem("compactMenu") === "true";
let compactMenuOnHover = false;
let mobileMenuOpen = false;
let scrolled = false;

// Cache for optimized sync
const sideMenuElements: HTMLElement[] = [];

const syncState = () => {
  sideMenuElements.forEach((el) => {
    const component = el.getAttribute("data-component");
    const part =
      el.getAttribute("data-part") ||
      (component ? component.replace("side-menu-", "") : null);

    if (part === "area") {
      el.setAttribute("data-compact-menu", String(compactMenu && !compactMenuOnHover));
      return;
    }
    if (part === "scroll") {
      el.setAttribute("data-compact-menu", String(compactMenu && compactMenuOnHover && !mobileMenuOpen));
      return;
    }

    // Fixed top bar logic matching SideMenuFixedTopBar.vue
    if (part === "fixed-top-bar") {
      el.setAttribute(
        "data-compact-menu",
        String(compactMenu && !compactMenuOnHover)
      );
      el.setAttribute("data-mobile-menu-open", String(mobileMenuOpen));
      el.setAttribute("data-scrolled", String(scrolled));
      return;
    }

    el.setAttribute("data-compact-menu", String(compactMenu));
    el.setAttribute("data-compact-menu-on-hover", String(compactMenuOnHover));
    el.setAttribute("data-mobile-menu-open", String(mobileMenuOpen));
    el.setAttribute("data-scrolled", String(scrolled));
  });
};

const slideDown = (el: HTMLElement) => {
  el.classList.remove("hidden");
  const scrollHeight = el.scrollHeight;
  el.style.height = "0px";
  el.style.overflow = "hidden";
  el.style.transition = "height 300ms ease-in-out";

  // Force reflow
  el.offsetHeight;

  el.style.height = scrollHeight + "px";

  setTimeout(() => {
    el.style.height = "";
    el.style.overflow = "";
    el.style.transition = "";
  }, 300);
};

const slideUp = (el: HTMLElement) => {
  const scrollHeight = el.scrollHeight;
  el.style.height = scrollHeight + "px";
  el.style.overflow = "hidden";
  el.style.transition = "height 300ms ease-in-out";

  // Force reflow
  el.offsetHeight;

  el.style.height = "0px";

  setTimeout(() => {
    el.classList.add("hidden");
    el.style.height = "";
    el.style.overflow = "";
    el.style.transition = "";
  }, 300);
};

/**
 * Optimized Component Initializers
 */

const initSideMenu = () => {
  // 1. Find all components in ONE scan to prevent layout thrashing
  const components = document.querySelectorAll<HTMLElement>("[data-component], .side-menu__link");

  components.forEach((el) => {
    const componentName = el.getAttribute("data-component") || "";
    // Only process side-menu components
    const isSideMenuLink = el.classList.contains("side-menu__link");
    if (!isSideMenuLink && !componentName.startsWith("side-menu-") && componentName !== "breadcrumb" && componentName !== "avatar-root") {
      return;
    }

    const role = el.getAttribute("data-part") || (el.classList.contains("side-menu__link") ? "link" : componentName.replace("side-menu-", ""));
    el.setAttribute("data-scope", "side-menu");
    if (!el.getAttribute("data-part")) el.setAttribute("data-part", role);

    // Add to cache for syncState
    if (!sideMenuElements.includes(el)) sideMenuElements.push(el);

    switch (role) {
      case "root":
        if (el.getAttribute("data-initialized")) break;
        el.setAttribute("data-initialized", "true");
        const width = el.getAttribute("data-width") || "275px";
        const collapsedWidth = el.getAttribute("data-collapsed-width") || "110px";
        el.style.setProperty("--sm-width", width);
        el.style.setProperty("--sm-collapsed-width", collapsedWidth);
        if (sideMenuRoot && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuRoot, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        break;

      case "panel":
        if (sideMenuPanel && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuPanel, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        el.addEventListener("mouseenter", () => { compactMenuOnHover = true; syncState(); });
        el.addEventListener("mouseleave", () => { compactMenuOnHover = false; syncState(); });
        break;

      case "inner":
        if (el.closest('[data-part="area"]')) break;
        if (sideMenuInner && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuInner, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        break;

      case "header":
        if (sideMenuHeader && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuHeader, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        if (!el.querySelector('[data-part="toggle"]')) {
          const toggle = document.createElement("a");
          toggle.href = "";
          toggle.setAttribute("data-scope", "side-menu");
          toggle.setAttribute("data-part", "toggle");
          toggle.className = cn(sideMenuHeaderToggle);
          toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 stroke-[1.5]" data-scope="side-menu" data-part="toggle-icon"><path d="m15 18-6-6 6-6"/></svg>`;
          toggle.addEventListener("click", (e) => {
            e.preventDefault();
            compactMenu = !compactMenu;
            localStorage.setItem("compactMenu", String(compactMenu));
            syncState();
          });
          el.appendChild(toggle);
        }
        break;

      case "body":
        if (!el.getAttribute("data-component-initialized")) {
          el.setAttribute("data-component", "scroll-area-root");
        }
        if (sideMenuBody && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuBody, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        break;

      case "area":
        if (sideMenuArea && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuArea, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        if (!el.querySelector('[data-part="inner"]')) {
          const fragment = document.createDocumentFragment();
          const inner = document.createElement("div");
          inner.setAttribute("data-scope", "side-menu");
          inner.setAttribute("data-part", "inner");
          inner.className = cn(sideMenuAreaInner);

          const wrapper = document.createElement("div");
          wrapper.setAttribute("data-scope", "side-menu");
          wrapper.setAttribute("data-part", "wrapper");
          wrapper.className = cn(sideMenuAreaWrapper);

          const scroll = document.createElement("div");
          scroll.setAttribute("data-scope", "side-menu");
          scroll.setAttribute("data-part", "scroll");
          scroll.className = cn(sideMenuAreaScroll);
          scroll.addEventListener("scroll", (e) => {
            scrolled = (e.target as HTMLElement).scrollTop > 0;
            syncState();
          });

          // Move children efficiently
          while (el.firstChild) { scroll.appendChild(el.firstChild); }
          wrapper.appendChild(scroll);
          inner.appendChild(wrapper);
          fragment.appendChild(inner);
          el.appendChild(fragment);

          // Add newly created sub-parts to cache
          [inner, wrapper, scroll].forEach(p => sideMenuElements.push(p));
        }
        break;

      case "top-bar":
        if (sideMenuTopBar && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuTopBar, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        break;

      case "top-bar-inner":
        if (sideMenuTopBarInner && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuTopBarInner, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        if (!el.querySelector('[data-part="mobile-open"]')) {
          const openBtn = document.createElement("div");
          openBtn.setAttribute("data-scope", "side-menu");
          openBtn.setAttribute("data-part", "mobile-open");
          openBtn.className = cn(sideMenuTopBarMobileOpen);
          openBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide ${sideMenuTopBarMobileOpenIcon}" data-scope="side-menu" data-part="mobile-open-icon"><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg>`;
          openBtn.addEventListener("click", () => { mobileMenuOpen = true; syncState(); });
          el.prepend(openBtn);
          sideMenuElements.push(openBtn);
        }
        break;

      case "mobile-close":
        if (sideMenuMobileClose && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuMobileClose, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        if (!el.querySelector('[data-part="mobile-close-icon-wrapper"]')) {
          el.innerHTML = `
                        <div data-scope="side-menu" data-part="mobile-close-icon-wrapper" class="${sideMenuMobileCloseIconWrapper}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide ${sideMenuMobileCloseIcon}"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    `;
        }
        el.addEventListener("click", () => { mobileMenuOpen = false; syncState(); });
        break;

      case "fixed-top-bar":
        if (sideMenuFixedTopBar && !el.getAttribute("data-style-initialized")) {
          el.className = cn(sideMenuFixedTopBar, el.className);
          el.setAttribute("data-style-initialized", "true");
        }
        break;

      case "link":
        el.addEventListener("click", (e) => {
          const subMenu = el.nextElementSibling as HTMLElement;
          if (subMenu && subMenu.tagName === "UL") {
            const isVisible = !subMenu.classList.contains("hidden");

            // Close other sub-menus in the same level
            const parentLi = el.parentElement;
            if (parentLi && parentLi.parentElement) {
              Array.from(parentLi.parentElement.children).forEach((li) => {
                if (li !== parentLi) {
                  const otherLink = li.querySelector(
                    ".side-menu__link"
                  ) as HTMLElement;
                  const otherSubMenu = otherLink?.nextElementSibling as HTMLElement;
                  if (
                    otherSubMenu &&
                    otherSubMenu.tagName === "UL" &&
                    !otherSubMenu.classList.contains("hidden")
                  ) {
                    slideUp(otherSubMenu);
                    otherLink
                      ?.querySelector(".side-menu__link__chevron")
                      ?.classList.remove("rotate-180");
                  }
                }
              });
            }

            // Toggle visibility
            if (isVisible) {
              slideUp(subMenu);
              el.querySelector(".side-menu__link__chevron")?.classList.remove(
                "rotate-180"
              );
            } else {
              e.preventDefault();
              slideDown(subMenu);
              el.querySelector(".side-menu__link__chevron")?.classList.add(
                "rotate-180"
              );
            }
          }
        });
        break;
    }
  });

  // 2. Initialize secondary components
  initScrollArea();

  // 3. Final sync
  syncState();

  // 4. Optimized resize handling
  let resizeTimer: number;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (window.innerWidth <= 1600 && !compactMenu) {
        compactMenu = true;
        localStorage.setItem("compactMenu", "true");
        syncState();
      }
    }, 100);
  };
  window.addEventListener("resize", onResize);
  onResize();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSideMenu);
} else {
  initSideMenu();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="side-menu-root" data-width="280px" data-collapsed-width="80px" class="bg-background">
    <div data-component="side-menu-panel" data-part="panel" class="after:bg-background xl:after:hidden">
      <div data-component="side-menu-inner" data-part="inner"
        class="border-e border-foreground/10 bg-slate-50/50 dark:bg-dark-1/50 backdrop-blur-md">
        <header data-component="side-menu-header" data-part="header"
          class="p-6 flex items-center justify-between [&_[data-part=toggle]]:border-foreground/50">
          <div class="flex items-center gap-3.5">
            <div class="size-9 bg-primary rounded-xl flex items-center justify-center text-white">
              <i data-lucide="activity" class="size-5"></i>
            </div>
            <span
              class="text-nowrap font-medium group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block">Midone
              UI</span>
          </div>
        </header>
        <div class="px-6 mb-4">
          <div class="relative group/search">
            <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 size-4 opacity-50 z-50"></i>
            <input data-component="input" placeholder="Search components..."
              class="group-[[data-compact-menu=true]]:invisible group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:visible bg-foreground/[.02] shadow-none ps-9 placeholder:opacity-50" />
          </div>
        </div>
        <div data-component="side-menu-body" data-part="body" class="px-3">
          <div data-part="content">
            <nav class="flex flex-col gap-0.5">
              <div class="px-3 mb-2 text-xs opacity-50 mt-6 truncate">
                Overview
              </div>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="layout-dashboard"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Analytics</span>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="users"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Customers</span>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="shopping-bag"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">E-commerce</span>
              </a>
              <div class="px-3 mb-2 text-xs opacity-50 mt-6 truncate">
                Documentation
              </div>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="files"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Introduction</span>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="box"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Components</span>
                <i data-lucide="chevron-right"
                  class="ml-auto size-3.5 opacity-30 group-hover:translate-x-0.5 transition-transform group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block"></i>
              </a>
              <a href="#" class="px-4 py-2.5 rounded-xl flex items-center gap-2">
                <i data-lucide="shield"></i>
                <span
                  class="group-[[data-compact-menu=true]]:hidden group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:block text-nowrap">Security</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div data-component="side-menu-area" data-part="area" class="bg-foreground/5">
      <div data-part="inner">
        <div data-part="wrapper">
          <div data-part="scroll">
            <header data-component="side-menu-top-bar" data-part="top-bar"
              class="transition-[padding] duration-300 ease-in-out [&[data-scrolled=true]]:sticky [&[data-scrolled=true]]:px-5 [&[data-scrolled=true]]:top-4 [&[data-scrolled=true]]:z-[999]">
              <div data-component="side-menu-top-bar-inner" data-part="top-bar-inner"
                class="px-6 bg-background/60 border-foreground/5 shadow-sm shadow-foreground/5 transition-all duration-300 ease-in-out group-[[data-scrolled=true]]:rounded-2xl group-[[data-scrolled=true]]:bg-background group-[[data-scrolled=true]]:border group-[[data-scrolled=true]]:shadow-lg group-[[data-scrolled=true]]:shadow-foreground/5">
                <div class="mr-auto">
                  <div data-component="breadcrumb" data-items="['Apps', 'Dashboard']"></div>
                </div>
                <div class="flex items-center gap-3">
                  <div data-component="menu-root">
                    <div data-component="menu-trigger" data-as-child
                      class="flex items-center gap-3 pl-1 cursor-pointer group outline-none">
                      <div class="text-right hidden sm:block">
                        <div class="font-medium">James Doe</div>
                        <div class="text-xs opacity-70">Administrator</div>
                      </div>
                    </div>
                    <div data-component="menu-content" class="w-48">
                      <div data-component="menu-item" data-value="profile">
                        <i data-lucide="user" class="size-4"></i> Profile
                      </div>
                      <div data-component="menu-item" data-value="settings">
                        <i data-lucide="settings" class="size-4"></i> Settings
                      </div>
                      <hr data-component="menu-separator" />
                      <div data-component="menu-item" data-value="logout">
                        <i data-lucide="log-out" class="size-4"></i> Logout
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div class="p-8 md:p-12">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                  <h1 class="text-2xl font-medium">Overview</h1>
                  <p class="opacity-70">
                    Real-time performance and system status metrics.
                  </p>
                </div>
                <div class="flex items-center gap-2">
                  <button data-component="button" data-look="filled" data-variant="secondary">
                    <i data-lucide="share-2" class="size-4"></i>
                    Share
                  </button>
                  <button data-component="button" data-look="filled" data-variant="primary">
                    <i data-lucide="plus" class="size-4"></i>
                    Add Widget
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div data-component="box">
                  <i data-lucide="circle-gauge" class="size-7 stroke-1 fill-foreground/10"></i>
                  <div class="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div class="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </div>
                <div data-component="box">
                  <i data-lucide="circle-gauge" class="size-7 stroke-1 fill-foreground/10"></i>
                  <div class="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div class="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </div>
                <div data-component="box">
                  <i data-lucide="circle-gauge" class="size-7 stroke-1 fill-foreground/10"></i>
                  <div class="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div class="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
```

