# Field

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```vue
<div class="w-full max-w-md">
  <form>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <FieldDescription>
          All transactions are secure and encrypted
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Name on Card
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Evil Rabbit"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
              Card Number
            </FieldLabel>
            <Input
              id="checkout-7j9-card-number-uw1"
              placeholder="1234 5678 9012 3456"
              required
            />
            <FieldDescription>
              Enter your 16-digit card number
            </FieldDescription>
          </Field>
          <div class="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="checkout-exp-month-ts6">
                Month
              </FieldLabel>
              <SelectRoot placeholder="Month">
                <SelectItemGroup label="Month">
                  <SelectItem value="01">January</SelectItem>
                  <SelectItem value="02">February</SelectItem>
                  <SelectItem value="03">March</SelectItem>
                  <SelectItem value="04">April</SelectItem>
                  <SelectItem value="05">May</SelectItem>
                  <SelectItem value="06">June</SelectItem>
                  <SelectItem value="07">July</SelectItem>
                  <SelectItem value="08">August</SelectItem>
                  <SelectItem value="09">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectItemGroup>
              </SelectRoot>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                Year
              </FieldLabel>
              <SelectRoot placeholder="Year">
                <SelectItemGroup label="Year">
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2028">2028</SelectItem>
                  <SelectItem value="2029">2029</SelectItem>
                  <SelectItem value="2030">2030</SelectItem>
                </SelectItemGroup>
              </SelectRoot>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
              <Input id="checkout-7j9-cvv" placeholder="123" required />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
        <FieldDescription>
          The billing address associated with your payment method
        </FieldDescription>
        <CheckboxRoot>
          <CheckboxControl />
          <CheckboxLabel class="font-normal">
            Same as shipping address
          </CheckboxLabel>
        </CheckboxRoot>
      </FieldSet>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-optional-comments">
              Comments
            </FieldLabel>
            <Textarea
              id="checkout-7j9-optional-comments"
              placeholder="Add any additional comments"
              class="resize-none"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Field orientation="horizontal">
        <Button look="outline" type="submit">Submit</Button>
        <Button type="button"> Cancel </Button>
      </Field>
    </FieldGroup>
  </form>
</div>
```

## Dependency

```bash
npm install lucide-vue-next . @zag-js/checkbox @zag-js/vue @zag-js/select @zag-js/radio-group
```

## Component

### Field.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  fieldVariants,
  type FieldVariants,
} from "@midoneui/core/styles/field.styles";

const {
  class: className,
  orientation = "vertical",
  ...props
} = defineProps<
  FieldVariants & {
    class?: string;
  }
>();
</script>

<template>
  <div
    role="group"
    data-part="field"
    :data-orientation="orientation"
    :class="cn(fieldVariants({ orientation }), className)"
    v-bind="{ ...props }"
  >
    <slot />
  </div>
</template>
```

### FieldContent.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldContent } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-part="field-content"
    :class="cn(fieldContent, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </div>
</template>
```

### FieldDescription.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldDescription } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <p
    data-part="field-description"
    :class="cn(fieldDescription, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </p>
</template>
```

### FieldError.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldError } from "@midoneui/core/styles/field.styles";
import { computed } from "vue";

const {
  class: className,
  errors,
  ...props
} = defineProps<{
  class?: string;
  errors?: Array<{ message?: string } | undefined>;
}>();

const uniqueErrors = computed(() => {
  const err = [
    ...new Map(errors?.map((error) => [error?.message, error])).values(),
  ];
  if (err?.length == 1) {
    return err[0]?.message;
  }
});
</script>

<template>
  <div
    role="alert"
    data-part="field-error"
    :class="cn(fieldError, className)"
    v-bind="{ ...props }"
  >
    <slot v-if="$slots.default" />
    <ul v-else>
      <li v-for="(error, index) in uniqueErrors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>
```

### FieldGroup.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldGroup } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-part="field-group"
    :class="cn(fieldGroup, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </div>
</template>
```

### FieldLabel.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { Label } from "@/components/ui/label";
import { fieldLabel } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <Label
    data-part="field-label"
    :class="cn(fieldLabel, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </Label>
</template>
```

### FieldLegend.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldLegend } from "@midoneui/core/styles/field.styles";

const {
  class: className,
  variant = "legend",
  ...props
} = defineProps<{
  class?: string;
  variant?: "legend" | "label";
}>();
</script>

<template>
  <legend
    data-part="field-legend"
    :data-variant="variant"
    :class="cn(fieldLegend, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </legend>
</template>
```

### FieldSeparator.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldSeparator } from "@midoneui/core/styles/field.styles";
import { Separator } from "@/components/ui/separator";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-part="field-separator"
    :data-content="!!$slots.default"
    :class="cn(fieldSeparator, className)"
    v-bind="{ ...props }"
  >
    <Separator class="absolute inset-0 top-1/2" />
    <span v-if="$slots.default" data-part="field-separator-content">
      <slot />
    </span>
  </div>
</template>
```

### FieldSet.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldSet } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <fieldset
    data-part="field-set"
    :class="cn(fieldSet, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </fieldset>
</template>
```

### FieldTitle.vue

```vue
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { fieldTitle } from "@midoneui/core/styles/field.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    data-part="field-label"
    :class="cn(fieldTitle, className)"
    v-bind="{ ...props }"
  >
    <slot />
  </div>
