# Accordion

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<Box raised="single" class="w-full">
  <AccordionRoot
    class="w-full"
    :default-value="['product-information']"
  >
    <AccordionItem value="product-information">
      <AccordionTrigger>Product Information</AccordionTrigger>
      <AccordionContent>
        <p class="mb-2">
          Our flagship product combines cutting-edge technology with
          sleek design. Built with premium materials, it offers
          unparalleled performance and reliability.
        </p>
        <p>
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and
          experts.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="shipping-details">
      <AccordionTrigger>Shipping Details</AccordionTrigger>
      <AccordionContent>
        <p class="mb-2">
          We offer worldwide shipping through trusted courier partners.
          Standard delivery takes 3-5 business days, while express
          shipping ensures delivery within 1-2 business days.
        </p>
        <p>
          All orders are carefully packaged and fully insured. Track
          your shipment in real-time through our dedicated tracking
          portal.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="return-policy">
      <AccordionTrigger>Return Policy</AccordionTrigger>
      <AccordionContent>
        <p class="mb-2">
          We stand behind our products with a comprehensive 30-day
          return policy. If you're not completely satisfied, simply
          return the item in its original condition.
        </p>
        <p>
          Our hassle-free return process includes free return shipping
          and full refunds processed within 48 hours of receiving the
          returned item.
        </p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</Box>
```

## Dependency

```bash
npm install @zag-js/accordion @zag-js/vue lucide-vue-next
```

## Component

### AccordionContent.vue

```vue
<script lang="ts" setup>
import { accordionContent } from "@midoneui/core/styles/accordion.styles";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/accordion";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("accordionApi");
const item = inject<ItemProps>("accordionItem");
</script>

<template>
  <Slot
    :class="cn([className, accordionContent])"
    v-bind="{ ...props, ...$attrs, ...api?.getItemContentProps(item!) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### AccordionItem.vue

```vue
<script lang="ts" setup>
import { accordionItemVariants } from "@midoneui/core/styles/accordion.styles";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";
import { cn } from "@midoneui/core/utils/cn";
import { inject, provide } from "vue";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/accordion";

const {
  raised,
  class: className,
  asChild = false,
  ...props
} = defineProps<
  BoxVariants & ItemProps & { class?: string; asChild?: boolean }
>();

const variant = inject<"default" | "boxed">("accordionVariant", "default");
const api = inject<Api>("accordionApi");

provide("accordionItem", props);
</script>

<template>
  <Slot
    :class="
      cn([
        className,
        variant == 'boxed' ? boxVariants({ raised }) : '',
        accordionItemVariants({ variant }),
      ])
    "
    v-bind="{ ...props, ...$attrs, ...api?.getItemProps(props) }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### AccordionRoot.vue

```vue
<script lang="ts" setup>
import { accordionRootVariants } from "@midoneui/core/styles/accordion.styles";
import { cn } from "@midoneui/core/utils/cn";
import { provide, computed } from "vue";
import * as accordion from "@zag-js/accordion";
import type { Props } from "@zag-js/accordion";
import { useMachine, normalizeProps } from "@zag-js/vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  variant = "default",
  asChild = false,
  collapsible = true,
  ...props
} = defineProps<
  Partial<Props> & {
    class?: string;
    variant?: "default" | "boxed";
    asChild?: boolean;
  }
>();

const service = useMachine(accordion.machine, {
  collapsible,
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => accordion.connect(service, normalizeProps));

provide("accordionVariant", variant);
provide("accordionApi", api);
</script>

<template>
  <Slot
    :class="cn([className, accordionRootVariants({ variant })])"
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
```

### AccordionTrigger.vue

```vue
<script lang="ts" setup>
import { ChevronDownIcon } from "lucide-vue-next";
import {
  accordionTrigger,
  accordionItemIndicator,
} from "@midoneui/core/styles/accordion.styles";
import { cn } from "@midoneui/core/utils/cn";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";
import type { Api, ItemProps } from "@zag-js/accordion";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const api = inject<Api>("accordionApi");
const item = inject<ItemProps>("accordionItem");
</script>

<template>
  <Slot
    :class="cn([className, accordionTrigger])"
    v-bind="{ ...props, ...$attrs, ...api?.getItemTriggerProps(item!) }"
  >
    <slot v-if="asChild" />
    <button v-else>
      <slot />
      <div
        v-bind="api?.getItemIndicatorProps(item!)"
        :class="cn(accordionItemIndicator)"
      >
        <ChevronDownIcon />
      </div>
    </button>
  </Slot>
</template>
```

## Usage

```vue
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Box } from "@/components/ui/box";
```

```vue
<Box raised="single" class="w-full">
  <AccordionRoot
    class="w-full"
    :default-value="['product-information']"
  >
    <AccordionItem value="product-information">
      <AccordionTrigger>Product Information</AccordionTrigger>
      <AccordionContent>
        <p class="mb-2">
          Our flagship product combines cutting-edge technology with
          sleek design. Built with premium materials, it offers
          unparalleled performance and reliability.
        </p>
        <p>
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and
          experts.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="shipping-details">
      <AccordionTrigger>Shipping Details</AccordionTrigger>
      <AccordionContent>
        <p class="mb-2">
          We offer worldwide shipping through trusted courier partners.
          Standard delivery takes 3-5 business days, while express
          shipping ensures delivery within 1-2 business days.
        </p>
        <p>
          All orders are carefully packaged and fully insured. Track
          your shipment in real-time through our dedicated tracking
          portal.
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="return-policy">
      <AccordionTrigger>Return Policy</AccordionTrigger>
      <AccordionContent>
        <p class="mb-2">
          We stand behind our products with a comprehensive 30-day
          return policy. If you're not completely satisfied, simply
          return the item in its original condition.
        </p>
        <p>
          Our hassle-free return process includes free return shipping
          and full refunds processed within 48 hours of receiving the
          returned item.
        </p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</Box>
```

## Examples

### Example 1

```vue
<AccordionRoot
  class="w-full"
  variant="boxed"
  :default-value="['product-information']"
>
  <AccordionItem raised="single" value="product-information">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent>
      <p class="mb-2">
        Our flagship product combines cutting-edge technology with sleek
        design. Built with premium materials, it offers unparalleled
        performance and reliability.
      </p>
      <p>
        Key features include advanced processing capabilities, and an
        intuitive user interface designed for both beginners and
        experts.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem raised="single" value="shipping-details">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent>
      <p class="mb-2">
        We offer worldwide shipping through trusted courier partners.
        Standard delivery takes 3-5 business days, while express
        shipping ensures delivery within 1-2 business days.
      </p>
      <p>
        All orders are carefully packaged and fully insured. Track your
        shipment in real-time through our dedicated tracking portal.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem raised="single" value="return-policy">
    <AccordionTrigger>Return Policy</AccordionTrigger>
    <AccordionContent>
      <p class="mb-2">
        We stand behind our products with a comprehensive 30-day return
        policy. If you're not completely satisfied, simply return the
        item in its original condition.
      </p>
      <p>
        Our hassle-free return process includes free return shipping and
        full refunds processed within 48 hours of receiving the returned
        item.
      </p>
    </AccordionContent>
  </AccordionItem>
</AccordionRoot>
```

