import {
  ComboboxRoot,
  ComboboxItemGroup,
  ComboboxItem,
} from "@/components/ui/combobox";
import { useState } from "react";

function Main() {
  const [stateSingle, setStateSingle] = useState<string[]>(["React"]);
  const [stateMultiple, setStateMultiple] = useState<string[]>([]);
  const [stateTimezone, setStateTimezone] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ComboboxRoot
            label="Single"
            value={stateSingle}
            onValueChange={(details) => setStateSingle(details.value)}
            comboboxInputPlaceholder="Search frameworks..."
            className="w-56"
          >
            <ComboboxItemGroup label="Frameworks">
              <ComboboxItem value="React">React</ComboboxItem>
              <ComboboxItem value="Solid">Solid</ComboboxItem>
              <ComboboxItem value="Vue">Vue</ComboboxItem>
              <ComboboxItem value="Svelte">Svelte</ComboboxItem>
              <ComboboxItem value="Vanilla">Vanilla JS</ComboboxItem>
            </ComboboxItemGroup>
          </ComboboxRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ComboboxRoot
            label="Multiple"
            value={stateMultiple}
            onValueChange={(details) => setStateMultiple(details.value)}
            comboboxInputPlaceholder="Search frameworks..."
            className="w-56"
            multiple
          >
            <ComboboxItemGroup label="Frameworks">
              <ComboboxItem value="React">React</ComboboxItem>
              <ComboboxItem value="Solid">Solid</ComboboxItem>
              <ComboboxItem value="Vue">Vue</ComboboxItem>
              <ComboboxItem value="Svelte">Svelte</ComboboxItem>
              <ComboboxItem value="Vanilla">Vanilla JS</ComboboxItem>
            </ComboboxItemGroup>
          </ComboboxRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <ComboboxRoot
            label="Scrollable"
            value={stateTimezone}
            onValueChange={(details) => setStateTimezone(details.value)}
            comboboxInputPlaceholder="Search region..."
            className="w-56"
            multiple
          >
            <ComboboxItemGroup label="North America">
              <ComboboxItem value="est">Eastern Standard Time (EST)</ComboboxItem>
              <ComboboxItem value="cst">Central Standard Time (CST)</ComboboxItem>
              <ComboboxItem value="mst">Mountain Standard Time (MST)</ComboboxItem>
              <ComboboxItem value="pst">Pacific Standard Time (PST)</ComboboxItem>
              <ComboboxItem value="akst">Alaska Standard Time (AKST)</ComboboxItem>
              <ComboboxItem value="hst">Hawaii Standard Time (HST)</ComboboxItem>
            </ComboboxItemGroup>
            <ComboboxItemGroup label="Europe & Africa">
              <ComboboxItem value="gmt">Greenwich Mean Time (GMT)</ComboboxItem>
              <ComboboxItem value="cet">Central European Time (CET)</ComboboxItem>
              <ComboboxItem value="eet">Eastern European Time (EET)</ComboboxItem>
              <ComboboxItem value="west">Western European Summer Time (WEST)</ComboboxItem>
              <ComboboxItem value="cat">Central Africa Time (CAT)</ComboboxItem>
              <ComboboxItem value="eat">East Africa Time (EAT)</ComboboxItem>
            </ComboboxItemGroup>
            <ComboboxItemGroup label="Asia">
              <ComboboxItem value="msk">Moscow Time (MSK)</ComboboxItem>
              <ComboboxItem value="ist">India Standard Time (IST)</ComboboxItem>
              <ComboboxItem value="jst">Japan Standard Time (JST)</ComboboxItem>
              <ComboboxItem value="kst">Korea Standard Time (KST)</ComboboxItem>
            </ComboboxItemGroup>
          </ComboboxRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
