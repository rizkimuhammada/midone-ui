import {
  SelectRoot,
  SelectItemGroup,
  SelectItem,
} from "@/components/ui/select";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
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
                <SelectRoot label="Single" placeholder="Select a Framework" className="w-56">
                  <SelectItemGroup label="Frameworks">
                    <SelectItem value="React" />
                    <SelectItem value="Solid" />
                    <SelectItem value="Vue" />
                    <SelectItem value="Svelte" />
                    <SelectItem value="Vanilla" text="Vanilla JS" />
                  </SelectItemGroup>
                </SelectRoot>
                <SelectRoot label="Multiple" placeholder="Select Frameworks" className="w-56" multiple>
                  <SelectItemGroup label="Frameworks">
                    <SelectItem value="React" />
                    <SelectItem value="Solid" />
                    <SelectItem value="Vue" />
                    <SelectItem value="Svelte" />
                    <SelectItem value="Vanilla" text="Vanilla JS" />
                  </SelectItemGroup>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot label="Single" placeholder="Select a Framework" className="w-56">
  <SelectItemGroup label="Frameworks">
    <SelectItem value="React" />
    <SelectItem value="Solid" />
    <SelectItem value="Vue" />
    <SelectItem value="Svelte" />
    <SelectItem value="Vanilla" text="Vanilla JS" />
  </SelectItemGroup>
</SelectRoot>

<SelectRoot label="Multiple" placeholder="Select Frameworks" className="w-56" multiple>
  <SelectItemGroup label="Frameworks">
    <SelectItem value="React" />
    <SelectItem value="Solid" />
    <SelectItem value="Vue" />
    <SelectItem value="Svelte" />
    <SelectItem value="Vanilla" text="Vanilla JS" />
  </SelectItemGroup>
</SelectRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <SelectRoot label="Scrollable" placeholder="Select a Timezone" className="w-56" multiple>
                  <SelectItemGroup label="North America">
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                  </SelectItemGroup>
                  <SelectItemGroup label="Europe & Africa">
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                    <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
                    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectItemGroup>
                  <SelectItemGroup label="Asia">
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                  </SelectItemGroup>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot label="Scrollable" placeholder="Select a Timezone" className="w-56" multiple>
  <SelectItemGroup label="North America">
    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
    <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
    <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
  </SelectItemGroup>
  <SelectItemGroup label="Europe & Africa">
    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
    <SelectItem value="cet">Central European Time (CET)</SelectItem>
    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
    <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
    <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
  </SelectItemGroup>
  <SelectItemGroup label="Asia">
    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
    <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
  </SelectItemGroup>
</SelectRoot>
                      `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation" className="mt-10">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/select</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/select/index.tsx">
          {`
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { cn } from "@midoneui/core/utils/cn";
import { Check, ChevronDownIcon } from "lucide-react";
import {
  selectRoot,
  selectLabel,
  selectControl,
  selectTrigger,
  selectValueText,
  selectIndicator,
  selectClearTrigger,
  selectPositioner,
  selectContent,
  selectItemGroup,
  selectItemGroupLabel,
  selectItem,
  selectItemText,
  selectItemIndicator,
  selectHiddenSelect,
} from "@midoneui/core/styles/select.styles";
import {
  createContext,
  useContext,
  useId,
  useState,
  useMemo,
} from "react";
import * as select from "@zag-js/select";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props, ItemGroupProps, ItemProps } from "@zag-js/select";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);
const ItemGroupContext = createContext<ItemGroupProps | undefined>(undefined);
const ItemContext = createContext<ItemProps | undefined>(undefined);
const DisplayValueContext = createContext<string>("");
const RegisterStaticItemContext = createContext<
  ((item: { value: string; label: string }) => void) | null
>(null);
const UnregisterStaticItemContext = createContext<
  ((item: { value: string; label: string }) => void) | null
>(null);

