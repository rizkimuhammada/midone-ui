<script lang="ts" setup>
import * as progress from "@zag-js/progress";
import type { Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { cn } from "@midoneui/core/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { progressRoot } from "@midoneui/core/styles/progress-linear.styles";
import { ProgressLabel, ProgressTrack, ProgressRange, ProgressValueText } from ".";

const {
  class: className,
  asChild = false,
  label,
  trackClass,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean; label?: string; trackClass?: string }>();

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
      <ProgressLabel v-if="label">{{ label }}</ProgressLabel>
      <ProgressTrack :class="trackClass">
        <ProgressRange />
      </ProgressTrack>
      <ProgressValueText />
      <slot />
    </div>
  </Slot>
</template>
