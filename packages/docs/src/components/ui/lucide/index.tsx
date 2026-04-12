import * as lucideIcons from "lucide-react";
import { cn } from "@midoneui/core/utils/cn";

export type Icon = keyof typeof lucideIcons;

export interface LucideProps extends React.ComponentPropsWithoutRef<"svg"> {
  icon: Icon;
}

export function Lucide({ icon, className, ...props }: LucideProps) {
  const IconComponent = lucideIcons[icon] as React.ElementType;

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={cn(
        "size-4 stroke-[1.5] [--color:currentColor] stroke-(--color) fill-(--color)/25",
        className
      )}
      {...props}
    />
  );
}
