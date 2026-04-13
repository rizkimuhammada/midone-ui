<script lang="ts" setup>
import { ComboboxTrigger } from ".";
import type { Api } from "@zag-js/combobox";
import { inject } from "vue";
import { cn } from "@/utils/cn";
import { comboboxControl } from "@midoneui/core/styles/combobox.styles";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<Api>("comboboxApi");
</script>

<template>
  <div :class="cn(comboboxControl, className)" v-bind="api?.getControlProps()">
    <ComboboxTrigger />
  </div>
</template>
