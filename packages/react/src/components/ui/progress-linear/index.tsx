import { Progress } from "@ark-ui/react/progress";
import { cn } from "@midoneui/core/utils/cn";
import { Label } from "@/components/ui/label";
import {
  progressRoot,
  progressLabel,
  progressValueText,
  progressTrack,
  progressRange,
} from "@midoneui/core/styles/progress-linear.styles";

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

export function ProgressTrack({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Progress.Track>) {
  return (
    <Progress.Track className={cn(progressTrack, className)} {...props}>
      {children}
    </Progress.Track>
  );
}

export function ProgressRange({
  className,
  ...props
}: React.ComponentProps<typeof Progress.Range>) {
  return <Progress.Range className={cn(progressRange, className)} {...props} />;
}
