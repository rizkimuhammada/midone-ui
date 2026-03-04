import { SwitchRoot, SwitchControl, SwitchLabel } from "@/components/ui/switch";
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
                <SwitchRoot>
                  <SwitchControl />
                  <SwitchLabel>Airplane Mode</SwitchLabel>
                </SwitchRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<SwitchRoot>
  <SwitchControl />
  <SwitchLabel>Airplane Mode</SwitchLabel>
</SwitchRoot>
                        `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/switch</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/switch/index.tsx">
          {`
import { cn } from "@midoneui/core/utils/cn";
import {
  switchRoot,
  switchControl,
  switchThumb,
  switchLabel,
  switchHiddenInput,
} from "@midoneui/core/styles/switch.styles";
import { label } from "@midoneui/core/styles/label.styles";
import * as zagSwitch from "@zag-js/switch";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props } from "@zag-js/switch";
import { Slot } from "@/components/ui/slot";
import { createContext, useContext, useId } from "react";

const ApiContext = createContext<Api | null>(null);

export function SwitchRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(zagSwitch.machine, { ...props, id: useId() });
  const api = zagSwitch.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(switchRoot, className)}
        {...api?.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <label>
            {children}
            <SwitchHiddenInput />
          </label>
        )}
      </Slot>
    </ApiContext.Provider>
  );
}

export function SwitchControl({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(switchControl, className)}
      {...api?.getControlProps()}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <span>
          <SwitchThumb />
        </span>
      )}
    </Slot>
  );
}

export function SwitchThumb({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(switchThumb, className)}
      {...api?.getThumbProps()}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function SwitchLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn([label, switchLabel, className])}
      {...api?.getLabelProps()}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function SwitchHiddenInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const api = useContext(ApiContext);

  return (
    <input
      className={cn(switchHiddenInput, className)}
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
import { SwitchRoot, SwitchControl, SwitchLabel } from "@/components/ui/switch";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<SwitchRoot>
  <SwitchControl />
  <SwitchLabel>Airplane Mode</SwitchLabel>
</SwitchRoot>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
