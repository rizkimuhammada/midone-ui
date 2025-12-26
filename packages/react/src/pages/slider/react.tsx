import {
  SliderRoot,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderMarkerGroup,
  SliderMarker,
} from "@/components/ui/slider";
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
                <SliderRoot className="w-72" value={[20]}>
                  <SliderLabel>Max Items</SliderLabel>
                  <SliderControl>
                    <SliderTrack>
                      <SliderRange />
                    </SliderTrack>
                    <SliderThumb index={0}>
                      <SliderHiddenInput />
                    </SliderThumb>
                  </SliderControl>
                  <div className="flex items-center text-xs gap-1 font-medium justify-center opacity-70">
                    <SliderValueText /> Items
                  </div>
                </SliderRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SliderRoot className="w-72" value={[20]}>
  <SliderLabel>Max Items</SliderLabel>
  <SliderControl>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb index={0}>
      <SliderHiddenInput />
    </SliderThumb>
  </SliderControl>
  <div className="flex items-center text-xs gap-1 font-medium justify-center opacity-70">
    <SliderValueText /> Items
  </div>
</SliderRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/slider</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/slider/index.tsx">
          {`
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
import {
  SliderRoot,
  SliderLabel,
  SliderValueText,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
  SliderMarkerGroup,
  SliderMarker,
} from "@/components/ui/slider";
                    `}
        </PreviewCode>
        <PreviewCode>
          {`
<SliderRoot className="w-72" value={[20]}>
  <SliderLabel>Max Items</SliderLabel>
  <SliderControl>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb index={0}>
      <SliderHiddenInput />
    </SliderThumb>
  </SliderControl>
  <div className="flex items-center text-xs gap-1 font-medium justify-center opacity-70">
    <SliderValueText /> Items
  </div>
</SliderRoot>
                    `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <SliderRoot className="w-72" value={[20, 80]}>
                  <SliderLabel>Price Range</SliderLabel>
                  <SliderControl>
                    <SliderTrack>
                      <SliderRange />
                    </SliderTrack>
                    <SliderThumb index={0}>
                      <SliderHiddenInput />
                    </SliderThumb>
                    <SliderThumb index={1}>
                      <SliderHiddenInput />
                    </SliderThumb>
                  </SliderControl>
                  <SliderMarkerGroup>
                    <SliderMarker value={0}>$0</SliderMarker>
                    <SliderMarker value={25}>$25</SliderMarker>
                    <SliderMarker value={50}>$50</SliderMarker>
                    <SliderMarker value={75}>$75</SliderMarker>
                    <SliderMarker value={100}>$100</SliderMarker>
                  </SliderMarkerGroup>
                </SliderRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SliderRoot className="w-72" value={[20, 80]}>
  <SliderLabel>Price Range</SliderLabel>
  <SliderControl>
    <SliderTrack>
      <SliderRange />
    </SliderTrack>
    <SliderThumb index={0}>
      <SliderHiddenInput />
    </SliderThumb>
    <SliderThumb index={1}>
      <SliderHiddenInput />
    </SliderThumb>
  </SliderControl>
  <SliderMarkerGroup>
    <SliderMarker value={0}>$0</SliderMarker>
    <SliderMarker value={25}>$25</SliderMarker>
    <SliderMarker value={50}>$50</SliderMarker>
    <SliderMarker value={75}>$75</SliderMarker>
    <SliderMarker value={100}>$100</SliderMarker>
  </SliderMarkerGroup>
</SliderRoot>
                      `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
    </>
  );
}

export default Main;
