import { Button } from "@/components/ui/button";
import { LoaderCircle, Copy, Scissors, Trash, SquarePlus } from "lucide-react";
import {
  Preview,
  SectionTitle,
  SectionContent,
  PreviewCode,
} from "@/components/docs";

function Main() {
  return (
    <>
      <div id="preview" className="-mt-20">
        <Preview>
          {() => ({
            preview: (
              <>
                <Button size="sm">Button Small</Button>
                <Button>Button Medium</Button>
                <Button size="lg">Button Large</Button>
                <Button size="xl">Button Extra Large</Button>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Button size="sm">Button Small</Button>
<Button>Button Medium</Button>
<Button size="lg">Button Large</Button>
<Button size="xl">Button Extra Large</Button>
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
        <PreviewCode title="components/ui/button/Button.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  buttonVariants,
  type ButtonVariants,
} from "@midoneui/core/styles/button.styles";

const {
  class: className,
  filled,
  variant,
  size,
  ...props
} = defineProps<
  ButtonVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <button
    v-bind="{ ...props, ...$attrs }"
    :class="cn(buttonVariants({ filled, variant, size, className }), className)"
  >
    <slot />
  </button>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/button/index.ts">
          {`
export { default as Button } from "./Button.vue";
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
import { Button } from "@/components/ui/button";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Button>Button Medium</Button>
              `}
        </PreviewCode>
      </div>
      <div id="variants">
        <SectionTitle>Variants</SectionTitle>
        <SectionContent>A collection of components you can use.</SectionContent>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="primary" size="sm">
                    Button Small
                  </Button>
                  <Button variant="primary">Button Medium</Button>
                  <Button variant="primary" size="lg">
                    Button Large
                  </Button>
                  <Button variant="primary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="secondary" size="sm">
                    Button Small
                  </Button>
                  <Button variant="secondary">Button Medium</Button>
                  <Button variant="secondary" size="lg">
                    Button Large
                  </Button>
                  <Button variant="secondary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="success" size="sm">
                    Button Small
                  </Button>
                  <Button variant="success">Button Medium</Button>
                  <Button variant="success" size="lg">
                    Button Large
                  </Button>
                  <Button variant="success" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="danger" size="sm">
                    Button Small
                  </Button>
                  <Button variant="danger">Button Medium</Button>
                  <Button variant="danger" size="lg">
                    Button Large
                  </Button>
                  <Button variant="danger" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="pending" size="sm">
                    Button Small
                  </Button>
                  <Button variant="pending">Button Medium</Button>
                  <Button variant="pending" size="lg">
                    Button Large
                  </Button>
                  <Button variant="pending" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="warning" size="sm">
                    Button Small
                  </Button>
                  <Button variant="warning">Button Medium</Button>
                  <Button variant="warning" size="lg">
                    Button Large
                  </Button>
                  <Button variant="warning" size="xl">
                    Button Extra Large
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="primary" size="sm">
    Button Small
  </Button>
  <Button variant="primary">Button Medium</Button>
  <Button variant="primary" size="lg">
    Button Large
  </Button>
  <Button variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="secondary" size="sm">
    Button Small
  </Button>
  <Button variant="secondary">Button Medium</Button>
  <Button variant="secondary" size="lg">
    Button Large
  </Button>
  <Button variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="success" size="sm">
    Button Small
  </Button>
  <Button variant="success">Button Medium</Button>
  <Button variant="success" size="lg">
    Button Large
  </Button>
  <Button variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="danger" size="sm">
    Button Small
  </Button>
  <Button variant="danger">Button Medium</Button>
  <Button variant="danger" size="lg">
    Button Large
  </Button>
  <Button variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="pending" size="sm">
    Button Small
  </Button>
  <Button variant="pending">Button Medium</Button>
  <Button variant="pending" size="lg">
    Button Large
  </Button>
  <Button variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="warning" size="sm">
    Button Small
  </Button>
  <Button variant="warning">Button Medium</Button>
  <Button variant="warning" size="lg">
    Button Large
  </Button>
  <Button variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled size="sm">
                    Button Small
                  </Button>
                  <Button disabled>Button Medium</Button>
                  <Button disabled size="lg">
                    Button Large
                  </Button>
                  <Button disabled size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled variant="primary" size="sm">
                    Button Small
                  </Button>
                  <Button disabled variant="primary">
                    Button Medium
                  </Button>
                  <Button disabled variant="primary" size="lg">
                    Button Large
                  </Button>
                  <Button disabled variant="primary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled variant="secondary" size="sm">
                    Button Small
                  </Button>
                  <Button disabled variant="secondary">
                    Button Medium
                  </Button>
                  <Button disabled variant="secondary" size="lg">
                    Button Large
                  </Button>
                  <Button disabled variant="secondary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled variant="success" size="sm">
                    Button Small
                  </Button>
                  <Button disabled variant="success">
                    Button Medium
                  </Button>
                  <Button disabled variant="success" size="lg">
                    Button Large
                  </Button>
                  <Button disabled variant="success" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled variant="danger" size="sm">
                    Button Small
                  </Button>
                  <Button disabled variant="danger">
                    Button Medium
                  </Button>
                  <Button disabled variant="danger" size="lg">
                    Button Large
                  </Button>
                  <Button disabled variant="danger" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled variant="pending" size="sm">
                    Button Small
                  </Button>
                  <Button disabled variant="pending">
                    Button Medium
                  </Button>
                  <Button disabled variant="pending" size="lg">
                    Button Large
                  </Button>
                  <Button disabled variant="pending" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled variant="warning" size="sm">
                    Button Small
                  </Button>
                  <Button disabled variant="warning">
                    Button Medium
                  </Button>
                  <Button disabled variant="warning" size="lg">
                    Button Large
                  </Button>
                  <Button disabled variant="warning" size="xl">
                    Button Extra Large
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled size="sm">
    Button Small
  </Button>
  <Button disabled>Button Medium</Button>
  <Button disabled size="lg">
    Button Large
  </Button>
  <Button disabled size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="primary" size="sm">
    Button Small
  </Button>
  <Button disabled variant="primary">
    Button Medium
  </Button>
  <Button disabled variant="primary" size="lg">
    Button Large
  </Button>
  <Button disabled variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="secondary" size="sm">
    Button Small
  </Button>
  <Button disabled variant="secondary">
    Button Medium
  </Button>
  <Button disabled variant="secondary" size="lg">
    Button Large
  </Button>
  <Button disabled variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="success" size="sm">
    Button Small
  </Button>
  <Button disabled variant="success">
    Button Medium
  </Button>
  <Button disabled variant="success" size="lg">
    Button Large
  </Button>
  <Button disabled variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="danger" size="sm">
    Button Small
  </Button>
  <Button disabled variant="danger">
    Button Medium
  </Button>
  <Button disabled variant="danger" size="lg">
    Button Large
  </Button>
  <Button disabled variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="pending" size="sm">
    Button Small
  </Button>
  <Button disabled variant="pending">
    Button Medium
  </Button>
  <Button disabled variant="pending" size="lg">
    Button Large
  </Button>
  <Button disabled variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled variant="warning" size="sm">
    Button Small
  </Button>
  <Button disabled variant="warning">
    Button Medium
  </Button>
  <Button disabled variant="warning" size="lg">
    Button Large
  </Button>
  <Button disabled variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled size="sm">
                    Button Small
                  </Button>
                  <Button filled>Button Medium</Button>
                  <Button filled size="lg">
                    Button Large
                  </Button>
                  <Button filled size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="primary" size="sm">
                    Button Small
                  </Button>
                  <Button filled variant="primary">
                    Button Medium
                  </Button>
                  <Button filled variant="primary" size="lg">
                    Button Large
                  </Button>
                  <Button filled variant="primary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="secondary" size="sm">
                    Button Small
                  </Button>
                  <Button filled variant="secondary">
                    Button Medium
                  </Button>
                  <Button filled variant="secondary" size="lg">
                    Button Large
                  </Button>
                  <Button filled variant="secondary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="success" size="sm">
                    Button Small
                  </Button>
                  <Button filled variant="success">
                    Button Medium
                  </Button>
                  <Button filled variant="success" size="lg">
                    Button Large
                  </Button>
                  <Button filled variant="success" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="danger" size="sm">
                    Button Small
                  </Button>
                  <Button filled variant="danger">
                    Button Medium
                  </Button>
                  <Button filled variant="danger" size="lg">
                    Button Large
                  </Button>
                  <Button filled variant="danger" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="pending" size="sm">
                    Button Small
                  </Button>
                  <Button filled variant="pending">
                    Button Medium
                  </Button>
                  <Button filled variant="pending" size="lg">
                    Button Large
                  </Button>
                  <Button filled variant="pending" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="warning" size="sm">
                    Button Small
                  </Button>
                  <Button filled variant="warning">
                    Button Medium
                  </Button>
                  <Button filled variant="warning" size="lg">
                    Button Large
                  </Button>
                  <Button filled variant="warning" size="xl">
                    Button Extra Large
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled size="sm">
    Button Small
  </Button>
  <Button filled>Button Medium</Button>
  <Button filled size="lg">
    Button Large
  </Button>
  <Button filled size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="primary" size="sm">
    Button Small
  </Button>
  <Button filled variant="primary">
    Button Medium
  </Button>
  <Button filled variant="primary" size="lg">
    Button Large
  </Button>
  <Button filled variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="secondary" size="sm">
    Button Small
  </Button>
  <Button filled variant="secondary">
    Button Medium
  </Button>
  <Button filled variant="secondary" size="lg">
    Button Large
  </Button>
  <Button filled variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="success" size="sm">
    Button Small
  </Button>
  <Button filled variant="success">
    Button Medium
  </Button>
  <Button filled variant="success" size="lg">
    Button Large
  </Button>
  <Button filled variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="danger" size="sm">
    Button Small
  </Button>
  <Button filled variant="danger">
    Button Medium
  </Button>
  <Button filled variant="danger" size="lg">
    Button Large
  </Button>
  <Button filled variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="pending" size="sm">
    Button Small
  </Button>
  <Button filled variant="pending">
    Button Medium
  </Button>
  <Button filled variant="pending" size="lg">
    Button Large
  </Button>
  <Button filled variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="warning" size="sm">
    Button Small
  </Button>
  <Button filled variant="warning">
    Button Medium
  </Button>
  <Button filled variant="warning" size="lg">
    Button Large
  </Button>
  <Button filled variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled filled size="sm">
                    Button Small
                  </Button>
                  <Button disabled filled>
                    Button Medium
                  </Button>
                  <Button disabled filled size="lg">
                    Button Large
                  </Button>
                  <Button disabled filled size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled filled variant="primary" size="sm">
                    Button Small
                  </Button>
                  <Button disabled filled variant="primary">
                    Button Medium
                  </Button>
                  <Button disabled filled variant="primary" size="lg">
                    Button Large
                  </Button>
                  <Button disabled filled variant="primary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled filled variant="secondary" size="sm">
                    Button Small
                  </Button>
                  <Button disabled filled variant="secondary">
                    Button Medium
                  </Button>
                  <Button disabled filled variant="secondary" size="lg">
                    Button Large
                  </Button>
                  <Button disabled filled variant="secondary" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled filled variant="success" size="sm">
                    Button Small
                  </Button>
                  <Button disabled filled variant="success">
                    Button Medium
                  </Button>
                  <Button disabled filled variant="success" size="lg">
                    Button Large
                  </Button>
                  <Button disabled filled variant="success" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled filled variant="danger" size="sm">
                    Button Small
                  </Button>
                  <Button disabled filled variant="danger">
                    Button Medium
                  </Button>
                  <Button disabled filled variant="danger" size="lg">
                    Button Large
                  </Button>
                  <Button disabled filled variant="danger" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled filled variant="pending" size="sm">
                    Button Small
                  </Button>
                  <Button disabled filled variant="pending">
                    Button Medium
                  </Button>
                  <Button disabled filled variant="pending" size="lg">
                    Button Large
                  </Button>
                  <Button disabled filled variant="pending" size="xl">
                    Button Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button disabled filled variant="warning" size="sm">
                    Button Small
                  </Button>
                  <Button disabled filled variant="warning">
                    Button Medium
                  </Button>
                  <Button disabled filled variant="warning" size="lg">
                    Button Large
                  </Button>
                  <Button disabled filled variant="warning" size="xl">
                    Button Extra Large
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled size="sm">
    Button Small
  </Button>
  <Button disabled filled>
    Button Medium
  </Button>
  <Button disabled filled size="lg">
    Button Large
  </Button>
  <Button disabled filled size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="primary" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="primary">
    Button Medium
  </Button>
  <Button disabled filled variant="primary" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="primary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="secondary" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="secondary">
    Button Medium
  </Button>
  <Button disabled filled variant="secondary" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="secondary" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="success" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="success">
    Button Medium
  </Button>
  <Button disabled filled variant="success" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="success" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="danger" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="danger">
    Button Medium
  </Button>
  <Button disabled filled variant="danger" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="danger" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="pending" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="pending">
    Button Medium
  </Button>
  <Button disabled filled variant="pending" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="pending" size="xl">
    Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button disabled filled variant="warning" size="sm">
    Button Small
  </Button>
  <Button disabled filled variant="warning">
    Button Medium
  </Button>
  <Button disabled filled variant="warning" size="lg">
    Button Large
  </Button>
  <Button disabled filled variant="warning" size="xl">
    Button Extra Large
  </Button>
</div>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button>
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="primary" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button variant="primary">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button variant="primary" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="secondary" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button variant="secondary">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button variant="secondary" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button variant="secondary" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="success" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button variant="success">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button variant="success" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button variant="success" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="danger" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button variant="danger">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button variant="danger" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button variant="danger" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="pending" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button variant="pending">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button variant="pending" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button variant="pending" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="warning" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button variant="warning">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button variant="warning" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button variant="warning" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button>
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="primary" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="primary">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="primary" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="primary" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="secondary" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="secondary">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="secondary" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="secondary" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="success" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="success">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="success" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="success" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="danger" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="danger">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="danger" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="danger" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="pending" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="pending">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="pending" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="pending" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="warning" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button variant="warning">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button variant="warning" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button variant="warning" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button filled>
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button filled size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button filled size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="primary" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button filled variant="primary">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button filled variant="primary" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button filled variant="primary" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="secondary" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button filled variant="secondary">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button filled variant="secondary" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button filled variant="secondary" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="success" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button filled variant="success">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button filled variant="success" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button filled variant="success" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="danger" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button filled variant="danger">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button filled variant="danger" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button filled variant="danger" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="pending" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button filled variant="pending">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button filled variant="pending" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button filled variant="pending" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="warning" size="sm">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Small
                  </Button>
                  <Button filled variant="warning">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Medium
                  </Button>
                  <Button filled variant="warning" size="lg">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Large
                  </Button>
                  <Button filled variant="warning" size="xl">
                    <LoaderCircle className="size-4 animate-spin" /> Button
                    Extra Large
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled>
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="primary" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="primary">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="primary" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="primary" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="secondary" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="secondary">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="secondary" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="secondary" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="success" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="success">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="success" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="success" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="danger" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="danger">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="danger" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="danger" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="pending" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="pending">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="pending" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="pending" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="warning" size="sm">
    <LoaderCircle class="size-4 animate-spin" /> Button Small
  </Button>
  <Button filled variant="warning">
    <LoaderCircle class="size-4 animate-spin" /> Button Medium
  </Button>
  <Button filled variant="warning" size="lg">
    <LoaderCircle class="size-4 animate-spin" /> Button Large
  </Button>
  <Button filled variant="warning" size="xl">
    <LoaderCircle class="size-4 animate-spin" /> Button Extra Large
  </Button>
</div>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button>
                    <Scissors className="size-4" />
                  </Button>
                  <Button size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="primary" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="primary">
                    <Scissors className="size-4" />
                  </Button>
                  <Button variant="primary" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button variant="primary" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="secondary" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="secondary">
                    <Scissors className="size-4" />
                  </Button>
                  <Button variant="secondary" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button variant="secondary" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="success" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="success">
                    <Scissors className="size-4" />
                  </Button>
                  <Button variant="success" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button variant="success" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="danger" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="danger">
                    <Scissors className="size-4" />
                  </Button>
                  <Button variant="danger" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button variant="danger" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="pending" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="pending">
                    <Scissors className="size-4" />
                  </Button>
                  <Button variant="pending" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button variant="pending" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button variant="warning" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="warning">
                    <Scissors className="size-4" />
                  </Button>
                  <Button variant="warning" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button variant="warning" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button size="sm">
    <Copy class="size-4" />
  </Button>
  <Button>
    <Scissors class="size-4" />
  </Button>
  <Button size="lg">
    <Trash class="size-4" />
  </Button>
  <Button size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="primary" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button variant="primary">
    <Scissors class="size-4" />
  </Button>
  <Button variant="primary" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button variant="primary" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="secondary" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button variant="secondary">
    <Scissors class="size-4" />
  </Button>
  <Button variant="secondary" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button variant="secondary" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="success" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button variant="success">
    <Scissors class="size-4" />
  </Button>
  <Button variant="success" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button variant="success" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="danger" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button variant="danger">
    <Scissors class="size-4" />
  </Button>
  <Button variant="danger" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button variant="danger" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="pending" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button variant="pending">
    <Scissors class="size-4" />
  </Button>
  <Button variant="pending" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button variant="pending" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button variant="warning" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button variant="warning">
    <Scissors class="size-4" />
  </Button>
  <Button variant="warning" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button variant="warning" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button filled>
                    <Scissors className="size-4" />
                  </Button>
                  <Button filled size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button filled size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="primary" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button filled variant="primary">
                    <Scissors className="size-4" />
                  </Button>
                  <Button filled variant="primary" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button filled variant="primary" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="secondary" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button filled variant="secondary">
                    <Scissors className="size-4" />
                  </Button>
                  <Button filled variant="secondary" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button filled variant="secondary" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="success" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button filled variant="success">
                    <Scissors className="size-4" />
                  </Button>
                  <Button filled variant="success" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button filled variant="success" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="danger" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button filled variant="danger">
                    <Scissors className="size-4" />
                  </Button>
                  <Button filled variant="danger" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button filled variant="danger" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="pending" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button filled variant="pending">
                    <Scissors className="size-4" />
                  </Button>
                  <Button filled variant="pending" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button filled variant="pending" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
                <div className="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
                  <Button filled variant="warning" size="sm">
                    <Copy className="size-4" />
                  </Button>
                  <Button filled variant="warning">
                    <Scissors className="size-4" />
                  </Button>
                  <Button filled variant="warning" size="lg">
                    <Trash className="size-4" />
                  </Button>
                  <Button filled variant="warning" size="xl">
                    <SquarePlus className="size-4" />
                  </Button>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled size="sm">
    <Copy class="size-4" />
  </Button>
  <Button filled>
    <Scissors class="size-4" />
  </Button>
  <Button filled size="lg">
    <Trash class="size-4" />
  </Button>
  <Button filled size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="primary" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button filled variant="primary">
    <Scissors class="size-4" />
  </Button>
  <Button filled variant="primary" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button filled variant="primary" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="secondary" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button filled variant="secondary">
    <Scissors class="size-4" />
  </Button>
  <Button filled variant="secondary" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button filled variant="secondary" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="success" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button filled variant="success">
    <Scissors class="size-4" />
  </Button>
  <Button filled variant="success" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button filled variant="success" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="danger" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button filled variant="danger">
    <Scissors class="size-4" />
  </Button>
  <Button filled variant="danger" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button filled variant="danger" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="pending" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button filled variant="pending">
    <Scissors class="size-4" />
  </Button>
  <Button filled variant="pending" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button filled variant="pending" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
<div class="justify-center items-center flex gap-2 border-b last:border-b-0 border-foreground/10 p-5 flex-wrap">
  <Button filled variant="warning" size="sm">
    <Copy class="size-4" />
  </Button>
  <Button filled variant="warning">
    <Scissors class="size-4" />
  </Button>
  <Button filled variant="warning" size="lg">
    <Trash class="size-4" />
  </Button>
  <Button filled variant="warning" size="xl">
    <SquarePlus class="size-4" />
  </Button>
</div>
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
