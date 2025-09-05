import { Progress } from "@ark-ui/react/progress";
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

export function ProgressRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Progress.Root>) {
  return (
    <Progress.Root className={cn(progressRoot, className)} {...props}>
      {children}
    </Progress.Root>
  );
}

export function ProgressLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Progress.Label>) {
  return (
    <Progress.Label {...props}>
      <Label className={cn(progressLabel, className)}>{children}</Label>
    </Progress.Label>
  );
}

export function ProgressValueText({
  className,
  ...props
}: React.ComponentProps<typeof Progress.ValueText>) {
  return (
    <Progress.ValueText
      className={cn(progressValueText, className)}
      {...props}
    />
  );
}

export function ProgressCircle({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Progress.Circle>) {
  return (
    <Progress.Circle className={cn(progressCircle, className)} {...props}>
      {children}
    </Progress.Circle>
  );
}

export function ProgressCircleTrack({
  className,
  ...props
}: React.ComponentProps<typeof Progress.CircleTrack>) {
  return (
    <Progress.CircleTrack
      className={cn(progressCircleTrack, className)}
      {...props}
    />
  );
}

export function ProgressCircleRange({
  className,
  ...props
}: React.ComponentProps<typeof Progress.CircleRange>) {
  return (
    <Progress.CircleRange
      className={cn(progressCircleRange, className)}
      {...props}
    />
  );
}
