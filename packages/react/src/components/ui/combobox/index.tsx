import { Portal } from "@ark-ui/react/portal";
import { Combobox } from "@ark-ui/react/combobox";
import { cn } from "@midoneui/core/utils/cn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDownIcon } from "lucide-react";
import { createContext, useContext } from "react";
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

const ValueContext = createContext<string[] | undefined>(undefined);

export function ComboboxRoot({
  children,
  className,
  multiple,
  value,
  ...props
}: React.ComponentProps<typeof Combobox.Root<string>>) {
  return (
    <ValueContext.Provider value={value}>
      <Combobox.Root
        selectionBehavior="clear"
        className={cn(comboboxRoot, className)}
        multiple={multiple}
        data-multiple={multiple}
        {...props}
      >
        {children}
      </Combobox.Root>
    </ValueContext.Provider>
  );
}

export function ComboboxLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.Label>) {
  return (
    <Combobox.Label asChild {...props}>
      <Label className={cn(comboboxLabel, className)}>{children}</Label>
    </Combobox.Label>
  );
}

export function ComboboxControl({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.Control>) {
  return (
    <Combobox.Control className={cn(comboboxControl, className)} {...props}>
      {children}
    </Combobox.Control>
  );
}

export function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof Combobox.Input>) {
  return (
    <Combobox.Input asChild {...props}>
      <Input className={cn(comboboxInput, className)} />
    </Combobox.Input>
  );
}

export function ComboboxTrigger({
  children,
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Combobox.Trigger>) {
  const value = useContext(ValueContext);

  return (
    <Combobox.Trigger asChild {...props}>
      {!asChild ? (
        <Button className={cn(comboboxTrigger, className)}>
          <div>
            {value && value[0].length
              ? value.length > 1
                ? value.join(", ")
                : value
              : "Select Options..."}{" "}
          </div>
          <ComboboxClearTrigger>Clear</ComboboxClearTrigger>
          <ChevronsUpDownIcon />
        </Button>
      ) : (
        children
      )}
    </Combobox.Trigger>
  );
}

export function ComboboxClearTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.ClearTrigger>) {
  return (
    <Combobox.ClearTrigger asChild {...props}>
      <span className={cn(comboboxClearTrigger, className)}>{children}</span>
    </Combobox.ClearTrigger>
  );
}

export function ComboboxPositioner({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.Positioner>) {
  return (
    <Combobox.Positioner
      className={cn(comboboxPositioner, className)}
      {...props}
    >
      {children}
    </Combobox.Positioner>
  );
}

export function ComboboxContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.Content>) {
  return (
    <Portal>
      <ComboboxPositioner>
        <Combobox.Content {...props}>
          <Box
            raised="single"
            className={cn(comboboxContent, className)}
            {...props}
          >
            <div>{children}</div>
          </Box>
        </Combobox.Content>
      </ComboboxPositioner>
    </Portal>
  );
}

export function ComboboxItemGroup({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.ItemGroup>) {
  return (
    <Combobox.ItemGroup className={cn(comboboxItemGroup, className)} {...props}>
      {children}
    </Combobox.ItemGroup>
  );
}

export function ComboboxItemGroupLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.ItemGroupLabel>) {
  return (
    <Combobox.ItemGroupLabel
      className={cn(comboboxItemGroupLabel, className)}
      {...props}
    >
      {children}
    </Combobox.ItemGroupLabel>
  );
}

export function ComboboxItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.Item>) {
  return (
    <Combobox.Item className={cn(comboboxItem, className)} {...props}>
      {children}
    </Combobox.Item>
  );
}

export function ComboboxItemText({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.ItemText>) {
  return (
    <Combobox.ItemText className={cn(comboboxItemText, className)} {...props}>
      {children}
    </Combobox.ItemText>
  );
}

export function ComboboxItemIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Combobox.ItemIndicator>) {
  return (
    <Combobox.ItemIndicator
      className={cn(comboboxItemIndicator, className)}
      {...props}
    >
      {children ?? <Check className="size-3.5" />}
    </Combobox.ItemIndicator>
  );
}
