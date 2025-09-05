import { Dialog as Sheet } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "@midoneui/core/utils/cn";
import { Box } from "@/components/ui/box";
import { X } from "lucide-react";
import {
  sheetTrigger,
  sheetBackdrop,
  sheetPositioner,
  sheetContent,
  sheetTitle,
  sheetDescription,
  sheetCloseTrigger,
} from "@midoneui/core/styles/sheet.styles";
import { Button } from "@/components/ui/button";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

export function SheetRoot({
  children,
  ...props
}: React.ComponentProps<typeof Sheet.Root>) {
  return <Sheet.Root {...props}>{children}</Sheet.Root>;
}

export function SheetTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Sheet.Trigger>) {
  return (
    <Sheet.Trigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(sheetTrigger, className)}>{children}</Button>
      ) : (
        children
      )}
    </Sheet.Trigger>
  );
}

export function SheetBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof Sheet.Backdrop>) {
  return <Sheet.Backdrop className={cn(sheetBackdrop, className)} {...props} />;
}

export function SheetPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Sheet.Positioner>) {
  return (
    <Sheet.Positioner className={cn(sheetPositioner, className)} {...props}>
      {children}
    </Sheet.Positioner>
  );
}

export function SheetContent({
  children,
  className,
  side = "right",
  ...props
}: React.ComponentProps<typeof Sheet.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <Portal>
      <SheetBackdrop />
      <SheetPositioner>
        <Sheet.Content asChild>
          <Box
            raised="double"
            data-side={side}
            className={cn(sheetContent, className)}
            {...props}
          >
            <div>{children}</div>
          </Box>
        </Sheet.Content>
      </SheetPositioner>
    </Portal>
  );
}

export function SheetTitle({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Sheet.Title>) {
  return (
    <Sheet.Title className={cn(sheetTitle, className)} {...props}>
      {children}
    </Sheet.Title>
  );
}

export function SheetDescription({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Sheet.Description>) {
  return (
    <Sheet.Description className={cn(sheetDescription, className)} {...props}>
      {children}
    </Sheet.Description>
  );
}

export function SheetCloseTrigger({
  children,
  className,
  filled,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<typeof Sheet.CloseTrigger> & ButtonVariants) {
  return !children ? (
    <Sheet.CloseTrigger asChild {...props}>
      <Button className={cn(sheetCloseTrigger, className)} {...props}>
        <X className="size-4" />
      </Button>
    </Sheet.CloseTrigger>
  ) : (
    <Sheet.CloseTrigger asChild {...props}>
      {asChild ? (
        children
      ) : (
        <Button
          className={cn(
            buttonVariants({ filled, variant, size, className }),
            className
          )}
        >
          {children}
        </Button>
      )}
    </Sheet.CloseTrigger>
  );
}
