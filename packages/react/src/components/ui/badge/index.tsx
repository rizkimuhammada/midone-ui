import { cn } from "@midoneui/core/utils/cn";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

function Badge({
  className,
  children,
  filled,
  variant,
  ...props
}: React.ComponentProps<"span"> & BadgeVariants) {
  return (
    <span
      {...props}
      className={cn(badgeVariants({ filled, variant, className }))}
    >
      {children}
    </span>
  );
}

export { Badge };
