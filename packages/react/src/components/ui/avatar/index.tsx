import { Avatar } from "@ark-ui/react/avatar";
import { cn } from "@midoneui/core/utils/cn";
import {
  avatarRootVariants,
  avatarFallback,
  avatarImage,
  type AvatarRootVariants,
} from "@midoneui/core/styles/avatar.styles";

export function AvatarRoot({
  children,
  className,
  bordered,
  ...props
}: React.ComponentProps<typeof Avatar.Root> & AvatarRootVariants) {
  return (
    <Avatar.Root
      className={cn(avatarRootVariants({ bordered, className }), className)}
      {...props}
    >
      {children}
    </Avatar.Root>
  );
}

export function AvatarFallback({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Avatar.Fallback>) {
  return (
    <Avatar.Fallback className={cn(avatarFallback, className)} {...props}>
      {children}
    </Avatar.Fallback>
  );
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof Avatar.Image>) {
  return <Avatar.Image className={cn(avatarImage, className)} {...props} />;
}
