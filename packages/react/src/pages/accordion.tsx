import { MoveUpRight } from "lucide-react";
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Box } from "@/components/ui/box";
import {
  Wrapper,
  Title,
  Subtitle,
  Menu,
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
  ApiButton,
} from "@/components/docs";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Accordion</Title>
            <Subtitle>
              A simple vertical list of headings you can tap to open and read
              more content.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/accordion"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/accordion#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <Box raised="single" className="w-full">
                      <AccordionRoot
                        className="w-full"
                        defaultValue={["product-information"]}
                      >
                        <AccordionItem value="product-information">
                          <AccordionTrigger>
                            Product Information
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              Our flagship product combines cutting-edge
                              technology with sleek design. Built with premium
                              materials, it offers unparalleled performance and
                              reliability.
                            </p>
                            <p>
                              Key features include advanced processing
                              capabilities, and an intuitive user interface
                              designed for both beginners and experts.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="shipping-details">
                          <AccordionTrigger>Shipping Details</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              We offer worldwide shipping through trusted
                              courier partners. Standard delivery takes 3-5
                              business days, while express shipping ensures
                              delivery within 1-2 business days.
                            </p>
                            <p>
                              All orders are carefully packaged and fully
                              insured. Track your shipment in real-time through
                              our dedicated tracking portal.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="return-policy">
                          <AccordionTrigger>Return Policy</AccordionTrigger>
                          <AccordionContent>
                            <p className="mb-2">
                              We stand behind our products with a comprehensive
                              30-day return policy. If you&apos;re not
                              completely satisfied, simply return the item in
                              its original condition.
                            </p>
                            <p>
                              Our hassle-free return process includes free
                              return shipping and full refunds processed within
                              48 hours of receiving the returned item.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </AccordionRoot>
                    </Box>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<Box raised="single" className="w-full">
  <AccordionRoot
    className="w-full"
    defaultValue={["product-information"]}
  >
    <AccordionItem value="product-information">
      <AccordionTrigger>
        Product Information
      </AccordionTrigger>
      <AccordionContent>
        <p className="mb-2">
          Our flagship product combines cutting-edge
          technology with sleek design. Built with premium
          materials, it offers unparalleled performance and
          reliability.
        </p>
        <p>
          Key features include advanced processing
          capabilities, and an intuitive user interface
          designed for both beginners and experts.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="shipping-details">
      <AccordionTrigger>Shipping Details</AccordionTrigger>
      <AccordionContent>
        <p className="mb-2">
          We offer worldwide shipping through trusted
          courier partners. Standard delivery takes 3-5
          business days, while express shipping ensures
          delivery within 1-2 business days.
        </p>
        <p>
          All orders are carefully packaged and fully
          insured. Track your shipment in real-time through
          our dedicated tracking portal.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="return-policy">
      <AccordionTrigger>Return Policy</AccordionTrigger>
      <AccordionContent>
        <p className="mb-2">
          We stand behind our products with a comprehensive
          30-day return policy. If you&apos;re not
          completely satisfied, simply return the item in
          its original condition.
        </p>
        <p>
          Our hassle-free return process includes free
          return shipping and full refunds processed within
          48 hours of receiving the returned item.
        </p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</Box>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/react @zag-js/accordion</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/accordion/index.tsx">
              {`
import { ChevronDownIcon } from "lucide-react";
import {
  accordionRootVariants,
  accordionItemVariants,
  accordionTrigger,
  accordionItemIndicator,
  accordionContent,
} from "@midoneui/core/styles/accordion.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { cn } from "@midoneui/core/utils/cn";
import { createContext, useContext, useId } from "react";
import * as accordion from "@zag-js/accordion";
import type { Api, Props, ItemProps } from "@zag-js/accordion";
import { Slot } from "@/components/ui/slot";
import { useMachine, normalizeProps } from "@zag-js/react";

const VariantContext = createContext<"default" | "boxed" | null>(null);
const ApiContext = createContext<Api | null>(null);
const ItemContext = createContext<ItemProps | null>(null);

export function AccordionRoot({
  children,
  className,
  variant = "default",
  asChild = false,
  collapsible = true,
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & { variant?: "default" | "boxed"; asChild?: boolean }) {
  const service = useMachine(accordion.machine, {
    collapsible,
    ...props,
    id: useId(),
  });
  const api = accordion.connect(service, normalizeProps);

  return (
    <VariantContext.Provider value={variant}>
      <ApiContext.Provider value={api}>
        <Slot
          className={cn([
            className,
            accordionRootVariants({ variant, className }),
          ])}
          {...api.getRootProps()}
          {...props}
        >
          {asChild ? children : <div>{children}</div>}
        </Slot>
      </ApiContext.Provider>
    </VariantContext.Provider>
  );
}

export function AccordionItem({
  children,
  filled,
  raised,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  BoxVariants &
  ItemProps & { asChild?: boolean }) {
  const variant = useContext(VariantContext);
  const api = useContext(ApiContext);

  return (
    <ItemContext.Provider value={props}>
      <Slot
        className={cn([
          className,
          variant == "boxed"
            ? boxVariants({ filled, variant: "default", raised, className })
            : "",
          accordionItemVariants({ variant, className }),
        ])}
        {...api?.getItemProps(props)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn([className, accordionTrigger])}
      {...api?.getItemTriggerProps(item!)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <button>
          {children}
          <div
            {...api?.getItemIndicatorProps(item!)}
            className={accordionItemIndicator}
          >
            <ChevronDownIcon />
          </div>
        </button>
      )}
    </Slot>
  );
}

export function AccordionContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn([className, accordionContent])}
      {...api?.getItemContentProps(item!)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
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
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<AccordionRoot
  className="w-full"
  defaultValue={["product-information"]}
>
  <AccordionItem value="product-information">
    <AccordionTrigger>
      Product Information
    </AccordionTrigger>
    <AccordionContent>
      <p className="mb-2">
        Our flagship product combines cutting-edge
        technology with sleek design. Built with premium
        materials, it offers unparalleled performance and
        reliability.
      </p>
      <p>
        Key features include advanced processing
        capabilities, and an intuitive user interface
        designed for both beginners and experts.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="shipping-details">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent>
      <p className="mb-2">
        We offer worldwide shipping through trusted
        courier partners. Standard delivery takes 3-5
        business days, while express shipping ensures
        delivery within 1-2 business days.
      </p>
      <p>
        All orders are carefully packaged and fully
        insured. Track your shipment in real-time through
        our dedicated tracking portal.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="return-policy">
    <AccordionTrigger>Return Policy</AccordionTrigger>
    <AccordionContent>
      <p className="mb-2">
        We stand behind our products with a comprehensive
        30-day return policy. If you&apos;re not
        completely satisfied, simply return the item in
        its original condition.
      </p>
      <p>
        Our hassle-free return process includes free
        return shipping and full refunds processed within
        48 hours of receiving the returned item.
      </p>
    </AccordionContent>
  </AccordionItem>
</AccordionRoot>
              `}
            </PreviewCode>
          </div>
          <div id="variants">
            <SectionTitle>Variants</SectionTitle>
            <SectionContent>
              A collection of components you can use.
            </SectionContent>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <AccordionRoot
                      className="w-full"
                      variant="boxed"
                      defaultValue={["product-information"]}
                    >
                      <AccordionItem
                        raised="single"
                        value="product-information"
                      >
                        <AccordionTrigger>Product Information</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            Our flagship product combines cutting-edge
                            technology with sleek design. Built with premium
                            materials, it offers unparalleled performance and
                            reliability.
                          </p>
                          <p>
                            Key features include advanced processing
                            capabilities, and an intuitive user interface
                            designed for both beginners and experts.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem raised="single" value="shipping-details">
                        <AccordionTrigger>Shipping Details</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            We offer worldwide shipping through trusted courier
                            partners. Standard delivery takes 3-5 business days,
                            while express shipping ensures delivery within 1-2
                            business days.
                          </p>
                          <p>
                            All orders are carefully packaged and fully insured.
                            Track your shipment in real-time through our
                            dedicated tracking portal.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem raised="single" value="return-policy">
                        <AccordionTrigger>Return Policy</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-2">
                            We stand behind our products with a comprehensive
                            30-day return policy. If you&apos;re not completely
                            satisfied, simply return the item in its original
                            condition.
                          </p>
                          <p>
                            Our hassle-free return process includes free return
                            shipping and full refunds processed within 48 hours
                            of receiving the returned item.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </AccordionRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<AccordionRoot
  className="w-full"
  variant="boxed"
  defaultValue={["product-information"]}
