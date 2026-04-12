# Progress Linear

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<ProgressLinearRoot
  defaultValue={42}
  label="Progress Linear"
  trackClass="max-w-72"
  showValueText
/>
```

## Dependency

No external dependencies.

## Component

```tsx
import { cn } from "@midoneui/core/utils/cn";
import { Label } from "@/components/ui/label";
import {
  progressRoot,
  progressLabel,
  progressValueText,
  progressTrack,
  progressRange,
} from "@midoneui/core/styles/progress-linear.styles";
import * as progress from "@zag-js/progress";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props } from "@zag-js/progress";
import { Slot } from "@/components/ui/slot";
import { createContext, useContext, useId } from "react";

const ApiContext = createContext<Api | null>(null);

export function ProgressLinearRoot({
  children,
  className,
  asChild = false,
  label,
  trackClass,
  showValueText = false,
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & {
    asChild?: boolean;
    label?: string;
    trackClass?: string;
    showValueText?: boolean;
  }) {
  const service = useMachine(progress.machine, { id: useId(), ...props });
  const api = progress.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(progressRoot, className)}
        {...api?.getRootProps()}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <div>
            {label && <ProgressLinearLabel>{label}</ProgressLinearLabel>}
            <ProgressLinearTrack className={trackClass}>
              <ProgressLinearRange />
            </ProgressLinearTrack>
            {showValueText && <ProgressLinearValueText />}
            {children}
          </div>
        )}
      </Slot>
    </ApiContext.Provider>
  );
}

export function ProgressLinearLabel({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"label"> & {
  asChild?: boolean;
}) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getLabelProps()} {...props}>
      {!asChild ? (
        <Label className={cn(progressLabel, className)}>{children}</Label>
      ) : (
        children
      )}
    </Slot>
  );
}

export function ProgressLinearValueText({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(progressValueText, className)}
      {...api?.getValueTextProps()}
      {...props}
    >
      {api?.valueAsString}
    </div>
  );
}

export function ProgressLinearTrack({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(progressTrack, className)}
      {...api?.getTrackProps()}
      {...props}
    >
      {children}
    </div>
  );
}

export function ProgressLinearRange({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const api = useContext(ApiContext);

  return (
    <div
      className={cn(progressRange, className)}
      {...api?.getRangeProps()}
      {...props}
    />
  );
}
```

## Usage

```tsx
<ProgressLinearRoot
  defaultValue={42}
  label="Progress Linear"
  trackClass="max-w-72"
  showValueText
/>
```

