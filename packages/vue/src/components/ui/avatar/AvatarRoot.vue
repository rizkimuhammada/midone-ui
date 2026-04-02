<script lang="ts" setup>
import * as avatar from "@zag-js/avatar";
import { provide, computed } from "vue";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/avatar";
import { cn } from "@midoneui/core/utils/cn";
import { avatarRootVariants, type AvatarRootVariants } from "@midoneui/core/styles/avatar.styles";
import { Slot } from "@/components/ui/slot";
import AvatarFallback from "./AvatarFallback.vue";
import AvatarImage from "./AvatarImage.vue";

const {
  class: className,
  bordered,
  asChild = false,
  src,
  fallbackText,
  ...props
} = defineProps<
  AvatarRootVariants &
    Partial<Props> & {
      class?: string;
      asChild?: boolean;
      src?: string;
      fallbackText?: string;
    }
>();

const service = useMachine(avatar.machine, {
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => avatar.connect(service, normalizeProps));

provide("avatarApi", api);
</script>

<template>
  <Slot
    :class="
      cn(
        avatarRootVariants({
          bordered,
        }),
        className
      )
    "
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <template v-else>
        <AvatarFallback v-if="fallbackText">{{ fallbackText }}</AvatarFallback>
        <AvatarImage v-if="src" :src="src" />
      </template>
    </div>
  </Slot>
</template>
