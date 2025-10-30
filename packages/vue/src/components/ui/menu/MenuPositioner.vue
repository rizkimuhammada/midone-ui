<script lang="ts" setup>
import { type Api } from "@zag-js/menu";
import { cn } from "@midoneui/core/utils/cn";
import { inject, type ComputedRef } from "vue";
import { menuPositioner } from "@midoneui/core/styles/menu.styles";

interface Props {
  class?: string;
}

const { class: className, ...props } = defineProps<Props>();
const api = inject<ComputedRef<Api>>("menuApi");
</script>

<template>
  <div
    v-bind="{ ...api?.getPositionerProps(), ...props, ...$attrs }"
    :class="cn(menuPositioner, className)"
  >
    <slot />
  </div>
</template>
