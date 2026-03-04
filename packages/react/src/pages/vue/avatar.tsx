import {
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
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
                <AvatarRoot>
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot>
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
      </div>
      <div id="installation">
        <SectionTitle>Installation</SectionTitle>
        <SectionContent>Install the following dependencies:</SectionContent>
        <InstallPackage>add @zag-js/vue @zag-js/avatar</InstallPackage>
        <SectionContent>
          Copy and paste the following code into your project.
        </SectionContent>
        <PreviewCode title="components/ui/avatar/AvatarFallback.vue">
          {`
<script lang="ts" setup>
import type { Api } from "@zag-js/avatar";
import { cn } from "@midoneui/core/utils/cn";
import { avatarFallback } from "@midoneui/core/styles/avatar.styles";
import { inject } from "vue";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  asChild = false,
  ...props
} = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const api = inject<Api>("avatarApi");
</script>

<template>
  <Slot
    :class="cn(avatarFallback, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getFallbackProps() }"
  >
    <slot v-if="asChild" />
    <span v-else>
      <slot />
    </span>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/avatar/AvatarImage.vue">
          {`
<script lang="ts" setup>
import { cn } from "@midoneui/core/utils/cn";
import { avatarImage } from "@midoneui/core/styles/avatar.styles";
import { inject } from "vue";
import type { Api } from "@zag-js/avatar";

const { class: className, ...props } = defineProps<{
  class?: string;
}>();

const api = inject<Api>("avatarApi");
</script>

<template>
  <img
    :class="cn(avatarImage, className)"
    v-bind="{ ...props, ...$attrs, ...api?.getImageProps() }"
  />
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/avatar/AvatarRoot.vue">
          {`
<script lang="ts" setup>
import * as avatar from "@zag-js/avatar";
import { provide, computed } from "vue";
import { useMachine, normalizeProps } from "@zag-js/vue";
import type { Props } from "@zag-js/avatar";
import { cn } from "@midoneui/core/utils/cn";
import {
  avatarRootVariants,
  type AvatarRootVariants,
} from "@midoneui/core/styles/avatar.styles";
import { Slot } from "@/components/ui/slot";

const {
  class: className,
  bordered,
  asChild = false,
  ...props
} = defineProps<
  AvatarRootVariants &
    Partial<Props> & {
      class?: string;
      asChild?: boolean;
    }
>();

const service = useMachine(avatar.machine, {
  ...props,
  id: crypto.randomUUID(),
});

const api = computed(() => avatar.connect(service, normalizeProps));

provide("avatarApi", api);
</script>

<template>
  <Slot
    :class="
      cn(
        avatarRootVariants({
          bordered,
          className,
        }),
        className
      )
    "
    v-bind="{ ...props, ...$attrs, ...api.getRootProps() }"
  >
    <slot v-if="asChild" />
    <div v-else>
      <slot />
    </div>
  </Slot>
</template>
              `}
        </PreviewCode>
        <PreviewCode title="components/ui/avatar/index.ts">
          {`
export { default as AvatarRoot } from "./AvatarRoot.vue";
export { default as AvatarFallback } from "./AvatarFallback.vue";
export { default as AvatarImage } from "./AvatarImage.vue";
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
  AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
              `}
        </PreviewCode>
        <PreviewCode>
          {`
<AvatarRoot>
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage
    src="https://i.pravatar.cc/300"
    alt="avatar"
  />
</AvatarRoot>
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
                <AvatarRoot bordered={false}>
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot :bordered="false">
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <AvatarRoot className="rounded-full">
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot class="rounded-full">
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
                `}
              </PreviewCode>
            ),
          })}
        </Preview>
        <Preview>
          {() => ({
            preview: (
              <>
                <AvatarRoot className="rounded-full" bordered={false}>
                  <AvatarFallback>PA</AvatarFallback>
                  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                </AvatarRoot>
              </>
            ),
            code: (
              <PreviewCode>
                {`
<AvatarRoot class="rounded-full" :bordered="false">
  <AvatarFallback>PA</AvatarFallback>
  <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
</AvatarRoot>
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
