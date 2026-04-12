# Table

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div data-component="table-container">
  <table data-component="table" data-variant="default">
    <caption data-component="table-caption">A list of your recent invoices.</caption>
    <thead data-component="table-header">
      <tr data-component="table-row">
        <th data-component="table-head" class="w-[100px]">Invoice</th>
        <th data-component="table-head">Status</th>
        <th data-component="table-head">Method</th>
        <th data-component="table-head" class="text-right">Amount</th>
      </tr>
    </thead>
    <tbody data-component="table-body">
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV001</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$250.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV002</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$150.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV003</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$350.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV004</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$450.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV005</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$550.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV006</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$200.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV007</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$300.00</td>
      </tr>
    </tbody>
    <tfoot data-component="table-footer">
      <tr data-component="table-row">
        <td data-component="table-cell" colspan="3">Total</td>
        <td data-component="table-cell" class="text-right">$2,500.00</td>
      </tr>
    </tfoot>
  </table>
</div>
```

## Dependency

No external dependencies.

## Component

### table.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    tableVariants,
    tableContainer,
    tableHeader,
    tableBody,
    tableFooter,
    tableRow,
    tableHead,
    tableCellVariants,
    tableCaption,
} from "@midoneui/core/src/styles/table.styles";

function initTables() {
    // Init container
    document.querySelectorAll('[data-component="table-container"]').forEach((el) => {
        const userClasses = Array.from(el.classList);
        el.className = cn(tableContainer, ...userClasses);
        el.setAttribute("data-scope", "table");
        el.setAttribute("data-part", "container");
    });

    // Init each table — process children from within table context so
    // .table-cell can inherit the table's variant/raised (replicating Vue's inject)
    document.querySelectorAll('[data-component="table"]').forEach((table) => {
        const variant = table.getAttribute("data-variant") as any || "default";
        const raised = table.getAttribute("data-raised") as any || undefined;

        const tableUserClasses = Array.from(table.classList);
        table.className = cn(tableVariants({ variant, raised }), ...tableUserClasses);
        table.setAttribute("data-scope", "table");
        table.setAttribute("data-part", "root");

        table.querySelectorAll('[data-component="table-header"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableHeader, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "header");
        });

        table.querySelectorAll('[data-component="table-body"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableBody, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "body");
        });

        table.querySelectorAll('[data-component="table-footer"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableFooter, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "footer");
        });

        table.querySelectorAll('[data-component="table-row"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableRow, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "row");
        });

        table.querySelectorAll('[data-component="table-head"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableHead, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "head");
        });

        // tableCellVariants gets variant+raised from parent table (inject equivalent)
        table.querySelectorAll('[data-component="table-cell"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableCellVariants({ variant, raised }), ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "cell");
        });

        table.querySelectorAll('[data-component="table-caption"]').forEach((el) => {
            const userClasses = Array.from(el.classList);
            el.className = cn(tableCaption, ...userClasses);
            el.setAttribute("data-scope", "table");
            el.setAttribute("data-part", "caption");
        });
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTables);
} else {
    initTables();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div data-component="table-container">
  <table data-component="table" data-variant="default">
    <caption data-component="table-caption">A list of your recent invoices.</caption>
    <thead data-component="table-header">
      <tr data-component="table-row">
        <th data-component="table-head" class="w-[100px]">Invoice</th>
        <th data-component="table-head">Status</th>
        <th data-component="table-head">Method</th>
        <th data-component="table-head" class="text-right">Amount</th>
      </tr>
    </thead>
    <tbody data-component="table-body">
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV001</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$250.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV002</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$150.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV003</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$350.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV004</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$450.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV005</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$550.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV006</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$200.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV007</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$300.00</td>
      </tr>
    </tbody>
    <tfoot data-component="table-footer">
      <tr data-component="table-row">
        <td data-component="table-cell" colspan="3">Total</td>
        <td data-component="table-cell" class="text-right">$2,500.00</td>
      </tr>
    </tfoot>
  </table>
</div>
```

## Examples

### Example 1

