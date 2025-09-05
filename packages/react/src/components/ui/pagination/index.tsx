import { Pagination } from "@ark-ui/react/pagination";
import { cn } from "@midoneui/core/utils/cn";
import {
  paginationRoot,
  paginationItem,
  paginationPrevTrigger,
  paginationNextTrigger,
  paginationEllipsis,
} from "@midoneui/core/styles/pagination.styles";

export { Pagination };

export function PaginationRoot({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Pagination.Root>) {
  return (
    <Pagination.Root className={cn(paginationRoot, className)} {...props}>
      {children}
    </Pagination.Root>
  );
}

export function PaginationItem({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Pagination.Item>) {
  return (
    <Pagination.Item className={cn(paginationItem, className)} {...props}>
      {children}
    </Pagination.Item>
  );
}

export function PaginationPrevTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Pagination.PrevTrigger>) {
  return (
    <Pagination.PrevTrigger
      className={cn(paginationPrevTrigger, className)}
      {...props}
    >
      {children}
    </Pagination.PrevTrigger>
  );
}

export function PaginationNextTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Pagination.NextTrigger>) {
  return (
    <Pagination.NextTrigger
      className={cn(paginationNextTrigger, className)}
      {...props}
    >
      {children}
    </Pagination.NextTrigger>
  );
}

export function PaginationEllipsis({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Pagination.Ellipsis>) {
  return (
    <Pagination.Ellipsis
      className={cn(paginationEllipsis, className)}
      {...props}
    >
      {children ?? "…"}
    </Pagination.Ellipsis>
  );
}
