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
