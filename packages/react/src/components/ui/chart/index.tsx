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
