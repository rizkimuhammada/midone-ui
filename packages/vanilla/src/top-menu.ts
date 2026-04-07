import { cn } from "@midoneui/core/src/utils/cn";
import {
  topMenuRoot,
  topMenuNav,
  topMenuMobileOpen,
  topMenuMobileClose,
  topMenuMobileCloseIconWrapper,
  topMenuMobileCloseIcon,
} from "@midoneui/core/src/styles/top-menu.styles";

function initTopMenu() {
  document
    .querySelectorAll<HTMLElement>('[data-component="top-menu-root"]')
    .forEach((root) => {
      let mobileMenuOpen = false;

      const syncState = () => {
        root.querySelectorAll('[data-component^="top-menu-"]').forEach((el) => {
          el.setAttribute("data-mobile-menu-open", String(mobileMenuOpen));
        });
      };

      root.className = cn(topMenuRoot, root.className);

      root.querySelectorAll<HTMLElement>("[data-component]").forEach((el) => {
        const componentName = el.getAttribute("data-component");

        switch (componentName) {
          case "top-menu-nav":
            el.className = cn(topMenuNav, el.className);
            break;
          case "top-menu-mobile-open":
            el.className = cn(topMenuMobileOpen, el.className);
            el.addEventListener("click", (e) => {
              e.preventDefault();
              mobileMenuOpen = true;
              syncState();
            });
            break;
          case "top-menu-mobile-close":
            el.className = cn(topMenuMobileClose, el.className);
            const closeIconWrapper = el.querySelector(
              '[data-part="mobile-close-icon"]',
            );
            if (closeIconWrapper)
              closeIconWrapper.className = cn(
                topMenuMobileCloseIconWrapper,
                closeIconWrapper.className,
              );
            const closeIcon = el.querySelector("svg");
            if (closeIcon) closeIcon.classList.add(topMenuMobileCloseIcon);

            el.addEventListener("click", (e) => {
              e.preventDefault();
              mobileMenuOpen = false;
              syncState();
            });
            break;
        }
      });

      syncState();
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTopMenu);
} else {
  initTopMenu();
}
