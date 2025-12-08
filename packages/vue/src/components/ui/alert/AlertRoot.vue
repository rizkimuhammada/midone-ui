<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { alertRoot } from "@midoneui/core/styles/alert.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Presence } from "@/components/ui/presence";
import { ref, provide } from "vue";

const {
  class: className,
  filled,
  variant,
  raised,
  ...rest
} = defineProps<BoxVariants & { class?: string; filled?: boolean }>();

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
          filled,
          variant,
          raised,
          className,
        }),
        alertRoot
      )
    "
    v-bind="rest"
    :present="present"
  >
    <slot />
  </Presence>
</template>
