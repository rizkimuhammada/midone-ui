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
import { createContext, useContext, useId } from "react";
import * as slider from "@zag-js/slider";
import type { Api, Props, ThumbProps, MarkerProps } from "@zag-js/slider";
import { Slot } from "@/components/ui/slot";
import { useMachine, normalizeProps } from "@zag-js/react";

const ApiContext = createContext<Api | null>(null);
const ThumbContext = createContext<ThumbProps | null>(null);

export function SliderRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(slider.machine, {
    ...props,
    id: useId(),
  });
  const api = slider.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(sliderRoot, className)}
        {...api?.getRootProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function SliderLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getLabelProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Label className={cn(sliderLabel, className)}>{children}</Label>
      )}
    </Slot>
  );
}

export function SliderValueText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"output"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sliderValueText, className)}
      {...api?.getValueTextProps()}
      {...props}
    >
      {asChild ? children : <output>{api?.value.at(0)}</output>}
    </Slot>
  );
}

export function SliderControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sliderControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SliderTrack({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sliderTrack, className)}
      {...api?.getTrackProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SliderRange({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sliderRange, className)}
      {...api?.getRangeProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SliderThumb({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & ThumbProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <ThumbContext.Provider value={props}>
      <Slot
        className={cn(sliderThumb, className)}
        {...api?.getThumbProps(props)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ThumbContext.Provider>
  );
}

export function SliderHiddenInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const api = useContext(ApiContext);
  const thumbProps = useContext(ThumbContext);

  return (
    <input
      className={cn(sliderHiddenInput, className)}
      {...api?.getHiddenInputProps(thumbProps!)}
      {...props}
    />
  );
}

export function SliderMarkerGroup({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sliderMarkerGroup, className)}
      {...api?.getMarkerGroupProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SliderMarker({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & MarkerProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sliderMarker, className)}
      {...api?.getMarkerProps(props)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}
