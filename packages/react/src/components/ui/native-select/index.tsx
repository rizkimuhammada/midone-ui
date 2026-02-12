import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";
import {
  nativeSelect,
  nativeSelectOption,
  NativeSelectOptGroup,
} from "@midoneui/core/styles/native-select.styles";

function NativeSelect({
  children,
  className,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select className={cn(input, nativeSelect, className)} {...props}>
      {children}
    </select>
  );
}

function NativeSelectOption({
  children,
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option className={cn(nativeSelectOption, className)} {...props}>
      {children}
    </option>
  );
}

function NativeSelectOptionGroup({
  children,
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup className={cn(NativeSelectOptGroup, className)} {...props}>
      {children}
    </optgroup>
  );
}

export { NativeSelect, NativeSelectOption, NativeSelectOptionGroup };
