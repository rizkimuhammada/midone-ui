import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { cn } from "@midoneui/core/utils/cn";
import { Check, ChevronDownIcon } from "lucide-react";
import {
  selectRoot,
  selectLabel,
  selectControl,
  selectTrigger,
  selectValueText,
  selectIndicator,
  selectClearTrigger,
  selectPositioner,
  selectContent,
  selectItemGroup,
  selectItemGroupLabel,
  selectItem,
  selectItemText,
  selectItemIndicator,
  selectHiddenSelect,
} from "@midoneui/core/styles/select.styles";
import { createContext, useContext, useId } from "react";
import * as select from "@zag-js/select";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props, ItemGroupProps, ItemProps } from "@zag-js/select";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);
const ItemGroupContext = createContext<ItemGroupProps | undefined>(undefined);
const ItemContext = createContext<ItemProps | undefined>(undefined);

export function SelectRoot({
  children,
  className,
  multiple = false,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(select.machine, {
    multiple,
    ...props,
    id: useId(),
  });

  const api = select.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(selectRoot, className)}
        data-multiple={multiple}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children}
            <SelectHiddenSelect />
          </div>
        )}
      </Slot>
    </ApiContext.Provider>
  );
}

export function SelectLabel({
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
        <Label className={cn(selectLabel, className)}>{children}</Label>
      )}
    </Slot>
  );
}

export function SelectControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(selectControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SelectTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button className={cn(selectTrigger, className)}>
          {children}
          <SelectClearTrigger>Clear</SelectClearTrigger>
          <SelectIndicator />
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function SelectValueText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"input"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(selectValueText, className)}
      {...api?.getValueTextProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>{api?.valueAsString || props.placeholder}</div>
      )}
    </Slot>
  );
}

export function SelectIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(selectIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>{children ?? <ChevronDownIcon className="size-3.5" />}</div>
      )}
    </Slot>
  );
}

export function SelectClearTrigger({
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
        <span className={cn(selectClearTrigger, className)}>{children}</span>
      )}
    </Slot>
  );
}

export function SelectPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(selectPositioner, className)}
      {...api?.getPositionerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SelectContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <SelectPositioner>
        <Slot {...api?.getContentProps()} {...props}>
          {asChild ? (
            children
          ) : (
            <Box raised="single" className={cn(selectContent, className)}>
              <div>{children}</div>
            </Box>
          )}
        </Slot>
      </SelectPositioner>
    </Portal>
  );
}

export function SelectItemGroup({
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
        className={cn(selectItemGroup, className)}
        {...api?.getItemGroupProps(itemGroupId)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ItemGroupContext.Provider>
  );
}

export function SelectItemGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemGroupId = useContext(ItemGroupContext);

  return (
    <Slot
      className={cn(selectItemGroupLabel, className)}
      {...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      })}
      {...props}
    >
      {asChild ? children : <label>{children}</label>}
    </Slot>
  );
}

export function SelectItem({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & ItemProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <ItemContext.Provider value={props}>
      <Slot
        className={cn(selectItem, className)}
        {...api?.getItemProps(props)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children}
            <SelectItemIndicator />
          </div>
        )}
      </Slot>
    </ItemContext.Provider>
  );
}

export function SelectItemText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(selectItemText, className)}
      {...api?.getItemTextProps(item!)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SelectItemIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(selectItemIndicator, className)}
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

export function SelectHiddenSelect({
  className,
  ...props
}: React.ComponentProps<"select">) {
  const api = useContext(ApiContext);

  return (
    <select
      className={cn(selectHiddenSelect, className)}
      {...api?.getHiddenSelectProps()}
      {...props}
    />
  );
}
