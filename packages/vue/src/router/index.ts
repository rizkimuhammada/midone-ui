import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/button",
    },
    {
      path: "/accordion",
      component: () => import("../pages/Accordion.vue"),
    },
    {
      path: "/alert",
      component: () => import("../pages/Alert.vue"),
    },
    {
      path: "/avatar",
      component: () => import("../pages/Avatar.vue"),
    },
    {
      path: "/badge",
      component: () => import("../pages/Badge.vue"),
    },
    {
      path: "/box",
      component: () => import("../pages/Box.vue"),
    },
    {
      path: "/breadcrumb",
      component: () => import("../pages/Breadcrumb.vue"),
    },
    {
      path: "/button",
      component: () => import("../pages/Button.vue"),
    },
    {
      path: "/carousel",
      component: () => import("../pages/Carousel.vue"),
    },
    {
      path: "/chart",
      component: () => import("../pages/Chart.vue"),
    },
    {
      path: "/checkbox",
      component: () => import("../pages/Checkbox.vue"),
    },
    {
      path: "/combobox",
      component: () => import("../pages/Combobox.vue"),
    },
    {
      path: "/data-table",
      component: () => import("../pages/DataTable.vue"),
    },
    {
      path: "/datepicker",
      component: () => import("../pages/Datepicker.vue"),
    },
    {
      path: "/dialog",
      component: () => import("../pages/Dialog.vue"),
    },
    {
      path: "/input",
      component: () => import("../pages/Input.vue"),
    },
    {
      path: "/menu",
      component: () => import("../pages/Menu.vue"),
    },
    {
      path: "/pagination",
      component: () => import("../pages/Pagination.vue"),
    },
    {
      path: "/popover",
      component: () => import("../pages/Popover.vue"),
    },
    {
      path: "/progress-circular",
      component: () => import("../pages/ProgressCircular.vue"),
    },
    {
      path: "/progress-linear",
      component: () => import("../pages/ProgressLinear.vue"),
    },
    {
      path: "/radio-group",
      component: () => import("../pages/RadioGroup.vue"),
    },
    {
      path: "/select",
      component: () => import("../pages/Select.vue"),
    },
    {
      path: "/sheet",
      component: () => import("../pages/Sheet.vue"),
    },
    {
      path: "/slider",
      component: () => import("../pages/Slider.vue"),
    },
    {
      path: "/switch",
      component: () => import("../pages/Switch.vue"),
    },
    {
      path: "/table",
      component: () => import("../pages/Table.vue"),
    },
    {
      path: "/tabs",
      component: () => import("../pages/Tabs.vue"),
    },
    {
      path: "/textarea",
      component: () => import("../pages/Textarea.vue"),
    },
    {
      path: "/toast",
      component: () => import("../pages/Toast.vue"),
    },
    {
      path: "/tooltip",
      component: () => import("../pages/Tooltip.vue"),
    },
  ],
});

export default router;
