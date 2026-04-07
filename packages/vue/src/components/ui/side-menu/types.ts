import type { Ref } from "vue";

export interface SideMenuContext {
  compactMenu: Ref<boolean>;
  compactMenuOnHover: Ref<boolean>;
  mobileMenuOpen: Ref<boolean>;
  scrolled: Ref<boolean>;
  toggleCompactMenu: (event: MouseEvent) => void;
  openMobileMenu: (event: MouseEvent) => void;
  closeMobileMenu: (event: MouseEvent) => void;
  onMouseEnterPanel: () => void;
  onMouseLeavePanel: () => void;
  onScrollArea: (event: Event) => void;
  width: string;
  collapsedWidth: string;
}
