<script lang="ts" setup>
import { PaginationRoot } from "@/components/ui/pagination";
</script>

<template>
  <PaginationRoot :count="5000" :pageSize="10" :siblingCount="2" />
</template>
