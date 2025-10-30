<script lang="ts" setup>
import { Menu, type MenuRadioItemProps } from "@ark-ui/vue/menu";
import { cn } from "@midoneui/core/utils/cn";
import { Dot } from "lucide-vue-next";
import { menuItem } from "@midoneui/core/styles/menu.styles";

const props = defineProps<
  MenuRadioItemProps & {
    class?: string;
    shortcut?: string;
  }
>();
</script>

<template>
  <Menu.RadioItem
    :value="props.value"
    :class="cn(menuItem, props.class)"
    v-bind="$attrs"
  >
    <div>
      <Menu.ItemIndicator>
        <Dot />
      </Menu.ItemIndicator>
      <slot />
    </div>
    <div>
      {{ props.shortcut }}
    </div>
  </Menu.RadioItem>
</template>
