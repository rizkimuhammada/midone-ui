# Table

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
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
        <Badge look="outline" :variant="invoice.badge">
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
```

## Dependency

No external dependencies.

## Component

### Table.vue

```vue
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
      :class="cn(tableVariants({ variant, raised }), className)"
      v-bind="{ ...props }"
    >
      <slot />
    </table>
  </TableContainer>
</template>
```

### TableBody.vue

```vue
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
```

### TableCaption.vue

```vue
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
```

### TableCell.vue

```vue
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
    :class="cn(tableCellVariants({ ...variant }), className)"
    v-bind="{ ...props }"
  >
    <slot />
  </td>
</template>
```

### TableContainer.vue

```vue
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
```

### TableFooter.vue

```vue
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
```

### TableHead.vue

```vue
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
```

### TableHeader.vue

```vue
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
```

### TableRow.vue

```vue
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
```

## Usage

```vue
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

```vue
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
        <Badge look="outline" :variant="invoice.badge">
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
```

## Examples

### Example 1

```vue
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
        <Badge look="outline" :variant="invoice.badge">
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
```

### Example 2

```vue
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
        <Badge look="outline" :variant="invoice.badge">
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
```

### Example 3

```vue
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
        <Badge look="outline" :variant="invoice.badge">
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
```

### Example 4

```vue
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
        <Badge look="outline" :variant="invoice.badge">
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
```

