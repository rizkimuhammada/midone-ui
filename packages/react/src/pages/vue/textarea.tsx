import { Textarea } from "@/components/ui/textarea";
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
                <Textarea
                  className="w-86"
                  placeholder="Type your message here."
                />
              </>
            ),
            code: (
              <PreviewCode>
                {`
<Textarea class="w-86" placeholder="Type your message here." />
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
        <PreviewCode title="components/ui/textarea/Textarea.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { textarea } from "@midoneui/core/styles/textarea.styles";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();
</script>

<template>
  <textarea :class="cn(textarea, className)" v-bind="{ ...props }" />
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/textarea/index.ts">
          {`
export { default as Textarea } from "./Textarea.vue";
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
import { Textarea } from "@/components/ui/textarea";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<Textarea
  class="w-86"
  placeholder="Type your message here."
/>
              `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
