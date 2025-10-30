<script lang="ts" setup>
import { Dialog, type DialogCloseTriggerProps } from "@ark-ui/vue/dialog";
import { cn } from "@midoneui/core/utils/cn";
import { dialogCloseTrigger } from "@midoneui/core/styles/dialog.styles";
import { Button } from "@/components/ui/button";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import { X } from "lucide-vue-next";

const props = defineProps<
  DialogCloseTriggerProps &
    ButtonVariants & {
      class?: string;
    }
>();
</script>

<template>
  <Dialog.CloseTrigger v-bind="props" v-slot="slotProps">
    <template v-if="!$slots.default">
      <Button :class="cn(dialogCloseTrigger, props.class)" v-bind="slotProps">
        <X class="size-4" />
      </Button>
    </template>
    <template v-else>
      <template v-if="props.asChild">
        <slot v-bind="slotProps" />
      </template>
      <template v-else>
        <Button
          :class="
            cn(
              buttonVariants({
                filled: props.filled,
                variant: props.variant,
                size: props.size,
                className: props.class,
              }),
              props.class
            )
          "
        >
          <slot />
        </Button>
      </template>
    </template>
  </Dialog.CloseTrigger>
</template>
