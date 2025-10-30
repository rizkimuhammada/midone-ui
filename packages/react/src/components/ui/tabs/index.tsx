import { cn } from "@midoneui/core/utils/cn";
import {
  tabsRoot,
  tabsList,
  tabsTrigger,
  tabsIndicator,
  tabsContent,
} from "@midoneui/core/styles/tabs.styles";
import { createContext, useContext, useId } from "react";
import * as tabs from "@zag-js/tabs";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props, TriggerProps, ContentProps } from "@zag-js/tabs";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function TabsRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(tabs.machine, {
    ...props,
    id: useId(),
  });

  const api = tabs.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot className={cn(tabsRoot, className)} {...props}>
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function TabsList({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsList, className)}
      {...api?.getListProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
      <TabsIndicator />
    </Slot>
  );
}

export function TabsIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function TabsTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & TriggerProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsTrigger, className)}
      {...api?.getTriggerProps(props)}
      {...props}
    >
      {asChild ? children : <button>{children}</button>}
    </Slot>
  );
}

export function TabsContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & ContentProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsContent, className)}
      {...api?.getContentProps(props)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}
