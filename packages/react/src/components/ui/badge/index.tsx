import { cn } from "@midoneui/core/utils/cn";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

function Badge({
  className,
  children,
  look,
  variant,
  content,
  ...props
}: React.ComponentProps<"span"> &
  BadgeVariants & {
    content?: string;
  }) {
  return (
    <TooltipRoot disabled={!content}>
      <TooltipTrigger asChild>
        <span
          {...props}
          className={cn(badgeVariants({ look, variant }), className)}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent>{content}</TooltipContent>
    </TooltipRoot>
  );
}

export { Badge };
