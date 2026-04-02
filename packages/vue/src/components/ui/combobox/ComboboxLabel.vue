<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { comboboxLabel } from "@midoneui/core/styles/combobox.styles";
import { Label } from "@/components/ui/label";
import { inject } from "vue";

const { class: className } = defineProps<{ class?: string }>();

const api = inject<any>("comboboxApi");
</script>

<template>
  <Label :class="cn(comboboxLabel, className)" v-bind="api?.getLabelProps()">
    <slot />
  </Label>
</template>
