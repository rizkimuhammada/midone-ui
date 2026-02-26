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
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <Field>
                                                            <FieldLabel htmlFor="checkout-exp-month-ts6">
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
                                                            <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
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
                                                            <FieldLabel htmlFor="checkout-7j9-cvv">
                                                                CVV
                                                            </FieldLabel>
                                                            <Input
                                                                id="checkout-7j9-cvv"
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
                                                        <FieldLabel htmlFor="checkout-7j9-optional-comments">
                                                            Comments
                                                        </FieldLabel>
                                                        <Textarea
                                                            id="checkout-7j9-optional-comments"
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
        <CheckboxLabel className="font-normal">
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
                <PreviewCode title="components/ui/field/index.tsx">
                    {`
import { cn } from "@midoneui/core/utils/cn";
import {
  fieldVariants,
  fieldContent,
  fieldDescription,
  fieldError,
  fieldGroup,
  fieldLabel,
  fieldLegend,
  fieldSeparator,
  fieldSet,
  fieldTitle,
  type FieldVariants,
} from "@midoneui/core/styles/field.styles";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useMemo } from "react";

export function Field({
  className,
  children,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & FieldVariants) {
  return (
    <div
      role="group"
      data-part="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function FieldContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-part="field-content"
      className={cn(fieldContent, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function FieldDescription({
  className,
  children,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-part="field-description"
      className={cn(fieldDescription, className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) {
  const uniqueErrors = useMemo(() => {
    const err = [
      ...new Map(errors?.map((error) => [error?.message, error])).values(),
    ];
    if (err?.length == 1) {
      return err[0]?.message;
    }
  }, [errors]);

  return (
    <div
      role="alert"
      data-part="field-error"
      className={cn(fieldError, className)}
      {...props}
    >
      {children ? (
        children
      ) : (
        <ul>
          {Array.isArray(uniqueErrors)
            ? uniqueErrors.map((error, index) => (
                <li key={index}>{error?.message}</li>
              ))
            : uniqueErrors}
        </ul>
      )}
    </div>
  );
}

export function FieldGroup({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-part="field-group"
      className={cn(fieldGroup, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function FieldLabel({
  className,
  children,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <Label
      data-part="field-label"
      className={cn(fieldLabel, className)}
      {...props}
    >
      {children}
    </Label>
  );
}

export function FieldLegend({
  className,
  children,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & {
  variant?: "legend" | "label";
}) {
  return (
    <legend
      data-part="field-legend"
      data-variant={variant}
      className={cn(fieldLegend, className)}
      {...props}
    >
      {children}
    </legend>
  );
}

export function FieldSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-part="field-separator"
      data-content={!!children || undefined}
      className={cn(fieldSeparator, className)}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span data-part="field-separator-content">{children}</span>
      )}
    </div>
  );
}

export function FieldSet({
  className,
  children,
  ...props
}: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-part="field-set"
      className={cn(fieldSet, className)}
      {...props}
    >
      {children}
    </fieldset>
  );
}

export function FieldTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-part="field-label"
      className={cn(fieldTitle, className)}
      {...props}
    >
      {children}
    </div>
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
                                                        <FieldLabel htmlFor="v-card-name">
                                                            Name on Card
                                                        </FieldLabel>
                                                        <Input
                                                            id="v-card-name"
                                                            placeholder="Evil Rabbit"
                                                            required
                                                        />
                                                    </Field>
                                                    <Field>
                                                        <FieldLabel htmlFor="v-card-number">
                                                            Card Number
                                                        </FieldLabel>
                                                        <Input
                                                            id="v-card-number"
                                                            placeholder="1234 5678 9012 3456"
                                                            required
                                                        />
                                                        <FieldDescription>
                                                            Enter your 16-digit card number
                                                        </FieldDescription>
                                                    </Field>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <Field>
                                                            <FieldLabel htmlFor="v-exp-month">
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
                                                            <FieldLabel htmlFor="v-exp-year">
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
                                                            <FieldLabel htmlFor="v-cvv">CVV</FieldLabel>
                                                            <Input
                                                                id="v-cvv"
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
                                                        <FieldLabel htmlFor="v-comments">
                                                            Comments
                                                        </FieldLabel>
                                                        <Textarea
                                                            id="v-comments"
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
        <CheckboxLabel className="font-normal">
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
            className="resize-none"
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
<FieldGroup className="w-full max-w-xs">
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
