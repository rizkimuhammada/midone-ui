# Chart

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<canvas data-component="chart" class=" max-w-100"
  data-type="bar"
  data-labels='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]'
  data-dataset-label="Html Template"
  data-dataset-data="[60,150,30,200,180,50,180,120,230,180,250,270]"
  data-max-bar-thickness="12"
></canvas>
```

## Dependency

```bash
npm install chart.js/auto
```

## Component

### chart.ts

```ts
import ChartJs from "chart.js/auto";
import { chart as chartStyles } from "@midoneui/core/src/styles/chart.styles";
import { cn } from "@midoneui/core/src/utils/cn";

function getColor(name: string, opacity = 1): string {
    const color = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
    if (opacity < 1) {
        return `color-mix(in oklch, ${color} ${opacity * 100}%, transparent ${100 - opacity * 100}%)`;
    }
    return color;
}

function initChart() {
    document.querySelectorAll<HTMLCanvasElement>('[data-component="chart"]').forEach((canvas) => {
        if ((canvas as any)._chartInstance) return;

        const type = (canvas.getAttribute("data-type") ?? "bar") as any;
        const labelsStr = canvas.getAttribute("data-labels") ?? "[]";
        const dataStr = canvas.getAttribute("data-dataset-data") ?? "[]";
        let labels = [];
        let data = [];
        try {
            labels = JSON.parse(labelsStr);
            data = JSON.parse(dataStr);
        } catch (e) {
            console.warn("chart: failed to parse labels or data", labelsStr, dataStr);
        }
        
        const datasetLabel = canvas.getAttribute("data-dataset-label") ?? "";
        const maxBarThickness = parseFloat(canvas.getAttribute("data-max-bar-thickness") ?? "12");

        canvas.className = cn(chartStyles, canvas.className);
        canvas.setAttribute("data-scope", "chart");
        canvas.setAttribute("data-part", "root");

        const instance = new ChartJs(canvas, {
            type,
            data: {
                labels,
                datasets: [
                    {
                        label: datasetLabel,
                        maxBarThickness,
                        data,
                        backgroundColor: () => getColor("--color-foreground", 0.3),
                        borderColor: () => getColor("--color-foreground"),
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    x: { display: false },
                    y: { display: false },
                },
            },
        });

        (canvas as any)._chartInstance = instance;
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChart);
} else {
    initChart();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<canvas data-component="chart" class=" max-w-100"
  data-type="bar"
  data-labels='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]'
  data-dataset-label="Html Template"
  data-dataset-data="[60,150,30,200,180,50,180,120,230,180,250,270]"
  data-max-bar-thickness="12"
></canvas>
```

## Examples

### Example 1

```html
<canvas data-component="chart" class=" max-w-100"
  data-type="bar"
  data-labels='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]'
  data-dataset-label="Html Template"
  data-dataset-data="[60,150,30,200,180,50,180,120,230,180,250,270]"
  data-max-bar-thickness="12"
></canvas>
```

