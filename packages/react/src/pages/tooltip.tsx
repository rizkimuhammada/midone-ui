import { MoveUpRight } from "lucide-react";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from "@/components/ui/tooltip";
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
            <Title>Tooltip</Title>
            <Subtitle>
              A tiny message that appears when users hover or focus on an
              element to explain what it does.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/tooltip"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/tooltip#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <TooltipRoot>
                      <TooltipTrigger>Hover Me</TooltipTrigger>
                      <TooltipPositioner>
                        <TooltipContent>I am a tooltip!</TooltipContent>
                      </TooltipPositioner>
                    </TooltipRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<TooltipRoot>
  <TooltipTrigger>Hover Me</TooltipTrigger>
  <TooltipPositioner>
    <TooltipContent>I am a tooltip!</TooltipContent>
  </TooltipPositioner>
</TooltipRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/react @zag-js/tooltip</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/tooltip/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import {
  tooltipTrigger,
  tooltipPositioner,
  tooltipContent,
  tooltipArrow,
  tooltipArrowTip,
} from "@midoneui/core/styles/tooltip.styles";
import { createContext, useContext, useId } from "react";
import { Button } from "@/components/ui/button";
import * as tooltip from "@zag-js/tooltip";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props } from "@zag-js/tooltip";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function TooltipRoot({
  children,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(tooltip.machine, {
    positioning: {
      placement: "top",
      offset: { mainAxis: 10 },
    },
    closeDelay: 0,
    openDelay: 0,
    ...props,
    id: useId(),
  });
  const api = tooltip.connect(service, normalizeProps);

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export function TooltipTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button className={cn(tooltipTrigger, className)}>{children}</Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function TooltipPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tooltipPositioner, className)}
      {...api?.getPositionerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function TooltipContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tooltipContent, className)}
      {...api?.getContentProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          {children}
          <TooltipArrow>
            <TooltipArrowTip />
          </TooltipArrow>
        </div>
      )}
    </Slot>
  );
}

export function TooltipArrow({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tooltipArrow, className)}
      {...api?.getArrowProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function TooltipArrowTip({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tooltipArrowTip, className)}
      {...api?.getArrowTipProps()}
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
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
  TooltipContent,
} from "@/components/ui/tooltip";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<TooltipRoot>
  <TooltipTrigger>Hover Me</TooltipTrigger>
  <TooltipPositioner>
    <TooltipContent>I am a tooltip!</TooltipContent>
  </TooltipPositioner>
</TooltipRoot>
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
