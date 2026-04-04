import { ProgressCircularRoot } from "@/components/ui/progress-circular";
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
                <ProgressCircularRoot
                  defaultValue={42}
                  label="Progress Circular"
                  circleClass="max-w-48"
                  showValueText
                />
              </>
            ),
            code: (
              <PreviewCode>
                {`
<ProgressCircularRoot
  defaultValue={42}
  label="Progress Circular"
  circleClass="max-w-48"
  showValueText
/>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/progress</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/progress-circular/index.tsx">
          {`
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

export function ProgressCircularRoot({
  children,
  className,
  asChild = false,
  label,
  circleClass,
  showValueText = false,
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & {
    asChild?: boolean;
    label?: string;
    circleClass?: string;
    showValueText?: boolean;
  }) {
  const service = useMachine(progress.machine, { id: useId(), ...props });
  const api = progress.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(progressRoot, className)}
        {...api?.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {label && <ProgressCircularLabel>{label}</ProgressCircularLabel>}
            <ProgressCircularCircle className={circleClass}>
              <ProgressCircularCircleTrack />
              <ProgressCircularCircleRange />
            </ProgressCircularCircle>
            {showValueText && <ProgressCircularValueText />}
            {children}
          </div>
        )}
      </Slot>
    </ApiContext.Provider>
  );
}

export function ProgressCircularLabel({
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

export function ProgressCircularValueText({
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

export function ProgressCircularCircle({
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

export function ProgressCircularCircleTrack({
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

export function ProgressCircularCircleRange({
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
import { ProgressCircularRoot } from "@/components/ui/progress-circular";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<ProgressCircularRoot
  defaultValue={42}
  label="Progress Circular"
  circleClass="max-w-48"
  showValueText
/>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