export function SelectRoot({
  children,
  className,
  multiple = false,
  asChild = false,
  value,
  collection,
  items = [],
  itemToValue,
  itemToString,
  onValueChange,
  label,
  placeholder,
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & {
    asChild?: boolean;
    label?: string;
    placeholder?: string;
    items?: any[];
    itemToValue?: (item: any) => string;
    itemToString?: (item: any) => string;
  }) {
  const { ...restProps } = props;
  const [internalValue, setInternalValue] = useState<string[]>(
    (value as string[]) || []
  );
  const [staticItems, setStaticItems] = useState<
    { value: string; label: string }[]
  >([]);

  const _value = value !== undefined ? (value as string[]) : internalValue;

  const registerStaticItem = (item: { value: string; label: string }) => {
    setStaticItems((prev) => {
      if (prev.some((i) => i.value === item.value)) return prev;
      return [...prev, item];
    });
  };

  const unregisterStaticItem = (item: { value: string; label: string }) => {
    setStaticItems((prev) => prev.filter((i) => i.value !== item.value));
  };

  const internalCollection = useMemo(() => {
    if (collection) return collection;
    const allItems = [...(items || []), ...staticItems];
    return select.collection({
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
  }, [collection, items, staticItems, itemToValue, itemToString]);

  const resolveItemToValue = itemToValue || ((item: any) => typeof item === "string" ? item : item.value || item.label);
  const resolveItemToString = itemToString || ((item: any) => typeof item === "string" ? item : item.label || item.value);

  const displayValue = useMemo(() => {
    const values = _value;
    if (!values.length) return "";
    return values
      .map((v) => {
        const found = internalCollection.items.find((item: any) => resolveItemToValue(item) === v);
        return found ? resolveItemToString(found) : v;
      })
      .join(", ");
  }, [_value, internalCollection]);

  const service = useMachine(select.machine, {
    multiple,
    ...props,
    collection: internalCollection,
    value: _value,
    onValueChange(details) {
      setInternalValue(details.value);
      onValueChange?.(details);
    },
    id: useId(),
  });

  const api = select.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <DisplayValueContext.Provider value={displayValue}>
        <RegisterStaticItemContext.Provider value={registerStaticItem}>
          <UnregisterStaticItemContext.Provider value={unregisterStaticItem}>
            <Slot
              className={cn(selectRoot, className)}
              data-multiple={multiple}
              {...api.getRootProps()}
              {...restProps}
            >
              {asChild ? (
                children
              ) : (
                <div>
                  {label && <SelectLabel>{label}</SelectLabel>}
                  <SelectControl placeholder={placeholder} />
                  <SelectContent>{children}</SelectContent>
                  <SelectHiddenSelect />
                </div>
              )}
            </Slot>
          </UnregisterStaticItemContext.Provider>
        </RegisterStaticItemContext.Provider>
      </DisplayValueContext.Provider>
    </ApiContext.Provider>
  );
}

export function SelectLabel({
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
        <Label className={cn(selectLabel, className)}>{children}</Label>
      )}
    </Slot>
  );
}

export function SelectControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(selectControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SelectTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button variant="ghost" className={cn(selectTrigger, className)}>
          {children}
          <SelectClearTrigger>Clear</SelectClearTrigger>
          <SelectIndicator />
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function SelectValueText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"input"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const displayValue = useContext(DisplayValueContext);

  return (
    <Slot
      className={cn(selectValueText, className)}
      {...api?.getValueTextProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>{displayValue || props.placeholder}</div>
      )}
    </Slot>
  );
}

export function SelectIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(selectIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>{children ?? <ChevronDownIcon className="size-3.5" />}</div>
      )}
    </Slot>
  );
}

export function SelectClearTrigger({
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
        <span className={cn(selectClearTrigger, className)}>{children}</span>
      )}
    </Slot>
  );
}

export function SelectPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(selectPositioner, className)}
      {...api?.getPositionerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SelectContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <SelectPositioner>
        <Slot {...api?.getContentProps()} {...props}>
          {asChild ? (
            children
          ) : (
            <Box raised="single" className={cn(selectContent, className)}>
              <div>{children}</div>
            </Box>
          )}
        </Slot>
      </SelectPositioner>
    </Portal>
  );
}

export function SelectItemGroup({
  children,
  className,
  asChild = false,
  label,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean; label?: string }) {
  const api = useContext(ApiContext);
  const itemGroupId = { id: useId() };

  return (
    <ItemGroupContext.Provider value={itemGroupId}>
      <Slot
        className={cn(selectItemGroup, className)}
        {...api?.getItemGroupProps(itemGroupId)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {label && <SelectItemGroupLabel>{label}</SelectItemGroupLabel>}
            {children}
          </div>
        )}
      </Slot>
    </ItemGroupContext.Provider>
  );
}

export function SelectItemGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemGroupId = useContext(ItemGroupContext);

  return (
    <Slot
      className={cn(selectItemGroupLabel, className)}
      {...api?.getItemGroupLabelProps({
        htmlFor: itemGroupId?.id!,
      })}
      {...props}
    >
      {asChild ? children : <label>{children}</label>}
    </Slot>
  );
}

export function SelectItem({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & ItemProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <ItemContext.Provider value={props}>
      <Slot
        className={cn(selectItem, className)}
        {...api?.getItemProps(props)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children}
            <SelectItemIndicator />
          </div>
        )}
      </Slot>
    </ItemContext.Provider>
  );
}

export function SelectItemText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(selectItemText, className)}
      {...api?.getItemTextProps(item!)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SelectItemIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn(selectItemIndicator, className)}
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

export function SelectHiddenSelect({
  className,
  ...props
}: React.ComponentProps<"select">) {
  const api = useContext(ApiContext);

  return (
    <select
      className={cn(selectHiddenSelect, className)}
      {...api?.getHiddenSelectProps()}
      {...props}
    />
  );
}
          `}
        </PreviewCode>
      </div>
      <div id="usage" className="mt-10">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import {
  SelectRoot,
  SelectItemGroup,
  SelectItem,
} from "@/components/ui/select";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<SelectRoot label="Single" placeholder="Select a Framework" className="w-56">
  <SelectItemGroup label="Frameworks">
    <SelectItem value="React" />
    <SelectItem value="Solid" />
    <SelectItem value="Vue" />
    <SelectItem value="Svelte" />
    <SelectItem value="Vanilla" text="Vanilla JS" />
  </SelectItemGroup>
</SelectRoot>
                    `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
