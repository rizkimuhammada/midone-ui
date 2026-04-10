import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuSeparator,
  MenuTriggerItem,
  MenuRadioItemGroup,
  MenuRadioItem,
} from "@/components/ui/menu";
import { useState } from "react";
import { Activity, Layout, Zap, MapPin } from "lucide-react";

function Main() {
  const [react, setReact] = useState(false);
  const [solid, setSolid] = useState(false);
  const [vue, setVue] = useState(false);
  const [svelte, setSvelte] = useState(false);
  const [value, setValue] = useState("React");

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-2">
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot className="w-56">
            <MenuTrigger>Open menu</MenuTrigger>
            <MenuContent>
              <MenuItem value="react">
                <Activity className="size-4 stroke-1.5" /> React
              </MenuItem>
              <MenuItem value="solid">
                <Layout className="size-4 stroke-1.5" /> Solid
              </MenuItem>
              <MenuItem value="vue">
                <Zap className="size-4 stroke-1.5" /> Vue
              </MenuItem>
              <MenuItem value="svelte">
                <MapPin className="size-4 stroke-1.5" /> Svelte
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot className="w-56">
            <MenuTrigger>Open menu</MenuTrigger>
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
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot className="w-56">
            <MenuTrigger>Open menu</MenuTrigger>
            <MenuContent>
              <MenuItem shortcut="⇧⌘P" value="react">
                {" "}
                React{" "}
              </MenuItem>
              <MenuItem shortcut="⌘B" value="solid">
                {" "}
                Solid{" "}
              </MenuItem>
              <MenuItem shortcut="⌘S" value="vue">
                {" "}
                Vue{" "}
              </MenuItem>
              <MenuItem shortcut="⌘K" value="svelte">
                {" "}
                Svelte{" "}
              </MenuItem>
              <MenuSeparator />
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
              <MenuItem shortcut="⇧⌘Q" value="svelte">
                {" "}
                Svelte{" "}
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot className="w-56">
            <MenuTrigger>Open menu</MenuTrigger>
            <MenuContent>
              <MenuItem shortcut="⇧⌘P" value="react">
                {" "}
                React{" "}
              </MenuItem>
              <MenuItem shortcut="⌘B" value="solid">
                {" "}
                Solid{" "}
              </MenuItem>
              <MenuItem shortcut="⌘S" value="vue">
                {" "}
                Vue{" "}
              </MenuItem>
              <MenuItem shortcut="⌘K" value="svelte">
                {" "}
                Svelte{" "}
              </MenuItem>
              <MenuRoot
                positioning={{
                  placement: "right-start",
                  gutter: 12,
                }}
              >
                <MenuTriggerItem>Frameworks</MenuTriggerItem>
                <MenuContent>
                  <MenuItem value="react">React</MenuItem>
                  <MenuItem value="solid">Solid</MenuItem>
                  <MenuItem value="vue">Vue</MenuItem>
                  <MenuItem value="svelte">Svelte</MenuItem>
                </MenuContent>
              </MenuRoot>
              <MenuSeparator />
              <MenuItem disabled value="react">
                {" "}
                React{" "}
              </MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
              <MenuItem shortcut="⇧⌘Q" value="svelte">
                {" "}
                Svelte{" "}
              </MenuItem>
            </MenuContent>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot className="w-56">
            <MenuTrigger>Open menu</MenuTrigger>
            <MenuContent>
              <MenuCheckboxItem
                checked={react}
                onCheckedChange={(details) => setReact(!!details.checked)}
                value="react"
              >
                React
              </MenuCheckboxItem>
              <MenuCheckboxItem
                checked={solid}
                onCheckedChange={(details) => setSolid(!!details.checked)}
                value="solid"
              >
                Solid
              </MenuCheckboxItem>
              <MenuCheckboxItem
                checked={vue}
                onCheckedChange={(details) => setVue(!!details.checked)}
                value="vue"
              >
                Vue
              </MenuCheckboxItem>
              <MenuCheckboxItem
                checked={svelte}
                onCheckedChange={(details) => setSvelte(!!details.checked)}
                value="svelte"
              >
                Svelte
              </MenuCheckboxItem>
            </MenuContent>
          </MenuRoot>
        </div>
        <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
          <MenuRoot className="w-56">
            <MenuTrigger>Open menu</MenuTrigger>
            <MenuContent>
              <MenuRadioItemGroup label="Frameworks">
                {["React", "Solid", "Vue", "Svelte"].map((framework) => (
                  <MenuRadioItem
                    key={framework}
                    value={framework}
                    checked={framework === value}
                    onCheckedChange={(details) =>
                      details.checked ? setValue(framework) : ""
                    }
                  >
                    {framework}
                  </MenuRadioItem>
                ))}
              </MenuRadioItemGroup>
            </MenuContent>
          </MenuRoot>
        </div>
      </div>
    </div>
  );
}

export default Main;
