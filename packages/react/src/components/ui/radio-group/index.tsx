import { RadioGroup } from "@ark-ui/react/radio-group";
import { cn } from "@midoneui/core/utils/cn";
import {
  radioGroupRoot,
  radioGroupLabel,
  radioGroupIndicator,
  radioGroupItem,
  radioGroupItemText,
  radioGroupItemControl,
  radioGroupItemHiddenInput,
} from "@midoneui/core/styles/radio-group.styles";
import { label } from "@midoneui/core/styles/label.styles";
import { Dot } from "lucide-react";

export function RadioGroupRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup.Root>) {
  return (
    <RadioGroup.Root className={cn(radioGroupRoot, className)} {...props}>
      {children}
      <RadioGroupIndicator>
        <Dot />
      </RadioGroupIndicator>
    </RadioGroup.Root>
  );
}

export function RadioGroupLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup.Label>) {
  return (
    <RadioGroup.Label
      className={cn([label, radioGroupLabel, className])}
      {...props}
    >
      {children}
    </RadioGroup.Label>
  );
}

export function RadioGroupIndicator({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup.Indicator>) {
  return (
    <RadioGroup.Indicator
      className={cn(radioGroupIndicator, className)}
      {...props}
    />
  );
}

export function RadioGroupItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup.Item>) {
  return (
    <RadioGroup.Item className={cn(radioGroupItem, className)} {...props}>
      {children}
      <RadioGroupItemHiddenInput />
    </RadioGroup.Item>
  );
}

export function RadioGroupItemText({
  children,
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup.ItemText>) {
  return (
    <RadioGroup.ItemText
      className={cn(radioGroupItemText, className)}
      {...props}
    >
      {children}
    </RadioGroup.ItemText>
  );
}

export function RadioGroupItemControl({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup.ItemControl>) {
  return (
    <RadioGroup.ItemControl
      className={cn(radioGroupItemControl, className)}
      {...props}
    />
  );
}

export function RadioGroupItemHiddenInput({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup.ItemHiddenInput>) {
  return (
    <RadioGroup.ItemHiddenInput
      className={cn(radioGroupItemHiddenInput, className)}
      {...props}
    />
  );
}