>
  <AccordionItem raised="single" value="product-information">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent>
      <p className="mb-2">
        Our flagship product combines cutting-edge technology with
        sleek design. Built with premium materials, it offers
        unparalleled performance and reliability.
      </p>
      <p>
        Key features include advanced processing capabilities, and an
        intuitive user interface designed for both beginners and
        experts.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem raised="single" value="shipping-details">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent>
      <p className="mb-2">
        We offer worldwide shipping through trusted courier partners.
        Standard delivery takes 3-5 business days, while express
        shipping ensures delivery within 1-2 business days.
      </p>
      <p>
        All orders are carefully packaged and fully insured. Track
        your shipment in real-time through our dedicated tracking
        portal.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem raised="single" value="return-policy">
    <AccordionTrigger>Return Policy</AccordionTrigger>
    <AccordionContent>
      <p className="mb-2">
        We stand behind our products with a comprehensive 30-day
        return policy. If you&apos;re not completely satisfied, simply
        return the item in its original condition.
      </p>
      <p>
        Our hassle-free return process includes free return shipping
        and full refunds processed within 48 hours of receiving the
        returned item.
      </p>
    </AccordionContent>
  </AccordionItem>
</AccordionRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
        </div>
      </Wrapper>
      <Menu>
        <a className="hover:text-foreground py-1.5" href="#installation">
          Installation
        </a>
        <a className="hover:text-foreground py-1.5" href="#usage">
          Usage
        </a>
        <a className="hover:text-foreground py-1.5" href="#variants">
          Variants
        </a>
      </Menu>
    </>
  );
}

export default Main;
