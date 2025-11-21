import { MoveUpRight } from "lucide-react";
import {
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
} from "@/components/ui/checkbox";
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
  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Checkbox</Title>
            <Subtitle>
              A small box users can tick on or off to select options or confirm
              choices.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/checkbox"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/checkbox#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <CheckboxRoot>
                      <CheckboxControl />
                      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
                    </CheckboxRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<CheckboxRoot>
  <CheckboxControl />
  <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
</CheckboxRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/react @zag-js/checkbox</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/checkbox/index.tsx">
              {`
import { CheckIcon } from "lucide-react";
import { cn } from "@midoneui/core/utils/cn";
import {
  checkboxRoot,
  checkboxLabel,
  checkboxControl,
  checkboxIndicator,
  checkboxHiddenInput,
} from "@midoneui/core/styles/checkbox.styles";
import { label } from "@midoneui/core/styles/label.styles";
import * as checkbox from "@zag-js/checkbox";
import { useMachine, normalizeProps } from "@zag-js/react";
import { createContext, useContext, useId } from "react";
import type { Api, Props } from "@zag-js/checkbox";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function CheckboxRoot({
  children,
  className,
  ...props
}: React.ComponentProps<"label"> & Partial<Props>) {
  const service = useMachine(checkbox.machine, { ...props, id: useId() });
  const api = checkbox.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <label
        {...api.getRootProps()}
        {...props}
        className={cn(checkboxRoot, className)}
      >
        {children}
        <CheckboxHiddenInput />
      </label>
    </ApiContext.Provider>
  );
}

export function CheckboxLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn([label, checkboxLabel, className])}
      {...api?.getLabelProps()}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function CheckboxControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(checkboxControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <div>
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </div>
      )}
    </Slot>
  );
}

export function CheckboxIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(checkboxIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function CheckboxHiddenInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const api = useContext(ApiContext);

  return (
    <input
      className={cn(checkboxHiddenInput, className)}
      {...api?.getHiddenInputProps()}
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
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
} from "@/components/ui/checkbox";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<CheckboxRoot>
  <CheckboxControl />
  <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
</CheckboxRoot>
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
