# Carousel

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<CarouselRoot
  defaultPage={0}
  slideCount={images.length}
  showIndicators
  className="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    {images.map((_, index) => (
      <CarouselItem
        key={index}
        index={index}
        className="text-5xl font-bold flex items-center justify-center"
      >
        {index + 1}
      </CarouselItem>
    ))}
  </CarouselItemGroup>
</CarouselRoot>
```

## Dependency

```bash
npm install lucide-react @zag-js/carousel @zag-js/react
```

## Component

```tsx
import { createContext, useContext, useId } from "react";
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import {
  carouselRoot,
  carouselControl,
  carouselPrevTrigger,
  carouselNextTrigger,
  carouselIndicatorGroup,
  carouselIndicator,
  carouselItemGroup,
  carouselItem,
} from "@midoneui/core/styles/carousel.styles";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Box } from "../box";
import * as carousel from "@zag-js/carousel";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, IndicatorProps, ItemProps, Props } from "@zag-js/carousel";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function CarouselRoot({
  children,
  className,
  defaultPage,
  slideCount,
  spacing = "2rem",
  allowMouseDrag = true,
  asChild = false,
  showIndicators = false,
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & { asChild?: boolean; showIndicators?: boolean }) {
  const service = useMachine(carousel.machine, {
    defaultPage,
    slideCount,
    spacing,
    allowMouseDrag,
    ...props,
    id: useId(),
  });
  const api = carousel.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(carouselRoot, className)}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div className="relative">
            {children}
            {showIndicators && (
              <CarouselIndicatorGroup className="absolute bottom-4 left-1/2 -translate-x-1/2">
                {api.pageSnapPoints.map((_, index) => (
                  <CarouselIndicator key={index} index={index} />
                ))}
              </CarouselIndicatorGroup>
            )}
          </div>
        )}
      </Slot>
    </ApiContext.Provider>
  );
}

export function CarouselControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(carouselControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function CarouselPrevTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getPrevTriggerProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Button variant="ghost" className={cn(carouselPrevTrigger, className)}>
          {children ?? <ArrowLeft />}
        </Button>
      )}
    </Slot>
  );
}

export function CarouselNextTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getNextTriggerProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Button variant="ghost" className={cn(carouselNextTrigger, className)}>
          {children ?? <ArrowRight />}
        </Button>
      )}
    </Slot>
  );
}

export function CarouselIndicatorGroup({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(carouselIndicatorGroup, className)}
      {...api?.getIndicatorGroupProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function CarouselIndicator({
  className,
  asChild = false,
  index,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean } & IndicatorProps) {
  const api = useContext(ApiContext);

  return (
    <button
      className={cn(carouselIndicator, className)}
      {...api?.getIndicatorProps({ index })}
      {...props}
    />
  );
}

export function CarouselItemGroup({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(carouselItemGroup, className)}
      {...api?.getItemGroupProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function CarouselItem({
  children,
  className,
  asChild = false,
  index,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean } & ItemProps) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getItemProps({ index })} {...props}>
      {asChild ? (
        children
      ) : (
        <Box className={cn(carouselItem, className)}>{children}</Box>
      )}
    </Slot>
  );
}
```

## Usage

```tsx
import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselItemGroup,
  CarouselItem,
} from "@/components/ui/carousel";
```

```tsx
<CarouselRoot
  defaultPage={0}
  slideCount={images.length}
  showIndicators
  className="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    {images.map((_, index) => (
      <CarouselItem
        key={index}
        index={index}
        className="text-5xl font-bold flex items-center justify-center"
      >
        {index + 1}
      </CarouselItem>
    ))}
  </CarouselItemGroup>
</CarouselRoot>
```

## Examples

### Example 1

```tsx
<CarouselRoot
  defaultPage={0}
  slideCount={images.length}
  showIndicators
  className="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    {images.map((_, index) => (
      <CarouselItem
        key={index}
        index={index}
        className="text-5xl font-bold flex items-center justify-center"
      >
        {index + 1}
      </CarouselItem>
    ))}
  </CarouselItemGroup>
</CarouselRoot>
```

### Example 2

```tsx
<CarouselRoot
  defaultPage={0}
  slideCount={images.length}
  showIndicators
  className="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img src={image} alt={`Slide ${index}`} />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
</CarouselRoot>
```

