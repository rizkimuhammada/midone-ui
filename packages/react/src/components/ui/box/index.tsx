import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { Slot } from "@/components/ui/slot";

function Box({
  children,
  className,
  raised,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & BoxVariants & { asChild?: boolean }) {
  return (
    <Slot
      className={cn(boxVariants({ raised, className }), className)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export { Box };
