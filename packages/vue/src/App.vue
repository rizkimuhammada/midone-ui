<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <template v-if="route.path === '/side-menu'">
    <RouterView />
  </template>
  <div v-else class="p-5 sm:p-20">
    <div class="text-sm">
      <RouterView />
    </div>
  </div>
</template>
