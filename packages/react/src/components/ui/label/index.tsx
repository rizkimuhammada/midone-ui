import { cn } from "@midoneui/core/utils/cn";
import { label } from "@midoneui/core/styles/label.styles";

function Label({
  className,
  children,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label {...props} className={cn(label, className)}>
      {children}
    </label>
  );
}

export { Label };
