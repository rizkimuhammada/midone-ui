import { cn } from "@midoneui/core/utils/cn";
import {
  fileIconRoot,
  fileIconIcon,
  fileIconLabel,
  fileIconImage,
  fileIconImg,
  type FileIconVariants,
} from "@midoneui/core/styles/file-icon.styles";
import { Slot } from "@/components/ui/slot";

export interface FileIconProps
  extends React.ComponentPropsWithoutRef<"div">,
    FileIconVariants {
  asChild?: boolean;
  type?: string;
  src?: string;
}

export function FileIcon({
  className,
  variant,
  type,
  src,
  asChild = false,
  ...props
}: FileIconProps) {
  return (
    <Slot
      className={cn(fileIconRoot, className)}
      data-scope="file-icon"
      data-part="root"
      {...props}
    >
      {asChild ? (
        props.children
      ) : (
        <div>
          <div
            className={cn(fileIconIcon({ variant }))}
            data-scope="file-icon"
            data-part="icon"
          >
            {variant === "file" && (
              <div
                className={cn(fileIconLabel)}
                data-scope="file-icon"
                data-part="label"
              >
                {type}
              </div>
            )}
            {variant === "image" && (
              <div
                className={cn(fileIconImage)}
                data-scope="file-icon"
                data-part="image"
              >
                <img
                  className={cn(fileIconImg)}
                  src={src}
                  alt={variant}
                  data-scope="file-icon"
                  data-part="img"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </Slot>
  );
}
