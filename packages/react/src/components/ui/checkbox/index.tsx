import { Checkbox } from "@ark-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import { cn } from "@midoneui/core/utils/cn";
import {
  checkboxRoot,
  checkboxLabel,
  checkboxControl,
  checkboxIndicator,
  checkboxHiddenInput,
} from "@midoneui/core/styles/checkbox.styles";
import { label } from "@midoneui/core/styles/label.styles";

export function CheckboxRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Checkbox.Root>) {
  return (
    <Checkbox.Root {...props} className={cn(checkboxRoot, className)}>
      {children}
      <CheckboxHiddenInput />
    </Checkbox.Root>
  );
}

export function CheckboxLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Checkbox.Label>) {
  return (
    <Checkbox.Label
      className={cn([label, checkboxLabel, className])}
      {...props}
    >
      {children}
    </Checkbox.Label>
  );
}

export function CheckboxControl({
  className,
  ...props
}: React.ComponentProps<typeof Checkbox.Control>) {
  return (
    <Checkbox.Control className={cn(checkboxControl, className)} {...props}>
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </Checkbox.Control>
  );
}

export function CheckboxIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Checkbox.Indicator>) {
  return (
    <Checkbox.Indicator className={cn(checkboxIndicator, className)} {...props}>
      {children}
    </Checkbox.Indicator>
  );
}

export function CheckboxHiddenInput({
  className,
  ...props
}: React.ComponentProps<typeof Checkbox.HiddenInput>) {
  return (
    <Checkbox.HiddenInput
      className={cn(checkboxHiddenInput, className)}
      {...props}
    />
  );
}
