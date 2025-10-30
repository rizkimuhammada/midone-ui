<script lang="ts" setup>
import { Dialog, type DialogTitleProps } from "@ark-ui/vue/dialog";
import { cn } from "@midoneui/core/utils/cn";
import { dialogTitle } from "@midoneui/core/styles/dialog.styles";

const props = defineProps<
  DialogTitleProps & {
    class?: string;
  }
>();
</script>

<template>
  <Dialog.Title :class="cn(dialogTitle, props.class)" v-bind="props">
    <slot />
  </Dialog.Title>
</template>
