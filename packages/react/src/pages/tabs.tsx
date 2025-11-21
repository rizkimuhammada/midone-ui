import { MoveUpRight } from "lucide-react";
import { Box } from "@/components/ui/box";
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
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
            <Title>Tabs</Title>
            <Subtitle>
              A set of labeled sections that lets users switch between different
              content with a single click.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/tabs"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/tabs#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <TabsRoot defaultValue="update-profile">
                      <TabsList>
                        <TabsTrigger value="update-profile">
                          Update Profile
                        </TabsTrigger>
                        <TabsTrigger value="share-profile">
                          Share Profile
                        </TabsTrigger>
                      </TabsList>
                      <Box raised="single" className="w-90">
                        <TabsContent value="update-profile">
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
                            <Button>
                              <SquareX />
                              Close
                            </Button>
                            <Button variant="primary">
                              <Save />
                              Submit
                            </Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="share-profile">
                          <div className="grid gap-4 mt-2">
                            <Input
                              id="name-1"
                              name="name"
                              defaultValue="https://midone-ui.com/docs/installation"
                            />
                          </div>
                          <div className="flex gap-2 mt-5">
                            <Button>
                              <ExternalLink />
                              Share Link
                            </Button>
                          </div>
                        </TabsContent>
                      </Box>
                    </TabsRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<TabsRoot defaultValue="update-profile">
  <TabsList>
    <TabsTrigger value="update-profile">Update Profile</TabsTrigger>
    <TabsTrigger value="share-profile">Share Profile</TabsTrigger>
  </TabsList>
  <Box raised="single" className="w-90">
    <TabsContent value="update-profile">
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
        <Button>
          <SquareX />
          Close
        </Button>
        <Button variant="primary">
          <Save />
          Submit
        </Button>
      </div>
    </TabsContent>
    <TabsContent value="share-profile">
      <div className="grid gap-4 mt-2">
        <Input
          id="name-1"
          name="name"
          defaultValue="https://midone-ui.com/docs/installation"
        />
      </div>
      <div className="flex gap-2 mt-5">
        <Button>
          <ExternalLink />
          Share Link
        </Button>
      </div>
    </TabsContent>
  </Box>
</TabsRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/react @zag-js/tabs</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/tabs/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import {
  tabsRoot,
  tabsList,
  tabsTrigger,
  tabsIndicator,
  tabsContent,
} from "@midoneui/core/styles/tabs.styles";
import { createContext, useContext, useId } from "react";
import * as tabs from "@zag-js/tabs";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props, TriggerProps, ContentProps } from "@zag-js/tabs";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function TabsRoot({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(tabs.machine, {
    ...props,
    id: useId(),
  });

  const api = tabs.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot className={cn(tabsRoot, className)} {...props}>
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function TabsList({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsList, className)}
      {...api?.getListProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
      <TabsIndicator />
    </Slot>
  );
}

export function TabsIndicator({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsIndicator, className)}
      {...api?.getIndicatorProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function TabsTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & TriggerProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsTrigger, className)}
      {...api?.getTriggerProps(props)}
      {...props}
    >
      {asChild ? children : <button>{children}</button>}
    </Slot>
  );
}

export function TabsContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & ContentProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(tabsContent, className)}
      {...api?.getContentProps(props)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
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
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<TabsRoot defaultValue="update-profile">
  <TabsList>
    <TabsTrigger value="update-profile">
      Update Profile
    </TabsTrigger>
    <TabsTrigger value="share-profile">
      Share Profile
    </TabsTrigger>
  </TabsList>
  <Box raised="single" className="w-90">
    <TabsContent value="update-profile">
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
        <Button>
          <SquareX />
          Close
        </Button>
        <Button variant="primary">
          <Save />
          Submit
        </Button>
      </div>
    </TabsContent>
    <TabsContent value="share-profile">
      <div className="grid gap-4 mt-2">
        <Input
          id="name-1"
          name="name"
          defaultValue="https://midone-ui.com/docs/installation"
        />
      </div>
      <div className="flex gap-2 mt-5">
        <Button>
          <ExternalLink />
          Share Link
        </Button>
      </div>
    </TabsContent>
  </Box>
</TabsRoot>
              `}
            </PreviewCode>
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
      </Menu>
    </>
  );
}

export default Main;
