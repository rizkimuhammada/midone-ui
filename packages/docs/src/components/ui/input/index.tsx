import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";

function Input({
  className,
  children,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return <input type={type} className={cn(input, className)} {...props} />;
}

export { Input };
