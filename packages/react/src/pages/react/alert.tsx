import {
  AlertRoot,
  AlertTitle,
  AlertDescription,
  AlertCloseTrigger,
  AlertIcon,
} from "@/components/ui/alert";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
  PreviewCode,
} from "@/components/docs";
import { Compass } from "lucide-react";
import { Box } from "@/components/ui/box";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <AlertRoot variant="primary">
                  <AlertIcon><Compass /></AlertIcon>
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
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
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
  alertRootVariants,
  type AlertRootVariants,
  alertTitle,
  alertDescription,
  alertCloseTrigger,
} from "@midoneui/core/styles/alert.styles";
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
  look,
  variant,
  ...rest
}: React.ComponentProps<"div"> & AlertRootVariants) {
  const [present, setPresent] = useState(true);

  return (
    <PresentContext.Provider
      value={{
        present,
        setPresent,
      }}
    >
      <Presence
        className={cn(alertRootVariants({ look, variant }), className)}
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
  AlertIcon,
} from "@/components/ui/alert";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<AlertRoot>
  <AlertIcon><Compass /></AlertIcon>
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
                <AlertRoot variant="primary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="secondary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="success">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="danger">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="pending">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="warning">
                  <AlertIcon><Compass /></AlertIcon>
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
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon><Compass /></AlertIcon>
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
                <AlertRoot look="filled" variant="primary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot look="filled" variant="secondary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot look="filled" variant="success">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot look="filled" variant="danger">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot look="filled" variant="pending">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot look="filled" variant="warning">
                  <AlertIcon><Compass /></AlertIcon>
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
<AlertRoot look="filled" variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertDescription>
    This is an alert with icon, title and description.
  </AlertDescription>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot look="filled" variant="warning">
  <AlertIcon><Compass /></AlertIcon>
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
                <AlertRoot variant="primary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="secondary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="success">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="danger">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="pending">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
                <AlertRoot variant="warning">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertCloseTrigger />
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
  <AlertCloseTrigger />
</AlertRoot>
<AlertRoot variant="warning">
  <AlertIcon><Compass /></AlertIcon>
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
                <AlertRoot look="filled" variant="primary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot look="filled" variant="secondary">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot look="filled" variant="success">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot look="filled" variant="danger">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot look="filled" variant="pending">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
                <AlertRoot look="filled" variant="warning">
                  <AlertIcon><Compass /></AlertIcon>
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                </AlertRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AlertRoot look="filled" variant="primary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="secondary">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="success">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="danger">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="pending">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
</AlertRoot>
<AlertRoot look="filled" variant="warning">
  <AlertIcon><Compass /></AlertIcon>
  <AlertTitle>Success! Your changes have been saved</AlertTitle>
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
                <Box className="p-0">
                  <AlertRoot variant="ghost">
                    <AlertIcon><Compass /></AlertIcon>
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                      This is an alert with icon, title and description.
                    </AlertDescription>
                    <AlertCloseTrigger />
                  </AlertRoot>
                </Box>
                <Box className="p-0" raised="single">
                  <AlertRoot variant="ghost">
                    <AlertIcon><Compass /></AlertIcon>
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                      This is an alert with icon, title and description.
                    </AlertDescription>
                    <AlertCloseTrigger />
                  </AlertRoot>
                </Box>
                <Box className="p-0" raised="double">
                  <AlertRoot variant="ghost">
                    <AlertIcon><Compass /></AlertIcon>
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                      This is an alert with icon, title and description.
                    </AlertDescription>
                    <AlertCloseTrigger />
                  </AlertRoot>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box className="p-0">
  <AlertRoot variant="ghost">
    <AlertIcon><Compass /></AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
<Box className="p-0" raised="single">
  <AlertRoot variant="ghost">
    <AlertIcon><Compass /></AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
<Box className="p-0" raised="double">
  <AlertRoot variant="ghost">
    <AlertIcon><Compass /></AlertIcon>
    <AlertTitle>Success! Your changes have been saved</AlertTitle>
    <AlertDescription>
      This is an alert with icon, title and description.
    </AlertDescription>
    <AlertCloseTrigger />
  </AlertRoot>
</Box>
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
