<script lang="ts" setup>
import { Dialog, type DialogBackdropProps } from "@ark-ui/vue/dialog";
import { cn } from "@midoneui/core/utils/cn";
import { dialogBackdrop } from "@midoneui/core/styles/dialog.styles";

const props = defineProps<
  DialogBackdropProps & {
    class?: string;
  }
>();
</script>

<template>
  <Dialog.Backdrop :class="cn(dialogBackdrop, props.class)" v-bind="props" />
</template>
