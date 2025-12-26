import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SquareX, Save, ExternalLink } from "lucide-react";
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
                <DialogRoot>
                  <DialogTrigger>Open Dialog</DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                    <div className="grid gap-4 mt-2">
                      <div className="grid gap-2.5">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                          id="name-1"
                          name="name"
                          defaultValue="Pedro Duarte"
                        />
                      </div>
                      <div className="grid gap-2.5">
                        <Label htmlFor="username-1">Username</Label>
                        <Input
                          id="username-1"
                          name="username"
                          defaultValue="@peduarte"
                        />
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end mt-7">
                      <DialogCloseTrigger>
                        <SquareX />
                        Close
                      </DialogCloseTrigger>
                      <Button variant="primary">
                        <Save />
                        Submit
                      </Button>
                    </div>
                    <DialogCloseTrigger />
                  </DialogContent>
                </DialogRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DialogRoot>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>
      Make changes to your profile here. Click save when you're done.
    </DialogDescription>
    <div className="grid gap-4 mt-2">
      <div className="grid gap-2.5">
        <Label htmlFor="name-1">Name</Label>
        <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="username-1">Username</Label>
        <Input
          id="username-1"
          name="username"
          defaultValue="@peduarte"
        />
      </div>
    </div>
    <div className="flex gap-2 justify-end mt-7">
      <DialogCloseTrigger>
        <SquareX />
        Close
      </DialogCloseTrigger>
      <Button variant="primary">
        <Save />
        Submit
      </Button>
    </div>
    <DialogCloseTrigger />
  </DialogContent>
</DialogRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/dialog</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/dialog/index.tsx">
          {`
import { cn } from "@midoneui/core/utils/cn";
import { Box } from "@/components/ui/box";
import { X } from "lucide-react";
import {
  dialogTrigger,
  dialogBackdrop,
  dialogPositioner,
  dialogContent,
  dialogTitle,
  dialogDescription,
  dialogCloseTrigger,
} from "@midoneui/core/styles/dialog.styles";
import { Button } from "@/components/ui/button";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";
import * as dialog from "@zag-js/dialog";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import type { Api, Props } from "@zag-js/dialog";
import { createContext, useContext, useId } from "react";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function DialogRoot({
  children,
  ...props
}: React.ComponentProps<"div"> & Partial<Props>) {
  const service = useMachine(dialog.machine, { ...props, id: useId() });
  const api = dialog.connect(service, normalizeProps);

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export function DialogTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button className={cn(dialogTrigger, className)}>{children}</Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function DialogBackdrop({
  className,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(dialogBackdrop, className)}
      {...api?.getBackdropProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function DialogPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(dialogPositioner, className)}
      {...api?.getPositionerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function DialogContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <DialogBackdrop />
      <DialogPositioner>
        <Slot {...api?.getContentProps()} {...props}>
          {asChild ? (
            children
          ) : (
            <div>
              <Box
                raised="double"
                className={cn(dialogContent, className)}
                {...props}
              >
                <div>{children}</div>
              </Box>
            </div>
          )}
        </Slot>
      </DialogPositioner>
    </Portal>
  );
}

export function DialogTitle({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(dialogTitle, className)}
      {...api?.getTitleProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function DialogDescription({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(dialogDescription, className)}
      {...props}
      {...api?.getDescriptionProps()}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function DialogCloseTrigger({
  children,
  className,
  filled,
  variant,
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getCloseTriggerProps()} {...props}>
      {!children ? (
        <Button className={cn(dialogCloseTrigger, className)} {...props}>
          <X className="size-4" />
        </Button>
      ) : asChild ? (
        children
      ) : (
        <Button
          className={cn(
            buttonVariants({ filled, variant, size, className }),
            className
          )}
        >
          {children}
        </Button>
      )}
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
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "@/components/ui/dialog";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<DialogRoot>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>
      Make changes to your profile here. Click save when
      you're done.
    </DialogDescription>
    <div className="grid gap-4 mt-2">
      <div className="grid gap-2.5">
        <Label htmlFor="name-1">Name</Label>
        <Input
          id="name-1"
          name="name"
          defaultValue="Pedro Duarte"
        />
      </div>
      <div className="grid gap-2.5">
        <Label htmlFor="username-1">Username</Label>
        <Input
          id="username-1"
          name="username"
          defaultValue="@peduarte"
        />
      </div>
    </div>
    <div className="flex gap-2 justify-end mt-7">
      <DialogCloseTrigger>
        <SquareX />
        Close
      </DialogCloseTrigger>
      <Button variant="primary">
        <Save />
        Submit
      </Button>
    </div>
    <DialogCloseTrigger />
  </DialogContent>
</DialogRoot>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
                <DialogRoot>
                  <DialogTrigger>Custom Close</DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Share Link</DialogTitle>
                    <DialogDescription>
                      Anyone who has this link will be able to view this.
                    </DialogDescription>
                    <div className="grid gap-4 mt-2">
                      <Input
                        id="name-1"
                        name="name"
                        defaultValue="https://midone-ui.com/docs/installation"
                      />
                    </div>
                    <div className="flex gap-2 mt-5">
                      <DialogCloseTrigger>
                        <ExternalLink />
                        Share Link
                      </DialogCloseTrigger>
                    </div>
                  </DialogContent>
                </DialogRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<DialogRoot>
  <DialogTrigger>Custom Close</DialogTrigger>
  <DialogContent>
    <DialogTitle>Share Link</DialogTitle>
    <DialogDescription>
      Anyone who has this link will be able to view this.
    </DialogDescription>
    <div className="grid gap-4 mt-2">
      <Input
        id="name-1"
        name="name"
        defaultValue="https://midone-ui.com/docs/installation"
      />
    </div>
    <div className="flex gap-2 mt-5">
      <DialogCloseTrigger>
        <ExternalLink />
        Share Link
      </DialogCloseTrigger>
    </div>
  </DialogContent>
</DialogRoot>
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
