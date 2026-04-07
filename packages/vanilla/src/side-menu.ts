import { cn } from "@midoneui/core/src/utils/cn";
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

function initSideMenu() {
  document
    .querySelectorAll<HTMLElement>('[data-component="side-menu-root"]')
    .forEach((root) => {
      const width = root.getAttribute("data-width") || "275px";
      const collapsedWidth = root.getAttribute("data-collapsed-width") || "110px";

      root.style.setProperty("--sm-width", width);
      root.style.setProperty("--sm-collapsed-width", collapsedWidth);
      root.className = cn(sideMenuRoot, root.className);
      root.setAttribute("data-scope", "side-menu");
      root.setAttribute("data-part", "root");

      let compactMenu = localStorage.getItem("compactMenu") === "true";
      let compactMenuOnHover = false;
      let mobileMenuOpen = false;

      const syncState = () => {
        // panel, inner, header, body, top-bar, top-bar-inner — semua pakai compactMenu polos
        root.querySelectorAll('[data-scope="side-menu"]').forEach((el) => {
          const part = el.getAttribute("data-part");
          if (part === "root") return;

          // area: compactMenu && !compactMenuOnHover (sama dengan Vue)
          if (part === "area") {
            el.setAttribute("data-compact-menu", String(compactMenu && !compactMenuOnHover));
            return;
          }
          // scroll: compactMenu && compactMenuOnHover && !mobileMenuOpen (sama dengan Vue)
          if (part === "scroll") {
            el.setAttribute("data-compact-menu", String(compactMenu && compactMenuOnHover && !mobileMenuOpen));
            return;
          }

          el.setAttribute("data-compact-menu", String(compactMenu));
          el.setAttribute("data-compact-menu-on-hover", String(compactMenuOnHover));
          el.setAttribute("data-mobile-menu-open", String(mobileMenuOpen));
        });
      };

      const updateCompactMenu = (value: boolean) => {
        compactMenu = value;
        localStorage.setItem("compactMenu", value.toString());
        syncState();
      };

      const updateMobileMenu = (value: boolean) => {
        mobileMenuOpen = value;
        syncState();
      };

      updateCompactMenu(compactMenu);
      updateMobileMenu(mobileMenuOpen);

      // Parts initialization
      root.querySelectorAll<HTMLElement>('[data-part]').forEach((part) => {
        const partName = part.getAttribute("data-part");
        part.setAttribute("data-scope", "side-menu");

        switch (partName) {
          case "panel":
            part.className = cn(sideMenuPanel, part.className);
            part.addEventListener("mouseenter", () => {
              compactMenuOnHover = true;
              syncState();
            });
            part.addEventListener("mouseleave", () => {
              compactMenuOnHover = false;
              syncState();
            });
            break;
          case "inner":
            // Only apply sideMenuInner to the sidebar panel inner, not area's inner wrapper
            if (!part.closest('[data-part="area"]')) {
              part.className = cn(sideMenuInner, part.className);
            }
            break;
          case "header":
            part.className = cn(sideMenuHeader, part.className);
            const toggle = document.createElement("a");
            toggle.href = "";
            toggle.setAttribute("data-scope", "side-menu");
            toggle.setAttribute("data-part", "toggle");
            toggle.className = cn(sideMenuHeaderToggle);
            toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-4 stroke-[1.5]"><path d="m15 18-6-6 6-6"/></svg>`;
            toggle.addEventListener("click", (e) => {
              e.preventDefault();
              updateCompactMenu(!compactMenu);
            });
            part.appendChild(toggle);
            break;
          case "body":
            part.className = cn(sideMenuBody, part.className);
            break;
          case "area":
            part.className = cn(sideMenuArea, part.className);
            const innerArea = part.querySelector('[data-part="inner"]');
            if (innerArea) innerArea.className = cn(sideMenuAreaInner, innerArea.className);
            const wrapperArea = part.querySelector('[data-part="wrapper"]');
            if (wrapperArea) wrapperArea.className = cn(sideMenuAreaWrapper, wrapperArea.className);
            const scrollArea = part.querySelector('[data-part="scroll"]');
            if (scrollArea) {
              scrollArea.className = cn(sideMenuAreaScroll, scrollArea.className);
              scrollArea.addEventListener("scroll", (e) => {
                const isScrolled = (e.target as HTMLElement).scrollTop > 0;
                root.setAttribute("data-scrolled", isScrolled.toString());
                root.querySelectorAll('[data-scope="side-menu"]').forEach(el => el.setAttribute("data-scrolled", isScrolled.toString()));
              });
            }
            break;
          case "top-bar":
            part.className = cn(sideMenuTopBar, part.className);
            break;
          case "top-bar-inner":
            part.className = cn(sideMenuTopBarInner, part.className);
            break;
          case "mobile-open":
            part.className = cn(sideMenuTopBarMobileOpen, part.className);
            const openIcon = part.querySelector("svg");
            if (openIcon) openIcon.classList.add(sideMenuTopBarMobileOpenIcon);
            part.addEventListener("click", (e) => {
              e.preventDefault();
              updateMobileMenu(true);
            });
            break;
          case "mobile-close":
            part.className = cn(sideMenuMobileClose, part.className);
            const closeIconWrapper = part.querySelector('[data-part="mobile-close-icon"]');
            if (closeIconWrapper) closeIconWrapper.className = cn(sideMenuMobileCloseIconWrapper, closeIconWrapper.className);
            const closeIcon = part.querySelector("svg");
            if (closeIcon) closeIcon.classList.add(sideMenuMobileCloseIcon);
            part.addEventListener("click", (e) => {
              e.preventDefault();
              updateMobileMenu(false);
            });
            break;
          case "fixed-top-bar":
            part.className = cn(sideMenuFixedTopBar, part.className);
            break;
        }
      });

      const onResize = () => {
        if (window.innerWidth <= 1600) {
          updateCompactMenu(true);
        }
      };
      window.addEventListener("resize", onResize);
      onResize();
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSideMenu);
} else {
  initSideMenu();
}
