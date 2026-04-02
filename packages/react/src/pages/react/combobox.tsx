import {
  ComboboxRoot,
  ComboboxItemGroup,
  ComboboxItem,
} from "@/components/ui/combobox";
import { useState } from "react";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  const [stateSingle, setStateSingle] = useState<string[]>([]);
  const [stateMultiple, setStateMultiple] = useState<string[]>([]);
  const [stateTimezone, setStateTimezone] = useState<string[]>([]);

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <div className="flex flex-col gap-8 items-center justify-center">
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
            ),
            code: (
              <PreviewCode>
                {`
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
// Refer to the actual component file for the full code.
// The component has been refactored to support auto-rendering.
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
  ComboboxItem,
  ComboboxItemGroup,
} from "@/components/ui/combobox";
                    `}
        </PreviewCode>
        <PreviewCode>
          {`
<ComboboxRoot
  label="Frameworks"
  comboboxInputPlaceholder="Search frameworks..."
  className="w-56"
>
  <ComboboxItemGroup label="Frontend">
    <ComboboxItem value="React">React</ComboboxItem>
    <ComboboxItem value="Vue">Vue</ComboboxItem>
  </ComboboxItemGroup>
</ComboboxRoot>
                    `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
