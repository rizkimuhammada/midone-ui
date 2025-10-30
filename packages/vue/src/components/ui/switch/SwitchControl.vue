<script lang="ts" setup>
import { Switch } from "@ark-ui/vue/switch";
import { cn } from "@midoneui/core/utils/cn";
import { switchControl } from "@midoneui/core/styles/switch.styles";
import SwitchThumb from "./SwitchThumb.vue";

const props = defineProps<{
  class?: string;
  [key: string]: any;
}>();
</script>

<template>
  <Switch.Control :class="cn(switchControl, props.class)" v-bind="props">
    <SwitchThumb />
  </Switch.Control>
</template>
