# Avatar

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<AvatarRoot fallbackText="PA" src="https://i.pravatar.cc/300" />
```

## Dependency

```bash
npm install @zag-js/avatar @zag-js/react
```

## Component

```tsx
import { createContext, useContext, useId } from "react";
import { cn } from "@midoneui/core/utils/cn";
import {
  avatarRootVariants,
  avatarFallback,
  avatarImage,
  type AvatarRootVariants,
} from "@midoneui/core/styles/avatar.styles";
import * as avatar from "@zag-js/avatar";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props } from "@zag-js/avatar";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function AvatarRoot({
  children,
  className,
  bordered,
  asChild = false,
  src,
  fallbackText,
  ...props
}: React.ComponentProps<"div"> &
  AvatarRootVariants &
  Partial<Props> & {
    asChild?: boolean;
    src?: string;
    fallbackText?: string;
  }) {
  const service = useMachine(avatar.machine, { ...props, id: useId() });
  const api = avatar.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(avatarRootVariants({ bordered }), className)}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children || (
              <>
                {fallbackText && <AvatarFallback>{fallbackText}</AvatarFallback>}
                {src && <AvatarImage src={src} />}
              </>
            )}
          </div>
        )}
      </Slot>
    </ApiContext.Provider>
  );
}

export function AvatarFallback({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(avatarFallback, className)}
      {...api?.getFallbackProps()}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentProps<"img">) {
  const api = useContext(ApiContext);

  return (
    <img
      className={cn(avatarImage, className)}
      {...api?.getImageProps()}
      {...props}
    />
  );
}
```

## Usage

```tsx
import {
  AvatarRoot,
} from "@/components/ui/avatar";
```

```tsx
<AvatarRoot fallbackText="PA" src="https://i.pravatar.cc/300" />
```

## Examples

### Example 1

```tsx
<AvatarRoot fallbackText="PA" src="https://i.pravatar.cc/300" />
```

### Example 2

```tsx
<AvatarRoot bordered={false} fallbackText="PA" src="https://i.pravatar.cc/300" />
```

### Example 3

```tsx
<AvatarRoot className="rounded-full" fallbackText="PA" src="https://i.pravatar.cc/300" />
```

### Example 4

```tsx
<AvatarRoot className="rounded-full" bordered={false} fallbackText="PA" src="https://i.pravatar.cc/300" />
```

