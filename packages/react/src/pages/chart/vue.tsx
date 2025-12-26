import { Chart, getColor } from "@/components/ui/chart";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <Chart
                  className="max-w-100"
                  config={{
                    type: "bar",
                    data: {
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      datasets: [
                        {
                          label: "Html Template",
                          maxBarThickness: 12,
                          data: [
                            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250,
                            270,
                          ],
                          backgroundColor: () =>
                            getColor("--color-foreground", 0.3),
                          borderColor: () => getColor("--color-foreground"),
                          borderWidth: 1,
                        },
                      ],
                    },
                    options: {
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        x: {
                          display: false,
                        },
                        y: {
                          display: false,
                        },
                      },
                    },
                  }}
                />
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Chart
  class="max-w-100"
  :config="{
    type: 'bar',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Html Template',
          maxBarThickness: 12,
          data: [
            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250, 270,
          ],
          backgroundColor: () => getColor('--color-foreground', 0.3),
          borderColor: () => getColor('--color-foreground'),
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  }"
/>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add chart.js</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/chart/Chart.vue">
          {`
<script lang="ts" setup>
import ChartJs from "chart.js/auto";
import { ref, onMounted } from "vue";
import { cn } from "@midoneui/core/utils/cn";
import { chart } from "@midoneui/core/styles/chart.styles";

const {
  class: className,
  config,
  ...props
} = defineProps<{
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
    chartRef.value.instance = new ChartJs(chartRef.value, config);
  }
});
</script>

<template>
  <canvas :class="cn(chart, className)" ref="chartRef" v-bind="props" />
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/chart/index.ts">
          {`
export { default as Chart } from "./Chart.vue";
export { getColor } from "./utils";
              `}
        </PreviewCode>
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import { Chart, getColor } from "@/components/ui/chart";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Chart
  class="max-w-100"
  :config="{
    type: 'bar',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Html Template',
          maxBarThickness: 12,
          data: [
            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250, 270,
          ],
          backgroundColor: () => getColor('--color-foreground', 0.3),
          borderColor: () => getColor('--color-foreground'),
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    },
  }"
/>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
