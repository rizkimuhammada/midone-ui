import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
                <Badge>12%</Badge>
                <Badge variant="primary">12%</Badge>
                <Badge variant="secondary">12%</Badge>
                <Badge variant="success">12%</Badge>
                <Badge variant="danger">12%</Badge>
                <Badge variant="pending">12%</Badge>
                <Badge variant="warning">12%</Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge>12%</Badge>
<Badge variant="primary">12%</Badge>
<Badge variant="secondary">12%</Badge>
<Badge variant="success">12%</Badge>
<Badge variant="danger">12%</Badge>
<Badge variant="pending">12%</Badge>
<Badge variant="warning">12%</Badge>
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
        <PreviewCode title="components/ui/badge/Badge.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  badgeVariants,
  type BadgeVariants,
} from "@midoneui/core/styles/badge.styles";

const {
  class: className,
  filled,
  variant,
  ...props
} = defineProps<
  BadgeVariants & {
    class?: string;
    filled?: boolean;
  }
>();
</script>

<template>
  <span
    :class="cn(badgeVariants({ filled, variant, className }))"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </span>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/badge/index.ts">
          {`
export { default as Badge } from "./Badge.vue";
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
import { Badge } from "@/components/ui/badge";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Badge>12%</Badge>
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
                <Badge>
                  12% <ChevronDown />
                </Badge>
                <Badge variant="primary">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="secondary">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="success">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="danger">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="pending">
                  12% <ChevronDown />
                </Badge>
                <Badge variant="warning">
                  12% <ChevronDown />
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge>
  12% <ChevronDown />
</Badge>
<Badge variant="primary">
  12% <ChevronDown />
</Badge>
<Badge variant="secondary">
  12% <ChevronDown />
</Badge>
<Badge variant="success">
  12% <ChevronDown />
</Badge>
<Badge variant="danger">
  12% <ChevronDown />
</Badge>
<Badge variant="pending">
  12% <ChevronDown />
</Badge>
<Badge variant="warning">
  12% <ChevronDown />
</Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge filled>12%</Badge>
                <Badge filled variant="primary">
                  12%
                </Badge>
                <Badge filled variant="secondary">
                  12%
                </Badge>
                <Badge filled variant="success">
                  12%
                </Badge>
                <Badge filled variant="danger">
                  12%
                </Badge>
                <Badge filled variant="pending">
                  12%
                </Badge>
                <Badge filled variant="warning">
                  12%
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge filled>12%</Badge>
<Badge filled variant="primary">
  12%
</Badge>
<Badge filled variant="secondary">
  12%
</Badge>
<Badge filled variant="success">
  12%
</Badge>
<Badge filled variant="danger">
  12%
</Badge>
<Badge filled variant="pending">
  12%
</Badge>
<Badge filled variant="warning">
  12%
</Badge>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <Badge filled>
                  12% <ChevronDown />
                </Badge>
                <Badge filled variant="primary">
                  12% <ChevronDown />
                </Badge>
                <Badge filled variant="secondary">
                  12% <ChevronDown />
                </Badge>
                <Badge filled variant="success">
                  12% <ChevronDown />
                </Badge>
                <Badge filled variant="danger">
                  12% <ChevronDown />
                </Badge>
                <Badge filled variant="pending">
                  12% <ChevronDown />
                </Badge>
                <Badge filled variant="warning">
                  12% <ChevronDown />
                </Badge>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Badge filled>
  12% <ChevronDown />
</Badge>
<Badge filled variant="primary">
  12% <ChevronDown />
</Badge>
<Badge filled variant="secondary">
  12% <ChevronDown />
</Badge>
<Badge filled variant="success">
  12% <ChevronDown />
</Badge>
<Badge filled variant="danger">
  12% <ChevronDown />
</Badge>
<Badge filled variant="pending">
  12% <ChevronDown />
</Badge>
<Badge filled variant="warning">
  12% <ChevronDown />
</Badge>
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
