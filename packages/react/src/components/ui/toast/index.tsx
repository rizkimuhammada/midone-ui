import { Toast, Toaster, createToaster } from "@ark-ui/react/toast";
import { cn } from "@midoneui/core/utils/cn";
import {
  toastRoot,
  toastTitle,
  toastDescription,
  toastCloseTrigger,
  toasterContainer,
} from "@midoneui/core/styles/toast.styles";
import { Button } from "@/components/ui/button";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { X } from "lucide-react";

export const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24,
});

export function ToastRoot({
  children,
  className,
  filled,
  variant,
  raised = "single",
  ...props
}: React.ComponentProps<typeof Toast.Root> & BoxVariants) {
  return (
    <Toast.Root
      className={cn([
        boxVariants({ filled, variant, raised, className }),
        toastRoot,
        className,
      ])}
      {...props}
    >
      {children}
    </Toast.Root>
  );
}

export function ToastTitle({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Toast.Title>) {
  return (
    <Toast.Title className={cn(toastTitle, className)} {...props}>
      {children}
    </Toast.Title>
  );
}

export function ToastDescription({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Toast.Description>) {
  return (
    <Toast.Description className={cn(toastDescription, className)} {...props}>
      {children}
    </Toast.Description>
  );
}

export function ToastCloseTrigger({
  children,
  className,
  filled,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<typeof Toast.CloseTrigger> & ButtonVariants) {
  return !children ? (
    <Toast.CloseTrigger asChild {...props}>
      <Button className={cn(toastCloseTrigger, className)} {...props}>
        <X className="size-4" />
      </Button>
    </Toast.CloseTrigger>
  ) : (
    <Toast.CloseTrigger asChild {...props}>
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
    </Toast.CloseTrigger>
  );
}

export function ToasterContainer({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Toaster>) {
  return (
    <Toaster className={cn(toasterContainer, className)} {...props}>
      {children}
    </Toaster>
  );
}
