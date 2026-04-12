# Scroll Area

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx

```

## Dependency

```bash
npm install @zag-js/scroll-area @zag-js/react
```

## Component

```tsx
import * as scrollArea from "@zag-js/scroll-area";
import type { Api } from "@zag-js/scroll-area";
import { normalizeProps, useMachine } from "@zag-js/react";
import { createContext, useContext, useId } from "react";
import { cn } from "@midoneui/core/utils/cn";
import {
    scrollAreaRoot,
    scrollAreaViewport,
    scrollAreaScrollbar,
    scrollAreaThumb,
    scrollAreaContent,
    scrollAreaCorner,
} from "@midoneui/core/styles/scroll-area.styles";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api<any> | null>(null);

export function ScrollAreaRoot({
    children,
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"div"> & Partial<scrollArea.Props> & { asChild?: boolean }) {
    const service = useMachine(scrollArea.machine, {
        ...props,
        id: useId(),
    });

    const api = scrollArea.connect(service, normalizeProps);

    return (
        <ApiContext.Provider value={api}>
            <Slot
                className={cn([scrollAreaRoot, className])}
                {...api.getRootProps()}
                {...props}
            >
                {asChild ? children : (
                    <div>
                        <ScrollAreaViewport>
                            <ScrollAreaContent>
                                {children}
                            </ScrollAreaContent>
                        </ScrollAreaViewport>
                        <ScrollAreaScrollbar>
                            <ScrollAreaThumb />
                        </ScrollAreaScrollbar>
                        <ScrollAreaCorner />
                    </div>
                )}
            </Slot>
        </ApiContext.Provider>
    );
}

export function ScrollAreaViewport({
    children,
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
    const api = useContext(ApiContext);

    return (
        <Slot
            className={cn([scrollAreaViewport, className])}
            {...api?.getViewportProps()}
            {...props}
        >
            {asChild ? children : <div>{children}</div>}
        </Slot>
    );
}

export function ScrollAreaContent({
    children,
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
    const api = useContext(ApiContext);

    return (
        <Slot
            className={cn([scrollAreaContent, className])}
            {...api?.getContentProps()}
            {...props}
        >
            {asChild ? children : <div>{children}</div>}
        </Slot>
    );
}

export function ScrollAreaScrollbar({
    children,
    className,
    asChild = false,
    orientation = "vertical",
    ...props
}: React.ComponentProps<"div"> & scrollArea.ScrollbarProps & { asChild?: boolean }) {
    const api = useContext(ApiContext);

    return (
        <Slot
            className={cn([scrollAreaScrollbar, className])}
            {...api?.getScrollbarProps({ orientation, ...props })}
            {...props}
        >
            {asChild ? children : <div>{children}</div>}
        </Slot>
    );
}

export function ScrollAreaThumb({
    children,
    className,
    asChild = false,
    orientation = "vertical",
    ...props
}: React.ComponentProps<"div"> & scrollArea.ScrollbarProps & { asChild?: boolean }) {
    const api = useContext(ApiContext);

    return (
        <Slot
            className={cn([scrollAreaThumb, className])}
            {...api?.getThumbProps({ orientation, ...props })}
            {...props}
        >
            {asChild ? children : <div>{children}</div>}
        </Slot>
    );
}

export function ScrollAreaCorner({
    children,
    className,
    asChild = false,
    ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
    const api = useContext(ApiContext);

    return (
        <Slot
            className={cn([scrollAreaCorner, className])}
            {...api?.getCornerProps()}
            {...props}
        >
            {asChild ? children : <div>{children}</div>}
        </Slot>
    );
}
```

## Usage

```tsx
import {
    ScrollAreaRoot,
} from "@/components/ui/scroll-area";
```

```tsx

```

## Examples

