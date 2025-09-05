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
  ComboboxItemIndicator,
} from "@/components/ui/combobox";
import { useListCollection } from "@ark-ui/react/combobox";
import { useFilter } from "@ark-ui/react/locale";
import { Combobox } from "@ark-ui/react/combobox";
import { useState } from "react";

function Main() {
  const [stateSingle, setStateSingle] = useState([""]);
  const [stateMultiple, setStateMultiple] = useState([""]);
  const [stateTimezone, setStateTimezone] = useState([""]);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte"],
    filter: contains,
  });

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue);
  };

  const collectionTimezone = useListCollection({
    initialItems: [
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
    ],
    filter: contains,
  });

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ComboboxRoot
            collection={collection}
            onInputValueChange={handleInputChange}
            value={stateSingle}
            onValueChange={(details) => setStateSingle(details.value)}
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
                  <ComboboxItem key={item} item={item}>
                    <ComboboxItemText>{item}</ComboboxItemText>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                  </ComboboxItem>
                ))}
              </ComboboxItemGroup>
            </ComboboxContent>
          </ComboboxRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ComboboxRoot
            collection={collection}
            onInputValueChange={handleInputChange}
            value={stateMultiple}
            onValueChange={(details) => setStateMultiple(details.value)}
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
                  <ComboboxItem key={item} item={item}>
                    <ComboboxItemText>{item}</ComboboxItemText>
                    <ComboboxItemIndicator>✓</ComboboxItemIndicator>
                  </ComboboxItem>
                ))}
              </ComboboxItemGroup>
            </ComboboxContent>
          </ComboboxRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ComboboxRoot
            collection={collection}
            onInputValueChange={handleInputChange}
            value={stateTimezone}
            onValueChange={(details) => setStateTimezone(details.value)}
            className="w-56"
            multiple
          >
            <ComboboxLabel>Scrollable</ComboboxLabel>
            <ComboboxControl>
              <ComboboxTrigger />
            </ComboboxControl>
            <ComboboxContent>
              <ComboboxInput placeholder="Search frameworks..." />
              {collectionTimezone.collection.items.map((item) => (
                <ComboboxItemGroup key={item.label}>
                  <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
                  {item.items.map((item) => (
                    <ComboboxItem key={item.value} item={item.value}>
                      <ComboboxItemText>{item.label}</ComboboxItemText>
                      <ComboboxItemIndicator>✓</ComboboxItemIndicator>
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
