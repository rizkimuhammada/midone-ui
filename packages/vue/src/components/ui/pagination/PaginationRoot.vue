<script lang="ts" setup>
import * as pagination from "@zag-js/pagination";
import type { Props } from "@zag-js/pagination";
import { Slot } from "@/components/ui/slot";
import { cn } from "@/utils/cn";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { computed, provide } from "vue";
import { paginationRoot } from "@midoneui/core/styles/pagination.styles";

import PaginationEllipsis from "./PaginationEllipsis.vue";
import PaginationItem from "./PaginationItem.vue";
import PaginationNextTrigger from "./PaginationNextTrigger.vue";
import PaginationPrevTrigger from "./PaginationPrevTrigger.vue";

const {
  class: className,
  asChild = false,
  count,
  pageSize,
  siblingCount,
  ...props
} = defineProps<Partial<Props> & { class?: string; asChild?: boolean }>();

const service = useMachine(pagination.machine, {
  ...props,
  count,
  pageSize,
  siblingCount,
  id: crypto.randomUUID(),
});
const api = computed(() => pagination.connect(service, normalizeProps));

provide("paginationApi", api);
</script>

<template>
  <Slot
    :class="cn(paginationRoot, className)"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <template v-else>
        <PaginationPrevTrigger />
        <template v-for="(page, index) in api?.pages" :key="index">
          <PaginationItem v-if="page.type === 'page'" v-bind="{ ...page }">
            {{ page.value }}
          </PaginationItem>
          <PaginationEllipsis v-else :index="index" />
        </template>
        <PaginationNextTrigger />
      </template>
    </div>
  </Slot>
</template>
