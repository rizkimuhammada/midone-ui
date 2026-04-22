// SideMenuRoot (Variables handled via :style)
export const sideMenuRoot = "";

// SideMenuPanel
export const sideMenuPanel =
  "side-menu xl:ml-0 transition-[margin] duration-300 fixed top-0 left-0 z-50 group before:content-[''] before:fixed before:inset-0 before:bg-black/80 dark:before:bg-foreground/5 before:backdrop-blur before:xl:hidden after:content-[''] [&[data-mobile-menu-open=true]]:ml-0 [&[data-mobile-menu-open=true]]:before:block before:hidden ml-[calc(var(--sm-width)*-1)] xl:ml-0";

// SideMenuMobileClose
export const sideMenuMobileClose =
  "xl:hidden z-50 cursor-pointer hidden fixed close-mobile-menu [&[data-mobile-menu-open=true]]:block ml-[var(--sm-width)]";

export const sideMenuMobileCloseIconWrapper =
  "ml-5 mt-5 flex size-10 items-center justify-center";

export const sideMenuMobileCloseIcon = "size-7 stroke-1";

// SideMenuInner
export const sideMenuInner =
  "side-menu__content z-20 relative duration-300 transition-[width] h-screen flex flex-col w-[var(--sm-width)] group-[[data-compact-menu=true]]:xl:w-[var(--sm-collapsed-width)] group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:xl:w-[var(--sm-width)] [&[data-reverse=true]]:flex-col-reverse [&[data-reverse=true]]:xl:flex-col";

// SideMenuHeader
export const sideMenuHeader =
  "relative z-10 hidden flex-none items-center overflow-hidden duration-300 xl:flex w-[var(--sm-width)] group-[[data-compact-menu=true]]:xl:w-[var(--sm-collapsed-width)] group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:xl:w-[var(--sm-width)]";

export const sideMenuHeaderToggle =
  "toggle-compact-menu ml-auto hidden items-center justify-center rounded-md border py-0.5 pl-0.5 pr-1 opacity-70 transition-[opacity,transform] hover:opacity-100 group-[[data-compact-menu=true]]:xl:rotate-180 group-[[data-compact-menu=true][data-compact-menu-on-hover=true]]:xl:opacity-100 group-[[data-compact-menu=true]]:xl:opacity-0 2xl:flex";

// SideMenuBody
export const sideMenuBody = "flex-1 min-h-0 [&_[data-part=content]]:!min-w-auto";

// SideMenuArea
export const sideMenuArea =
  "content h-screen transition-[margin,width] duration-300 z-10 relative xl:ml-[var(--sm-width)] [&[data-compact-menu=true]]:xl:ml-[var(--sm-collapsed-width)]";

export const sideMenuAreaInner = "relative h-full";

export const sideMenuAreaWrapper = "h-full overflow-x-hidden";

export const sideMenuAreaScroll =
  "content__scroll-area relative z-20 h-full overflow-y-auto transition-[margin] duration-300 [&[data-compact-menu=true]]:ml-[calc(var(--sm-collapsed-width)-var(--sm-width))]";

// SideMenuTopBar
export const sideMenuTopBar =
  "top-bar group z-50 relative";

export const sideMenuTopBarInner =
  "flex h-16 items-center gap-5 border-b";

export const sideMenuTopBarMobileOpen =
  "open-mobile-menu mr-auto flex size-9 cursor-pointer items-center justify-center rounded-xl border border-foreground/15 xl:hidden shadow-sm shadow-foreground/10 bg-background";

export const sideMenuTopBarMobileOpenIcon = "rotate-90";

export const sideMenuFixedTopBar =
  "fixed inset-x-0 top-0 z-50 xl:ml-[var(--sm-width)] [&[data-compact-menu=true]]:xl:ml-[var(--sm-collapsed-width)]";
