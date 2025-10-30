<script lang="ts" setup>
import { Menu, type MenuCheckboxItemProps } from "@ark-ui/vue/menu";
import { cn } from "@midoneui/core/utils/cn";
import { Check } from "lucide-vue-next";
import { menuItem } from "@midoneui/core/styles/menu.styles";

const props = defineProps<
  MenuCheckboxItemProps & {
    class?: string;
    shortcut?: string;
  }
>();

const model = defineModel<boolean>("checked", { required: true });
</script>

<template>
  <Menu.CheckboxItem
    v-model:checked="model"
    :value="props.value"
    :class="cn(menuItem, props.class)"
    v-bind="$attrs"
  >
    <div>
      <Menu.ItemIndicator>
        <Check />
      </Menu.ItemIndicator>
      <slot />
    </div>
    <div>
      {{ props.shortcut }}
    </div>
  </Menu.CheckboxItem>
</template>
