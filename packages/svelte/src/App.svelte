<script lang="ts">
  import Button from "./pages/Button.svelte";
  import Input from "./pages/Input.svelte";
  import Accordion from "./pages/Accordion.svelte";
  import Alert from "./pages/Alert.svelte";
  import Badge from "./pages/Badge.svelte";
  import Checkbox from "./pages/Checkbox.svelte";
  import Dialog from "./pages/Dialog.svelte";
  import Tabs from "./pages/Tabs.svelte";
  import Avatar from "./pages/Avatar.svelte";
  import Switch from "./pages/Switch.svelte";
  import Menu from "./pages/Menu.svelte";
  import Popover from "./pages/Popover.svelte";
  import Breadcrumb from "./pages/Breadcrumb.svelte";
  import Pagination from "./pages/Pagination.svelte";
  import Slider from "./pages/Slider.svelte";
  import Select from "./pages/Select.svelte";
  import Tooltip from "./pages/Tooltip.svelte";
  import Datepicker from "./pages/Datepicker.svelte";
  import Progress from "./pages/Progress.svelte";
  import Table from "./pages/Table.svelte";
  import Box from "./pages/Box.svelte";
  import Label from "./pages/Label.svelte";
  import Textarea from "./pages/Textarea.svelte";
  import RadioGroup from "./pages/RadioGroup.svelte";
  import NativeSelect from "./pages/NativeSelect.svelte";
  import Sheet from "./pages/Sheet.svelte";
  import Combobox from "./pages/Combobox.svelte";
  import Carousel from "./pages/Carousel.svelte";
  import Slot from "./pages/Slot.svelte";
  import type { Component } from "svelte";

  const routeMap: Record<string, Component> = {
    "/slot": Slot,
    "/button": Button,
    "/input": Input,
    "/accordion": Accordion,
    "/alert": Alert,
    "/badge": Badge,
    "/checkbox": Checkbox,
    "/dialog": Dialog,
    "/tabs": Tabs,
    "/avatar": Avatar,
    "/switch": Switch,
    "/menu": Menu,
    "/popover": Popover,
    "/breadcrumb": Breadcrumb,
    "/pagination": Pagination,
    "/slider": Slider,
    "/select": Select,
    "/tooltip": Tooltip,
    "/datepicker": Datepicker,
    "/progress": Progress,
    "/table": Table,
    "/box": Box,
    "/label": Label,
    "/textarea": Textarea,
    "/radio-group": RadioGroup,
    "/native-select": NativeSelect,
    "/sheet": Sheet,
    "/combobox": Combobox,
    "/carousel": Carousel,
  };

  const pages = [
    { path: "/slot", label: "Slot" },
    { path: "/button", label: "Button" },
    { path: "/input", label: "Input" },
    { path: "/label", label: "Label" },
    { path: "/textarea", label: "Textarea" },
    { path: "/box", label: "Box" },
    { path: "/accordion", label: "Accordion" },
    { path: "/alert", label: "Alert" },
    { path: "/avatar", label: "Avatar" },
    { path: "/badge", label: "Badge" },
    { path: "/breadcrumb", label: "Breadcrumb" },
    { path: "/carousel", label: "Carousel" },
    { path: "/checkbox", label: "Checkbox" },
    { path: "/combobox", label: "Combobox" },
    { path: "/datepicker", label: "Datepicker" },
    { path: "/dialog", label: "Dialog" },
    { path: "/menu", label: "Menu" },
    { path: "/native-select", label: "NativeSelect" },
    { path: "/pagination", label: "Pagination" },
    { path: "/popover", label: "Popover" },
    { path: "/progress", label: "Progress" },
    { path: "/radio-group", label: "RadioGroup" },
    { path: "/select", label: "Select" },
    { path: "/sheet", label: "Sheet" },
    { path: "/slider", label: "Slider" },
    { path: "/switch", label: "Switch" },
    { path: "/table", label: "Table" },
    { path: "/tabs", label: "Tabs" },
    { path: "/tooltip", label: "Tooltip" },
  ];

  let route = $state(window.location.hash.slice(1) || "/button");
  let routeLabel = $derived(route.replace("/", "").replace("-", " "));
  let CurrentPage = $derived(routeMap[route] || Button);

  function navigateTo(path: string) {
    window.location.hash = path;
    route = path;
  }

  // Also listen for browser back/forward navigation
  $effect(() => {
    const handler = () => {
      route = window.location.hash.slice(1) || "/button";
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  });
</script>

<div class="flex min-h-screen">
  <nav class="w-64 border-e border-foreground/10 p-4 overflow-y-auto shrink-0">
    <h1 class="text-lg font-bold mb-4 font-instrument-sans">MidoneUI Svelte</h1>
    <ul class="flex flex-col gap-0.5">
      {#each pages as page}
        <li>
          <a
            href="#{page.path}"
            onclick={(e: MouseEvent) => { e.preventDefault(); navigateTo(page.path); }}
            class="block px-3 py-1.5 rounded-lg text-sm transition-colors {route === page.path ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'}"
          >
            {page.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <main class="flex-1 p-8 overflow-y-auto">
    <h2 class="text-2xl font-bold mb-6 font-instrument-sans capitalize">
      {routeLabel}
    </h2>
    {#key route}
      <CurrentPage />
    {/key}
  </main>
</div>
