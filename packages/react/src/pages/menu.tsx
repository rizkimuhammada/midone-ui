import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuSeparator,
  MenuTriggerItem,
  MenuRadioItemGroup,
  MenuItemGroupLabel,
  MenuRadioItem,
} from "@/components/ui/menu";
import { useState } from "react";

function Main() {
  const [react, setReact] = useState(false);
  const [solid, setSolid] = useState(false);
  const [vue, setVue] = useState(false);
  const [svelte, setSvelte] = useState(false);
  const [value, setValue] = useState("react");

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot>
            <MenuTrigger className="w-56">Open menu</MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="solid">Solid</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
                <MenuItem value="svelte">Svelte</MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot>
            <MenuTrigger className="w-56">Open menu</MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="solid">Solid</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
                <MenuItem value="svelte">Svelte</MenuItem>
                <MenuSeparator />
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="solid">Solid</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
                <MenuItem value="svelte">Svelte</MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot>
            <MenuTrigger className="w-56">Open menu</MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItem shortcut="⇧⌘P" value="react">
                  React
                </MenuItem>
                <MenuItem shortcut="⌘B" value="solid">
                  Solid
                </MenuItem>
                <MenuItem shortcut="⌘S" value="vue">
                  Vue
                </MenuItem>
                <MenuItem shortcut="⌘K" value="svelte">
                  Svelte
                </MenuItem>
                <MenuSeparator />
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="solid">Solid</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
                <MenuItem shortcut="⇧⌘Q" value="svelte">
                  Svelte
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot>
            <MenuTrigger className="w-56">Open menu</MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuItem shortcut="⇧⌘P" value="react">
                  React
                </MenuItem>
                <MenuItem shortcut="⌘B" value="solid">
                  Solid
                </MenuItem>
                <MenuItem shortcut="⌘S" value="vue">
                  Vue
                </MenuItem>
                <MenuItem shortcut="⌘K" value="svelte">
                  Svelte
                </MenuItem>
                <MenuRoot
                  positioning={{ placement: "right-start", gutter: 12 }}
                >
                  <MenuTriggerItem>Frameworks</MenuTriggerItem>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                      <MenuItem value="svelte">Svelte</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
                <MenuSeparator />
                <MenuItem disabled value="react">
                  React
                </MenuItem>
                <MenuItem value="solid">Solid</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
                <MenuItem shortcut="⇧⌘Q" value="svelte">
                  Svelte
                </MenuItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot>
            <MenuTrigger className="w-56">Open menu</MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuCheckboxItem
                  checked={react}
                  onCheckedChange={setReact}
                  value="false"
                >
                  React
                </MenuCheckboxItem>
                <MenuCheckboxItem
                  checked={solid}
                  onCheckedChange={setSolid}
                  value="false"
                >
                  Solid
                </MenuCheckboxItem>
                <MenuCheckboxItem
                  checked={vue}
                  onCheckedChange={setVue}
                  value="false"
                >
                  Vue
                </MenuCheckboxItem>
                <MenuCheckboxItem
                  checked={svelte}
                  onCheckedChange={setSvelte}
                  value="false"
                >
                  Svelte
                </MenuCheckboxItem>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot>
            <MenuTrigger className="w-56">Open menu</MenuTrigger>
            <MenuPositioner>
              <MenuContent>
                <MenuRadioItemGroup
                  value={value}
                  onValueChange={(e) => setValue(e.value)}
                >
                  <MenuItemGroupLabel>Frameworks</MenuItemGroupLabel>
                  {["React", "Solid", "Vue", "Svelte"].map((framework) => (
                    <MenuRadioItem key={framework} value={framework}>
                      {framework}
                    </MenuRadioItem>
                  ))}
                </MenuRadioItemGroup>
              </MenuContent>
            </MenuPositioner>
          </MenuRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
