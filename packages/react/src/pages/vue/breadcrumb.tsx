import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <Breadcrumb
                  items={[
                    "Dashboard",
                    "Users",
                    "Admins",
                    "Settings",
                    "Edit Profile",
                  ]}
                />
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Breadcrumb
  :items="['Dashboard', 'Users', 'Admins', 'Settings', 'Edit Profile']"
/>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/breadcrumb/Breadcrumb.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { ChevronRight, Ellipsis } from "lucide-vue-next";
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from ".";

const { class: className, ...props } = defineProps<{
  class?: string;
  items: string[];
}>();
</script>

<template>
  <nav
    aria-label="breadcrumb"
    data-slot="breadcrumb"
    v-bind="{ ...props, ...$attrs }"
    :class="cn(className)"
  >
    <BreadcrumbList>
      <template v-if="items.length <= 3">
        <template v-for="(item, key) in items">
          <BreadcrumbItem>
            <BreadcrumbLink>{{ item }}</BreadcrumbLink>
          </BreadcrumbItem>
          <ChevronRight v-if="key < items.length - 1" />
        </template>
      </template>
      <template v-else>
        <BreadcrumbItem>
          <BreadcrumbLink>{{ items[0] }}</BreadcrumbLink>
        </BreadcrumbItem>
        <ChevronRight />
        <BreadcrumbItem>
          <MenuRoot>
            <MenuTrigger asChild>
              <BreadcrumbLink>
                <Ellipsis />
              </BreadcrumbLink>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItem
                  v-for="(item, itemKey) in items.slice(1, -2)"
                  :value="item"
                  :key="itemKey"
                >
                  {{ item }}
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </BreadcrumbItem>
        <ChevronRight />
        <template v-for="(item, index) in items.slice(-2)">
          <BreadcrumbItem>
            <BreadcrumbLink>{{ item }}</BreadcrumbLink>
          </BreadcrumbItem>
          <ChevronRight v-if="index < 1" />
        </template>
      </template>
    </BreadcrumbList>
  </nav>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/breadcrumb/BreadcrumbItem.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { breadcrumbItem } from "@midoneui/core/styles/breadcrumb.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <li :class="cn(className, breadcrumbItem)" v-bind="{ ...props, ...$attrs }">
    <slot />
  </li>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/breadcrumb/BreadcrumbLink.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { breadcrumbLink } from "@midoneui/core/styles/breadcrumb.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <a :class="cn(className, breadcrumbLink)" v-bind="{ ...props, ...$attrs }">
    <slot />
  </a>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/breadcrumb/BreadcrumbList.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { breadcrumbList } from "@midoneui/core/styles/breadcrumb.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <ol :class="cn(className, breadcrumbList)" v-bind="{ ...props, ...$attrs }">
    <slot />
  </ol>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/breadcrumb/index.ts">
          {`
export { default as Breadcrumb } from "./Breadcrumb.vue";
export { default as BreadcrumbItem } from "./BreadcrumbItem.vue";
export { default as BreadcrumbLink } from "./BreadcrumbLink.vue";
export { default as BreadcrumbList } from "./BreadcrumbList.vue";
              `}
        </PreviewCode>
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import { Breadcrumb } from "@/components/ui/breadcrumb";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Breadcrumb
  :items="[
    'Dashboard',
    'Users',
    'Admins',
    'Settings',
    'Edit Profile',
  ]"
/>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
