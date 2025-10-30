<script lang="ts" setup>
import { Switch } from "@ark-ui/vue/switch";
import { cn } from "@midoneui/core/utils/cn";
import { switchThumb } from "@midoneui/core/styles/switch.styles";

const props = defineProps<{
  class?: string;
  [key: string]: any;
}>();
</script>

<template>
  <Switch.Thumb :class="cn(switchThumb, props.class)" v-bind="props" />
</template>
