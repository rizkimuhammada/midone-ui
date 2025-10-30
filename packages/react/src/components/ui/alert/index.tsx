import { X } from "lucide-react";
import { cn } from "@midoneui/core/utils/cn";
import {
  alertRoot,
  alertTitle,
  alertDescription,
  alertCloseTrigger,
} from "@midoneui/core/styles/alert.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { useState, useContext, createContext } from "react";
import { Presence } from "@/components/ui/presence";
import { Slot } from "@/components/ui/slot";

const PresentContext = createContext<{
  present: boolean;
  setPresent: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function AlertRoot({
  className,
  children,
  filled,
  variant,
  raised,
  ...rest
}: React.ComponentProps<"div"> & BoxVariants) {
  const [present, setPresent] = useState(true);

  return (
    <PresentContext.Provider
      value={{
        present,
        setPresent,
      }}
    >
      <Presence
        className={cn(
          boxVariants({ filled, variant, raised, className }),
          alertRoot
        )}
        {...rest}
        present={present}
      >
        {children}
      </Presence>
    </PresentContext.Provider>
  );
}

export function AlertTitle({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  return (
    <Slot className={cn([className, alertTitle])} {...props}>
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function AlertDescription({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  return (
    <Slot className={cn([className, alertDescription])} {...props}>
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function AlertCloseTrigger({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const context = useContext(PresentContext);

  return (
    <Slot
      className={cn([className, alertCloseTrigger])}
      {...props}
      onClick={() => context?.setPresent(false)}
    >
      {asChild ? children : <div>{children ?? <X />}</div>}
    </Slot>
  );
}
