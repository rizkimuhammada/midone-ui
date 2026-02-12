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
  open = undefined,
  disabled = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(tooltip.machine, {
    positioning: {
      placement: "top",
      offset: { mainAxis: 10 },
    },
    closeDelay: 0,
    openDelay: 0,
    open,
    disabled,
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
        <Button
          variant="secondary"
          look="outline"
          className={cn(tooltipTrigger, className)}
        >
          {children}
        </Button>
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
