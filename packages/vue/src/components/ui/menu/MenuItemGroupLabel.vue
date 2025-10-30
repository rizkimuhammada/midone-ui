<script lang="ts" setup>
import { Menu, type MenuItemGroupLabelProps } from "@ark-ui/vue/menu";
import { cn } from "@midoneui/core/utils/cn";
import { menuItemGroupLabel } from "@midoneui/core/styles/menu.styles";

const props = defineProps<
  MenuItemGroupLabelProps & {
    class?: string;
  }
>();
</script>

<template>
  <Menu.ItemGroupLabel
    :class="cn(menuItemGroupLabel, props.class)"
    v-bind="props"
  >
    <slot />
  </Menu.ItemGroupLabel>
</template>
