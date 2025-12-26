import {
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
} from "@/components/ui/checkbox";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
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
    </>
  );
}

export default Main;
