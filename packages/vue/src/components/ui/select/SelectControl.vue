<script lang="ts" setup>
import { cn } from "@/utils/cn";
import { selectControl } from "@midoneui/core/styles/select.styles";
import { SelectTrigger, SelectValueText } from ".";
import type { Api } from "@zag-js/select";
import { inject } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<Api>("selectApi");
const selectPlaceholder = inject<string>("selectPlaceholder");
</script>

<template>
  <div :class="cn(selectControl, className)" v-bind="api?.getControlProps()">
    <SelectTrigger>
      <SelectValueText :placeholder="selectPlaceholder" />
    </SelectTrigger>
  </div>
</template>
