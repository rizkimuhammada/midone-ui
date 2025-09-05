import { cn } from "@midoneui/core/utils/cn";
import { textarea } from "@midoneui/core/styles/textarea.styles";

function Textarea({
  className,
  children,
  ...props
}: React.ComponentProps<"textarea">) {
  return <textarea className={cn(textarea, className)} {...props} />;
}

export { Textarea };
