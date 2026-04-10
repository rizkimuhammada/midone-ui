import { cn } from "@midoneui/core/utils/cn";
import { separator } from "@midoneui/core/styles/separator.styles";

export function Separator({
    className,
    orientation = "horizontal",
    decorative = true,
    ...props
}: React.ComponentProps<"div"> & {
    orientation?: "vertical" | "horizontal" | "responsive";
    decorative?: boolean;
}) {
    return (
        <div
            data-part="separator"
            data-decorative={decorative}
            data-orientation={orientation}
            className={cn(separator, className)}
            {...props}
        />
    );
}
