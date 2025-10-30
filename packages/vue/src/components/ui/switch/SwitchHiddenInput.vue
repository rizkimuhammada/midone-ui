<script lang="ts" setup>
import { Switch } from "@ark-ui/vue/switch";
import { cn } from "@midoneui/core/utils/cn";
import { switchHiddenInput } from "@midoneui/core/styles/switch.styles";

const props = defineProps<{
  class?: string;
  [key: string]: any;
}>();
</script>

<template>
  <Switch.HiddenInput
    :class="cn(switchHiddenInput, props.class)"
    v-bind="props"
  />
</template>
