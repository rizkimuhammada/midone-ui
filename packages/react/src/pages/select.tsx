import {
  SelectRoot,
  SelectItemGroup,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

function Main() {
  const [stateSingle, setStateSingle] = useState<string[]>([]);
  const [stateMultiple, setStateMultiple] = useState<string[]>([]);
  const [stateTimezone, setStateTimezone] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <SelectRoot
            label="Single"
            value={stateSingle}
            onValueChange={(details) => setStateSingle(details.value)}
            placeholder="Select a Framework"
            className="w-56"
          >
            <SelectItemGroup label="Frameworks">
              <SelectItem value="React" />
              <SelectItem value="Solid" />
              <SelectItem value="Vue" />
              <SelectItem value="Svelte" />
              <SelectItem value="Vanilla">Vanilla JS</SelectItem>
            </SelectItemGroup>
          </SelectRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <SelectRoot
            label="Multiple"
            value={stateMultiple}
            onValueChange={(details) => setStateMultiple(details.value)}
            placeholder="Select Frameworks"
            className="w-56"
            multiple
          >
            <SelectItemGroup label="Frameworks">
              <SelectItem value="React" />
              <SelectItem value="Solid" />
              <SelectItem value="Vue" />
              <SelectItem value="Svelte" />
              <SelectItem value="Vanilla">Vanilla JS</SelectItem>
            </SelectItemGroup>
          </SelectRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <SelectRoot
            label="Scrollable"
            value={stateTimezone}
            onValueChange={(details) => setStateTimezone(details.value)}
            placeholder="Select a Timezone"
            className="w-56"
            multiple
          >
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
        </div>
      </div>
    </div>
  );
}

export default Main;
