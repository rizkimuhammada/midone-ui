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
    SelectControl,
    SelectTrigger,
    SelectValueText,
    SelectContent,
    SelectItemGroup,
    SelectItemGroupLabel,
    SelectItem,
    SelectItemText,
} from "@/components/ui/select";
import * as select from "@zag-js/select";
import { Textarea } from "@/components/ui/textarea";
import {
    RadioGroupRoot,
    RadioGroupItem,
    RadioGroupItemControl,
} from "@/components/ui/radio-group";
import {
    Preview,
    SectionTitle,
    SectionContent,
    PreviewCode,
} from "@/components/docs";

const comboboxData = [
    { label: "React", code: "react" },
    { label: "Solid", code: "solid" },
    { label: "Vue", code: "vue" },
    { label: "Svelte", code: "svelte" },
];

const collection = select.collection({
    items: comboboxData,
    itemToValue: (item) => item.label,
});

function Main() {
    return (
        <>
            <div id="preview" className="-mt-20">
                <Preview>
                    {() => ({
                        preview: (
                            <>
                                <div className="w-full max-w-md">
                                    <form>
                                        <FieldGroup>
                                            <FieldSet>
                                                <FieldLegend>Payment Method</FieldLegend>
                                                <FieldDescription>
                                                    All transactions are secure and encrypted
                                                </FieldDescription>
                                                <FieldGroup>
                                                    <Field>
                                                        <FieldLabel htmlFor="vue-card-name">
                                                            Name on Card
                                                        </FieldLabel>
                                                        <Input
                                                            id="vue-card-name"
                                                            placeholder="Evil Rabbit"
                                                            required
                                                        />
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel htmlFor="vue-card-number">
                                                            Card Number
                                                        </FieldLabel>
                                                        <Input
                                                            id="vue-card-number"
                                                            placeholder="1234 5678 9012 3456"
                                                            required
                                                        />
                                                        <FieldDescription>
                                                            Enter your 16-digit card number
                                                        </FieldDescription>
                                                    </Field>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <Field>
                                                            <FieldLabel htmlFor="vue-exp-month">
                                                                Month
                                                            </FieldLabel>
                                                            <SelectRoot collection={collection}>
                                                                <SelectControl>
                                                                    <SelectTrigger>
                                                                        <SelectValueText placeholder="Select a Framework" />
                                                                    </SelectTrigger>
                                                                </SelectControl>
                                                                <SelectContent>
                                                                    <SelectItemGroup>
                                                                        <SelectItemGroupLabel>
                                                                            Frameworks
                                                                        </SelectItemGroupLabel>
                                                                        {collection.items.map((item) => (
                                                                            <SelectItem key={item.code} item={item}>
                                                                                <SelectItemText>
                                                                                    {item.label}
                                                                                </SelectItemText>
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectItemGroup>
                                                                </SelectContent>
                                                            </SelectRoot>
                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="vue-exp-year">
                                                                Year
                                                            </FieldLabel>
                                                            <SelectRoot
                                                                className="w-56"
                                                                collection={collection}
                                                            >
                                                                <SelectControl>
                                                                    <SelectTrigger>
                                                                        <SelectValueText placeholder="Select a Framework" />
                                                                    </SelectTrigger>
                                                                </SelectControl>
                                                                <SelectContent>
                                                                    <SelectItemGroup>
                                                                        <SelectItemGroupLabel>
                                                                            Frameworks
                                                                        </SelectItemGroupLabel>
                                                                        {collection.items.map((item) => (
                                                                            <SelectItem key={item.code} item={item}>
                                                                                <SelectItemText>
                                                                                    {item.label}
                                                                                </SelectItemText>
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectItemGroup>
                                                                </SelectContent>
                                                            </SelectRoot>
                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="vue-cvv">CVV</FieldLabel>
                                                            <Input
                                                                id="vue-cvv"
                                                                placeholder="123"
                                                                required
                                                            />
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
                                                    <CheckboxLabel className="font-normal">
                                                        Same as shipping address
                                                    </CheckboxLabel>
                                                </CheckboxRoot>
                                            </FieldSet>
                                            <FieldSet>
                                                <FieldGroup>
                                                    <Field>
                                                        <FieldLabel htmlFor="vue-comments">
                                                            Comments
                                                        </FieldLabel>
                                                        <Textarea
                                                            id="vue-comments"
                                                            placeholder="Add any additional comments"
                                                            className="resize-none"
                                                        />
                                                    </Field>
                                                </FieldGroup>
                                            </FieldSet>
                                            <Field orientation="horizontal">
                                                <Button look="outline" type="submit">
                                                    Submit
                                                </Button>
                                                <Button type="button">Cancel</Button>
                                            </Field>
                                        </FieldGroup>
                                    </form>
                                </div>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<form>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>Payment Method</FieldLegend>
      <FieldDescription>
        All transactions are secure and encrypted
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="card-name">Name on Card</FieldLabel>
          <Input id="card-name" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          <FieldDescription>Enter your 16-digit card number</FieldDescription>
        </Field>
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
    <Field orientation="horizontal">
      <Button look="outline" type="submit">Submit</Button>
      <Button type="button">Cancel</Button>
    </Field>
  </FieldGroup>
</form>
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
                <PreviewCode title="components/ui/field/Field.vue">
                    {`
<script setup lang="ts">
import { cn } from "@midoneui/core/utils/cn";
import {
  fieldVariants,
  type FieldVariants,
} from "@midoneui/core/styles/field.styles";

const props = withDefaults(
  defineProps<{
    class?: string;
    orientation?: FieldVariants["orientation"];
  }>(),
  {
    orientation: "vertical",
  }
);
</script>

<template>
  <div
    role="group"
    data-part="field"
    :data-orientation="props.orientation"
    :class="cn(fieldVariants({ orientation: props.orientation }), props.class)"
  >
    <slot />
  </div>
</template>
          `}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldContent.vue">
                    {`
<script setup lang="ts">
import { cn } from "@midoneui/core/utils/cn";
import { fieldContent } from "@midoneui/core/styles/field.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div data-part="field-content" :class="cn(fieldContent, props.class)">
    <slot />
  </div>
</template>
          `}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldDescription.vue">
                    {`
<script setup lang="ts">
import { cn } from "@midoneui/core/utils/cn";
import { fieldDescription } from "@midoneui/core/styles/field.styles";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <p data-part="field-description" :class="cn(fieldDescription, props.class)">
    <slot />
  </p>
</template>
          `}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldLabel.vue">
                    {`
<script setup lang="ts">
import { cn } from "@midoneui/core/utils/cn";
import { fieldLabel } from "@midoneui/core/styles/field.styles";
import { Label } from "@/components/ui/label";

const props = defineProps<{
  class?: string;
  htmlFor?: string;
}>();
</script>

<template>
  <Label
    data-part="field-label"
    :htmlFor="props.htmlFor"
    :class="cn(fieldLabel, props.class)"
  >
    <slot />
  </Label>
</template>
          `}
                </PreviewCode>
                <PreviewCode title="components/ui/field/FieldSeparator.vue">
                    {`
<script setup lang="ts">
import { cn } from "@midoneui/core/utils/cn";
import { fieldSeparator } from "@midoneui/core/styles/field.styles";
import { Separator } from "@/components/ui/separator";

const props = defineProps<{
  class?: string;
}>();

const slots = defineSlots();
</script>

<template>
  <div
    data-part="field-separator"
    :data-content="!!slots.default || undefined"
    :class="cn(fieldSeparator, props.class)"
  >
    <Separator class="absolute inset-0 top-1/2" />
    <span v-if="slots.default" data-part="field-separator-content">
      <slot />
    </span>
  </div>
</template>
          `}
                </PreviewCode>
                <PreviewCode title="components/ui/field/index.ts">
                    {`
export { default as Field } from "./Field.vue";
export { default as FieldContent } from "./FieldContent.vue";
export { default as FieldDescription } from "./FieldDescription.vue";
export { default as FieldError } from "./FieldError.vue";
export { default as FieldGroup } from "./FieldGroup.vue";
export { default as FieldLabel } from "./FieldLabel.vue";
export { default as FieldLegend } from "./FieldLegend.vue";
export { default as FieldSeparator } from "./FieldSeparator.vue";
export { default as FieldSet } from "./FieldSet.vue";
export { default as FieldTitle } from "./FieldTitle.vue";
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
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
          `}
                </PreviewCode>
                <PreviewCode>
                    {`
<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" placeholder="Enter your email" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</Field>
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
                                <div className="w-full max-w-md">
                                    <form>
                                        <FieldGroup>
                                            <FieldSet>
                                                <FieldLegend>Payment Method</FieldLegend>
                                                <FieldDescription>
                                                    All transactions are secure and encrypted
                                                </FieldDescription>
                                                <FieldGroup>
                                                    <Field>
                                                        <FieldLabel htmlFor="vue-v-card-name">
                                                            Name on Card
                                                        </FieldLabel>
                                                        <Input
                                                            id="vue-v-card-name"
                                                            placeholder="Evil Rabbit"
                                                            required
                                                        />
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel htmlFor="vue-v-card-number">
                                                            Card Number
                                                        </FieldLabel>
                                                        <Input
                                                            id="vue-v-card-number"
                                                            placeholder="1234 5678 9012 3456"
                                                            required
                                                        />
                                                        <FieldDescription>
                                                            Enter your 16-digit card number
                                                        </FieldDescription>
                                                    </Field>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <Field>
                                                            <FieldLabel htmlFor="vue-v-exp-month">
                                                                Month
                                                            </FieldLabel>
                                                            <SelectRoot collection={collection}>
                                                                <SelectControl>
                                                                    <SelectTrigger>
                                                                        <SelectValueText placeholder="Select a Framework" />
                                                                    </SelectTrigger>
                                                                </SelectControl>
                                                                <SelectContent>
                                                                    <SelectItemGroup>
                                                                        <SelectItemGroupLabel>
                                                                            Frameworks
                                                                        </SelectItemGroupLabel>
                                                                        {collection.items.map((item) => (
                                                                            <SelectItem key={item.code} item={item}>
                                                                                <SelectItemText>
                                                                                    {item.label}
                                                                                </SelectItemText>
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectItemGroup>
                                                                </SelectContent>
                                                            </SelectRoot>
                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="vue-v-exp-year">
                                                                Year
                                                            </FieldLabel>
                                                            <SelectRoot
                                                                className="w-56"
                                                                collection={collection}
                                                            >
                                                                <SelectControl>
                                                                    <SelectTrigger>
                                                                        <SelectValueText placeholder="Select a Framework" />
                                                                    </SelectTrigger>
                                                                </SelectControl>
                                                                <SelectContent>
                                                                    <SelectItemGroup>
                                                                        <SelectItemGroupLabel>
                                                                            Frameworks
                                                                        </SelectItemGroupLabel>
                                                                        {collection.items.map((item) => (
                                                                            <SelectItem key={item.code} item={item}>
                                                                                <SelectItemText>
                                                                                    {item.label}
                                                                                </SelectItemText>
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectItemGroup>
                                                                </SelectContent>
                                                            </SelectRoot>
                                                        </Field>
                                                        <Field>
                                                            <FieldLabel htmlFor="vue-v-cvv">CVV</FieldLabel>
                                                            <Input
                                                                id="vue-v-cvv"
                                                                placeholder="123"
                                                                required
                                                            />
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
                                                    <CheckboxLabel className="font-normal">
                                                        Same as shipping address
                                                    </CheckboxLabel>
                                                </CheckboxRoot>
                                            </FieldSet>
                                            <FieldSet>
                                                <FieldGroup>
                                                    <Field>
                                                        <FieldLabel htmlFor="vue-v-comments">
                                                            Comments
                                                        </FieldLabel>
                                                        <Textarea
                                                            id="vue-v-comments"
                                                            placeholder="Add any additional comments"
                                                            className="resize-none"
                                                        />
                                                    </Field>
                                                </FieldGroup>
                                            </FieldSet>
                                            <Field orientation="horizontal">
                                                <Button look="outline" type="submit">
                                                    Submit
                                                </Button>
                                                <Button type="button">Cancel</Button>
                                            </Field>
                                        </FieldGroup>
                                    </form>
                                </div>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<form>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>Payment Method</FieldLegend>
      <FieldDescription>
        All transactions are secure and encrypted
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="card-name">Name on Card</FieldLabel>
          <Input id="card-name" placeholder="Evil Rabbit" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
          <Input id="card-number" placeholder="1234 5678 9012 3456" required />
          <FieldDescription>Enter your 16-digit card number</FieldDescription>
        </Field>
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
          <FieldLabel htmlFor="comments">Comments</FieldLabel>
          <Textarea
            id="comments"
            placeholder="Add any additional comments"
            class="resize-none"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
    <Field orientation="horizontal">
      <Button look="outline" type="submit">Submit</Button>
      <Button type="button">Cancel</Button>
    </Field>
  </FieldGroup>
</form>
                `}
                            </PreviewCode>
                        ),
                    })}
                </Preview>
                <Preview>
                    {() => ({
                        preview: (
                            <>
                                <FieldGroup className="w-full max-w-xs">
                                    <FieldSet>
                                        <FieldLegend variant="label">
                                            Compute Environment
                                        </FieldLegend>
                                        <FieldDescription>
                                            Select the compute environment for your cluster.
                                        </FieldDescription>
                                        <RadioGroupRoot defaultValue="React">
                                            <FieldLabel>
                                                <Field orientation="horizontal">
                                                    <FieldContent>
                                                        <FieldTitle>Kubernetes</FieldTitle>
                                                        <FieldDescription>
                                                            Run GPU workloads on a K8s cluster.
                                                        </FieldDescription>
                                                    </FieldContent>
                                                    <RadioGroupItem value="React">
                                                        <RadioGroupItemControl />
                                                    </RadioGroupItem>
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
                                                    <RadioGroupItem value="Solid">
                                                        <RadioGroupItemControl />
                                                    </RadioGroupItem>
                                                </Field>
                                            </FieldLabel>
                                        </RadioGroupRoot>
                                    </FieldSet>
                                </FieldGroup>
                            </>
                        ),
                        code: (
                            <PreviewCode>
                                {`
<FieldGroup class="w-full max-w-xs">
  <FieldSet>
    <FieldLegend variant="label">Compute Environment</FieldLegend>
    <FieldDescription>
      Select the compute environment for your cluster.
    </FieldDescription>
    <RadioGroupRoot defaultValue="React">
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Kubernetes</FieldTitle>
            <FieldDescription>
              Run GPU workloads on a K8s cluster.
            </FieldDescription>
          </FieldContent>
          <RadioGroupItem value="React">
            <RadioGroupItemControl />
          </RadioGroupItem>
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
          <RadioGroupItem value="Solid">
            <RadioGroupItemControl />
          </RadioGroupItem>
        </Field>
      </FieldLabel>
    </RadioGroupRoot>
  </FieldSet>
</FieldGroup>
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
