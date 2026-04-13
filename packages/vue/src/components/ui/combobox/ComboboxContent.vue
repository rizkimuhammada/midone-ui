<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { comboboxContent } from "@midoneui/core/styles/combobox.styles";
import { Box } from "@/components/ui/box";
import { ComboboxPositioner } from "@/components/ui/combobox";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import ComboboxInput from "./ComboboxInput.vue";

const { class: className, searchPlaceholder } = defineProps<{
  class?: string;
  searchPlaceholder?: string;
}>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <ComboboxPositioner>
    <div v-bind="api?.getContentProps()">
      <Box raised="single" :class="cn(comboboxContent, className)">
        <div>
          <ComboboxInput
            v-if="searchPlaceholder"
            :placeholder="searchPlaceholder"
          />
          <slot />
        </div>
      </Box>
    </div>
  </ComboboxPositioner>
</template>
