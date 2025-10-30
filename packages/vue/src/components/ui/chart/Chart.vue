<script lang="ts" setup>
import ChartJs from "chart.js/auto";
import { ref, onMounted } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { chart } from "@midoneui/core/styles/chart.styles";

const props = defineProps<{
  class?: string;
  config: ConstructorParameters<typeof ChartJs>[1];
}>();

const chartRef = ref<
  | (HTMLCanvasElement & {
      instance?: {};
    })
  | null
>(null);

onMounted(() => {
  if (chartRef.value && !chartRef.value.instance) {
    chartRef.value.instance = new ChartJs(chartRef.value, props.config);
  }
});
</script>

<template>
  <canvas :class="cn(chart, props.class)" ref="chartRef" v-bind="props" />
</template>
