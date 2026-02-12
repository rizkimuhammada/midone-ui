import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";

function Box({
  children,
  className,
  raised,
  ...props
}: React.ComponentProps<"div"> & BoxVariants) {
  return (
    <div
      className={cn(boxVariants({ raised, className }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Box };
