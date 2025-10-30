<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  tableVariants,
  type TableVariants,
} from "@midoneui/core/styles/table.styles";
import { provide, computed } from "vue";
import TableContainer from "./TableContainer.vue";

const props = defineProps<
  TableVariants & {
    class?: string;
  }
>();

provide(
  "tableVariant",
  computed(() => ({
    variant: props.variant,
    raised: props.raised,
  }))
);
</script>

<template>
  <TableContainer>
    <table
      :class="
        cn(
          tableVariants({
            variant: props.variant,
            raised: props.raised,
            className: props.class,
          }),
          props.class
        )
      "
      v-bind="props"
    >
      <slot />
    </table>
  </TableContainer>
</template>
