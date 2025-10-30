<script lang="ts" setup>
import { Switch } from "@ark-ui/vue/switch";
import { cn } from "@midoneui/core/utils/cn";
import { switchRoot } from "@midoneui/core/styles/switch.styles";
import SwitchHiddenInput from "./SwitchHiddenInput.vue";

const props = defineProps<{
  class?: string;
  [key: string]: any;
}>();
</script>

<template>
  <Switch.Root :class="cn(switchRoot, props.class)" v-bind="props">
    <slot />
    <SwitchHiddenInput />
  </Switch.Root>
</template>
