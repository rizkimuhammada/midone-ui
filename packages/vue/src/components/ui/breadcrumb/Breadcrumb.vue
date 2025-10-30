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

const props = defineProps<{
  class?: string;
  items: string[];
}>();
</script>

<template>
  <nav
    aria-label="breadcrumb"
    data-slot="breadcrumb"
    :class="cn(props.class)"
    v-bind="props"
  >
    <ol :class="cn(breadcrumbList)">
      <template v-if="props.items.length <= 3">
        <template v-for="(item, key) in props.items" :key="key">
          <li :class="cn(breadcrumbItem)">
            <a :class="cn(breadcrumbLink)">{{ item }}</a>
          </li>
          <ChevronRight v-if="key < props.items.length - 1" />
        </template>
      </template>
      <template v-else>
        <li :class="cn(breadcrumbItem)">
          <a :class="cn(breadcrumbLink)">{{ props.items[0] }}</a>
        </li>
        <ChevronRight />
        <li :class="cn(breadcrumbItem)">
          <MenuRoot>
            <MenuTrigger as-child>
              <a :class="cn(breadcrumbLink)">
                <Ellipsis />
              </a>
            </MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItem
                  v-for="(item, itemKey) in props.items.slice(1, -2)"
                  :key="itemKey"
                  :value="item"
                >
                  {{ item }}
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </li>
        <ChevronRight />
        <template v-for="(item, index) in props.items.slice(-2)" :key="index">
          <li :class="cn(breadcrumbItem)">
            <a :class="cn(breadcrumbLink)">{{ item }}</a>
          </li>
          <ChevronRight v-if="index < 1" />
        </template>
      </template>
    </ol>
  </nav>
</template>
