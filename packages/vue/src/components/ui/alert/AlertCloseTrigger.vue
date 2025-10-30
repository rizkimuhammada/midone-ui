<script lang="ts" setup>
import { X } from "lucide-vue-next";
import { cn } from "@midoneui/core/utils/cn";
import { alertCloseTrigger } from "@midoneui/core/styles/alert.styles";
import { inject } from "vue";

const props = defineProps<{
  class?: string;
}>();

const context = inject<{ present: any; setPresent: (value: boolean) => void } | null>("alertPresent", null);
</script>

<template>
  <div
    v-if="!$slots.default"
    :class="cn([props.class, alertCloseTrigger])"
    v-bind="props"
    @click="context?.setPresent(false)"
  >
    <X />
  </div>
  <div v-else :class="cn([props.class, alertCloseTrigger])" v-bind="props">
    <slot />
  </div>
</template>
