import React, { createContext, useContext, useState, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface TopMenuContextValue {
  mobileMenuOpen: boolean;
  openMobileMenu: (event: React.MouseEvent) => void;
  closeMobileMenu: (event: React.MouseEvent) => void;
}

const TopMenuContext = createContext<TopMenuContextValue | undefined>(undefined);

export const useTopMenu = () => {
  const context = useContext(TopMenuContext);
  if (!context) {
    throw new Error("useTopMenu must be used within a TopMenuRoot");
  }
  return context;
};

// Root
export const TopMenuRoot = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMobileMenuOpen(false);
  };

  return (
    <TopMenuContext.Provider
      value={{ mobileMenuOpen, openMobileMenu, closeMobileMenu }}
    >
      <div
        ref={ref}
        data-component="top-menu-root"
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    </TopMenuContext.Provider>
  );
});

TopMenuRoot.displayName = "TopMenuRoot";

// Nav
export const TopMenuNav = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { mobileMenuOpen } = useTopMenu();

  return (
    <div
      ref={ref}
      data-component="top-menu-nav"
      data-mobile-menu-open={mobileMenuOpen}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
});

TopMenuNav.displayName = "TopMenuNav";

// Mobile Open Trigger
export const TopMenuMobileOpen = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { openMobileMenu } = useTopMenu();

  return (
    <div
      ref={ref}
      data-component="top-menu-mobile-open"
      className={cn("cursor-pointer", className)}
      onClick={openMobileMenu}
      {...props}
    >
      {children}
    </div>
  );
});

TopMenuMobileOpen.displayName = "TopMenuMobileOpen";

// Mobile Close Trigger
export const TopMenuMobileClose = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { closeMobileMenu, mobileMenuOpen } = useTopMenu();

  return (
    <div
      ref={ref}
      data-component="top-menu-mobile-close"
      data-mobile-menu-open={mobileMenuOpen}
      className={cn("cursor-pointer", className)}
      onClick={closeMobileMenu}
      {...props}
    >
      {children}
    </div>
  );
});

TopMenuMobileClose.displayName = "TopMenuMobileClose";
