import { Tooltip } from "@ark-ui/react/tooltip";
import { cn } from "@midoneui/core/utils/cn";
import {
  tooltipTrigger,
  tooltipPositioner,
  tooltipContent,
  tooltipArrow,
  tooltipArrowTip,
} from "@midoneui/core/styles/tooltip.styles";
import { Button } from "@/components/ui/button";

export function TooltipRoot({
  children,
  ...props
}: React.ComponentProps<typeof Tooltip.Root>) {
  return (
    <Tooltip.Root
      {...props}
      positioning={{
        placement: "top",
        offset: { mainAxis: 10 },
      }}
      closeDelay={0}
      openDelay={0}
    >
      {children}
    </Tooltip.Root>
  );
}

export function TooltipTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Tooltip.Trigger>) {
  return (
    <Tooltip.Trigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(tooltipTrigger, className)}>{children}</Button>
      ) : (
        children
      )}
    </Tooltip.Trigger>
  );
}

export function TooltipPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tooltip.Positioner>) {
  return (
    <Tooltip.Positioner className={cn(tooltipPositioner, className)} {...props}>
      {children}
    </Tooltip.Positioner>
  );
}

export function TooltipContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tooltip.Content>) {
  return (
    <Tooltip.Content className={cn(tooltipContent, className)} {...props}>
      {children}
      <TooltipArrow>
        <TooltipArrowTip />
      </TooltipArrow>
    </Tooltip.Content>
  );
}

export function TooltipArrow({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tooltip.Arrow>) {
  return (
    <Tooltip.Arrow className={cn(tooltipArrow, className)} {...props}>
      {children}
    </Tooltip.Arrow>
  );
}

export function TooltipArrowTip({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tooltip.ArrowTip>) {
  return (
    <Tooltip.ArrowTip className={cn(tooltipArrowTip, className)} {...props}>
      {children}
    </Tooltip.ArrowTip>
  );
}
