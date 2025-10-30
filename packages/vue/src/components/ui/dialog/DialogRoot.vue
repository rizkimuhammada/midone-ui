<script lang="ts" setup>
import { Dialog } from "@ark-ui/vue/dialog";

const props = defineProps();
</script>

<template>
  <Dialog.Root v-bind="props">
    <slot />
  </Dialog.Root>
</template>
