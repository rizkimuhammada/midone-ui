import { cn } from "@midoneui/core/utils/cn";
import {
  tableContainer,
  tableVariants,
  tableHeader,
  tableBody,
  tableFooter,
  tableHead,
  tableRow,
  tableCellVariants,
  tableCaption,
  type TableVariants,
} from "@midoneui/core/styles/table.styles";
import { createContext, useContext } from "react";

const VariantContext = createContext<{
  variant: "default" | "boxed" | null;
  raised?: "single" | "double" | null;
} | null>(null);

export function TableContainer({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(tableContainer, className)} {...props}>
      {children}
    </div>
  );
}

export function Table({
  children,
  className,
  variant = "default",
  raised,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement> & TableVariants) {
  return (
    <VariantContext.Provider
      value={{
        variant,
        raised,
      }}
    >
      <TableContainer>
        <table
          {...props}
          className={cn(
            tableVariants({ variant, raised, className }),
            className
          )}
        >
          {children}
        </table>
      </TableContainer>
    </VariantContext.Provider>
  );
}

export function TableHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={cn(tableHeader, className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={cn(tableBody, className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot className={cn(tableFooter, className)} {...props}>
      {children}
    </tfoot>
  );
}

export function TableHead({
  children,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className={cn(tableHead, className)} {...props}>
      {children}
    </th>
  );
}

export function TableRow({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={cn(tableRow, className)} {...props}>
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  const variant = useContext(VariantContext);
  return (
    <td
      {...props}
      className={cn(tableCellVariants({ ...variant, className }), className)}
    >
      {children}
    </td>
  );
}

export function TableCaption({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableCaptionElement>) {
  return (
    <caption className={cn(tableCaption, className)} {...props}>
      {children}
    </caption>
  );
}
