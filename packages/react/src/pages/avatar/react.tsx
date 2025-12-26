import {
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
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
                <AvatarRoot>
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot>
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/react @zag-js/avatar</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/avatar/index.tsx">
          {`
import { createContext, useContext, useId } from "react";
import { cn } from "@midoneui/core/utils/cn";
import {
  avatarRootVariants,
  avatarFallback,
  avatarImage,
  type AvatarRootVariants,
} from "@midoneui/core/styles/avatar.styles";
import * as avatar from "@zag-js/avatar";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props } from "@zag-js/avatar";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function AvatarRoot({
  children,
  className,
  bordered,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  AvatarRootVariants &
  Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(avatar.machine, { ...props, id: useId() });
  const api = avatar.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(avatarRootVariants({ bordered, className }), className)}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function AvatarFallback({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(avatarFallback, className)}
      {...api?.getFallbackProps()}
      {...props}
    >
      {asChild ? children : <span>{children}</span>}
    </Slot>
  );
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentProps<"img">) {
  const api = useContext(ApiContext);

  return (
    <img
      className={cn(avatarImage, className)}
      {...api?.getImageProps()}
      {...props}
    />
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
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<AvatarRoot>
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage
    src="https://i.pravatar.cc/300"
    alt="avatar"
  />
</AvatarRoot>
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
                <AvatarRoot bordered={false}>
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot bordered={false}>
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <AvatarRoot className="rounded-full">
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot className="rounded-full">
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <AvatarRoot className="rounded-full" bordered={false}>
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot className="rounded-full" bordered={false}>
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
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
