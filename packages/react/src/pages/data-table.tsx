import { MoveUpRight } from "lucide-react";
import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckboxRoot, CheckboxControl } from "@/components/ui/checkbox";
import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
} from "@/components/ui/menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    badge: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    badge: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    badge: "pending",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    badge: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    badge: "danger",
    email: "carmella@example.com",
  },
];
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  badge: "success" | "pending" | "danger";
  email: string;
};
export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <CheckboxRoot
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) =>
          table.toggleAllPageRowsSelected(!!value.checked)
        }
      >
        <CheckboxControl aria-label="Select all" />
      </CheckboxRoot>
    ),
    cell: ({ row }) => (
      <CheckboxRoot
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value.checked)}
      >
        <CheckboxControl aria-label="Select all" />
      </CheckboxRoot>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge variant={row.original.badge} className="capitalize">
        {row.getValue("status")}
      </Badge>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex gap-2 items-center cursor-pointer"
        >
          Email
          <ArrowUpDown className="size-3" />
        </div>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <MenuRoot>
          <MenuTrigger asChild>
            <div className="cursor-pointer flex justify-center">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="size-4 opacity-70" />
            </div>
          </MenuTrigger>
          <MenuPositioner>
            <MenuContent>
              <MenuItem
                value="copy"
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </MenuItem>
              <MenuItem value="view-cust">View Customer</MenuItem>
              <MenuItem value="view-pay">View Payment</MenuItem>
            </MenuContent>
          </MenuPositioner>
        </MenuRoot>
      );
    },
  },
];

