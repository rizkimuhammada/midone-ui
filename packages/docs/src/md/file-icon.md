# File Icon

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<FileIcon variant="empty-directory" className="w-16" />
```

## Dependency

No external dependencies.

## Component

```tsx
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
```

## Usage

```tsx
import { FileIcon } from "@/components/ui/file-icon";
```

```tsx
<FileIcon variant="empty-directory" className="w-16" />
```

## Examples

### Example 1

```tsx
<FileIcon variant="empty-directory" className="w-16" />
```

### Example 2

```tsx
<FileIcon variant="directory" className="w-16" />
```

### Example 3

```tsx
<FileIcon variant="file" type="PDF" className="w-16" />
```

### Example 4

```tsx
<FileIcon variant="file" type="TXT" className="w-16" />
```

