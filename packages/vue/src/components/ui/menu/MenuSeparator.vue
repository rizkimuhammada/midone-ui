<script lang="ts" setup>
import { Menu, type MenuSeparatorProps } from "@ark-ui/vue/menu";
import { cn } from "@midoneui/core/utils/cn";
import { menuSeparator } from "@midoneui/core/styles/menu.styles";

const props = defineProps<
  MenuSeparatorProps & {
    class?: string;
  }
>();
</script>

<template>
  <Menu.Separator :class="cn(menuSeparator, props.class)" v-bind="props" />
</template>