</template>
```

## Usage

```vue
import { Button } from "@/components/ui/button";
import {
  CheckboxRoot,
  CheckboxLabel,
  CheckboxControl,
} from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  FieldContent,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  SelectRoot,
  SelectItemGroup,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  RadioGroupRoot,
  RadioGroupItem,
} from "@/components/ui/radio-group";
```

```vue
<div class="w-full max-w-md">
  <form>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <FieldDescription>
          All transactions are secure and encrypted
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Name on Card
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Evil Rabbit"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
              Card Number
            </FieldLabel>
            <Input
              id="checkout-7j9-card-number-uw1"
              placeholder="1234 5678 9012 3456"
              required
            />
            <FieldDescription>
              Enter your 16-digit card number
            </FieldDescription>
          </Field>
          <div class="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="checkout-exp-month-ts6">
                Month
              </FieldLabel>
              <SelectRoot placeholder="Month">
                <SelectItemGroup label="Month">
                  <SelectItem value="01">January</SelectItem>
                  <SelectItem value="02">February</SelectItem>
                  <SelectItem value="03">March</SelectItem>
                  <SelectItem value="04">April</SelectItem>
                  <SelectItem value="05">May</SelectItem>
                  <SelectItem value="06">June</SelectItem>
                  <SelectItem value="07">July</SelectItem>
                  <SelectItem value="08">August</SelectItem>
                  <SelectItem value="09">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectItemGroup>
              </SelectRoot>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                Year
              </FieldLabel>
              <SelectRoot placeholder="Year">
                <SelectItemGroup label="Year">
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2028">2028</SelectItem>
                  <SelectItem value="2029">2029</SelectItem>
                  <SelectItem value="2030">2030</SelectItem>
                </SelectItemGroup>
              </SelectRoot>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
              <Input id="checkout-7j9-cvv" placeholder="123" required />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
        <FieldDescription>
          The billing address associated with your payment method
        </FieldDescription>
        <CheckboxRoot>
          <CheckboxControl />
          <CheckboxLabel class="font-normal">
            Same as shipping address
          </CheckboxLabel>
        </CheckboxRoot>
      </FieldSet>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-optional-comments">
              Comments
            </FieldLabel>
            <Textarea
              id="checkout-7j9-optional-comments"
              placeholder="Add any additional comments"
              class="resize-none"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Field orientation="horizontal">
        <Button look="outline" type="submit">Submit</Button>
        <Button type="button"> Cancel </Button>
      </Field>
    </FieldGroup>
  </form>
</div>
```

## Examples

### Example 1

```vue
<div class="w-full max-w-md">
  <form>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Payment Method</FieldLegend>
        <FieldDescription>
          All transactions are secure and encrypted
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-name-43j">
              Name on Card
            </FieldLabel>
            <Input
              id="checkout-7j9-card-name-43j"
              placeholder="Evil Rabbit"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
              Card Number
            </FieldLabel>
            <Input
              id="checkout-7j9-card-number-uw1"
              placeholder="1234 5678 9012 3456"
              required
            />
            <FieldDescription>
              Enter your 16-digit card number
            </FieldDescription>
          </Field>
          <div class="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="checkout-exp-month-ts6">
                Month
              </FieldLabel>
              <SelectRoot placeholder="Month">
                <SelectItemGroup label="Month">
                  <SelectItem value="01">January</SelectItem>
                  <SelectItem value="02">February</SelectItem>
                  <SelectItem value="03">March</SelectItem>
                  <SelectItem value="04">April</SelectItem>
                  <SelectItem value="05">May</SelectItem>
                  <SelectItem value="06">June</SelectItem>
                  <SelectItem value="07">July</SelectItem>
                  <SelectItem value="08">August</SelectItem>
                  <SelectItem value="09">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectItemGroup>
              </SelectRoot>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                Year
              </FieldLabel>
              <SelectRoot placeholder="Year">
                <SelectItemGroup label="Year">
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                  <SelectItem value="2028">2028</SelectItem>
                  <SelectItem value="2029">2029</SelectItem>
                  <SelectItem value="2030">2030</SelectItem>
                </SelectItemGroup>
              </SelectRoot>
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
              <Input id="checkout-7j9-cvv" placeholder="123" required />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLegend>Billing Address</FieldLegend>
        <FieldDescription>
          The billing address associated with your payment method
        </FieldDescription>
        <CheckboxRoot>
          <CheckboxControl />
          <CheckboxLabel class="font-normal">
            Same as shipping address
          </CheckboxLabel>
        </CheckboxRoot>
      </FieldSet>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="checkout-7j9-optional-comments">
              Comments
            </FieldLabel>
            <Textarea
              id="checkout-7j9-optional-comments"
              placeholder="Add any additional comments"
              class="resize-none"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Field orientation="horizontal">
        <Button look="outline" type="submit">Submit</Button>
        <Button type="button"> Cancel </Button>
      </Field>
    </FieldGroup>
  </form>
</div>
```

### Example 2

```vue
<FieldGroup class="w-full max-w-xs">
  <FieldSet>
    <FieldLegend variant="label">Compute Environment</FieldLegend>
    <FieldDescription>
      Select the compute environment for your cluster.
    </FieldDescription>
    <RadioGroupRoot defaultValue="kubernetes">
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Kubernetes</FieldTitle>
            <FieldDescription>
              Run GPU workloads on a K8s cluster.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="kubernetes" />
        </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Virtual Machine</FieldTitle>
            <FieldDescription>
              Access a cluster to run GPU workloads.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="vm" />
        </Field>
      </FieldLabel>
    </RadioGroupRoot>
  </FieldSet>
</FieldGroup>
```

