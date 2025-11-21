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
