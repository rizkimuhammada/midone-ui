import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { cn } from "@midoneui/core/utils/cn";
import { ScrollAreaRoot } from "@/components/ui/scroll-area";
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
} from "@midoneui/core/styles/side-menu.styles";
import { Lucide } from "@/components/ui/lucide";

export interface SideMenuContextType {
  compactMenu: boolean;
  compactMenuOnHover: boolean;
  mobileMenuOpen: boolean;
  scrolled: boolean;
  toggleCompactMenu: (event: React.MouseEvent) => void;
  openMobileMenu: (event: React.MouseEvent) => void;
  closeMobileMenu: (event: React.MouseEvent) => void;
  onMouseEnterPanel: () => void;
  onMouseLeavePanel: () => void;
  onScrollArea: (event: React.UIEvent) => void;
  width: string;
  collapsedWidth: string;
}

const SideMenuContext = createContext<SideMenuContextType | undefined>(
  undefined
);

export const useSideMenuContext = () => {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error(
      "SideMenu components must be wrapped in <SideMenuRoot />"
    );
  }
  return context;
};

export function SideMenuRoot({
  width = "275px",
  collapsedWidth = "110px",
  children,
  className,
  style,
  ...props
}: React.ComponentProps<"div"> & {
  width?: string;
  collapsedWidth?: string;
}) {
  const [compactMenu, setCompactMenu] = useState(
    localStorage.getItem("compactMenu") === "true"
  );
  const [compactMenuOnHover, setCompactMenuOnHover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleCompactMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setCompactMenu((prev) => {
      const next = !prev;
      localStorage.setItem("compactMenu", next.toString());
      return next;
    });
  }, []);

  const onMouseEnterPanel = useCallback(() => {
    setCompactMenuOnHover(true);
  }, []);

  const onMouseLeavePanel = useCallback(() => {
    setCompactMenuOnHover(false);
  }, []);

  const openMobileMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(true);
  }, []);

  const closeMobileMenu = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(false);
  }, []);

  const onScrollArea = useCallback((event: React.UIEvent) => {
    setScrolled((event.target as HTMLElement).scrollTop > 0);
  }, []);

  const onResize = useCallback(() => {
    if (window.innerWidth <= 1600) {
      setCompactMenu(true);
      localStorage.setItem("compactMenu", "true");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return (
    <SideMenuContext.Provider
      value={{
        compactMenu,
        compactMenuOnHover,
        mobileMenuOpen,
        scrolled,
        toggleCompactMenu,
        openMobileMenu,
        closeMobileMenu,
        onMouseEnterPanel,
        onMouseLeavePanel,
        onScrollArea,
        width,
        collapsedWidth,
      }}
    >
      <div
        data-scope="side-menu"
        data-part="root"
        className={cn(sideMenuRoot, className)}
        style={
          {
            "--sm-width": width,
            "--sm-collapsed-width": collapsedWidth,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </div>
    </SideMenuContext.Provider>
  );
}

export function SideMenuPanel({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    compactMenu,
    compactMenuOnHover,
    mobileMenuOpen,
    onMouseEnterPanel,
    onMouseLeavePanel,
  } = useSideMenuContext();

  return (
    <div
      data-scope="side-menu"
      data-part="panel"
      onMouseEnter={onMouseEnterPanel}
      onMouseLeave={onMouseLeavePanel}
      data-compact-menu={compactMenu}
      data-compact-menu-on-hover={compactMenuOnHover}
      data-mobile-menu-open={mobileMenuOpen}
      className={cn(sideMenuPanel, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SideMenuInner({
  children,
  className,
  reverse = false,
  ...props
}: React.ComponentProps<"div"> & {
  reverse?: boolean;
}) {
  return (
    <div
      data-scope="side-menu"
      data-part="inner"
      data-reverse={reverse}
      className={cn(sideMenuInner, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function SideMenuHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { toggleCompactMenu } = useSideMenuContext();

  return (
    <div
      data-scope="side-menu"
      data-part="header"
      className={cn(sideMenuHeader, className)}
      {...props}
    >
      {children}
      <a
        href="#"
        data-scope="side-menu"
        data-part="toggle"
        onClick={toggleCompactMenu}
        className={sideMenuHeaderToggle}
      >
        <Lucide
          data-scope="side-menu"
          data-part="toggle-icon"
          icon="ChevronLeft"
        />
      </a>
    </div>
  );
}

export function SideMenuBody({
  children,
  className,
  dir,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <ScrollAreaRoot
      data-scope="side-menu"
      data-part="body"
      className={cn(sideMenuBody, className)}
      dir={dir as "ltr" | "rtl" | undefined}
      {...props}
    >
      {children}
    </ScrollAreaRoot>
  );
}

export function SideMenuArea({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { compactMenu, compactMenuOnHover, mobileMenuOpen, onScrollArea } =
    useSideMenuContext();

  return (
    <div
      data-scope="side-menu"
      data-part="area"
      data-compact-menu={compactMenu && !compactMenuOnHover}
      className={cn(sideMenuArea, className)}
      {...props}
    >
      <div data-scope="side-menu" data-part="inner" className={sideMenuAreaInner}>
        <div data-scope="side-menu" data-part="wrapper" className={sideMenuAreaWrapper}>
          <div
            data-scope="side-menu"
            data-part="scroll"
            onScroll={onScrollArea}
            data-compact-menu={compactMenu && compactMenuOnHover && !mobileMenuOpen}
            className={sideMenuAreaScroll}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SideMenuTopBar({
  children,
  className,
  ...props
}: React.ComponentProps<"header">) {
  const { scrolled } = useSideMenuContext();

  return (
    <header
      data-scope="side-menu"
      data-part="top-bar"
      data-scrolled={scrolled}
      className={cn(sideMenuTopBar, className)}
      {...props}
    >
      {children}
    </header>
  );
}

export function SideMenuTopBarInner({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-scope="side-menu"
      data-part="top-bar-inner"
      className={cn(sideMenuTopBarInner, className)}
      {...props}
    >
      <SideMenuTopBarMobileOpen />
      {children}
    </div>
  );
}

export function SideMenuTopBarMobileOpen({
  className,
  ...props
}: React.ComponentProps<"a">) {
  const { openMobileMenu } = useSideMenuContext();

  return (
    <a
      href="#"
      data-scope="side-menu"
      data-part="mobile-open"
      onClick={openMobileMenu}
      className={cn(sideMenuTopBarMobileOpen, className)}
      {...props}
    >
      <Lucide
        data-scope="side-menu"
        data-part="mobile-open-icon"
        className={cn(sideMenuTopBarMobileOpenIcon)}
        icon="Menu"
      />
    </a>
  );
}

export function SideMenuMobileClose({
  className,
  ...props
}: React.ComponentProps<"a">) {
  const { mobileMenuOpen, closeMobileMenu } = useSideMenuContext();

  return (
    <a
      href="#"
      data-scope="side-menu"
      data-part="mobile-close"
      onClick={closeMobileMenu}
      data-mobile-menu-open={mobileMenuOpen}
      className={cn(sideMenuMobileClose, className)}
      {...props}
    >
      <div
        data-part="mobile-close-icon"
        className={sideMenuMobileCloseIconWrapper}
      >
        <Lucide
          data-scope="side-menu"
          data-part="mobile-close-icon"
          className={sideMenuMobileCloseIcon}
          icon="X"
        />
      </div>
    </a>
  );
}

export function SideMenuFixedTopBar({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { compactMenu, compactMenuOnHover } = useSideMenuContext();

  return (
    <div
      data-scope="side-menu"
      data-part="fixed-top-bar"
      data-compact-menu={compactMenu}
      data-compact-menu-on-hover={compactMenuOnHover}
      className={cn(sideMenuFixedTopBar, className)}
      {...props}
    >
      {children}
    </div>
  );
}
