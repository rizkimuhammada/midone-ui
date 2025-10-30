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
