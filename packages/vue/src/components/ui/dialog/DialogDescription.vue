<script lang="ts" setup>
import { Dialog, type DialogDescriptionProps } from "@ark-ui/vue/dialog";
import { cn } from "@midoneui/core/utils/cn";
import { dialogDescription } from "@midoneui/core/styles/dialog.styles";

const props = defineProps<
  DialogDescriptionProps & {
    class?: string;
  }
>();
</script>

<template>
  <Dialog.Description
    :class="cn(dialogDescription, props.class)"
    v-bind="props"
  >
    <slot />
  </Dialog.Description>
</template>
