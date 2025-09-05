import { Tabs } from "@ark-ui/react/tabs";
import { cn } from "@midoneui/core/utils/cn";
import {
  tabsRoot,
  tabsList,
  tabsTrigger,
  tabsIndicator,
  tabsContent,
} from "@midoneui/core/styles/tabs.styles";

export function TabsRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tabs.Root>) {
  return (
    <Tabs.Root className={cn(tabsRoot, className)} {...props}>
      {children}
    </Tabs.Root>
  );
}

export function TabsList({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tabs.List>) {
  return (
    <Tabs.List className={cn(tabsList, className)} {...props}>
      {children}
      <TabsIndicator />
    </Tabs.List>
  );
}

export function TabsIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tabs.Indicator>) {
  return (
    <Tabs.Indicator className={cn(tabsIndicator, className)} {...props}>
      {children}
    </Tabs.Indicator>
  );
}

export function TabsTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tabs.Trigger>) {
  return (
    <Tabs.Trigger className={cn(tabsTrigger, className)} {...props}>
      {children}
    </Tabs.Trigger>
  );
}

export function TabsContent({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Tabs.Content>) {
  return (
    <Tabs.Content className={cn(tabsContent, className)} {...props}>
      {children}
    </Tabs.Content>
  );
}
