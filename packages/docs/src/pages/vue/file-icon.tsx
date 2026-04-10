import { FileIcon } from "@/components/ui/file-icon";
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
                <div className="flex flex-col gap-20">
                  <div className="grid grid-cols-2">
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="empty-directory" className="w-16" />
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="directory" className="w-16" />
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="file" type="PDF" className="w-16" />
                    </div>
                    <div className="justify-center items-center flex gap-2 border-b border-e border-foreground/10 p-5 flex-wrap">
                      <FileIcon variant="file" type="TXT" className="w-16" />
                    </div>
                  </div>
                </div>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<FileIcon variant="empty-directory" class="w-16" />
<FileIcon variant="directory" class="w-16" />
<FileIcon variant="file" type="PDF" class="w-16" />
<FileIcon variant="file" type="TXT" class="w-16" />
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
        <PreviewCode title="components/ui/file-icon/FileIcon.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import {
  fileIconRoot,
  fileIconIcon,
  fileIconLabel,
  fileIconImage,
  fileIconImg,
} from "@midoneui/core/styles/file-icon.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  variant,
  type,
  src,
  asChild = false,
  ...props
} = defineProps<{
  class?: string;
  variant?: "empty-directory" | "directory" | "file" | "image";
  type?: string;
  src?: string;
  asChild?: boolean;
}>();
</script>

<template>
  <Slot
    :class="cn(fileIconRoot, className)"
    data-scope="file-icon"
    data-part="root"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot v-if="$slots.default" />
      <div
        v-else
        :class="cn(fileIconIcon({ variant }))"
        data-scope="file-icon"
        data-part="icon"
      >
        <div
          v-if="variant === 'file'"
          :class="cn(fileIconLabel)"
          data-scope="file-icon"
          data-part="label"
        >
          {{ type }}
        </div>
        <div
          v-else-if="variant === 'image'"
          :class="cn(fileIconImage)"
          data-scope="file-icon"
          data-part="image"
        >
          <img
            :class="cn(fileIconImg)"
            :src="src"
            :alt="variant"
            data-scope="file-icon"
            data-part="img"
          />
        </div>
      </div>
    </div>
  </Slot>
</template>
          `}
        </PreviewCode>
        <PreviewCode title="components/ui/file-icon/index.ts">
          {`
export { default as FileIcon } from "./FileIcon.vue";
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
import { FileIcon } from "@/components/ui/file-icon";
          `}
        </PreviewCode>
        <PreviewCode>
          {`
<FileIcon variant="empty-directory" class="w-16" />
<FileIcon variant="directory" class="w-16" />
<FileIcon variant="file" type="PDF" class="w-16" />
          `}
        </PreviewCode>
      </div>
    </>
  );
}

export default Main;