function Main() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-20">
          <div>
            <Title>Datatable</Title>
            <Subtitle>
              A structured table that helps users view, sort, and manage data in
              an organized way.
            </Subtitle>
            <div className="flex gap-3 mt-5">
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/accordion"
              >
                Docs <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
              <ApiButton
                target="_blank"
                href="https://zagjs.com/components/react/accordion#methods-and-properties"
              >
                Api Reference <MoveUpRight className="stroke-1 size-3" />
              </ApiButton>
            </div>
            <Preview>
              {() => ({
                preview: (
                  <>
                    <div className="w-full">
                      <div className="flex items-center py-4 gap-3">
                        <Input
                          placeholder="Filter emails..."
                          value={
                            (table
                              .getColumn("email")
                              ?.getFilterValue() as string) ?? ""
                          }
                          onChange={(event) =>
                            table
                              .getColumn("email")
                              ?.setFilterValue(event.target.value)
                          }
                          className="max-w-80"
                        />
                        <MenuRoot>
                          <MenuTrigger className="ms-auto w-auto">
                            Show Columns
                          </MenuTrigger>
                          <MenuPositioner>
                            <MenuContent>
                              {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                  return (
                                    <MenuCheckboxItem
                                      key={column.id}
                                      className="capitalize"
                                      checked={column.getIsVisible()}
                                      onCheckedChange={(value) =>
                                        column.toggleVisibility(!!value)
                                      }
                                      value={column.id}
                                    >
                                      {column.id}
                                    </MenuCheckboxItem>
                                  );
                                })}
                            </MenuContent>
                          </MenuPositioner>
                        </MenuRoot>
                      </div>
                      <div className="relative -me-2">
                        <Table variant="boxed">
                          <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                              <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                  return (
                                    <TableHead key={header.id}>
                                      {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                          )}
                                    </TableHead>
                                  );
                                })}
                              </TableRow>
                            ))}
                          </TableHeader>
                          <TableBody>
                            {table.getRowModel().rows?.length ? (
                              table.getRowModel().rows.map((row) => (
                                <TableRow
                                  key={row.id}
                                  data-state={row.getIsSelected() && "selected"}
                                >
                                  {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                      {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                      )}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              ))
                            ) : (
                              <TableRow>
                                <TableCell
                                  colSpan={columns.length}
                                  className="h-24 text-center"
                                >
                                  No results.
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                      <div className="flex items-center justify-end space-x-2 py-4">
                        <div className="text-muted-foreground flex-1 text-xs">
                          {table.getFilteredSelectedRowModel().rows.length} of{" "}
                          {table.getFilteredRowModel().rows.length} row(s)
                          selected.
                        </div>
                        <div className="space-x-2">
                          <Button
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                          >
                            Previous
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                ),
                code: (
                  <PreviewCode>
                    {`
<div className="w-full">
  <div className="flex items-center py-4 gap-3">
    <Input
      placeholder="Filter emails..."
      value={
        (table.getColumn("email")?.getFilterValue() as string) ?? ""
      }
      onChange={(event) =>
        table.getColumn("email")?.setFilterValue(event.target.value)
      }
      className="max-w-80"
    />
    <MenuRoot>
      <MenuTrigger className="ms-auto w-auto">
        Show Columns
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <MenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                  value={column.id}
                >
                  {column.id}
                </MenuCheckboxItem>
              );
            })}
        </MenuContent>
      </MenuPositioner>
    </MenuRoot>
  </div>
  <div className="relative -me-2">
    <Table variant="boxed">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
  <div className="flex items-center justify-end space-x-2 py-4">
    <div className="text-muted-foreground flex-1 text-xs">
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
    <div className="space-x-2">
      <Button
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  </div>
</div>
                `}
                  </PreviewCode>
                ),
              })}
            </Preview>
          </div>
          <div id="installation">
            <SectionTitle>Installation</SectionTitle>
            <SectionContent>Install the following dependencies:</SectionContent>
            <InstallPackage>add @zag-js/react @zag-js/accordion</InstallPackage>
            <SectionContent>
              Copy and paste the following code into your project.
            </SectionContent>
            <PreviewCode title="components/ui/accordion/index.tsx">
              {`
import { ChevronDownIcon } from "lucide-react";
import {
  accordionRootVariants,
  accordionItemVariants,
  accordionTrigger,
  accordionItemIndicator,
  accordionContent,
} from "@midoneui/core/styles/accordion.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { cn } from "@midoneui/core/utils/cn";
import { createContext, useContext, useId } from "react";
import * as accordion from "@zag-js/accordion";
import type { Api, Props, ItemProps } from "@zag-js/accordion";
import { Slot } from "@/components/ui/slot";
import { useMachine, normalizeProps } from "@zag-js/react";

const VariantContext = createContext<"default" | "boxed" | null>(null);
const ApiContext = createContext<Api | null>(null);
const ItemContext = createContext<ItemProps | null>(null);

export function AccordionRoot({
  children,
  className,
  variant = "default",
  asChild = false,
  collapsible = true,
  ...props
}: React.ComponentProps<"div"> &
  Partial<Props> & { variant?: "default" | "boxed"; asChild?: boolean }) {
  const service = useMachine(accordion.machine, {
    collapsible,
    ...props,
    id: useId(),
  });
  const api = accordion.connect(service, normalizeProps);

  return (
    <VariantContext.Provider value={variant}>
      <ApiContext.Provider value={api}>
        <Slot
          className={cn([
            className,
            accordionRootVariants({ variant, className }),
          ])}
          {...api.getRootProps()}
          {...props}
        >
          {asChild ? children : <div>{children}</div>}
        </Slot>
      </ApiContext.Provider>
    </VariantContext.Provider>
  );
}

export function AccordionItem({
  children,
  filled,
  raised,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  BoxVariants &
  ItemProps & { asChild?: boolean }) {
  const variant = useContext(VariantContext);
  const api = useContext(ApiContext);

  return (
    <ItemContext.Provider value={props}>
      <Slot
        className={cn([
          className,
          variant == "boxed"
            ? boxVariants({ filled, variant: "default", raised, className })
            : "",
          accordionItemVariants({ variant, className }),
        ])}
        {...api?.getItemProps(props)}
        {...props}
      >
        {asChild ? children : <div>{children}</div>}
      </Slot>
    </ItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn([className, accordionTrigger])}
      {...api?.getItemTriggerProps(item!)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <button>
          {children}
          <div
            {...api?.getItemIndicatorProps(item!)}
            className={accordionItemIndicator}
          >
            <ChevronDownIcon />
          </div>
        </button>
      )}
    </Slot>
  );
}

export function AccordionContent({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const api = useContext(ApiContext);
  const item = useContext(ItemContext);

  return (
    <Slot
      className={cn([className, accordionContent])}
      {...api?.getItemContentProps(item!)}
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
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
} from "@/components/ui/checkbox";
              `}
            </PreviewCode>
            <PreviewCode>
              {`
<CheckboxRoot>
  <CheckboxControl />
  <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
</CheckboxRoot>
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
