<script lang="ts" setup>
import type { Api } from "@zag-js/scroll-area";
import { inject, type ComputedRef } from "vue";

const api = inject<ComputedRef<Api>>("scrollAreaApi");
</script>

<template>
  <div v-bind="api?.getContentProps()">
    <slot />
  </div>
</template>
