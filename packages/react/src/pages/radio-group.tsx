import { MoveUpRight } from "lucide-react";
import {
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
} from "@/components/ui/radio-group";
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
  const frameworks = ["React", "Solid", "Vue", "Svelte"];

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Radio Group</Title>
            <Subtitle>
              A set of options where users can pick just one choice at a time.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/radio-group"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/radio-group#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <RadioGroupRoot defaultValue="React">
                      <RadioGroupLabel>Framework</RadioGroupLabel>
                      {frameworks.map((framework) => (
                        <RadioGroupItem key={framework} value={framework}>
                          <RadioGroupItemControl />
                          <RadioGroupItemText>{framework}</RadioGroupItemText>
                        </RadioGroupItem>
                      ))}
                    </RadioGroupRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
const frameworks = ["React", "Solid", "Vue", "Svelte"];
                    
<RadioGroupRoot defaultValue="React">
  <RadioGroupLabel>Framework</RadioGroupLabel>
  {frameworks.map((framework) => (
    <RadioGroupItem key={framework} value={framework}>
      <RadioGroupItemControl />
      <RadioGroupItemText>{framework}</RadioGroupItemText>
    </RadioGroupItem>
  ))}
</RadioGroupRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>
              add @zag-js/react @zag-js/radio-group
            </InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/radio-group/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import {
  radioGroupRoot,
  radioGroupLabel,
  radioGroupIndicator,
  radioGroupItem,
  radioGroupItemText,
  radioGroupItemControl,
  radioGroupItemHiddenInput,
} from "@midoneui/core/styles/radio-group.styles";
import { label } from "@midoneui/core/styles/label.styles";
import { createContext, useContext, useId } from "react";
import { Dot } from "lucide-react";
import * as radio from "@zag-js/radio-group";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props, ItemProps } from "@zag-js/radio-group";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);
const ItemContext = createContext<ItemProps | undefined>(undefined);

export function RadioGroupRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(radio.machine, {
    ...props,
    id: useId(),
  });

  const api = radio.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(radioGroupRoot, className)}
        {...api?.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {children}
            <RadioGroupIndicator>
              <Dot />
            </RadioGroupIndicator>
          </div>
        )}
      </Slot>
    </ApiContext.Provider>
  );
}

export function RadioGroupLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn([label, radioGroupLabel, className])}
      {...api?.getLabelProps()}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function RadioGroupIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(radioGroupIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function RadioGroupItem({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & ItemProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <ItemContext.Provider value={props}>
      <Slot
        className={cn(radioGroupItem, className)}
        {...api?.getItemProps(props)}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <label>
            {children}
            <RadioGroupItemHiddenInput />
          </label>
        )}
      </Slot>
    </ItemContext.Provider>
  );
}

export function RadioGroupItemText({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemProps = useContext(ItemContext);

  return (
    <Slot
      className={cn(radioGroupItemText, className)}
      {...api?.getItemTextProps(itemProps!)}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function RadioGroupItemControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const itemProps = useContext(ItemContext);

  return (
    <Slot
      className={cn(radioGroupItemControl, className)}
      {...api?.getItemControlProps(itemProps!)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function RadioGroupItemHiddenInput({
  children,
  className,
  ...props
}: React.ComponentProps<"input">) {
  const api = useContext(ApiContext);
  const itemProps = useContext(ItemContext);

  return (
    <input
      className={cn(radioGroupItemHiddenInput, className)}
      {...api?.getItemHiddenInputProps(itemProps!)}
      {...props}
    />
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
  RadioGroupRoot,
  RadioGroupLabel,
  RadioGroupItem,
  RadioGroupItemText,
  RadioGroupItemControl,
} from "@/components/ui/radio-group";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<RadioGroupRoot defaultValue="React">
  <RadioGroupLabel>Framework</RadioGroupLabel>
  {frameworks.map((framework) => (
    <RadioGroupItem key={framework} value={framework}>
      <RadioGroupItemControl />
      <RadioGroupItemText>{framework}</RadioGroupItemText>
    </RadioGroupItem>
  ))}
</RadioGroupRoot>
              `}
            </PreviewCode>
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
      </Menu>
    </>
  );
}

export default Main;
