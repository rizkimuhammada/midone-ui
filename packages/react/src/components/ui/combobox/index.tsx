import { cn } from "@midoneui/core/utils/cn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDownIcon } from "lucide-react";
import {
  createContext,
  useContext,
  useId,
  useState,
  useEffect,
  useMemo,
} from "react";
import {
  comboboxRoot,
  comboboxLabel,
  comboboxControl,
  comboboxInput,
  comboboxTrigger,
  comboboxClearTrigger,
  comboboxPositioner,
  comboboxContent,
  comboboxItemGroup,
  comboboxItemGroupLabel,
  comboboxItem,
  comboboxItemText,
  comboboxItemIndicator,
} from "@midoneui/core/styles/combobox.styles";
import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props, ItemGroupProps, ItemProps } from "@zag-js/combobox";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);
const ItemGroupContext = createContext<ItemGroupProps | undefined>(undefined);
const ItemContext = createContext<ItemProps | undefined>(undefined);
const InputValueContext = createContext<string>("");
const RegisterStaticItemContext = createContext<
  ((item: { value: string; label: string }) => void) | null
>(null);
const UnregisterStaticItemContext = createContext<
  ((item: { value: string; label: string }) => void) | null
>(null);

export function ComboboxRoot({
  children,
  className,
  multiple = false,
  selectionBehavior = "clear",
  value,
  asChild = false,
  onOpenChange,
  onInputValueChange,
  onValueChange,
  items = [],
  itemToValue,
  itemToString,
  collection,
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & {
    asChild?: boolean;
    items?: any[];
    itemToValue?: (item: any) => string;
    itemToString?: (item: any) => string;
  }) {
  const [internalInputValue, setInternalInputValue] = useState("");
  const [staticItems, setStaticItems] = useState<
    { value: string; label: string }[]
  >([]);

  const filteredItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    const query = internalInputValue.toLowerCase();
    if (!query) return items;
    return items.filter((item) => {
      const label = itemToString
        ? itemToString(item)
        : typeof item === "string"
        ? item
        : item.label || item.value;
      return label?.toLowerCase().includes(query);
    });
  }, [items, internalInputValue, itemToString]);

  const internalCollection = useMemo(() => {
    if (collection) return collection;
    const allItems = [...filteredItems, ...staticItems];
    return combobox.collection({
      items: allItems,
      itemToValue:
        itemToValue ||
        ((item) =>
          typeof item === "string" ? item : item.value || item.label),
      itemToString:
        itemToString ||
        ((item) =>
          typeof item === "string" ? item : item.label || item.value),
    });
  }, [collection, filteredItems, staticItems, itemToValue, itemToString]);

  const registerStaticItem = (item: { value: string; label: string }) => {
    setStaticItems((prev) => {
      if (prev.some((i) => i.value === item.value)) return prev;
      return [...prev, item];
    });
  };

  const unregisterStaticItem = (item: { value: string; label: string }) => {
    setStaticItems((prev) => prev.filter((i) => i.value !== item.value));
  };

  const service = useMachine(combobox.machine, {
    multiple,
    selectionBehavior,
    onOpenChange,
    onInputValueChange(details) {
      setInternalInputValue(details.inputValue);
      onInputValueChange?.(details);
    },
    onValueChange,
    ...props,
    collection: internalCollection,
    id: useId(),
  });

  const api = combobox.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <InputValueContext.Provider value={internalInputValue}>
        <RegisterStaticItemContext.Provider value={registerStaticItem}>
          <UnregisterStaticItemContext.Provider value={unregisterStaticItem}>
            <Slot
              className={cn(comboboxRoot, className)}
              data-multiple={multiple}
              {...api.getRootProps()}
              {...props}
            >
              {asChild ? children : <div>{children}</div>}
            </Slot>
          </UnregisterStaticItemContext.Provider>
        </RegisterStaticItemContext.Provider>
      </InputValueContext.Provider>
    </ApiContext.Provider>
  );
}

export function ComboboxLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getLabelProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <Label className={cn(comboboxLabel, className)}>{children}</Label>
      )}
    </Slot>
  );
}

export function ComboboxControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  const content = useMemo(() => {
    if (asChild) return children;
    if (children) return <div>{children}</div>;
    return <ComboboxTrigger />;
  }, [children, asChild]);

  return (
    <Slot
      className={cn(comboboxControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {content}
    </Slot>
  );
}

export function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const api = useContext(ApiContext);

  return (
    <Input
      className={cn(comboboxInput, className)}
      {...api?.getInputProps()}
      {...props}
    />
  );
}

