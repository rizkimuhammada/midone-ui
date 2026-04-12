# Field

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```tsx
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
        <Button look="outline" type="submit">Submit</Button>
        <Button type="button"> Cancel </Button>
      </Field>
    </FieldGroup>
  </form>
</div>
```

## Dependency

No external dependencies.

## Component

```tsx
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
```

## Usage

```tsx
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
        <Button look="outline" type="submit">Submit</Button>
        <Button type="button"> Cancel </Button>
      </Field>
    </FieldGroup>
  </form>
</div>
```

## Examples

### Example 1

```tsx
<FieldGroup className="w-full max-w-xs">
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

