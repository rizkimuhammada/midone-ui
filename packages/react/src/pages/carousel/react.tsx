import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  const images = Array.from(
    { length: 5 },
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`
  );

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <CarouselRoot
                  defaultPage={0}
                  slideCount={images.length}
                  className="size-72"
                >
                  <CarouselControl>
                    <CarouselPrevTrigger />
                    <CarouselNextTrigger />
                  </CarouselControl>
                  <CarouselIndicatorGroup>
                    {images.map((_, index) => (
                      <CarouselIndicator key={index} index={index} />
                    ))}
                  </CarouselIndicatorGroup>
                  <CarouselItemGroup>
                    {images.map((_image, index) => (
                      <CarouselItem
                        key={index}
                        index={index}
                        className="text-5xl bold flex items-center justify-center"
                      >
                        {index + 1}
                      </CarouselItem>
                    ))}
                  </CarouselItemGroup>
                </CarouselRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
const images = Array.from(
  { length: 5 },
  (_, i) => \`https://picsum.photos/seed/\${i + 1}/500/300\`
);

<CarouselRoot
  defaultPage={0}
  slideCount={images.length}
  className="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselIndicatorGroup>
    {images.map((_, index) => (
      <CarouselIndicator key={index} index={index} />
    ))}
  </CarouselIndicatorGroup>
  <CarouselItemGroup>
    {images.map((_image, index) => (
      <CarouselItem
        key={index}
        index={index}
        className="text-5xl bold flex items-center justify-center"
      >
        {index + 1}
      </CarouselItem>
    ))}
  </CarouselItemGroup>
</CarouselRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/carousel</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/carousel/index.tsx">
          {`
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
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(carousel.machine, {
    defaultPage,
    slideCount,
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
        {asChild ? children : <div>{children}</div>}
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
        <Button className={cn(carouselPrevTrigger, className)}>
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
        <Button className={cn(carouselNextTrigger, className)}>
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
              `}
        </PreviewCode>
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import {
  CarouselRoot,
  CarouselControl,
  CarouselPrevTrigger,
  CarouselNextTrigger,
  CarouselIndicatorGroup,
  CarouselIndicator,
  CarouselItemGroup,
  CarouselItem,
} from "@/components/ui/carousel";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<CarouselRoot
  defaultPage={0}
  slideCount={images.length}
  className="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselIndicatorGroup>
    {images.map((_, index) => (
      <CarouselIndicator key={index} index={index} />
    ))}
  </CarouselIndicatorGroup>
  <CarouselItemGroup>
    {images.map((_image, index) => (
      <CarouselItem
        key={index}
        index={index}
        className="text-5xl bold flex items-center justify-center"
      >
        {index + 1}
      </CarouselItem>
    ))}
  </CarouselItemGroup>
</CarouselRoot>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <CarouselRoot
                  defaultPage={0}
                  slideCount={images.length}
                  className="size-72"
                >
                  <CarouselControl>
                    <CarouselPrevTrigger />
                    <CarouselNextTrigger />
                  </CarouselControl>
                  <CarouselIndicatorGroup>
                    {images.map((_, index) => (
                      <CarouselIndicator key={index} index={index} />
                    ))}
                  </CarouselIndicatorGroup>
                  <CarouselItemGroup>
                    {images.map((image, index) => (
                      <CarouselItem key={index} index={index}>
                        <img src={image} alt={`Slide ${index}`} />
                      </CarouselItem>
                    ))}
                  </CarouselItemGroup>
                </CarouselRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<CarouselRoot
  defaultPage={0}
  slideCount={images.length}
  className="size-72"
>
  <CarouselControl>
    <CarouselPrevTrigger />
    <CarouselNextTrigger />
  </CarouselControl>
  <CarouselIndicatorGroup>
    {images.map((_, index) => (
      <CarouselIndicator key={index} index={index} />
    ))}
  </CarouselIndicatorGroup>
  <CarouselItemGroup>
    {images.map((image, index) => (
      <CarouselItem key={index} index={index}>
        <img src={image} alt={\`Slide \${index}\`} />
      </CarouselItem>
    ))}
  </CarouselItemGroup>
</CarouselRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
    </>
  );
}

export default Main;
