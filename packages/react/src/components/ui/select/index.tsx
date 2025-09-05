import { Portal } from "@ark-ui/react/portal";
import { Select } from "@ark-ui/react/select";
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

export function SelectRoot({
  children,
  className,
  multiple,
  ...props
}: React.ComponentProps<typeof Select.Root<string>>) {
  return (
    <Select.Root
      className={cn(selectRoot, className)}
      multiple={multiple}
      data-multiple={multiple}
      {...props}
    >
      {children}
      <SelectHiddenSelect />
    </Select.Root>
  );
}

export function SelectLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.Label>) {
  return (
    <Select.Label {...props}>
      <Label className={cn(selectLabel, className)}>{children}</Label>
    </Select.Label>
  );
}

export function SelectControl({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.Control>) {
  return (
    <Select.Control className={cn(selectControl, className)} {...props}>
      {children}
    </Select.Control>
  );
}

export function SelectTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Select.Trigger>) {
  return (
    <Select.Trigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(selectTrigger, className)}>
          {children}
          <SelectClearTrigger>Clear</SelectClearTrigger>
          <SelectIndicator>
            <ChevronDownIcon />
          </SelectIndicator>
        </Button>
      ) : (
        children
      )}
    </Select.Trigger>
  );
}

export function SelectValueText({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.ValueText>) {
  return (
    <Select.ValueText className={cn(selectValueText, className)} {...props}>
      {children}
    </Select.ValueText>
  );
}

export function SelectIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.Indicator>) {
  return (
    <Select.Indicator className={cn(selectIndicator, className)} {...props}>
      {children}
    </Select.Indicator>
  );
}

export function SelectClearTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.ClearTrigger>) {
  return (
    <Select.ClearTrigger asChild {...props}>
      <span className={cn(selectClearTrigger, className)}>{children}</span>
    </Select.ClearTrigger>
  );
}

export function SelectPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.Positioner>) {
  return (
    <Select.Positioner className={cn(selectPositioner, className)} {...props}>
      {children}
    </Select.Positioner>
  );
}

export function SelectContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.Content>) {
  return (
    <Portal>
      <SelectPositioner>
        <Select.Content {...props}>
          <Box
            raised="single"
            className={cn(selectContent, className)}
            {...props}
          >
            <div>{children}</div>
          </Box>
        </Select.Content>
      </SelectPositioner>
    </Portal>
  );
}

export function SelectItemGroup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.ItemGroup>) {
  return (
    <Select.ItemGroup className={cn(selectItemGroup, className)} {...props}>
      {children}
    </Select.ItemGroup>
  );
}

export function SelectItemGroupLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.ItemGroupLabel>) {
  return (
    <Select.ItemGroupLabel
      className={cn(selectItemGroupLabel, className)}
      {...props}
    >
      {children}
    </Select.ItemGroupLabel>
  );
}

export function SelectItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.Item>) {
  return (
    <Select.Item className={cn(selectItem, className)} {...props}>
      {children}
      <SelectItemIndicator />
    </Select.Item>
  );
}

export function SelectItemText({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.ItemText>) {
  return (
    <Select.ItemText className={cn(selectItemText, className)} {...props}>
      {children}
    </Select.ItemText>
  );
}

export function SelectItemIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Select.ItemIndicator>) {
  return (
    <Select.ItemIndicator
      className={cn(selectItemIndicator, className)}
      {...props}
    >
      {children ?? <Check className="size-3.5" />}
    </Select.ItemIndicator>
  );
}

export function SelectHiddenSelect({
  className,
  ...props
}: React.ComponentProps<typeof Select.HiddenSelect>) {
  return (
    <Select.HiddenSelect
      className={cn(selectHiddenSelect, className)}
      {...props}
    />
  );
}
