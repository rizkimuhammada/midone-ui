# Chart

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
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
            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250, 270,
          ],
          backgroundColor: getColor("--color-foreground", 0.3),
          borderColor: getColor("--color-foreground"),
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
```

## Dependency

```bash
npm install chart.js/auto chart.js
```

## Component

```tsx
import ChartJs from "chart.js/auto";
import { useRef, useEffect } from "react";
import { cn } from "@midoneui/core/utils/cn";
import { chart } from "@midoneui/core/styles/chart.styles";
import type { ChartType, ChartConfiguration } from "chart.js";

function getColor(name: string, opacity = 1) {
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  if (opacity < 1) {
    return `color-mix(in oklch, ${color} ${opacity * 100}%, transparent ${
      100 - opacity * 100
    }%)`;
  }
  return color;
}

function Chart<TType extends ChartType = ChartType>({
  className,
  config,
  getRef,
  ...props
}: React.ComponentProps<"canvas"> & {
  config: ChartConfiguration<TType>;
  getRef?: (chart: ChartJs<TType>) => void;
}) {
  const chartRef = useRef<
    | (HTMLCanvasElement & {
        instance?: ChartJs<TType>;
      })
    | null
  >(null);

  useEffect(() => {
    if (chartRef.current && !chartRef.current.instance) {
      chartRef.current.instance = new ChartJs(chartRef.current, config);
      getRef?.(chartRef.current.instance);
    }
  }, [config, getRef]);

  return <canvas className={cn(chart, className)} ref={chartRef} {...props} />;
}

export { Chart, getColor };
```

## Usage

```tsx
import { Chart, getColor } from "@/components/ui/chart";
```

```tsx
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
            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250, 270,
          ],
          backgroundColor: getColor("--color-foreground", 0.3),
          borderColor: getColor("--color-foreground"),
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
```

## Examples

### Example 1

```tsx
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
            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250, 270,
          ],
          backgroundColor: getColor("--color-foreground", 0.3),
          borderColor: getColor("--color-foreground"),
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
```

