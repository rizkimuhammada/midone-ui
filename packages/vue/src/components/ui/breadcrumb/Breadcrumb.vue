<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { ChevronRight, Ellipsis } from "lucide-vue-next";
import {
  breadcrumbList,
  breadcrumbItem,
  breadcrumbLink,
} from "@midoneui/core/styles/breadcrumb.styles";
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
        <BreadcrumbItem v-for="(item, key) in items">
          <BreadcrumbLink>{{ item }}</BreadcrumbLink>
        </BreadcrumbItem>
        <ChevronRight v-if="key < items.length - 1" />
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
