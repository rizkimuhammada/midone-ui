import { Popover } from "@ark-ui/react/popover";
import { cn } from "@midoneui/core/utils/cn";
import { ChevronDown } from "lucide-react";
import {
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
import { Box } from "@/components/ui/box";

export function PopoverRoot({
  children,
  ...props
}: React.ComponentProps<typeof Popover.Root>) {
  return <Popover.Root {...props}>{children}</Popover.Root>;
}

export function PopoverTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Popover.Trigger>) {
  return (
    <Popover.Trigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(popoverTrigger, className)}>
          {children}
          <PopoverIndicator />
        </Button>
      ) : (
        children
      )}
    </Popover.Trigger>
  );
}

export function PopoverIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Popover.Indicator>) {
  return (
    <Popover.Indicator className={cn(popoverIndicator, className)} {...props}>
      {children ?? <ChevronDown />}
    </Popover.Indicator>
  );
}

export function PopoverPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Popover.Positioner>) {
  return (
    <Popover.Positioner className={cn(popoverPositioner, className)} {...props}>
      {children}
    </Popover.Positioner>
  );
}

export function PopoverContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Popover.Content>) {
  return (
    <Popover.Content asChild {...props}>
      <Box className={cn(popoverContent, className)}>
        {children}
        <PopoverArrow>
          <PopoverArrowTip />
        </PopoverArrow>
      </Box>
    </Popover.Content>
  );
}

export function PopoverArrow({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Popover.Arrow>) {
  return (
    <Popover.Arrow className={cn(popoverArrow, className)} {...props}>
      {children}
    </Popover.Arrow>
  );
}

export function PopoverArrowTip({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Popover.ArrowTip>) {
  return (
    <Popover.ArrowTip className={cn(popoverArrowTip, className)} {...props}>
      {children}
    </Popover.ArrowTip>
  );
}

export function PopoverTitle({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Popover.Title>) {
  return (
    <Popover.Title className={cn(popoverTitle, className)} {...props}>
      {children}
    </Popover.Title>
  );
}

export function PopoverDescription({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Popover.Description>) {
  return (
    <Popover.Description
      className={cn(popoverDescription, className)}
      {...props}
    >
      {children}
    </Popover.Description>
  );
}

export function PopoverCloseTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Popover.CloseTrigger>) {
  return (
    <Popover.CloseTrigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(popoverCloseTrigger, className)}>
          {children ?? "Close"}
        </Button>
      ) : (
        children
      )}
    </Popover.CloseTrigger>
  );
}
