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
import * as toast from "@zag-js/toast";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Store } from "@zag-js/toast";
import { Slot } from "@/components/ui/slot";
import { createContext, useContext, useId } from "react";

const ApiContext = createContext<Api | null>(null);

export const toaster = toast.createStore({
  placement: "bottom-end",
  overlap: true,
  gap: 24,
});

export function ToastRoot({
  children,
  className,
  asChild = false,
  filled,
  variant,
  raised = "single",
  ...props
}: React.ComponentProps<"div"> & BoxVariants & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn([
        boxVariants({ filled, variant, raised, className }),
        toastRoot,
        className,
      ])}
      {...api?.getRootProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          <span {...api?.getGhostBeforeProps()} />
          <div data-scope="toast" data-part="progressbar" />
          {children}
          <span {...api?.getGhostAfterProps()} />
        </div>
      )}
    </Slot>
  );
}

export function ToastTitle({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(toastTitle, className)}
      {...api?.getTitleProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function ToastDescription({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(toastDescription, className)}
      {...api?.getDescriptionProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
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
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getCloseTriggerProps()} {...props}>
      {!children ? (
        <Button className={cn(toastCloseTrigger, className)} {...props}>
          <X className="size-4" />
        </Button>
      ) : asChild ? (
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
    </Slot>
  );
}

export function ToastItem({
  toastGroup,
  serviceGroup,
  index,
  children,
}: {
  toastGroup: toast.Options<React.ReactNode>;
  serviceGroup: toast.GroupService;
  index: number;
  children: (api: Api & { id?: string }) => React.ReactNode;
}) {
  const composedProps = { ...toastGroup, index, parent: serviceGroup };
  const service = useMachine(toast.machine, composedProps);
  const api = toast.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      {children({
        ...api,
        id: toastGroup.id,
      })}
    </ApiContext.Provider>
  );
}

export function ToasterContainer({
  className,
  children,
  toaster,
}: {
  className?: string;
  children: (api: Api & { id?: string }) => React.ReactNode;
  toaster: Store;
}) {
  const serviceGroup = useMachine(toast.group.machine, {
    id: useId(),
    store: toaster,
  });
  const apiGroup = toast.group.connect(serviceGroup, normalizeProps);

  return (
    <Portal>
      <div
        className={cn(toasterContainer, className)}
        {...apiGroup.getGroupProps()}
      >
        {apiGroup.getToasts().map((toastGroup, index) => {
          return (
            <ToastItem
              key={toastGroup.id}
              index={index}
              toastGroup={toastGroup}
              serviceGroup={serviceGroup}
            >
              {children}
            </ToastItem>
          );
        })}
      </div>
    </Portal>
  );
}
