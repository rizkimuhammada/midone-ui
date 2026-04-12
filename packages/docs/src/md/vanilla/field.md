# Field

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

[View on GitHub](#) | [Documentation](#)

## Preview

```html
<div class="w-full max-w-md">
  <form>
    <div data-component="field-group">
      <fieldset data-component="field-set">
        <legend data-component="field-legend">Payment Method</legend>
        <p data-component="field-description">All transactions are secure and encrypted</p>
        <div data-component="field-group">
          <div data-component="field">
            <label data-component="field-label" for="checkout-card-name">Name on Card</label>
            <input data-component="input" id="checkout-card-name" placeholder="Evil Rabbit" required />
          </div>
          <div data-component="field">
            <label data-component="field-label" for="checkout-card-number">Card Number</label>
            <input data-component="input" id="checkout-card-number" placeholder="1234 5678 9012 3456" required />
            <p data-component="field-description">Enter your 16-digit card number</p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div data-component="field">
              <label data-component="field-label" for="checkout-exp-month">Month</label>
              <div data-component="select-root" data-placeholder="Month">
                <div data-component="select-item-group" data-label="Month">
                  <div data-component="select-item" data-value="01" data-text="January"></div>
                  <div data-component="select-item" data-value="02" data-text="February"></div>
                  <div data-component="select-item" data-value="03" data-text="March"></div>
                  <div data-component="select-item" data-value="04" data-text="April"></div>
                  <div data-component="select-item" data-value="05" data-text="May"></div>
                  <div data-component="select-item" data-value="06" data-text="June"></div>
                  <div data-component="select-item" data-value="07" data-text="July"></div>
                  <div data-component="select-item" data-value="08" data-text="August"></div>
                  <div data-component="select-item" data-value="09" data-text="September"></div>
                  <div data-component="select-item" data-value="10" data-text="October"></div>
                  <div data-component="select-item" data-value="11" data-text="November"></div>
                  <div data-component="select-item" data-value="12" data-text="December"></div>
                </div>
              </div>
            </div>
            <div data-component="field">
              <label data-component="field-label" for="checkout-exp-year">Year</label>
              <div data-component="select-root" data-placeholder="Year">
                <div data-component="select-item-group" data-label="Year">
                  <div data-component="select-item" data-value="2025"></div>
                  <div data-component="select-item" data-value="2026"></div>
                  <div data-component="select-item" data-value="2027"></div>
                  <div data-component="select-item" data-value="2028"></div>
                  <div data-component="select-item" data-value="2029"></div>
                  <div data-component="select-item" data-value="2030"></div>
                </div>
              </div>
            </div>
            <div data-component="field">
              <label data-component="field-label" for="checkout-cvv">CVV</label>
              <input data-component="input" id="checkout-cvv" placeholder="123" required />
            </div>
          </div>
        </div>
      </fieldset>
      <div data-component="field-separator"></div>
      <fieldset data-component="field-set">
        <legend data-component="field-legend">Billing Address</legend>
        <p data-component="field-description">The billing address associated with your payment method</p>
        <label data-component="checkbox-root">
          <span data-component="checkbox-control"></span>
          <span data-component="checkbox-label" class="font-normal">Same as shipping address</span>
        </label>
      </fieldset>
      <fieldset data-component="field-set">
        <div data-component="field-group">
          <div data-component="field">
            <label data-component="field-label" for="checkout-comments">Comments</label>
            <textarea data-component="textarea" class="resize-none" id="checkout-comments" placeholder="Add any additional comments"></textarea>
          </div>
        </div>
      </fieldset>
      <div data-component="field" data-orientation="horizontal">
        <button data-component="button" data-look="outline" type="submit">Submit</button>
        <button data-component="button" type="button">Cancel</button>
      </div>
    </div>
  </form>
</div>
```

## Dependency

No external dependencies.

## Component

### field.ts

```ts
import { cn } from "@midoneui/core/src/utils/cn";
import {
    fieldVariants,
    fieldGroup,
    fieldSet,
    fieldLegend,
    fieldLabel,
    fieldDescription,
    fieldTitle,
    fieldContent,
    fieldSeparator,
} from "@midoneui/core/src/styles/field.styles";
import { label } from "@midoneui/core/src/styles/label.styles";
import { separator } from "@midoneui/core/src/styles/separator.styles";

export function initField(root: ParentNode = document) {
    root.querySelectorAll<HTMLElement>('[data-component="field-group"]').forEach((el) => {
        el.className = cn(fieldGroup, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-group");
    });

    root.querySelectorAll<HTMLElement>('[data-component="field-set"]').forEach((el) => {
        el.className = cn(fieldSet, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-set");
    });

    root.querySelectorAll<HTMLElement>('[data-component="field-legend"]').forEach((el) => {
        if (!el.getAttribute("data-variant")) el.setAttribute("data-variant", "legend");
        el.className = cn(fieldLegend, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-legend");
    });

    root.querySelectorAll<HTMLElement>('[data-component="field-content"]').forEach((el) => {
        el.className = cn(fieldContent, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-content");
    });

    root.querySelectorAll<HTMLElement>('[data-component="field-title"]').forEach((el) => {
        el.className = cn(fieldTitle, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-label");
    });

    root.querySelectorAll<HTMLElement>('[data-component="field-description"]').forEach((el) => {
        el.className = cn(fieldDescription, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-description");
    });

    root.querySelectorAll<HTMLElement>('[data-component="field-label"]').forEach((el) => {
        el.className = cn(label, fieldLabel, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-label");
    });

    root.querySelectorAll<HTMLElement>('[data-component="field"]').forEach((el) => {
        const orientation = (el.getAttribute("data-orientation") as any) ?? "vertical";
        el.setAttribute("data-orientation", orientation);
        el.setAttribute("role", "group");
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field");
        el.className = cn(fieldVariants({ orientation }), el.className);
    });

    root.querySelectorAll<HTMLElement>('[data-component="field-separator"]').forEach((el) => {
        el.className = cn(fieldSeparator, el.className);
        el.setAttribute("data-scope", "field");
        el.setAttribute("data-part", "field-separator");

        // Collect existing children (separator content)
        const existingChildren = Array.from(el.childNodes);

        // Inject separator line
        const sepLine = document.createElement("div");
        sepLine.setAttribute("data-part", "separator");
        sepLine.setAttribute("role", "separator");
        sepLine.setAttribute("data-orientation", "horizontal");
        sepLine.setAttribute("data-decorative", "true");
        sepLine.className = cn(separator);
        el.insertBefore(sepLine, el.firstChild);

        // Wrap existing children in content span if any
        if (existingChildren.length > 0) {
            const span = document.createElement("span");
            span.setAttribute("data-part", "field-separator-content");
            existingChildren.forEach((n) => span.appendChild(n));
            el.appendChild(span);
            el.setAttribute("data-content", "true");
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initField());
} else {
    initField();
}
```

## Usage

```html
<script type="module" src="/src/main.ts"></script>
```

```html
<div class="w-full max-w-md">
  <form>
    <div data-component="field-group">
      <fieldset data-component="field-set">
        <legend data-component="field-legend">Payment Method</legend>
        <p data-component="field-description">All transactions are secure and encrypted</p>
        <div data-component="field-group">
          <div data-component="field">
            <label data-component="field-label" for="checkout-card-name">Name on Card</label>
            <input data-component="input" id="checkout-card-name" placeholder="Evil Rabbit" required />
          </div>
          <div data-component="field">
            <label data-component="field-label" for="checkout-card-number">Card Number</label>
            <input data-component="input" id="checkout-card-number" placeholder="1234 5678 9012 3456" required />
            <p data-component="field-description">Enter your 16-digit card number</p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div data-component="field">
              <label data-component="field-label" for="checkout-exp-month">Month</label>
              <div data-component="select-root" data-placeholder="Month">
                <div data-component="select-item-group" data-label="Month">
                  <div data-component="select-item" data-value="01" data-text="January"></div>
                  <div data-component="select-item" data-value="02" data-text="February"></div>
                  <div data-component="select-item" data-value="03" data-text="March"></div>
                  <div data-component="select-item" data-value="04" data-text="April"></div>
                  <div data-component="select-item" data-value="05" data-text="May"></div>
                  <div data-component="select-item" data-value="06" data-text="June"></div>
                  <div data-component="select-item" data-value="07" data-text="July"></div>
                  <div data-component="select-item" data-value="08" data-text="August"></div>
                  <div data-component="select-item" data-value="09" data-text="September"></div>
                  <div data-component="select-item" data-value="10" data-text="October"></div>
                  <div data-component="select-item" data-value="11" data-text="November"></div>
                  <div data-component="select-item" data-value="12" data-text="December"></div>
                </div>
              </div>
            </div>
            <div data-component="field">
              <label data-component="field-label" for="checkout-exp-year">Year</label>
              <div data-component="select-root" data-placeholder="Year">
                <div data-component="select-item-group" data-label="Year">
                  <div data-component="select-item" data-value="2025"></div>
                  <div data-component="select-item" data-value="2026"></div>
                  <div data-component="select-item" data-value="2027"></div>
                  <div data-component="select-item" data-value="2028"></div>
                  <div data-component="select-item" data-value="2029"></div>
                  <div data-component="select-item" data-value="2030"></div>
                </div>
              </div>
            </div>
            <div data-component="field">
              <label data-component="field-label" for="checkout-cvv">CVV</label>
              <input data-component="input" id="checkout-cvv" placeholder="123" required />
            </div>
          </div>
        </div>
      </fieldset>
      <div data-component="field-separator"></div>
      <fieldset data-component="field-set">
        <legend data-component="field-legend">Billing Address</legend>
        <p data-component="field-description">The billing address associated with your payment method</p>
        <label data-component="checkbox-root">
          <span data-component="checkbox-control"></span>
          <span data-component="checkbox-label" class="font-normal">Same as shipping address</span>
        </label>
      </fieldset>
      <fieldset data-component="field-set">
        <div data-component="field-group">
          <div data-component="field">
            <label data-component="field-label" for="checkout-comments">Comments</label>
            <textarea data-component="textarea" class="resize-none" id="checkout-comments" placeholder="Add any additional comments"></textarea>
          </div>
        </div>
      </fieldset>
      <div data-component="field" data-orientation="horizontal">
        <button data-component="button" data-look="outline" type="submit">Submit</button>
        <button data-component="button" type="button">Cancel</button>
      </div>
    </div>
  </form>
</div>
```

## Examples

### Example 1

```html
<div class="w-full max-w-md">
  <form>
    <div data-component="field-group">
      <fieldset data-component="field-set">
        <legend data-component="field-legend">Payment Method</legend>
        <p data-component="field-description">All transactions are secure and encrypted</p>
        <div data-component="field-group">
          <div data-component="field">
            <label data-component="field-label" for="checkout-card-name">Name on Card</label>
            <input data-component="input" id="checkout-card-name" placeholder="Evil Rabbit" required />
          </div>
          <div data-component="field">
            <label data-component="field-label" for="checkout-card-number">Card Number</label>
            <input data-component="input" id="checkout-card-number" placeholder="1234 5678 9012 3456" required />
            <p data-component="field-description">Enter your 16-digit card number</p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div data-component="field">
              <label data-component="field-label" for="checkout-exp-month">Month</label>
              <div data-component="select-root" data-placeholder="Month">
                <div data-component="select-item-group" data-label="Month">
                  <div data-component="select-item" data-value="01" data-text="January"></div>
                  <div data-component="select-item" data-value="02" data-text="February"></div>
                  <div data-component="select-item" data-value="03" data-text="March"></div>
                  <div data-component="select-item" data-value="04" data-text="April"></div>
                  <div data-component="select-item" data-value="05" data-text="May"></div>
                  <div data-component="select-item" data-value="06" data-text="June"></div>
                  <div data-component="select-item" data-value="07" data-text="July"></div>
                  <div data-component="select-item" data-value="08" data-text="August"></div>
                  <div data-component="select-item" data-value="09" data-text="September"></div>
                  <div data-component="select-item" data-value="10" data-text="October"></div>
                  <div data-component="select-item" data-value="11" data-text="November"></div>
                  <div data-component="select-item" data-value="12" data-text="December"></div>
                </div>
              </div>
            </div>
            <div data-component="field">
              <label data-component="field-label" for="checkout-exp-year">Year</label>
              <div data-component="select-root" data-placeholder="Year">
                <div data-component="select-item-group" data-label="Year">
                  <div data-component="select-item" data-value="2025"></div>
                  <div data-component="select-item" data-value="2026"></div>
                  <div data-component="select-item" data-value="2027"></div>
                  <div data-component="select-item" data-value="2028"></div>
                  <div data-component="select-item" data-value="2029"></div>
                  <div data-component="select-item" data-value="2030"></div>
                </div>
              </div>
            </div>
            <div data-component="field">
              <label data-component="field-label" for="checkout-cvv">CVV</label>
              <input data-component="input" id="checkout-cvv" placeholder="123" required />
            </div>
          </div>
        </div>
      </fieldset>
      <div data-component="field-separator"></div>
      <fieldset data-component="field-set">
        <legend data-component="field-legend">Billing Address</legend>
        <p data-component="field-description">The billing address associated with your payment method</p>
        <label data-component="checkbox-root">
          <span data-component="checkbox-control"></span>
          <span data-component="checkbox-label" class="font-normal">Same as shipping address</span>
        </label>
      </fieldset>
      <fieldset data-component="field-set">
        <div data-component="field-group">
          <div data-component="field">
            <label data-component="field-label" for="checkout-comments">Comments</label>
            <textarea data-component="textarea" class="resize-none" id="checkout-comments" placeholder="Add any additional comments"></textarea>
          </div>
        </div>
      </fieldset>
      <div data-component="field" data-orientation="horizontal">
        <button data-component="button" data-look="outline" type="submit">Submit</button>
        <button data-component="button" type="button">Cancel</button>
      </div>
    </div>
  </form>
</div>
```

### Example 2

```html
<div data-component="field-group" class="w-full max-w-xs">
  <fieldset data-component="field-set">
    <legend data-component="field-legend" data-variant="label">Compute Environment</legend>
    <p data-component="field-description">Select the compute environment for your cluster.</p>
    <div data-component="radio-group-root" data-default-value="kubernetes">
      <label data-component="field-label">
        <div data-component="field" data-orientation="horizontal">
          <div data-component="field-content">
            <div data-component="field-title">Kubernetes</div>
            <p data-component="field-description">Run GPU workloads on a K8s cluster.</p>
          </div>
          <div data-component="radio-group-item" data-value="kubernetes"></div>
        </div>
      </label>
      <label data-component="field-label">
        <div data-component="field" data-orientation="horizontal">
          <div data-component="field-content">
            <div data-component="field-title">Virtual Machine</div>
            <p data-component="field-description">Access a cluster to run GPU workloads.</p>
          </div>
          <div data-component="radio-group-item" data-value="vm"></div>
        </div>
      </label>
    </div>
  </fieldset>
</div>
```

