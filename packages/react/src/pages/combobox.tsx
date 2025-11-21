import { MoveUpRight } from "lucide-react";
import {
  ComboboxRoot,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemText,
} from "@/components/ui/combobox";
import * as combobox from "@zag-js/combobox";
import { useState } from "react";
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

  const [stateSingle, setStateSingle] = useState([""]);
  const [stateMultiple, setStateMultiple] = useState([""]);
  const [stateTimezone, setStateTimezone] = useState([""]);
  const [options, setOptions] = useState(comboboxData);
  const [timezoneOptions, setTimezoneOptions] = useState(timezoneData);

  const collection = combobox.collection({
    items: options,
    itemToValue: (item) => item.label,
  });

  const collectionTimezone = combobox.collection({
    items: timezoneOptions.flatMap((region) =>
      region.items.map((item) => ({
        region: region.label,
        value: item.value,
        label: item.label,
      }))
    ),
  });

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Combobox</Title>
            <Subtitle>
              A dropdown that lets users pick an option, with search support to
              help them find it quickly.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zzgjsom/nreact/react/react/combobox"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zzgjsom/nreact/react/react/combobox#api-reference"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <ComboboxRoot
                      collection={collection}
                      value={stateSingle}
                      onValueChange={(details) => {
                        setStateSingle(details.value);
                      }}
                      onOpenChange={() => {
                        setOptions(comboboxData);
                      }}
                      onInputValueChange={({ inputValue }) => {
                        const filtered = comboboxData.filter((item) =>
                          item.label
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        );
                        setOptions(
                          filtered.length > 0 ? filtered : comboboxData
                        );
                      }}
                      className="w-56"
                    >
                      <ComboboxLabel>Single</ComboboxLabel>
                      <ComboboxControl>
                        <ComboboxTrigger />
                      </ComboboxControl>
                      <ComboboxContent>
                        <ComboboxInput placeholder="Search frameworks..." />
                        <ComboboxItemGroup>
                          <ComboboxItemGroupLabel>
                            Frameworks
                          </ComboboxItemGroupLabel>
                          {collection.items.map((item) => (
                            <ComboboxItem key={item.code} item={item}>
                              <ComboboxItemText>{item.label}</ComboboxItemText>
                            </ComboboxItem>
                          ))}
                        </ComboboxItemGroup>
                      </ComboboxContent>
                    </ComboboxRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
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

const [stateSingle, setStateSingle] = useState([""]);
const [stateMultiple, setStateMultiple] = useState([""]);
const [stateTimezone, setStateTimezone] = useState([""]);
const [options, setOptions] = useState(comboboxData);
const [timezoneOptions, setTimezoneOptions] = useState(timezoneData);

const collection = combobox.collection({
  items: options,
  itemToValue: (item) => item.label,
});

const collectionTimezone = combobox.collection({
  items: timezoneOptions.flatMap((region) =>
    region.items.map((item) => ({
      region: region.label,
      value: item.value,
      label: item.label,
    }))
  ),
});

<ComboboxRoot
  collection={collection}
  value={stateSingle}
  onValueChange={(details) => {
    setStateSingle(details.value);
  }}
  onOpenChange={() => {
    setOptions(comboboxData);
  }}
  onInputValueChange={({ inputValue }) => {
    const filtered = comboboxData.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptions(filtered.length > 0 ? filtered : comboboxData);
  }}
  className="w-56"
>
  <ComboboxLabel>Single</ComboboxLabel>
  <ComboboxControl>
    <ComboboxTrigger />
  </ComboboxControl>
  <ComboboxContent>
    <ComboboxInput placeholder="Search frameworks..." />
    <ComboboxItemGroup>
      <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
      {collection.items.map((item) => (
        <ComboboxItem key={item.code} item={item}>
          <ComboboxItemText>{item.label}</ComboboxItemText>
        </ComboboxItem>
      ))}
    </ComboboxItemGroup>
  </ComboboxContent>
</ComboboxRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/react @zag-js/combobox</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/combobox/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDownIcon } from "lucide-react";
import { createContext, useContext, useId } from "react";
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
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(combobox.machine, {
    multiple,
    selectionBehavior,
    onOpenChange,
    onInputValueChange,
    onValueChange,
    ...props,
    id: useId(),
  });

  const api = combobox.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(comboboxRoot, className)}
        data-multiple={multiple}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
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

  return (
    <Slot
      className={cn(comboboxControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
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
        <Button className={cn(comboboxTrigger, className)}>
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
  ...props
}: React.ComponentProps<"div"> & ItemProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <ItemContext.Provider value={props}>
      <Slot
        className={cn(comboboxItem, className)}
        {...api?.getItemProps(props)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children}
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
  ComboboxRoot,
  ComboboxLabel,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItem,
  ComboboxItemText,
} from "@/components/ui/combobox";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<ComboboxRoot
  collection={collection}
  value={stateSingle}
  onValueChange={(details) => {
    setStateSingle(details.value);
  }}
  onOpenChange={() => {
    setOptions(comboboxData);
  }}
  onInputValueChange={({ inputValue }) => {
    const filtered = comboboxData.filter((item) =>
      item.label
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    );
    setOptions(
      filtered.length > 0 ? filtered : comboboxData
    );
  }}
  className="w-56"
>
  <ComboboxLabel>Single</ComboboxLabel>
  <ComboboxControl>
    <ComboboxTrigger />
  </ComboboxControl>
  <ComboboxContent>
    <ComboboxInput placeholder="Search frameworks..." />
    <ComboboxItemGroup>
      <ComboboxItemGroupLabel>
        Frameworks
      </ComboboxItemGroupLabel>
      {collection.items.map((item) => (
        <ComboboxItem key={item.code} item={item}>
          <ComboboxItemText>{item.label}</ComboboxItemText>
        </ComboboxItem>
      ))}
    </ComboboxItemGroup>
  </ComboboxContent>
</ComboboxRoot>
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
                    <ComboboxRoot
                      collection={collection}
                      value={stateMultiple}
                      onValueChange={(details) => {
                        setStateMultiple(details.value);
                      }}
                      onOpenChange={() => {
                        setOptions(comboboxData);
                      }}
                      onInputValueChange={({ inputValue }) => {
                        const filtered = comboboxData.filter((item) =>
                          item.label
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                        );
                        setOptions(
                          filtered.length > 0 ? filtered : comboboxData
                        );
                      }}
                      className="w-56"
                      multiple
                    >
                      <ComboboxLabel>Multiple</ComboboxLabel>
                      <ComboboxControl>
                        <ComboboxTrigger />
                      </ComboboxControl>
                      <ComboboxContent>
                        <ComboboxInput placeholder="Search frameworks..." />
                        <ComboboxItemGroup>
                          <ComboboxItemGroupLabel>
                            Frameworks
                          </ComboboxItemGroupLabel>
                          {collection.items.map((item) => (
                            <ComboboxItem key={item.code} item={item}>
                              <ComboboxItemText>{item.label}</ComboboxItemText>
                            </ComboboxItem>
                          ))}
                        </ComboboxItemGroup>
                      </ComboboxContent>
                    </ComboboxRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
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

const [stateSingle, setStateSingle] = useState([""]);
const [stateMultiple, setStateMultiple] = useState([""]);
const [stateTimezone, setStateTimezone] = useState([""]);
const [options, setOptions] = useState(comboboxData);
const [timezoneOptions, setTimezoneOptions] = useState(timezoneData);

const collection = combobox.collection({
  items: options,
  itemToValue: (item) => item.label,
});

const collectionTimezone = combobox.collection({
  items: timezoneOptions.flatMap((region) =>
    region.items.map((item) => ({
      region: region.label,
      value: item.value,
      label: item.label,
    }))
  ),
});

<ComboboxRoot
  collection={collection}
  value={stateMultiple}
  onValueChange={(details) => {
    setStateMultiple(details.value);
  }}
  onOpenChange={() => {
    setOptions(comboboxData);
  }}
  onInputValueChange={({ inputValue }) => {
    const filtered = comboboxData.filter((item) =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    setOptions(filtered.length > 0 ? filtered : comboboxData);
  }}
  className="w-56"
  multiple
>
  <ComboboxLabel>Multiple</ComboboxLabel>
  <ComboboxControl>
    <ComboboxTrigger />
  </ComboboxControl>
  <ComboboxContent>
    <ComboboxInput placeholder="Search frameworks..." />
    <ComboboxItemGroup>
      <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
      {collection.items.map((item) => (
        <ComboboxItem key={item.code} item={item}>
          <ComboboxItemText>{item.label}</ComboboxItemText>
        </ComboboxItem>
      ))}
    </ComboboxItemGroup>
  </ComboboxContent>
</ComboboxRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <ComboboxRoot
                      collection={collectionTimezone}
                      value={stateTimezone}
                      onValueChange={(details) => {
                        setStateTimezone(details.value);
                      }}
                      onOpenChange={() => {
                        setTimezoneOptions(timezoneData);
                      }}
                      onInputValueChange={({ inputValue }) => {
                        const filtered = timezoneData
                          .map((group) => {
                            const matchedItems = group.items.filter((item) =>
                              item.label
                                .toLowerCase()
                                .includes(inputValue.toLowerCase())
                            );

                            return {
                              ...group,
                              items: matchedItems,
                            };
                          })
                          .filter((group) => group.items.length > 0);

                        setTimezoneOptions(
                          filtered.length > 0 ? filtered : timezoneData
                        );
                      }}
                      className="w-56"
                      multiple
                    >
                      <ComboboxLabel>Scrollable</ComboboxLabel>
                      <ComboboxControl>
                        <ComboboxTrigger />
                      </ComboboxControl>
                      <ComboboxContent>
                        <ComboboxInput placeholder="Search frameworks..." />
                        {timezoneData.map((item) => (
                          <ComboboxItemGroup key={item.label}>
                            <ComboboxItemGroupLabel>
                              {item.label}
                            </ComboboxItemGroupLabel>
                            {item.items.map((item) => (
                              <ComboboxItem key={item.value} item={item.value}>
                                <ComboboxItemText>
                                  {item.label}
                                </ComboboxItemText>
                              </ComboboxItem>
                            ))}
                          </ComboboxItemGroup>
                        ))}
                      </ComboboxContent>
                    </ComboboxRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
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

const [stateSingle, setStateSingle] = useState([""]);
const [stateMultiple, setStateMultiple] = useState([""]);
const [stateTimezone, setStateTimezone] = useState([""]);
const [options, setOptions] = useState(comboboxData);
const [timezoneOptions, setTimezoneOptions] = useState(timezoneData);

const collection = combobox.collection({
  items: options,
  itemToValue: (item) => item.label,
});

const collectionTimezone = combobox.collection({
  items: timezoneOptions.flatMap((region) =>
    region.items.map((item) => ({
      region: region.label,
      value: item.value,
      label: item.label,
    }))
  ),
});

<ComboboxRoot
  collection={collectionTimezone}
  value={stateTimezone}
  onValueChange={(details) => {
    setStateTimezone(details.value);
  }}
  onOpenChange={() => {
    setTimezoneOptions(timezoneData);
  }}
  onInputValueChange={({ inputValue }) => {
    const filtered = timezoneData
      .map((group) => {
        const matchedItems = group.items.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase())
        );

        return {
          ...group,
          items: matchedItems,
        };
      })
      .filter((group) => group.items.length > 0);

    setTimezoneOptions(filtered.length > 0 ? filtered : timezoneData);
  }}
  className="w-56"
  multiple
>
  <ComboboxLabel>Scrollable</ComboboxLabel>
  <ComboboxControl>
    <ComboboxTrigger />
  </ComboboxControl>
  <ComboboxContent>
    <ComboboxInput placeholder="Search frameworks..." />
    {timezoneData.map((item) => (
      <ComboboxItemGroup key={item.label}>
        <ComboboxItemGroupLabel>{item.label}</ComboboxItemGroupLabel>
        {item.items.map((item) => (
          <ComboboxItem key={item.value} item={item.value}>
            <ComboboxItemText>{item.label}</ComboboxItemText>
          </ComboboxItem>
        ))}
      </ComboboxItemGroup>
    ))}
  </ComboboxContent>
</ComboboxRoot>
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
