import ChartJs from "chart.js/auto";
import { chart } from "@midoneui/core/src/styles/chart.styles";
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
    document.querySelectorAll<HTMLCanvasElement>("canvas.chart").forEach((canvas) => {
        if ((canvas as any)._chartInstance) return;

        const type = (canvas.getAttribute("data-type") ?? "bar") as any;
        const labels = JSON.parse(canvas.getAttribute("data-labels") ?? "[]");
        const datasetLabel = canvas.getAttribute("data-dataset-label") ?? "";
        const data = JSON.parse(canvas.getAttribute("data-dataset-data") ?? "[]");
        const maxBarThickness = parseFloat(canvas.getAttribute("data-max-bar-thickness") ?? "12");

        canvas.className = cn(chart, canvas.className);
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