export function ComboboxTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button variant="ghost" className={cn(comboboxTrigger, className)}>
          <div>{api?.valueAsString || "Select Options..."}</div>
          <ComboboxClearTrigger>Clear</ComboboxClearTrigger>
          <ChevronsUpDownIcon />
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function ComboboxClearTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getClearTriggerProps()} {...props}>
      {asChild ? (
        children
      ) : (
        <span className={cn(comboboxClearTrigger, className)}>{children}</span>
      )}
    </Slot>
  );
}

export function ComboboxPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(comboboxPositioner, className)}
      {...api?.getPositionerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function ComboboxContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <ComboboxPositioner>
        <Slot {...api?.getContentProps()} {...props}>
          {asChild ? (
            children
          ) : (
            <Box raised="single" className={cn(comboboxContent, className)}>
              <div>{children}</div>
            </Box>
          )}
        </Slot>
      </ComboboxPositioner>
    </Portal>
  );
}

export function ComboboxItemGroup({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemGroupId = { id: useId() };

  return (
    <ItemGroupContext.Provider value={itemGroupId}>
      <Slot
        className={cn(comboboxItemGroup, className)}
        {...api?.getItemGroupProps(itemGroupId)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ItemGroupContext.Provider>
  );
}

export function ComboboxItemGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemGroupId = useContext(ItemGroupContext);

  return (
    <Slot
      className={cn(comboboxItemGroupLabel, className)}
      {...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      })}
      {...props}
    >
      {asChild ? children : <label>{children}</label>}
    </Slot>
  );
}

export function ComboboxItem({
  children,
  className,
  asChild = false,
  value: valueProp,
  item: itemProp,
  text: textProp,
  ...props
}: React.ComponentProps<"div"> &
  Omit<ItemProps, "item"> & {
    item?: any;
    value?: string;
    text?: string;
    asChild?: boolean;
  }) {
  const api = useContext(ApiContext);
  const inputValue = useContext(InputValueContext);
  const registerStaticItem = useContext(RegisterStaticItemContext);
  const unregisterStaticItem = useContext(UnregisterStaticItemContext);

  const isStaticItem = itemProp === undefined && valueProp !== undefined;

  const resolvedItem = useMemo(() => {
    if (itemProp !== undefined) return itemProp;
    if (valueProp !== undefined) return { value: valueProp, label: valueProp };
    return undefined;
  }, [itemProp, valueProp]);

  const shouldShow = useMemo(() => {
    if (!isStaticItem) return true;
    if (!inputValue) return true;
    return (valueProp ?? "").toLowerCase().includes(inputValue.toLowerCase());
  }, [isStaticItem, valueProp, inputValue]);

  const itemText = useMemo(() => {
    if (textProp) return textProp;
    if (!resolvedItem) return "";
    return typeof resolvedItem === "string"
      ? resolvedItem
      : resolvedItem.label || resolvedItem.value || "";
  }, [textProp, resolvedItem]);

  // Register/unregister based on visibility
  useEffect(() => {
    if (!isStaticItem || !valueProp) return;
    if (shouldShow) {
      registerStaticItem?.({ value: valueProp, label: valueProp });
    } else {
      unregisterStaticItem?.({ value: valueProp, label: valueProp });
    }
  }, [isStaticItem, valueProp, shouldShow]);

  useEffect(() => {
    if (!isStaticItem || !valueProp) return;
    return () => {
      unregisterStaticItem?.({ value: valueProp, label: valueProp });
    };
  }, []);

  if (isStaticItem && !shouldShow) return null;

  const itemProps = { item: resolvedItem, ...props };

  return (
    <ItemContext.Provider value={itemProps}>
      <Slot
        className={cn(comboboxItem, className)}
        {...api?.getItemProps(itemProps)}
        {...itemProps}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children ?? <ComboboxItemText>{itemText}</ComboboxItemText>}
            <ComboboxItemIndicator />
          </div>
        )}
      </Slot>
    </ItemContext.Provider>
  );
}

export function ComboboxItemText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(comboboxItemText, className)}
      {...api?.getItemTextProps(item!)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function ComboboxItemIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(comboboxItemIndicator, className)}
      {...api?.getItemIndicatorProps(item!)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>{children ?? <Check className="size-3.5" />}</div>
      )}
    </Slot>
  );
}
