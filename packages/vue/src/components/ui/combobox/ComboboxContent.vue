<script lang="ts" setup>
import { Combobox, type ComboboxContentProps } from "@ark-ui/vue/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { comboboxContent } from "@midoneui/core/styles/combobox.styles";
import { Box } from "@/components/ui/box";
import { ComboboxPositioner } from "./index";

const props = defineProps<
  ComboboxContentProps & {
    class?: string;
  }
>();
</script>

<template>
  <Teleport to="body">
    <ComboboxPositioner>
      <Combobox.Content v-bind="props">
        <Box
          raised="single"
          :class="cn(comboboxContent, props.class)"
          v-bind="props"
        >
          <div>
            <slot />
          </div>
        </Box>
      </Combobox.Content>
    </ComboboxPositioner>
  </Teleport>
</template>
