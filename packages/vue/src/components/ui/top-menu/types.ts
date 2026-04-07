import type { Ref } from "vue";

export interface TopMenuContext {
  mobileMenuOpen: Ref<boolean>;
  openMobileMenu: (event: MouseEvent) => void;
  closeMobileMenu: (event: MouseEvent) => void;
}
