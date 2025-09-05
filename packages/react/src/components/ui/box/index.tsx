import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";

export function Box({
  children,
  className,
  filled,
  variant,
  raised,
  ...props
}: React.ComponentProps<"div"> & BoxVariants) {
  return (
    <div
      className={cn(
        boxVariants({ filled, variant, raised, className }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
