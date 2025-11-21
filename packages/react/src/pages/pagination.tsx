import { MoveUpRight } from "lucide-react";
import {
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from "@/components/ui/pagination";
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
            <Title>Pagination</Title>
            <Subtitle>
              A navigation control that lets users move through content one page
              at a time.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/pagination"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/pagination#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <PaginationRoot count={5000} pageSize={10} siblingCount={2}>
                      <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
                      <PaginationContext>
                        {(pagination) =>
                          pagination.pages.map((page, index) =>
                            page.type === "page" ? (
                              <PaginationItem key={index} {...page}>
                                {page.value}
                              </PaginationItem>
                            ) : (
                              <PaginationEllipsis key={index} index={index} />
                            )
                          )
                        }
                      </PaginationContext>
                      <PaginationNextTrigger>Next</PaginationNextTrigger>
                    </PaginationRoot>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<PaginationRoot count={5000} pageSize={10} siblingCount={2}>
  <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
  <PaginationContext>
    {(pagination) =>
      pagination.pages.map((page, index) =>
        page.type === "page" ? (
          <PaginationItem key={index} {...page}>
            {page.value}
          </PaginationItem>
        ) : (
          <PaginationEllipsis key={index} index={index} />
        )
      )
    }
  </PaginationContext>
  <PaginationNextTrigger>Next</PaginationNextTrigger>
</PaginationRoot>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>
              add @zag-js/react @zag-js/pagination
            </InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/pagination/index.tsx">
              {`
import { cn } from "@midoneui/core/utils/cn";
import {
  paginationRoot,
  paginationItem,
  paginationPrevTrigger,
  paginationNextTrigger,
  paginationEllipsis,
} from "@midoneui/core/styles/pagination.styles";
import * as pagination from "@zag-js/pagination";
import { useMachine, normalizeProps } from "@zag-js/react";
import type { Api, Props, ItemProps, EllipsisProps } from "@zag-js/pagination";
import { createContext, useContext, useId } from "react";
import { Slot } from "@/components/ui/slot";

const ApiContext = createContext<Api | null>(null);

export function PaginationRoot({
  children,
  className,
  asChild = false,
  count,
  pageSize,
  siblingCount,
  ...props
}: React.ComponentProps<"div"> & Partial<Props> & { asChild?: boolean }) {
  const service = useMachine(pagination.machine, {
    count,
    pageSize,
    siblingCount,
    ...props,
    id: useId(),
  });
  const api = pagination.connect(service, normalizeProps);

  return (
    <ApiContext.Provider value={api}>
      <Slot
        className={cn(paginationRoot, className)}
        {...api.getRootProps()}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ApiContext.Provider>
  );
}

export function PaginationContext(cb: {
  children: (api: Api) => React.ReactNode;
}) {
  const api = useContext(ApiContext);
  return api ? cb.children(api) : "";
}

export function PaginationItem({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & ItemProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(paginationItem, className)}
      {...api?.getItemProps(props)}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function PaginationPrevTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(paginationPrevTrigger, className)}
      {...api?.getPrevTriggerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function PaginationNextTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(paginationNextTrigger, className)}
      {...api?.getNextTriggerProps()}
      {...props}
    >
      {asChild ? children : <div>{children}</div>}
    </Slot>
  );
}

export function PaginationEllipsis({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & EllipsisProps & { asChild?: boolean }) {
  const api = useContext(ApiContext);

  return (
    <Slot
      className={cn(paginationEllipsis, className)}
      {...api?.getEllipsisProps(props)}
      {...props}
    >
      {!children ? <div>…</div> : asChild ? children : <div>{children}</div>}
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
  PaginationContext,
  PaginationRoot,
  PaginationItem,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationEllipsis,
} from "@/components/ui/pagination";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<PaginationRoot count={5000} pageSize={10} siblingCount={2}>
  <PaginationPrevTrigger>Previous</PaginationPrevTrigger>
  <PaginationContext>
    {(pagination) =>
      pagination.pages.map((page, index) =>
        page.type === "page" ? (
          <PaginationItem key={index} {...page}>
            {page.value}
          </PaginationItem>
        ) : (
          <PaginationEllipsis key={index} index={index} />
        )
      )
    }
  </PaginationContext>
  <PaginationNextTrigger>Next</PaginationNextTrigger>
</PaginationRoot>
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
