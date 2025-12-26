import {
  SelectRoot,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
} from "@/components/ui/select";
import * as select from "@zag-js/select";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

const comboboxData = [
  { label: "React", code: "react" },
  { label: "Solid", code: "solid" },
  { label: "Vue", code: "vue" },
  { label: "Svelte", code: "svelte" },
];

const timezoneData = [
  {
    label: "North America",
    items: [
      { value: "est", label: "Eastern Standard Time (EST)" },
      { value: "cst", label: "Central Standard Time (CST)" },
      { value: "mst", label: "Mountain Standard Time (MST)" },
      { value: "pst", label: "Pacific Standard Time (PST)" },
      { value: "akst", label: "Alaska Standard Time (AKST)" },
      { value: "hst", label: "Hawaii Standard Time (HST)" },
    ],
  },
  {
    label: "Europe & Africa",
    items: [
      { value: "gmt", label: "Greenwich Mean Time (GMT)" },
      { value: "cet", label: "Central European Time (CET)" },
      { value: "eet", label: "Eastern European Time (EET)" },
      { value: "west", label: "Western European Summer Time (WEST)" },
      { value: "cat", label: "Central Africa Time (CAT)" },
      { value: "eat", label: "East Africa Time (EAT)" },
    ],
  },
  {
    label: "Asia",
    items: [
      { value: "msk", label: "Moscow Time (MSK)" },
      { value: "ist", label: "India Standard Time (IST)" },
      { value: "cst_china", label: "China Standard Time (CST)" },
      { value: "jst", label: "Japan Standard Time (JST)" },
      { value: "kst", label: "Korea Standard Time (KST)" },
      {
        value: "ist_indonesia",
        label: "Indonesia Central Standard Time (WITA)",
      },
    ],
  },
  {
    label: "Australia & Pacific",
    items: [
      { value: "awst", label: "Australian Western Standard Time (AWST)" },
      { value: "acst", label: "Australian Central Standard Time (ACST)" },
      { value: "aest", label: "Australian Eastern Standard Time (AEST)" },
      { value: "nzst", label: "New Zealand Standard Time (NZST)" },
      { value: "fjt", label: "Fiji Time (FJT)" },
    ],
  },
  {
    label: "South America",
    items: [
      { value: "art", label: "Argentina Time (ART)" },
      { value: "bot", label: "Bolivia Time (BOT)" },
      { value: "brt", label: "Brasilia Time (BRT)" },
      { value: "clt", label: "Chile Standard Time (CLT)" },
    ],
  },
];

function Main() {
  const collection = select.collection({
    items: comboboxData,
    itemToValue: (item) => item.label,
  });

  const collectionTimezone = select.collection({
    items: timezoneData.flatMap((region) =>
      region.items.map((item) => ({
        region: region.label,
        value: item.value,
        label: item.label,
      }))
    ),
  });

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <SelectRoot className="w-56" collection={collection}>
                  <SelectLabel>Single</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Select a Framework" />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    <SelectItemGroup>
                      <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
                      {collection.items.map((item) => (
                        <SelectItem key={item.code} item={item}>
                          <SelectItemText>{item.label}</SelectItemText>
                        </SelectItem>
                      ))}
                    </SelectItemGroup>
                  </SelectContent>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot className="w-56" collection={collection}>
  <SelectLabel>Single</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Framework" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    <SelectItemGroup>
      <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
      {collection.items.map((item) => (
        <SelectItem key={item.code} item={item}>
          <SelectItemText>{item.label}</SelectItemText>
        </SelectItem>
      ))}
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
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
import { createContext, useContext, useId } from "react";
import * as select from "@zag-js/select";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props, ItemGroupProps, ItemProps } from "@zag-js/select";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);
const ItemGroupContext = createContext<ItemGroupProps | undefined>(undefined);
const ItemContext = createContext<ItemProps | undefined>(undefined);

export function SelectRoot({
  children,
  className,
  multiple = false,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(select.machine, {
    multiple,
    ...props,
    id: useId(),
  });

  const api = select.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(selectRoot, className)}
        data-multiple={multiple}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children}
            <SelectHiddenSelect />
          </div>
        )}
      </Slot>
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
        <Button className={cn(selectTrigger, className)}>
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

  return (
    <Slot
      className={cn(selectValueText, className)}
      {...api?.getValueTextProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>{api?.valueAsString || props.placeholder}</div>
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
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemGroupId = { id: useId() };

  return (
    <ItemGroupContext.Provider value={itemGroupId}>
      <Slot
        className={cn(selectItemGroup, className)}
        {...api?.getItemGroupProps(itemGroupId)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
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
        <SectionContent>
          Update the import paths to match your project setup.
        </SectionContent>
      </div>
      <div id="usage">
        <SectionTitle>Usage</SectionTitle>
        <PreviewCode>
          {`
import {
  SelectRoot,
  SelectLabel,
  SelectControl,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItem,
  SelectItemText,
} from "@/components/ui/select";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<SelectRoot className="w-56" collection={collection}>
  <SelectLabel>Single</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Framework" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    <SelectItemGroup>
      <SelectItemGroupLabel>
        Frameworks
      </SelectItemGroupLabel>
      {collection.items.map((item) => (
        <SelectItem key={item.code} item={item}>
          <SelectItemText>{item.label}</SelectItemText>
        </SelectItem>
      ))}
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>
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
                <SelectRoot className="w-56" collection={collection} multiple>
                  <SelectLabel>Multiple</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Select a Framework" />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    <SelectItemGroup>
                      <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
                      {collection.items.map((item) => (
                        <SelectItem key={item.code} item={item}>
                          <SelectItemText>{item.label}</SelectItemText>
                        </SelectItem>
                      ))}
                    </SelectItemGroup>
                  </SelectContent>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot className="w-56" collection={collection} multiple>
  <SelectLabel>Multiple</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Framework" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    <SelectItemGroup>
      <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
      {collection.items.map((item) => (
        <SelectItem key={item.code} item={item}>
          <SelectItemText>{item.label}</SelectItemText>
        </SelectItem>
      ))}
    </SelectItemGroup>
  </SelectContent>
</SelectRoot>
                      `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <SelectRoot
                  className="w-56"
                  collection={collectionTimezone}
                  multiple
                >
                  <SelectLabel>Scrollable</SelectLabel>
                  <SelectControl>
                    <SelectTrigger>
                      <SelectValueText placeholder="Select a Timezone" />
                    </SelectTrigger>
                  </SelectControl>
                  <SelectContent>
                    {timezoneData.map((item) => (
                      <SelectItemGroup key={item.label}>
                        <SelectItemGroupLabel>
                          {item.label}
                        </SelectItemGroupLabel>
                        {item.items.map((item) => (
                          <SelectItem key={item.value} item={item.value}>
                            <SelectItemText>{item.label}</SelectItemText>
                          </SelectItem>
                        ))}
                      </SelectItemGroup>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SelectRoot className="w-56" collection={collectionTimezone} multiple>
  <SelectLabel>Scrollable</SelectLabel>
  <SelectControl>
    <SelectTrigger>
      <SelectValueText placeholder="Select a Timezone" />
    </SelectTrigger>
  </SelectControl>
  <SelectContent>
    {timezoneData.map((item) => (
      <SelectItemGroup key={item.label}>
        <SelectItemGroupLabel>{item.label}</SelectItemGroupLabel>
        {item.items.map((item) => (
          <SelectItem key={item.value} item={item.value}>
            <SelectItemText>{item.label}</SelectItemText>
          </SelectItem>
        ))}
      </SelectItemGroup>
    ))}
  </SelectContent>
</SelectRoot>
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
