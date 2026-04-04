<script lang="ts" setup>
import * as progress from "@zag-js/progress";
import type { Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { progressRoot } from "@midoneui/core/styles/progress-circular.styles";
import { ProgressCircularLabel, ProgressCircularCircle, ProgressCircularCircleTrack, ProgressCircularCircleRange, ProgressCircularValueText } from ".";

const {
  class: className,
  asChild = false,
  label,
  circleClass,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string; circleClass?: string; showValueText?: boolean }>();

const service = useMachine(progress.machine, {
  ...props,
  id: crypto.randomUUID(),
});
const api = computed(() => progress.connect(service, normalizeProps));

provide("progressApi", api);
</script>

<template>
  <Slot
    :class="cn(progressRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <ProgressCircularLabel v-if="label">{{ label }}</ProgressCircularLabel>
      <ProgressCircularCircle :class="circleClass">
        <ProgressCircularCircleTrack />
        <ProgressCircularCircleRange />
      </ProgressCircularCircle>
      <ProgressCircularValueText v-if="showValueText" />
      <slot />
    </div>
  </Slot>
</template>
