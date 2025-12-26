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
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  const [react, setReact] = useState(false);
  const [solid, setSolid] = useState(false);
  const [vue, setVue] = useState(false);
  const [svelte, setSvelte] = useState(false);
  const [value, setValue] = useState("react");

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                      <MenuItem value="svelte">Svelte</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot className="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem value="svelte">Svelte</MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/menu</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/menu/index.tsx">
          {`
import { cn } from "@midoneui/core/utils/cn";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { ChevronDown, ChevronRight, Check, Dot } from "lucide-react";
import {
  menuTrigger,
  menuIndicator,
  menuPositioner,
  menuContent,
  menuItem,
  menuSeparator,
  menuRadioItemGroup,
  menuItemGroupLabel,
  menuRoot,
} from "@midoneui/core/styles/menu.styles";
import * as menu from "@zag-js/menu";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props, OptionItemProps, ItemProps } from "@zag-js/menu";
import { Slot } from "@/components/ui/slot";
import { createContext, useContext, useId } from "react";

const ApiContext = createContext<Api | null>(null);

export function MenuRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(menu.machine, { ...props, id: useId() });
  const api = menu.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot className={cn(menuRoot, className)} {...props}>
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function MenuTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button className={cn(menuTrigger, className)}>
          {children}
          <MenuIndicator />
        </Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function MenuIndicator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {children ?? <ChevronDown />}
    </Slot>
  );
}

export function MenuPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <Slot
        className={cn(menuPositioner, className)}
        {...api?.getPositionerProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </Portal>
  );
}

export function MenuContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuContent, className)}
      {...api?.getContentProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <Box raised="single" className={cn(menuContent, className)}>
          <div>{children}</div>
        </Box>
      )}
    </Slot>
  );
}

export function MenuItem({
  children,
  shortcut,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  ItemProps & {
    shortcut?: string;
    asChild?: boolean;
  }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuItem, className)}
      {...api?.getItemProps(props)}
      {...props}
    >
      <div>{children}</div>
      <div>{shortcut}</div>
    </Slot>
  );
}

export function MenuTriggerItem({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuItem, className)}
      {...api?.getTriggerItemProps(api)}
      {...props}
    >
      <div>{children}</div>
      <ChevronRight />
    </Slot>
  );
}

export function MenuCheckboxItem({
  children,
  shortcut,
  className,
  asChild = false,
  type = "checkbox",
  ...props
}: React.ComponentProps<"div"> &
  Omit<OptionItemProps, "type"> & {
    asChild?: boolean;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuItem, className)}
      {...api?.getOptionItemProps({
        ...props,
        type,
      })}
      {...props}
    >
      <div>
        <span {...api?.getItemIndicatorProps(props)}>
          <Check />
        </span>
        {children}
      </div>
      <div>{shortcut}</div>
    </Slot>
  );
}

export function MenuRadioItemGroup({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  return (
    <Slot className={cn(menuRadioItemGroup, className)} {...props}>
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function MenuItemGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  return (
    <Slot className={cn(menuItemGroupLabel, className)} {...props}>
      {asChild ? children : <label>{children}</label>}
    </Slot>
  );
}

export function MenuRadioItem({
  children,
  shortcut,
  className,
  type = "radio",
  ...props
}: React.ComponentProps<"div"> &
  Omit<OptionItemProps, "type"> & {
    asChild?: boolean;
    shortcut?: string;
    type?: OptionItemProps["type"];
  }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuItem, className)}
      {...api?.getOptionItemProps({
        ...props,
        type,
      })}
      {...props}
    >
      <div>
        <span {...api?.getItemIndicatorProps(props)}>
          <Dot />
        </span>
        {children}
      </div>
      <div>{shortcut}</div>
    </Slot>
  );
}

export function MenuSeparator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"hr"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(menuSeparator, className)}
      {...api?.getSeparatorProps()}
      {...props}
    >
      {asChild ? children : <hr>{children}</hr>}
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
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<MenuRoot className="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuItem value="react">React</MenuItem>
      <MenuItem value="solid">Solid</MenuItem>
      <MenuItem value="vue">Vue</MenuItem>
      <MenuItem value="svelte">Svelte</MenuItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
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
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot className="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot className="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
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
                        positioning={{
                          placement: "right-start",
                          gutter: 12,
                        }}
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot className="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
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
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuCheckboxItem
                        checked={react}
                        onCheckedChange={setReact}
                        value="checked"
                      >
                        React
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        checked={solid}
                        onCheckedChange={setSolid}
                        value="checked"
                      >
                        Solid
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        checked={vue}
                        onCheckedChange={setVue}
                        value="checked"
                      >
                        Vue
                      </MenuCheckboxItem>
                      <MenuCheckboxItem
                        checked={svelte}
                        onCheckedChange={setSvelte}
                        value="checked"
                      >
                        Svelte
                      </MenuCheckboxItem>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot className="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuCheckboxItem
        checked={react}
        onCheckedChange={setReact}
        value="checked"
      >
        React
      </MenuCheckboxItem>
      <MenuCheckboxItem
        checked={solid}
        onCheckedChange={setSolid}
        value="checked"
      >
        Solid
      </MenuCheckboxItem>
      <MenuCheckboxItem
        checked={vue}
        onCheckedChange={setVue}
        value="checked"
      >
        Vue
      </MenuCheckboxItem>
      <MenuCheckboxItem
        checked={svelte}
        onCheckedChange={setSvelte}
        value="checked"
      >
        Svelte
      </MenuCheckboxItem>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <MenuRoot className="w-56">
                  <MenuTrigger>Open menu</MenuTrigger>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuRadioItemGroup>
                        <MenuItemGroupLabel>Frameworks</MenuItemGroupLabel>
                        {["React", "Solid", "Vue", "Svelte"].map(
                          (framework) => (
                            <MenuRadioItem
                              key={framework}
                              value={framework}
                              checked={framework == value}
                              onCheckedChange={(checked) =>
                                checked ? setValue(framework) : ""
                              }
                            >
                              {framework}
                            </MenuRadioItem>
                          )
                        )}
                      </MenuRadioItemGroup>
                    </MenuContent>
                  </MenuPositioner>
                </MenuRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<MenuRoot className="w-56">
  <MenuTrigger>Open menu</MenuTrigger>
  <MenuPositioner>
    <MenuContent>
      <MenuRadioItemGroup>
        <MenuItemGroupLabel>Frameworks</MenuItemGroupLabel>
        {["React", "Solid", "Vue", "Svelte"].map((framework) => (
          <MenuRadioItem
            key={framework}
            value={framework}
            checked={framework == value}
            onCheckedChange={(checked) =>
              checked ? setValue(framework) : ""
            }
          >
            {framework}
          </MenuRadioItem>
        ))}
      </MenuRadioItemGroup>
    </MenuContent>
  </MenuPositioner>
</MenuRoot>
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
