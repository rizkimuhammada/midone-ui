import {
    ScrollAreaRoot,
    ScrollAreaViewport,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaCorner,
} from "@/components/ui/scroll-area";
import {
    Preview,
    SectionTitle,
    SectionContent,
    PreviewCode,
} from "@/components/docs";

function Main() {
    return (
        <>
            <div id="preview" className="-mt-20">
                <Preview>
                    {() => ({
                        preview: (
                            <>
                                <ScrollAreaRoot className="h-72 w-70">
                                    <ScrollAreaViewport>
                                        <ScrollAreaContent>
                                            <div className="text-base font-medium mb-4">
                                                Scroll Area Example
                                            </div>
                                            {Array.from({ length: 20 }).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="mb-4 last:mb-0 opacity-80"
                                                >
                                                    This is line number {i + 1} of the scrollable content. It helps demonstrate how the custom scrollbar works within the Midone UI system.
                                                </div>
                                            ))}
                                        </ScrollAreaContent>
                                    </ScrollAreaViewport>
                                    <ScrollAreaScrollbar>
                                        <ScrollAreaThumb />
                                    </ScrollAreaScrollbar>
                                    <ScrollAreaCorner />
                                </ScrollAreaRoot>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/components/ui/scroll-area";

<ScrollAreaRoot className="h-72 w-70">
  <ScrollAreaViewport>
    <ScrollAreaContent>
      <div className="text-base font-medium mb-4">Scroll Area Example</div>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="mb-4 last:mb-0 opacity-80"
        >
          This is line number {i + 1} of the scrollable content. It helps
          demonstrate how the custom scrollbar works within the Midone UI
          system.
        </div>
      ))}
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar>
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
  <ScrollAreaCorner />
</ScrollAreaRoot>
                `}
                            </PreviewCode>
                        ),
                    })}
                </Preview>
            </div>

            <div id="installation">
                <SectionTitle>Installation</SectionTitle>
                <SectionContent>
                    Copy and paste the following code into your project.
                </SectionContent>
                <PreviewCode title="components/ui/scroll-area/index.tsx">
                    {`
import * as scrollArea from "@zag-js/scroll-area";
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

const ApiContext = createContext<ReturnType<typeof scrollArea.connect> | null>(null);

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
                {asChild ? children : <div>{children}</div>}
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
          `}
                </PreviewCode>
            </div>

            <div id="usage">
                <SectionTitle>Usage</SectionTitle>
                <PreviewCode>
                    {`
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/components/ui/scroll-area";
          `}
                </PreviewCode>
                <PreviewCode>
                    {`
<ScrollAreaRoot className="h-72 w-70">
  <ScrollAreaViewport>
    <ScrollAreaContent>
      {/* Scrollable content here */}
    </ScrollAreaContent>
  </ScrollAreaViewport>
  <ScrollAreaScrollbar>
    <ScrollAreaThumb />
  </ScrollAreaScrollbar>
  <ScrollAreaCorner />
</ScrollAreaRoot>
          `}
                </PreviewCode>
            </div>
        </>
    );
}

export default Main;
