# Table

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>
          <Badge look="outline" variant={invoice.badge}>
            {invoice.paymentStatus}
          </Badge>
        </TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">
          {invoice.totalAmount}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

## Dependency

No external dependencies.

## Component

```tsx
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
          className={cn(tableVariants({ variant, raised }), className)}
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
      className={cn(tableCellVariants({ ...variant }), className)}
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
```

## Usage

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
```

```tsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>
          <Badge look="outline" variant={invoice.badge}>
            {invoice.paymentStatus}
          </Badge>
        </TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">
          {invoice.totalAmount}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

## Examples

### Example 1

```tsx
<Table variant="boxed">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>
          <Badge look="outline" variant={invoice.badge}>
            {invoice.paymentStatus}
          </Badge>
        </TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">
          {invoice.totalAmount}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### Example 2

```tsx
<Table variant="boxed" raised="single">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>
          <Badge look="outline" variant={invoice.badge}>
            {invoice.paymentStatus}
          </Badge>
        </TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">
          {invoice.totalAmount}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

### Example 3

```tsx
<Table variant="boxed" raised="double">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>
          <Badge look="outline" variant={invoice.badge}>
            {invoice.paymentStatus}
          </Badge>
        </TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">
          {invoice.totalAmount}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

