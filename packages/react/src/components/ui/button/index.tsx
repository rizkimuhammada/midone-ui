import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

function Button({
  className,
  children,
  filled,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ filled, variant, size, className }),
        className
      )}
    >
      {children}
    </button>
  );
}

export { Button };
