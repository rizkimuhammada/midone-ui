<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { selectContent } from "@midoneui/core/styles/select.styles";
import { Box } from "@/components/ui/box";
import { SelectPositioner } from ".";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<Api>("selectApi");
</script>

<template>
  <SelectPositioner>
    <div v-bind="api?.getContentProps()">
      <Box raised="single" :class="cn(selectContent, className)">
        <div><slot /></div>
      </Box>
    </div>
  </SelectPositioner>
</template>
