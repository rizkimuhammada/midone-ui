import { cn } from "@midoneui/core/utils/cn";
import { Label } from "@/components/ui/label";
import {
  progressRoot,
  progressLabel,
  progressValueText,
  progressCircle,
  progressCircleTrack,
  progressCircleRange,
} from "@midoneui/core/styles/progress-circular.styles";
import * as progress from "@zag-js/progress";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { createContext, useContext, useId } from "react";

const ApiContext = createContext<Api | null>(null);

export function ProgressRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(progress.machine, { id: useId() });
  const api = progress.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(progressRoot, className)}
        {...api?.getRootProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function ProgressLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & {
  asChild?: boolean;
}) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getLabelProps()} {...props}>
      {!asChild ? (
        <Label className={cn(progressLabel, className)}>{children}</Label>
      ) : (
        children
      )}
    </Slot>
  );
}

export function ProgressValueText({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(progressValueText, className)}
      {...api?.getValueTextProps()}
      {...props}
    >
      {api?.valueAsString}
    </div>
  );
}

export function ProgressCircle({
  children,
  className,
  ...props
}: React.ComponentProps<"svg">) {
  const api = useContext(ApiContext);

  return (
    <svg
      className={cn(progressCircle, className)}
      {...api?.getCircleProps()}
      {...props}
    >
      {children}
    </svg>
  );
}

export function ProgressCircleTrack({
  className,
  ...props
}: React.ComponentProps<"circle">) {
  const api = useContext(ApiContext);

  return (
    <circle
      className={cn(progressCircleTrack, className)}
      {...api?.getCircleTrackProps()}
      {...props}
    />
  );
}

export function ProgressCircleRange({
  className,
  ...props
}: React.ComponentProps<"circle">) {
  const api = useContext(ApiContext);

  return (
    <circle
      className={cn(progressCircleRange, className)}
      {...api?.getCircleRangeProps()}
      {...props}
    />
  );
}
