<script lang="ts" setup>
import { Menu, type MenuRadioItemGroupProps } from "@ark-ui/vue/menu";
import { cn } from "@midoneui/core/utils/cn";
import { menuRadioItemGroup } from "@midoneui/core/styles/menu.styles";

const props = defineProps<
  MenuRadioItemGroupProps & {
    class?: string;
  }
>();

const model = defineModel<string>({ required: true });
</script>

<template>
  <Menu.RadioItemGroup
    v-model="model"
    :class="cn(menuRadioItemGroup, props.class)"
    v-bind="$attrs"
  >
    <slot />
  </Menu.RadioItemGroup>
</template>
