# Dialog

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
function Preview() {
  const [dialog, setDialog] = useState(false);

  return (
    <>
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
    </>
  );
}
render(<Preview />)
```

## Dependency

```bash
npm install lucide-react @zag-js/dialog @zag-js/react
```

## Component

```tsx
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
        <Button
          variant="secondary"
          look="outline"
          className={cn(dialogTrigger, className)}
        >
          {children}
        </Button>
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
  look = "outline",
  variant = "secondary",
  size,
  asChild,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot {...api?.getCloseTriggerProps()} {...props}>
      {!children ? (
        <Button
          variant="ghost"
          className={cn(dialogCloseTrigger, className)}
          {...props}
        >
          <X className="size-4" />
        </Button>
      ) : asChild ? (
        children
      ) : (
        <Button
          className={cn(buttonVariants({ look, variant, size }), className)}
        >
          {children}
        </Button>
      )}
    </Slot>
  );
}
```

## Usage

```tsx
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
```

```tsx
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
```

## Examples

### Example 1

```tsx
function Preview1() {
  const [dialog, setDialog] = useState(false);

  return (
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
  );
}
render(<Preview1 />)
```

### Example 2

```tsx
function Preview2() {
  const [dialog, setDialog] = useState(false);

  return (
    <>
    <Button
      look="outline"
      variant="secondary"
      onClick={(e) => {
        e.preventDefault();
        setDialog(true);
      }}
    >
      Programmatic Trigger
    </Button>
    <DialogRoot
      open={dialog}
      onOpenChange={(details) => setDialog(details.open)}
    >
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
  );
}
render(<Preview2 />)
```

