import { cn } from "@midoneui/core/utils/cn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDownIcon } from "lucide-react";
import { createContext, useContext, useId } from "react";
import {
  comboboxRoot,
  comboboxLabel,
  comboboxControl,
  comboboxInput,
  comboboxTrigger,
  comboboxClearTrigger,
  comboboxPositioner,
  comboboxContent,
  comboboxItemGroup,
  comboboxItemGroupLabel,
  comboboxItem,
  comboboxItemText,
  comboboxItemIndicator,
} from "@midoneui/core/styles/combobox.styles";
import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props, ItemGroupProps, ItemProps } from "@zag-js/combobox";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);
const ItemGroupContext = createContext<ItemGroupProps | undefined>(undefined);
const ItemContext = createContext<ItemProps | undefined>(undefined);

export function ComboboxRoot({
  children,
  className,
  multiple = false,
  selectionBehavior = "clear",
  value,
  asChild = false,
  onOpenChange,
  onInputValueChange,
  onValueChange,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(combobox.machine, {
    multiple,
    selectionBehavior,
    onOpenChange,
    onInputValueChange,
    onValueChange,
    ...props,
    id: useId(),
  });

  const api = combobox.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(comboboxRoot, className)}
        data-multiple={multiple}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function ComboboxLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getLabelProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Label className={cn(comboboxLabel, className)}>{children}</Label>
      )}
    </Slot>
  );
}

export function ComboboxControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(comboboxControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const api = useContext(ApiContext);

  return (
    <Input
      className={cn(comboboxInput, className)}
      {...api?.getInputProps()}
      {...props}
    />
  );
}

export function ComboboxTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button variant="ghost" className={cn(comboboxTrigger, className)}>
          <div>{api?.valueAsString || "Select Options..."}</div>
          <ComboboxClearTrigger>Clear</ComboboxClearTrigger>
          <ChevronsUpDownIcon />
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function ComboboxClearTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getClearTriggerProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <span className={cn(comboboxClearTrigger, className)}>{children}</span>
      )}
    </Slot>
  );
}

export function ComboboxPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(comboboxPositioner, className)}
      {...api?.getPositionerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function ComboboxContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <ComboboxPositioner>
        <Slot {...api?.getContentProps()} {...props}>
          {asChild ? (
            children
          ) : (
            <Box raised="single" className={cn(comboboxContent, className)}>
              <div>{children}</div>
            </Box>
          )}
        </Slot>
      </ComboboxPositioner>
    </Portal>
  );
}

export function ComboboxItemGroup({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemGroupId = { id: useId() };

  return (
    <ItemGroupContext.Provider value={itemGroupId}>
      <Slot
        className={cn(comboboxItemGroup, className)}
        {...api?.getItemGroupProps(itemGroupId)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ItemGroupContext.Provider>
  );
}

export function ComboboxItemGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemGroupId = useContext(ItemGroupContext);

  return (
    <Slot
      className={cn(comboboxItemGroupLabel, className)}
      {...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      })}
      {...props}
    >
      {asChild ? children : <label>{children}</label>}
    </Slot>
  );
}

export function ComboboxItem({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & ItemProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <ItemContext.Provider value={props}>
      <Slot
        className={cn(comboboxItem, className)}
        {...api?.getItemProps(props)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children}
            <ComboboxItemIndicator />
          </div>
        )}
      </Slot>
    </ItemContext.Provider>
  );
}

export function ComboboxItemText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(comboboxItemText, className)}
      {...api?.getItemTextProps(item!)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function ComboboxItemIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(comboboxItemIndicator, className)}
      {...api?.getItemIndicatorProps(item!)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>{children ?? <Check className="size-3.5" />}</div>
      )}
    </Slot>
  );
}
