<script lang="ts" setup>
import { Dialog, type DialogPositionerProps } from "@ark-ui/vue/dialog";
import { cn } from "@midoneui/core/utils/cn";
import { dialogPositioner } from "@midoneui/core/styles/dialog.styles";

const props = defineProps<
  DialogPositionerProps & {
    class?: string;
  }
>();
</script>

<template>
  <Dialog.Positioner :class="cn(dialogPositioner, props.class)" v-bind="props">
    <slot />
  </Dialog.Positioner>
</template>
