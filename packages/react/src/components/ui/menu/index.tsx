import { Menu } from "@ark-ui/react/menu";
import { Portal } from "@ark-ui/react/portal";
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
} from "@midoneui/core/styles/menu.styles";

export function MenuRoot({
  children,
  ...props
}: React.ComponentProps<typeof Menu.Root>) {
  return <Menu.Root {...props}>{children}</Menu.Root>;
}

export function MenuTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Menu.Trigger>) {
  return (
    <Menu.Trigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(menuTrigger, className)}>
          {children}
          <MenuIndicator />
        </Button>
      ) : (
        children
      )}
    </Menu.Trigger>
  );
}

export function MenuIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Menu.Indicator>) {
  return (
    <Menu.Indicator className={cn(menuIndicator, className)} {...props}>
      {children ?? <ChevronDown />}
    </Menu.Indicator>
  );
}

export function MenuPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Menu.Positioner>) {
  return (
    <Portal>
      <Menu.Positioner className={cn(menuPositioner, className)} {...props}>
        {children}
      </Menu.Positioner>
    </Portal>
  );
}

export function MenuContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Menu.Content>) {
  return (
    <Menu.Content asChild>
      <Box raised="single" className={cn(menuContent, className)} {...props}>
        <div>{children}</div>
      </Box>
    </Menu.Content>
  );
}

export function MenuItem({
  children,
  shortcut,
  className,
  ...props
}: React.ComponentProps<typeof Menu.Item> & {
  shortcut?: string;
}) {
  return (
    <Menu.Item className={cn(menuItem, className)} {...props}>
      <div>{children}</div>
      <div>{shortcut}</div>
    </Menu.Item>
  );
}

export function MenuTriggerItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Menu.TriggerItem>) {
  return (
    <Menu.TriggerItem className={cn(menuItem, className)} {...props}>
      <div>{children}</div>
      <ChevronRight />
    </Menu.TriggerItem>
  );
}

export function MenuCheckboxItem({
  children,
  shortcut,
  className,
  ...props
}: React.ComponentProps<typeof Menu.CheckboxItem> & {
  shortcut?: string;
}) {
  return (
    <Menu.CheckboxItem className={cn(menuItem, className)} {...props}>
      <div>
        <Menu.ItemIndicator asChild>
          <Check />
        </Menu.ItemIndicator>
        {children}
      </div>
      <div>{shortcut}</div>
    </Menu.CheckboxItem>
  );
}

export function MenuRadioItemGroup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Menu.RadioItemGroup>) {
  return (
    <Menu.RadioItemGroup
      className={cn(menuRadioItemGroup, className)}
      {...props}
    >
      {children}
    </Menu.RadioItemGroup>
  );
}

export function MenuItemGroupLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Menu.ItemGroupLabel>) {
  return (
    <Menu.ItemGroupLabel
      className={cn(menuItemGroupLabel, className)}
      {...props}
    >
      {children}
    </Menu.ItemGroupLabel>
  );
}

export function MenuRadioItem({
  children,
  shortcut,
  className,
  ...props
}: React.ComponentProps<typeof Menu.RadioItem> & {
  shortcut?: string;
}) {
  return (
    <Menu.RadioItem className={cn(menuItem, className)} {...props}>
      <div>
        <Menu.ItemIndicator asChild>
          <Dot />
        </Menu.ItemIndicator>
        {children}
      </div>
      <div>{shortcut}</div>
    </Menu.RadioItem>
  );
}

export function MenuSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Menu.Separator>) {
  return <Menu.Separator className={cn(menuSeparator, className)} {...props} />;
}
