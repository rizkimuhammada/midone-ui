import { MoveUpRight } from "lucide-react";
import {
  ProgressRoot,
  ProgressLabel,
  ProgressValueText,
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleRange,
} from "@/components/ui/progress-circular";
import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
  ApiButton,
} from "@/components/docs";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Progress Circular</Title>
            <Subtitle>
              A spinning indicator that shows something is loading or being
              processed behind the scenes.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/progress"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/progress#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <ProgressRoot defaultValue={42}>
                      <ProgressLabel>Progress Circular</ProgressLabel>
                      <ProgressCircle className="max-w-48">
                        <ProgressCircleTrack />
                        <ProgressCircleRange />
                      </ProgressCircle>
                      <ProgressValueText />
                    </ProgressRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<ProgressRoot defaultValue={42}>
  <ProgressLabel>Progress Circular</ProgressLabel>
  <ProgressCircle className="max-w-48">
    <ProgressCircleTrack />
    <ProgressCircleRange />
  </ProgressCircle>
  <ProgressValueText />
</ProgressRoot>
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
  ProgressRoot,
  ProgressLabel,
  ProgressValueText,
  ProgressCircle,
  ProgressCircleTrack,
  ProgressCircleRange,
} from "@/components/ui/progress-circular";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<ProgressRoot defaultValue={42}>
  <ProgressLabel>Progress Circular</ProgressLabel>
  <ProgressCircle className="max-w-48">
    <ProgressCircleTrack />
    <ProgressCircleRange />
  </ProgressCircle>
  <ProgressValueText />
</ProgressRoot>
              `}
            </PreviewCode>
          </div>
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1.5" href="#installation">
          Installation
        </a>
        <a className="hover:text-foreground py-1.5" href="#usage">
          Usage
        </a>
      </Menu>
    </>
  );
}

export default Main;
