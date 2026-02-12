import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

function Button({
  className,
  children,
  look,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ look, variant, size, className }),
        className
      )}
    >
      {children}
    </button>
  );
}

export { Button };
