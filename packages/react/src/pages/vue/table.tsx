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
import {
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";

function Main() {
  const invoices: {
    invoice: string;
    paymentStatus: string;
    badge: "success" | "pending" | "danger";
    totalAmount: string;
    paymentMethod: string;
  }[] = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      badge: "success",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      badge: "pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      badge: "danger",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      badge: "success",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      badge: "success",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      badge: "pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      badge: "danger",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
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
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>
                          <Badge variant={invoice.badge}>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead class="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead class="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
      <TableCell class="font-medium">
        {{ invoice.invoice }}
      </TableCell>
      <TableCell>
        <Badge :variant="invoice.badge">
          {{ invoice.paymentStatus }}
        </Badge>
      </TableCell>
      <TableCell>{{ invoice.paymentMethod }}</TableCell>
      <TableCell class="text-right">
        {{ invoice.totalAmount }}
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell :colspan="3">Total</TableCell>
      <TableCell class="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/table/Table.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  tableVariants,
  type TableVariants,
} from "@midoneui/core/styles/table.styles";
import { provide, computed } from "vue";
import TableContainer from "./TableContainer.vue";

const { class: className, ...props } = defineProps<
  TableVariants & {
    class?: string;
  }
>();

provide(
  "tableVariant",
  computed(() => ({
    variant: props.variant,
    raised: props.raised,
  }))
);
</script>

<template>
  <TableContainer>
    <table
      :class="cn(tableVariants({ variant, raised, className }), className)"
      v-bind="{ ...props }"
    >
      <slot />
    </table>
  </TableContainer>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableContainer.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableContainer } from "@midoneui/core/styles/table.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div :class="cn(tableContainer, className)" v-bind="{ ...props }">
    <slot />
  </div>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableHeader.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableHeader } from "@midoneui/core/styles/table.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <thead :class="cn(tableHeader, className)" v-bind="{ ...props }">
    <slot />
  </thead>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableBody.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableBody } from "@midoneui/core/styles/table.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <tbody :class="cn(tableBody, className)" v-bind="{ ...props }">
    <slot />
  </tbody>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableFooter.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableFooter } from "@midoneui/core/styles/table.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <tfoot :class="cn(tableFooter, className)" v-bind="{ ...props }">
    <slot />
  </tfoot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableHead.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableHead } from "@midoneui/core/styles/table.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <th :class="cn(tableHead, className)" v-bind="{ ...props }">
    <slot />
  </th>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableRow.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableRow } from "@midoneui/core/styles/table.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <tr :class="cn(tableRow, className)" v-bind="{ ...props }">
    <slot />
  </tr>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableCell.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableCellVariants } from "@midoneui/core/styles/table.styles";
import { inject } from "vue";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const variant = inject<
  | {
      variant?: "default" | "boxed" | null;
      raised?: "single" | "double" | null;
    }
  | undefined
>("tableVariant", undefined);
</script>

<template>
  <td
    :class="cn(tableCellVariants({ ...variant, className }), className)"
    v-bind="{ ...props }"
  >
    <slot />
  </td>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/TableCaption.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { tableCaption } from "@midoneui/core/styles/table.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <caption :class="cn(tableCaption, className)" v-bind="{ ...props }">
    <slot />
  </caption>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/table/index.ts">
          {`
export { default as Table } from "./Table.vue";
export { default as TableContainer } from "./TableContainer.vue";
export { default as TableHeader } from "./TableHeader.vue";
export { default as TableBody } from "./TableBody.vue";
export { default as TableFooter } from "./TableFooter.vue";
export { default as TableHead } from "./TableHead.vue";
export { default as TableRow } from "./TableRow.vue";
export { default as TableCell } from "./TableCell.vue";
export { default as TableCaption } from "./TableCaption.vue";
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
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead class="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead class="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
      <TableCell class="font-medium">
        {{ invoice.invoice }}
      </TableCell>
      <TableCell>
        <Badge :variant="invoice.badge">
          {{ invoice.paymentStatus }}
        </Badge>
      </TableCell>
      <TableCell>{{ invoice.paymentMethod }}</TableCell>
      <TableCell class="text-right">
        {{ invoice.totalAmount }}
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell :colspan="3">Total</TableCell>
      <TableCell class="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview>
          {() => ({
            preview: (
              <>
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
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>
                          <Badge variant={invoice.badge}>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Table variant="boxed">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead class="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead class="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
      <TableCell class="font-medium">
        {{ invoice.invoice }}
      </TableCell>
      <TableCell>
        <Badge :variant="invoice.badge">
          {{ invoice.paymentStatus }}
        </Badge>
      </TableCell>
      <TableCell>{{ invoice.paymentMethod }}</TableCell>
      <TableCell class="text-right">
        {{ invoice.totalAmount }}
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell :colspan="3">Total</TableCell>
      <TableCell class="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
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
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>
                          <Badge variant={invoice.badge}>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Table variant="boxed" raised="single">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead class="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead class="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
      <TableCell class="font-medium">
        {{ invoice.invoice }}
      </TableCell>
      <TableCell>
        <Badge :variant="invoice.badge">
          {{ invoice.paymentStatus }}
        </Badge>
      </TableCell>
      <TableCell>{{ invoice.paymentMethod }}</TableCell>
      <TableCell class="text-right">
        {{ invoice.totalAmount }}
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell :colspan="3">Total</TableCell>
      <TableCell class="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
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
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>
                          <Badge variant={invoice.badge}>
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
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Table variant="boxed" raised="double">
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead class="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead class="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow v-for="invoice in invoices" :key="invoice.invoice">
      <TableCell class="font-medium">
        {{ invoice.invoice }}
      </TableCell>
      <TableCell>
        <Badge :variant="invoice.badge">
          {{ invoice.paymentStatus }}
        </Badge>
      </TableCell>
      <TableCell>{{ invoice.paymentMethod }}</TableCell>
      <TableCell class="text-right">
        {{ invoice.totalAmount }}
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell :colspan="3">Total</TableCell>
      <TableCell class="text-right">$2,500.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
    </>
  );
}

export default Main;
