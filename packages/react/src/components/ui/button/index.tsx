import { cn } from "@/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import { Slot } from "@/components/ui/slot";

function Button({
  className,
  children,
  look,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  return (
    <Slot
      {...props}
      className={cn(buttonVariants({ look, variant, size }), className)}
    >
      {asChild ? children : <button>{children}</button>}
    </Slot>
  );
}

export { Button };
