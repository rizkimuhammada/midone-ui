import { Accordion } from "@ark-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import {
  accordionRootVariants,
  accordionItemVariants,
  accordionTrigger,
  accordionItemIndicator,
  accordionContent,
  type AccordionRootVariants,
  type AccordionItemVariants,
} from "@midoneui/core/styles/accordion.styles";
import { cn } from "@midoneui/core/utils/cn";
import { createContext, useContext } from "react";

const VariantContext = createContext<"default" | "boxed" | null>(null);

export function AccordionRoot({
  children,
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof Accordion.Root> & AccordionRootVariants) {
  return (
    <VariantContext.Provider value={variant}>
      <Accordion.Root
        collapsible
        className={cn([
          className,
          accordionRootVariants({ variant, className }),
        ])}
        {...props}
      >
        {children}
      </Accordion.Root>
    </VariantContext.Provider>
  );
}

export function AccordionItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Item> & AccordionItemVariants) {
  const variant = useContext(VariantContext);
  return (
    <Accordion.Item
      className={cn([className, accordionItemVariants({ variant, className })])}
      {...props}
    >
      {children}
    </Accordion.Item>
  );
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Accordion.ItemTrigger>) {
  return (
    <Accordion.ItemTrigger
      className={cn([className, accordionTrigger])}
      {...props}
    >
      {children}
      <Accordion.ItemIndicator
        className={cn([className, accordionItemIndicator])}
      >
        <ChevronDownIcon />
      </Accordion.ItemIndicator>
    </Accordion.ItemTrigger>
  );
}

export function AccordionContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Accordion.ItemContent>) {
  return (
    <Accordion.ItemContent
      className={cn([className, accordionContent])}
      {...props}
    >
      {children}
    </Accordion.ItemContent>
  );
}
