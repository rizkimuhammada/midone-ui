import { cn } from "@midoneui/core/utils/cn";
import { ChevronRight, Ellipsis } from "lucide-react";
import {
  breadcrumbList,
  breadcrumbItem,
  breadcrumbLink,
} from "@midoneui/core/styles/breadcrumb.styles";
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";
import { Fragment } from "react";

function Breadcrumb({
  className,
  children,
  items,
  ...props
}: React.ComponentProps<"nav"> & {
  items: string[];
}) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      {...props}
      className={cn(className)}
    >
      <BreadcrumbList>
        {items.length <= 3 ? (
          items.map((item, key) => (
            <Fragment key={key}>
              <BreadcrumbItem>
                <BreadcrumbLink>{item}</BreadcrumbLink>
              </BreadcrumbItem>
              {key < items.length - 1 && <ChevronRight />}
            </Fragment>
          ))
        ) : (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink>{items[0]}</BreadcrumbLink>
            </BreadcrumbItem>
            <ChevronRight />
            <BreadcrumbItem>
              <MenuRoot>
                <MenuTrigger asChild>
                  <BreadcrumbLink>
                    <Ellipsis />
                  </BreadcrumbLink>
                </MenuTrigger>
                <MenuPositioner>
                  <MenuContent>
                    {items.slice(1, -2).map((item, itemKey) => (
                      <MenuItem value={item} key={itemKey}>
                        {item}
                      </MenuItem>
                    ))}
                  </MenuContent>
                </MenuPositioner>
              </MenuRoot>
            </BreadcrumbItem>
            <ChevronRight />
            {items.slice(-2).map((item, index) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink>{item}</BreadcrumbLink>
                </BreadcrumbItem>
                {index < 1 && <ChevronRight />}
              </Fragment>
            ))}
          </>
        )}
      </BreadcrumbList>
    </nav>
  );
}

function BreadcrumbList({
  className,
  children,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <ol {...props} className={cn(className, breadcrumbList)}>
      {children}
    </ol>
  );
}

function BreadcrumbItem({
  className,
  children,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li {...props} className={cn(className, breadcrumbItem)}>
      {children}
    </li>
  );
}

function BreadcrumbLink({
  className,
  children,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a {...props} className={cn(className, breadcrumbLink)}>
      {children}
    </a>
  );
}

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink };
