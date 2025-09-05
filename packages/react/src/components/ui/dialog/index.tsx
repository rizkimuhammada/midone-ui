import { Dialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { cn } from "@midoneui/core/utils/cn";
import { Box } from "@/components/ui/box";
import { X } from "lucide-react";
import {
  dialogTrigger,
  dialogBackdrop,
  dialogPositioner,
  dialogContent,
  dialogTitle,
  dialogDescription,
  dialogCloseTrigger,
} from "@midoneui/core/styles/dialog.styles";
import { Button } from "@/components/ui/button";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

export function DialogRoot({
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>;
}

export function DialogTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Dialog.Trigger>) {
  return (
    <Dialog.Trigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(dialogTrigger, className)}>{children}</Button>
      ) : (
        children
      )}
    </Dialog.Trigger>
  );
}

export function DialogBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Backdrop>) {
  return (
    <Dialog.Backdrop className={cn(dialogBackdrop, className)} {...props} />
  );
}

export function DialogPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Positioner>) {
  return (
    <Dialog.Positioner className={cn(dialogPositioner, className)} {...props}>
      {children}
    </Dialog.Positioner>
  );
}

export function DialogContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Content>) {
  return (
    <Portal>
      <DialogBackdrop />
      <DialogPositioner>
        <Dialog.Content asChild>
          <Box
            raised="double"
            className={cn(dialogContent, className)}
            {...props}
          >
            <div>{children}</div>
          </Box>
        </Dialog.Content>
      </DialogPositioner>
    </Portal>
  );
}

export function DialogTitle({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title className={cn(dialogTitle, className)} {...props}>
      {children}
    </Dialog.Title>
  );
}

export function DialogDescription({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Description>) {
  return (
    <Dialog.Description className={cn(dialogDescription, className)} {...props}>
      {children}
    </Dialog.Description>
  );
}

export function DialogCloseTrigger({
  children,
  className,
  filled,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<typeof Dialog.CloseTrigger> & ButtonVariants) {
  return !children ? (
    <Dialog.CloseTrigger asChild {...props}>
      <Button className={cn(dialogCloseTrigger, className)} {...props}>
        <X className="size-4" />
      </Button>
    </Dialog.CloseTrigger>
  ) : (
    <Dialog.CloseTrigger asChild {...props}>
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
    </Dialog.CloseTrigger>
  );
}
