import { Slider } from "@ark-ui/react/slider";
import { cn } from "@midoneui/core/utils/cn";
import { Label } from "@/components/ui/label";
import {
  sliderRoot,
  sliderLabel,
  sliderValueText,
  sliderControl,
  sliderTrack,
  sliderRange,
  sliderThumb,
  sliderHiddenInput,
  sliderMarkerGroup,
  sliderMarker,
} from "@midoneui/core/styles/slider.styles";

export function SliderRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Slider.Root>) {
  return (
    <Slider.Root className={cn(sliderRoot, className)} {...props}>
      {children}
    </Slider.Root>
  );
}

export function SliderLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Slider.Label>) {
  return (
    <Slider.Label asChild {...props}>
      <Label className={cn(sliderLabel, className)}>{children}</Label>
    </Slider.Label>
  );
}

export function SliderValueText({
  className,
  ...props
}: React.ComponentProps<typeof Slider.ValueText>) {
  return (
    <Slider.ValueText className={cn(sliderValueText, className)} {...props} />
  );
}

export function SliderControl({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Slider.Control>) {
  return (
    <Slider.Control className={cn(sliderControl, className)} {...props}>
      {children}
    </Slider.Control>
  );
}

export function SliderTrack({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Slider.Track>) {
  return (
    <Slider.Track className={cn(sliderTrack, className)} {...props}>
      {children}
    </Slider.Track>
  );
}

export function SliderRange({
  className,
  ...props
}: React.ComponentProps<typeof Slider.Range>) {
  return <Slider.Range className={cn(sliderRange, className)} {...props} />;
}

export function SliderThumb({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Slider.Thumb>) {
  return (
    <Slider.Thumb className={cn(sliderThumb, className)} {...props}>
      {children}
    </Slider.Thumb>
  );
}

export function SliderHiddenInput({
  className,
  ...props
}: React.ComponentProps<typeof Slider.HiddenInput>) {
  return (
    <Slider.HiddenInput
      className={cn(sliderHiddenInput, className)}
      {...props}
    />
  );
}

export function SliderMarkerGroup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Slider.MarkerGroup>) {
  return (
    <Slider.MarkerGroup className={cn(sliderMarkerGroup, className)} {...props}>
      {children}
    </Slider.MarkerGroup>
  );
}

export function SliderMarker({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Slider.Marker>) {
  return (
    <Slider.Marker className={cn(sliderMarker, className)} {...props}>
      {children}
    </Slider.Marker>
  );
}