```html
<div data-component="table-container">
  <table data-component="table" data-variant="default">
    <caption data-component="table-caption">A list of your recent invoices.</caption>
    <thead data-component="table-header">
      <tr data-component="table-row">
        <th data-component="table-head" class="w-[100px]">Invoice</th>
        <th data-component="table-head">Status</th>
        <th data-component="table-head">Method</th>
        <th data-component="table-head" class="text-right">Amount</th>
      </tr>
    </thead>
    <tbody data-component="table-body">
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV001</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$250.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV002</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$150.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV003</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$350.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV004</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$450.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV005</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$550.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV006</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$200.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV007</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$300.00</td>
      </tr>
    </tbody>
    <tfoot data-component="table-footer">
      <tr data-component="table-row">
        <td data-component="table-cell" colspan="3">Total</td>
        <td data-component="table-cell" class="text-right">$2,500.00</td>
      </tr>
    </tfoot>
  </table>
</div>
```

### Example 2

```html
<div data-component="table-container">
  <table data-component="table" data-variant="boxed">
    <caption data-component="table-caption">A list of your recent invoices.</caption>
    <thead data-component="table-header">
      <tr data-component="table-row">
        <th data-component="table-head" class="w-[100px]">Invoice</th>
        <th data-component="table-head">Status</th>
        <th data-component="table-head">Method</th>
        <th data-component="table-head" class="text-right">Amount</th>
      </tr>
    </thead>
    <tbody data-component="table-body">
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV001</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$250.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV002</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$150.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV003</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$350.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV004</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$450.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV005</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$550.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV006</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$200.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV007</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$300.00</td>
      </tr>
    </tbody>
    <tfoot data-component="table-footer">
      <tr data-component="table-row">
        <td data-component="table-cell" colspan="3">Total</td>
        <td data-component="table-cell" class="text-right">$2,500.00</td>
      </tr>
    </tfoot>
  </table>
</div>
```

### Example 3

```html
<div data-component="table-container">
  <table data-component="table" data-variant="boxed" data-raised="single">
    <caption data-component="table-caption">A list of your recent invoices.</caption>
    <thead data-component="table-header">
      <tr data-component="table-row">
        <th data-component="table-head" class="w-[100px]">Invoice</th>
        <th data-component="table-head">Status</th>
        <th data-component="table-head">Method</th>
        <th data-component="table-head" class="text-right">Amount</th>
      </tr>
    </thead>
    <tbody data-component="table-body">
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV001</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$250.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV002</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$150.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV003</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$350.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV004</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$450.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV005</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$550.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV006</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$200.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV007</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$300.00</td>
      </tr>
    </tbody>
    <tfoot data-component="table-footer">
      <tr data-component="table-row">
        <td data-component="table-cell" colspan="3">Total</td>
        <td data-component="table-cell" class="text-right">$2,500.00</td>
      </tr>
    </tfoot>
  </table>
</div>
```

### Example 4

```html
<div data-component="table-container">
  <table data-component="table" data-variant="boxed" data-raised="double">
    <caption data-component="table-caption">A list of your recent invoices.</caption>
    <thead data-component="table-header">
      <tr data-component="table-row">
        <th data-component="table-head" class="w-[100px]">Invoice</th>
        <th data-component="table-head">Status</th>
        <th data-component="table-head">Method</th>
        <th data-component="table-head" class="text-right">Amount</th>
      </tr>
    </thead>
    <tbody data-component="table-body">
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV001</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$250.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV002</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$150.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV003</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$350.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV004</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$450.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV005</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="success">Paid</span></td>
        <td data-component="table-cell">PayPal</td>
        <td data-component="table-cell" class="text-right">$550.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV006</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="pending">Pending</span></td>
        <td data-component="table-cell">Bank Transfer</td>
        <td data-component="table-cell" class="text-right">$200.00</td>
      </tr>
      <tr data-component="table-row">
        <td data-component="table-cell" class="font-medium">INV007</td>
        <td data-component="table-cell"><span data-component="badge" data-look="outline" data-variant="danger">Unpaid</span></td>
        <td data-component="table-cell">Credit Card</td>
        <td data-component="table-cell" class="text-right">$300.00</td>
      </tr>
    </tbody>
    <tfoot data-component="table-footer">
      <tr data-component="table-row">
        <td data-component="table-cell" colspan="3">Total</td>
        <td data-component="table-cell" class="text-right">$2,500.00</td>
      </tr>
    </tfoot>
  </table>
</div>
```

