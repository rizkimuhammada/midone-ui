<script lang="ts" setup>
import { Dialog, type DialogTriggerProps } from "@ark-ui/vue/dialog";
import { cn } from "@midoneui/core/utils/cn";
import { dialogTrigger } from "@midoneui/core/styles/dialog.styles";
import { Button } from "@/components/ui/button";

const props = defineProps<
  DialogTriggerProps & {
    class?: string;
  }
>();
</script>

<template>
  <Dialog.Trigger v-bind="props" v-slot="slotProps">
    <template v-if="!props.asChild">
      <Button :class="cn(dialogTrigger, props.class)" v-bind="slotProps">
        <slot />
      </Button>
    </template>
    <template v-else>
      <slot v-bind="slotProps" />
    </template>
  </Dialog.Trigger>
</template>
