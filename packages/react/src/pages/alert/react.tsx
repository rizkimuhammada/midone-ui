import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
} from "@/components/ui/alert";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";
import { Compass } from "lucide-react";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <AlertRoot>
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot>
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/alert</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/alert/index.tsx">
          {`
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
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
} from "@/components/ui/alert";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<AlertRoot>
  <Compass />
  <AlertTitle>
    Success! Your changes have been saved
  </AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <AlertRoot>
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="warning">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot>
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <AlertRoot filled>
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot filled variant="warning">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot filled>
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot filled variant="warning">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <AlertRoot raised="single">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot raised="single" variant="warning">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot raised="single">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot raised="single" variant="warning">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <AlertRoot filled raised="double">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="primary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="secondary">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="success">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="danger">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="pending">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot filled raised="double" variant="warning">
                  <Compass />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot filled raised="double">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="primary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="secondary">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="success">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="danger">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="pending">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot filled raised="double" variant="warning">
  <Compass />
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
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
