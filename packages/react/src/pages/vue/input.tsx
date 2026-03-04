import { Input } from "@/components/ui/input";
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
                <Input className="w-84" type="email" placeholder="Email" />
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Input className="w-84" type="email" placeholder="Email" />
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
        <PreviewCode title="components/ui/input/Input.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { input } from "@midoneui/core/styles/input.styles";

const {
  class: className,
  type,
  ...props
} = defineProps<{
  class?: string;
  type?: string;
}>();
</script>

<template>
  <input :type="type" :class="cn(input, className)" v-bind="{ ...props }" />
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/input/index.ts">
          {`
export { default as Input } from "./Input.vue";
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
import { Input } from "@/components/ui/input";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Input class="w-84" type="email" placeholder="Email" />
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
