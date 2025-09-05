import { Switch } from "@ark-ui/react/switch";
import { cn } from "@midoneui/core/utils/cn";
import {
  switchRoot,
  switchControl,
  switchThumb,
  switchLabel,
  switchHiddenInput,
} from "@midoneui/core/styles/switch.styles";
import { label } from "@midoneui/core/styles/label.styles";

export function SwitchRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Switch.Root>) {
  return (
    <Switch.Root className={cn(switchRoot, className)} {...props}>
      {children}
      <SwitchHiddenInput />
    </Switch.Root>
  );
}

export function SwitchControl({
  className,
  ...props
}: React.ComponentProps<typeof Switch.Control>) {
  return (
    <Switch.Control className={cn(switchControl, className)} {...props}>
      <SwitchThumb />
    </Switch.Control>
  );
}

export function SwitchThumb({
  className,
  ...props
}: React.ComponentProps<typeof Switch.Thumb>) {
  return <Switch.Thumb className={cn(switchThumb, className)} {...props} />;
}

export function SwitchLabel({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Switch.Label>) {
  return (
    <Switch.Label className={cn([label, switchLabel, className])} {...props}>
      {children}
    </Switch.Label>
  );
}

export function SwitchHiddenInput({
  className,
  ...props
}: React.ComponentProps<typeof Switch.HiddenInput>) {
  return (
    <Switch.HiddenInput
      className={cn(switchHiddenInput, className)}
      {...props}
    />
  );
}
