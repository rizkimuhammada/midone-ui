import { cn } from "@midoneui/core/utils/cn";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPositioner,
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
      <TooltipTrigger as-child>
        <span
          {...props}
          className={cn(badgeVariants({ look, variant, className }))}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>{content}</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
}

export { Badge };
