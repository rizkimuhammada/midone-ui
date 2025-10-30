<script lang="ts" setup>
import { Dialog, type DialogContentProps } from "@ark-ui/vue/dialog";
import { cn } from "@midoneui/core/utils/cn";
import { dialogContent } from "@midoneui/core/styles/dialog.styles";
import { Box } from "@/components/ui/box";
import { DialogBackdrop, DialogPositioner } from "@/components/ui/dialog";
import { Teleport } from "vue";

const props = defineProps<
  DialogContentProps & {
    class?: string;
  }
>();
</script>

<template>
  <Teleport to="body">
    <slot name="backdrop">
      <DialogBackdrop />
    </slot>
    <slot name="positioner">
      <DialogPositioner>
        <Dialog.Content asChild>
          <Box :class="cn(dialogContent, props.class)" v-bind="props">
            <slot />
          </Box>
        </Dialog.Content>
      </DialogPositioner>
    </slot>
  </Teleport>
</template>
