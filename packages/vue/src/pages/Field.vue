<script lang="ts" setup>
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
</script>

<template>
  <div class="flex flex-col gap-20">
    <div class="grid sm:grid-cols-2">
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
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
      </div>
      <div
        class="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap"
      >
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
      </div>
    </div>
  </div>
</template>
