import { CircleGauge } from "lucide-react";
import { Box } from "@/components/ui/box";
import {
  Preview,
  SectionTitle,
  SectionContent,
  InstallPackage,
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
                <Box className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
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
        <PreviewCode title="components/ui/box/Box.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  boxVariants,
  type BoxVariants,
} from "@midoneui/core/styles/box.styles";

const {
  class: className,
  filled,
  variant,
  raised,
  ...props
} = defineProps<
  BoxVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <div
    :class="cn(boxVariants({ filled, variant, raised, className }), className)"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </div>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/box/index.ts">
          {`
export { default as Box } from "./Box.vue";
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
import { Box } from "@/components/ui/box";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
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
                <Box className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="primary" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="secondary" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="success" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="danger" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="pending" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="warning" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="primary" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="secondary" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="success" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="danger" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="pending" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="warning" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="primary" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="secondary" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="success" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="danger" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="pending" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="warning" raised="single" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="primary" raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="secondary" raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="success" raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="danger" raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="pending" raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="warning" raised="single" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="primary" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="secondary" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="success" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="danger" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="pending" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box variant="warning" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="primary" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="secondary" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="success" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="danger" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="pending" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box variant="warning" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview className="!flex-col">
          {() => ({
            preview: (
              <>
                <Box filled raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="primary" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box
                  filled
                  variant="secondary"
                  raised="double"
                  className="w-70"
                >
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="success" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="danger" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="pending" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
                <Box filled variant="warning" raised="double" className="w-70">
                  <CircleGauge className="size-7 stroke-1 fill-foreground/10" />
                  <div className="mt-6 text-2xl font-medium leading-8">
                    $724,091.47
                  </div>
                  <div className="mt-1.5 text-xs uppercase opacity-70">
                    Item Sales
                  </div>
                </Box>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Box filled raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="primary" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="secondary" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="success" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="danger" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="pending" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
<Box filled variant="warning" raised="double" class="w-70">
  <CircleGauge class="size-7 stroke-1 fill-foreground/10" />
  <div class="mt-6 text-2xl font-medium leading-8">
    $724,091.47
  </div>
  <div class="mt-1.5 text-xs uppercase opacity-70">
    Item Sales
  </div>
</Box>
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
