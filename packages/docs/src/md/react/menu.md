# Menu

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
function Preview() {
  const [react, setReact] = useState(false);
    const [solid, setSolid] = useState(false);
    const [vue, setVue] = useState(false);
    const [svelte, setSvelte] = useState(false);
    const [value, setValue] = useState("React");

  return (
    <>
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
    </>
  );
}
render(<Preview />)
```

## Dependency

```bash
npm install lucide-react @zag-js/menu @zag-js/react
```

## Component

```tsx
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
const MenuGroupContext = createContext<string | null>(null);

export function MenuRoot({
  children,
  className,
  asChild = false,
  closeOnSelect = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(menu.machine, {
    ...props,
    closeOnSelect,
    id: useId(),
  });
  const api = menu.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot className={cn(menuRoot, className)} {...props}>
        {asChild ? (
          children
        ) : (
          <div>
            {children}
          </div>
        )}
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
        <Button variant="ghost" className={cn(menuTrigger, className)}>
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

  if (!api?.open) return null;

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

  const content = (
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

  return <MenuPositioner>{content}</MenuPositioner>;
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
      {asChild ? (
        children
      ) : (
        <div>
          <div>{children}</div>
          <div>{shortcut}</div>
        </div>
      )}
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
      {...api?.getTriggerItemProps(api!)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          <div>{children}</div>
          <ChevronRight data-part="nested-menu-chevron" />
        </div>
      )}
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
    <div
      className={cn(menuItem, className)}
      {...api?.getOptionItemProps({
        ...props,
        type,
      })}
      {...props}
    >
      <div>
        <span data-part="item-indicator" {...api?.getItemIndicatorProps(props)}>
          <Check />
        </span>
        {children}
      </div>
      <div>{shortcut}</div>
    </div>
  );
}

export function MenuRadioItemGroup({
  children,
  className,
  asChild = false,
  label,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean; label?: string }) {
  const api = useContext(ApiContext);
  const id = useId();

  return (
    <MenuGroupContext.Provider value={id}>
      <Slot
        className={cn(menuRadioItemGroup, className)}
        {...api?.getItemGroupProps({ id })}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {label && <MenuItemGroupLabel>{label}</MenuItemGroupLabel>}
            {children}
          </div>
        )}
      </Slot>
    </MenuGroupContext.Provider>
  );
}

export function MenuItemGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const id = useContext(MenuGroupContext);

  return (
    <Slot
      className={cn(menuItemGroupLabel, className)}
      {...api?.getItemGroupLabelProps({ htmlFor: id! })}
      {...props}
    >
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
    <div
      className={cn(menuItem, className)}
      {...api?.getOptionItemProps({
        ...props,
        type,
      })}
      {...props}
    >
      <div>
        <span data-part="item-indicator" {...api?.getItemIndicatorProps(props)}>
          <Dot />
        </span>
        {children}
      </div>
      <div>{shortcut}</div>
    </div>
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
```

## Usage

```tsx
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
```

```tsx
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
```

## Examples

### Example 1

```tsx
function Preview1() {
  const [react, setReact] = useState(false);
    const [solid, setSolid] = useState(false);
    const [vue, setVue] = useState(false);
    const [svelte, setSvelte] = useState(false);
    const [value, setValue] = useState("React");

  return (
    <>
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
    </>
  );
}
render(<Preview1 />)
```

### Example 2

```tsx
function Preview2() {
  const [react, setReact] = useState(false);
    const [solid, setSolid] = useState(false);
    const [vue, setVue] = useState(false);
    const [svelte, setSvelte] = useState(false);
    const [value, setValue] = useState("React");

  return (
    <>
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
    </>
  );
}
render(<Preview2 />)
```

### Example 3

```tsx
function Preview3() {
  const [react, setReact] = useState(false);
    const [solid, setSolid] = useState(false);
    const [vue, setVue] = useState(false);
    const [svelte, setSvelte] = useState(false);
    const [value, setValue] = useState("React");

  return (
    <>
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
    </>
  );
}
render(<Preview3 />)
```

### Example 4

```tsx
function Preview4() {
  const [react, setReact] = useState(false);
    const [solid, setSolid] = useState(false);
    const [vue, setVue] = useState(false);
    const [svelte, setSvelte] = useState(false);
    const [value, setValue] = useState("React");

  return (
    <>
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
    </>
  );
}
render(<Preview4 />)
```

### Example 5

```tsx
function Preview5() {
  const [react, setReact] = useState(false);
    const [solid, setSolid] = useState(false);
    const [vue, setVue] = useState(false);
    const [svelte, setSvelte] = useState(false);
    const [value, setValue] = useState("React");

  return (
    <>
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
    </>
  );
}
render(<Preview5 />)
```

