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
import { Presence } from "@ark-ui/react/presence";
import { Box } from "../box";

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
}: React.ComponentProps<typeof Presence> & BoxVariants) {
  const [present, setPresent] = useState(true);

  return (
    <PresentContext.Provider
      value={{
        present,
        setPresent,
      }}
    >
      <Presence
        asChild
        present={present}
        className={cn(
          boxVariants({ filled, variant, raised, className }),
          alertRoot
        )}
        {...rest}
      >
        <Box>{children}</Box>
      </Presence>
    </PresentContext.Provider>
  );
}

export function AlertTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn([className, alertTitle])} {...props}>
      {children}
    </div>
  );
}

export function AlertDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn([className, alertDescription])} {...props}>
      {children}
    </div>
  );
}

export function AlertCloseTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const context = useContext(PresentContext);

  return (
    children ?? (
      <div
        className={cn([className, alertCloseTrigger])}
        {...props}
        onClick={() => context?.setPresent(false)}
      >
        <X />
      </div>
    )
  );
}
