import { MoveUpRight } from "lucide-react";
import {
  SheetRoot,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetCloseTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SquareX, Save, ExternalLink } from "lucide-react";
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
            <Title>Sheet</Title>
            <Subtitle>
              A slide-in panel that appears from the edge of the screen to show
              extra content without leaving the page.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/dialog"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/dialog#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <SheetRoot>
                      <SheetTrigger>Open Sheet</SheetTrigger>
                      <SheetContent>
                        <SheetTitle>Sheet Title</SheetTitle>
                        <SheetDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </SheetDescription>
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
                          <SheetCloseTrigger>
                            <SquareX />
                            Close
                          </SheetCloseTrigger>
                          <Button variant="primary">
                            <Save />
                            Submit
                          </Button>
                        </div>
                        <SheetCloseTrigger />
                      </SheetContent>
                    </SheetRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<SheetRoot>
  <SheetTrigger>Open Sheet</SheetTrigger>
  <SheetContent>
    <SheetTitle>Sheet Title</SheetTitle>
    <SheetDescription>
      Make changes to your profile here. Click save when you're done.
    </SheetDescription>
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
      <SheetCloseTrigger>
        <SquareX />
        Close
      </SheetCloseTrigger>
      <Button variant="primary">
        <Save />
        Submit
      </Button>
    </div>
    <SheetCloseTrigger />
  </SheetContent>
</SheetRoot>
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
            <PreviewCode title="components/ui/sheet/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import { Box } from "@/components/ui/box";
import { X } from "lucide-react";
import {
  sheetTrigger,
  sheetBackdrop,
  sheetPositioner,
  sheetContent,
  sheetTitle,
  sheetDescription,
  sheetCloseTrigger,
} from "@midoneui/core/styles/sheet.styles";
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

export function SheetRoot({
  children,
  ...props
}: React.ComponentProps<"div"> & Partial<Props>) {
  const service = useMachine(dialog.machine, { ...props, id: useId() });
  const api = dialog.connect(service, normalizeProps);

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export function SheetTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getTriggerProps()} {...props}>
      {!asChild ? (
        <Button className={cn(sheetTrigger, className)}>{children}</Button>
      ) : (
        children
      )}
    </Slot>
  );
}

export function SheetBackdrop({
  className,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sheetBackdrop, className)}
      {...api?.getBackdropProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SheetPositioner({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sheetPositioner, className)}
      {...api?.getPositionerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SheetContent({
  children,
  className,
  asChild = false,
  side = "right",
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
  side?: "top" | "right" | "bottom" | "left";
}) {
  const api = useContext(ApiContext);

  return (
    <Portal>
      <SheetBackdrop />
      <SheetPositioner>
        <Slot {...api?.getContentProps()} {...props}>
          {asChild ? (
            children
          ) : (
            <div>
              <Box
                raised="double"
                data-side={side}
                className={cn(sheetContent, className)}
                {...props}
              >
                <div>{children}</div>
              </Box>
            </div>
          )}
        </Slot>
      </SheetPositioner>
    </Portal>
  );
}

export function SheetTitle({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sheetTitle, className)}
      {...api?.getTitleProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SheetDescription({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(sheetDescription, className)}
      {...props}
      {...api?.getDescriptionProps()}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function SheetCloseTrigger({
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
        <Button className={cn(sheetCloseTrigger, className)} {...props}>
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
  SheetRoot,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetCloseTrigger,
} from "@/components/ui/sheet";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<SheetRoot>
  <SheetTrigger>Open Sheet</SheetTrigger>
  <SheetContent>
    <SheetTitle>Sheet Title</SheetTitle>
    <SheetDescription>
      Make changes to your profile here. Click save when
      you're done.
    </SheetDescription>
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
      <SheetCloseTrigger>
        <SquareX />
        Close
      </SheetCloseTrigger>
      <Button variant="primary">
        <Save />
        Submit
      </Button>
    </div>
    <SheetCloseTrigger />
  </SheetContent>
</SheetRoot>
              `}
            </PreviewCode>
          </div>
          <div id="variants">
            <SectionTitle>Variants</SectionTitle>
            <SectionContent>
              A collection of components you can use.
            </SectionContent>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <SheetRoot>
                      <SheetTrigger>Custom Close</SheetTrigger>
                      <SheetContent>
                        <SheetTitle>Share Link</SheetTitle>
                        <SheetDescription>
                          Anyone who has this link will be able to view this.
                        </SheetDescription>
                        <div className="grid gap-4 mt-2">
                          <Input
                            id="name-1"
                            name="name"
                            defaultValue="https://midone-ui.com/docs/installation"
                          />
                        </div>
                        <div className="flex gap-2 mt-5">
                          <SheetCloseTrigger>
                            <ExternalLink />
                            Share Link
                          </SheetCloseTrigger>
                        </div>
                      </SheetContent>
                    </SheetRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<SheetRoot>
  <SheetTrigger>Custom Close</SheetTrigger>
  <SheetContent>
    <SheetTitle>Share Link</SheetTitle>
    <SheetDescription>
      Anyone who has this link will be able to view this.
    </SheetDescription>
    <div className="grid gap-4 mt-2">
      <Input
        id="name-1"
        name="name"
        defaultValue="https://midone-ui.com/docs/installation"
      />
    </div>
    <div className="flex gap-2 mt-5">
      <SheetCloseTrigger>
        <ExternalLink />
        Share Link
      </SheetCloseTrigger>
    </div>
  </SheetContent>
</SheetRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
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
        <a className="hover:text-foreground py-1.5" href="#variants">
          Variants
        </a>
      </Menu>
    </>
  );
}

export default Main;
