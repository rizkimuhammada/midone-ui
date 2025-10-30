<script lang="ts" setup>
import { Menu, type MenuIndicatorProps } from "@ark-ui/vue/menu";
import { cn } from "@midoneui/core/utils/cn";
import { ChevronDown } from "lucide-vue-next";
import { menuIndicator } from "@midoneui/core/styles/menu.styles";

const props = defineProps<
  MenuIndicatorProps & {
    class?: string;
  }
>();
</script>

<template>
  <Menu.Indicator :class="cn(menuIndicator, props.class)" v-bind="props">
    <slot>
      <ChevronDown />
    </slot>
  </Menu.Indicator>
</template>
