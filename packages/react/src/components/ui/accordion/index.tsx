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
          variant == "boxed" ? boxVariants({ raised, className }) : "",
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
