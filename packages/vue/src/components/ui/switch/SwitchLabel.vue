<script lang="ts" setup>
import { Switch } from "@ark-ui/vue/switch";
import { cn } from "@midoneui/core/utils/cn";
import { switchLabel } from "@midoneui/core/styles/switch.styles";
import { label } from "@midoneui/core/styles/label.styles";

const props = defineProps<{
  class?: string;
  [key: string]: any;
}>();
</script>

<template>
  <Switch.Label :class="cn([label, switchLabel, props.class])" v-bind="props">
    <slot />
  </Switch.Label>
</template>
