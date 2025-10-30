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
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
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
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
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
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
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
        </div>
      </div>
    </div>
  );
}

export default Main;
