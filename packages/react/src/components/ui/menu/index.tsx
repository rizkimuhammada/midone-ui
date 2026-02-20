import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronDown, ChevronRight, Check, Dot } from "lucide-react";
import {
  menuTrigger,
  menuIndicator,
  menuPositioner,
  menuContent,
  menuItem,
  menuSeparator,
  menuRadioItemGroup,
  menuItemGroupLabel,
  menuRoot,
} from "@midoneui/core/styles/menu.styles";
import * as menu from "@zag-js/menu";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props, OptionItemProps, ItemProps } from "@zag-js/menu";
import { Slot } from "@/components/ui/slot";
import { createContext, useContext, useId } from "react";

const ApiContext = createContext<Api | null>(null);

export function MenuRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(menu.machine, { ...props, id: useId() });
  const api = menu.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot className={cn(menuRoot, className)} {...props}>
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function MenuTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button variant="ghost" className={cn(menuTrigger, className)}>
          {children}
          <MenuIndicator />
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function MenuIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {children ?? <ChevronDown />}
    </Slot>
  );
}

export function MenuPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <Slot
        className={cn(menuPositioner, className)}
        {...api?.getPositionerProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </Portal>
  );
}

export function MenuContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuContent, className)}
      {...api?.getContentProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <Box raised="single" className={cn(menuContent, className)}>
          <div>{children}</div>
        </Box>
      )}
    </Slot>
  );
}

export function MenuItem({
  children,
  shortcut,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  ItemProps & {
    shortcut?: string;
    asChild?: boolean;
  }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuItem, className)}
      {...api?.getItemProps(props)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          <div>{children}</div>
          <div>{shortcut}</div>
        </div>
      )}
    </Slot>
  );
}

export function MenuTriggerItem({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuItem, className)}
      {...api?.getTriggerItemProps(api)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          <div>{children}</div>
          <ChevronRight data-part="nested-menu-chevron" />
        </div>
      )}
    </Slot>
  );
}

export function MenuCheckboxItem({
  children,
  shortcut,
  className,
  asChild = false,
  type = "checkbox",
  ...props
}: React.ComponentProps<"div"> &
  Omit<OptionItemProps, "type"> & {
    asChild?: boolean;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(menuItem, className)}
      {...api?.getOptionItemProps({
        ...props,
        type,
      })}
      {...props}
    >
      <div>
        <span data-part="item-indicator" {...api?.getItemIndicatorProps(props)}>
          <Check />
        </span>
        {children}
      </div>
      <div>{shortcut}</div>
    </div>
  );
}

export function MenuRadioItemGroup({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  return (
    <Slot className={cn(menuRadioItemGroup, className)} {...props}>
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function MenuItemGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  return (
    <Slot className={cn(menuItemGroupLabel, className)} {...props}>
      {asChild ? children : <label>{children}</label>}
    </Slot>
  );
}

export function MenuRadioItem({
  children,
  shortcut,
  className,
  type = "radio",
  ...props
}: React.ComponentProps<"div"> &
  Omit<OptionItemProps, "type"> & {
    asChild?: boolean;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(menuItem, className)}
      {...api?.getOptionItemProps({
        ...props,
        type,
      })}
      {...props}
    >
      <div>
        <span data-part="item-indicator" {...api?.getItemIndicatorProps(props)}>
          <Dot />
        </span>
        {children}
      </div>
      <div>{shortcut}</div>
    </div>
  );
}

export function MenuSeparator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"hr"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuSeparator, className)}
      {...api?.getSeparatorProps()}
      {...props}
    >
      {asChild ? children : <hr>{children}</hr>}
    </Slot>
  );
}
