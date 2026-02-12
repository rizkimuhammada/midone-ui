import { cn } from "@midoneui/core/utils/cn";
import { ChevronDown } from "lucide-react";
import {
  popoverRoot,
  popoverTrigger,
  popoverPositioner,
  popoverContent,
  popoverArrow,
  popoverArrowTip,
  popoverTitle,
  popoverDescription,
  popoverIndicator,
  popoverCloseTrigger,
} from "@midoneui/core/styles/popover.styles";
import { Button } from "@/components/ui/button";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import { Box } from "@/components/ui/box";
import * as popover from "@zag-js/popover";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props } from "@zag-js/popover";
import { Slot } from "@/components/ui/slot";
import { createContext, useContext, useId } from "react";

const ApiContext = createContext<Api | null>(null);

export function PopoverRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(popover.machine, {
    ...props,
    id: useId(),
  });

  const api = popover.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot className={cn(popoverRoot, className)} {...props}>
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function PopoverTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button variant="ghost" className={cn(popoverTrigger, className)}>
          {children}
          <PopoverIndicator />
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function PopoverIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(popoverIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {children ?? <ChevronDown />}
    </Slot>
  );
}

export function PopoverPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <Slot
        className={cn(popoverPositioner, className)}
        {...api?.getPositionerProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </Portal>
  );
}

export function PopoverContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(popoverContent, className)}
      {...api?.getContentProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <Box raised="single" className={cn(popoverContent, className)}>
          <div>{children}</div>
          <PopoverArrow>
            <PopoverArrowTip />
          </PopoverArrow>
        </Box>
      )}
    </Slot>
  );
}

export function PopoverArrow({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(popoverArrow, className)}
      {...api?.getArrowProps()}
      {...props}
    >
      {children}
    </div>
  );
}

export function PopoverArrowTip({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(popoverArrowTip, className)}
      {...api?.getArrowTipProps()}
      {...props}
    >
      {children}
    </div>
  );
}

export function PopoverTitle({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(popoverTitle, className)}
      {...api?.getTitleProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function PopoverDescription({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(popoverDescription, className)}
      {...api?.getDescriptionProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function PopoverCloseTrigger({
  children,
  className,
  look = "outline",
  variant = "secondary",
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getCloseTriggerProps()} {...props}>
      {!children ? (
        <Button
          variant="ghost"
          className={cn(popoverCloseTrigger, className)}
          {...props}
        >
          Close
        </Button>
      ) : asChild ? (
        children
      ) : (
        <Button
          className={cn(
            buttonVariants({ look, variant, size, className }),
            className
          )}
        >
          {children}
        </Button>
      )}
    </Slot>
  );
}
