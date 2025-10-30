<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { alertRoot } from "@midoneui/core/styles/alert.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Presence, type PresenceProps } from "@ark-ui/vue/presence";
import { ref, provide } from "vue";

const props = defineProps<
  PresenceProps &
    BoxVariants & {
      class?: string;
      filled?: boolean;
    }
>();

const present = ref(true);
const setPresent = (value: boolean) => {
  present.value = value;
};

provide("alertPresent", { present, setPresent });
</script>

<template>
  <Presence
    :class="
      cn(
        boxVariants({
          filled: props.filled,
          variant: props.variant,
          raised: props.raised,
          className: props.class,
        }),
        alertRoot
      )
    "
    v-bind="props"
    :present="present"
  >
    <slot />
  </Presence>
</template>
